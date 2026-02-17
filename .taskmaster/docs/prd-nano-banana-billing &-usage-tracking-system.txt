# PRD: Nano Banana Billing & Usage Tracking System
**Project:** nano-banana-image-queuer-and-generator
**Version:** 1.0
**Date:** February 2026
**Status:** Draft — For Task Master AI Parsing

---

## 1. Overview

Add a complete usage tracking and automated billing system to the
existing Nano Banana Bulk Image Generator. The system will log every
image generation event, display usage data to users and admins,
auto-generate Stripe invoices on the 1st of each calendar month for
the prior month's usage, and send transactional email notifications
via Resend.

Billing begins: **February 1, 2026**
Flat rate: **$0.35 per generated image**
Billing period: **Calendar month (1st–last day)**
Invoice issued: **1st day of following month**
Payment terms: **Net 7**

---

## 2. Goals

- Track every image generation tied to a user and timestamp
- Give users a simple self-serve dashboard to monitor usage and
  invoices
- Give the admin (Mario) an overview of all users and revenue
- Automatically generate and send Stripe invoices on the 1st
- Send email notifications at key usage and billing milestones
- Keep the system simple: no self-signup, no credit card on file
  required — users are manually provisioned, invoices are sent by
  email, payment handled via Stripe invoice link

---

## 3. Pricing

- Flat rate: $0.35 per successfully generated image
- Failed generations: not billed
- No minimums, no tiers
- Platform access: included (no separate fee)
- Currency: USD

---

## 4. User Roles

### 4.1 Admin (Mario)
- mario@catalyst-digital.solutions
- Can view all users' usage and invoice history
- Can manually trigger invoice generation for any user/period
- Can view aggregate revenue dashboard
- Provisioned manually in Supabase

### 4.2 Client User (e.g., Evert Calderon)
- Can view own usage dashboard (current month + history)
- Can view own invoice history and status
- Can click through to pay Stripe invoices
- Cannot see other users' data
- Provisioned manually by Mario in Supabase

---

## 5. Database Schema (Supabase)

### 5.1 image_generations table (NEW)
Tracks every image generation attempt.

CREATE TABLE image_generations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  job_id text NOT NULL,
  filename text NOT NULL,
  prompt text,
  status text NOT NULL CHECK (status IN ('completed', 'failed')),
  billed boolean DEFAULT false,
  billing_period text, -- format: 'YYYY-MM' e.g. '2026-02'
  invoice_id text, -- Stripe invoice ID once billed
  rate_at_time numeric(10,4) DEFAULT 0.35,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE image_generations ENABLE ROW LEVEL SECURITY;

-- Users can only see their own records
CREATE POLICY "Users see own generations"
  ON image_generations FOR SELECT
  USING (auth.uid() = user_id);

-- Backend service role inserts records
CREATE POLICY "Service role inserts"
  ON image_generations FOR INSERT
  WITH CHECK (true); -- enforced via service key only

# PRD: Nano Banana Billing & Usage Tracking System**Project:** nano-banana-image-queuer-and-generator**Version:** 1.0**Date:** February 2026**Status:** Draft — For Task Master AI Parsing---## 1. OverviewAdd a complete usage tracking and automated billing system to theexisting Nano Banana Bulk Image Generator. The system will log everyimage generation event, display usage data to users and admins,auto-generate Stripe invoices on the 1st of each calendar month forthe prior month's usage, and send transactional email notificationsvia Resend.Billing begins: **February 1, 2026**Flat rate: **$0.35 per generated image**Billing period: **Calendar month (1st–last day)**Invoice issued: **1st day of following month**Payment terms: **Net 7**---## 2. Goals- Track every image generation tied to a user and timestamp- Give users a simple self-serve dashboard to monitor usage and  invoices- Give the admin (Mario) an overview of all users and revenue- Automatically generate and send Stripe invoices on the 1st- Send email notifications at key usage and billing milestones- Keep the system simple: no self-signup, no credit card on file  required — users are manually provisioned, invoices are sent by  email, payment handled via Stripe invoice link---## 3. Pricing- Flat rate: $0.35 per successfully generated image- Failed generations: not billed- No minimums, no tiers- Platform access: included (no separate fee)- Currency: USD---## 4. User Roles### 4.1 Admin (Mario)- mario@catalyst-digital.solutions- Can view all users' usage and invoice history- Can manually trigger invoice generation for any user/period- Can view aggregate revenue dashboard- Provisioned manually in Supabase### 4.2 Client User (e.g., Evert Calderon)- Can view own usage dashboard (current month + history)- Can view own invoice history and status- Can click through to pay Stripe invoices- Cannot see other users' data- Provisioned manually by Mario in Supabase---## 5. Database Schema (Supabase)### 5.1 image_generations table (NEW)Tracks every image generation attempt.CREATE TABLE image_generations (  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,  job_id text NOT NULL,  filename text NOT NULL,  prompt text,  status text NOT NULL CHECK (status IN ('completed', 'failed')),  billed boolean DEFAULT false,  billing_period text, -- format: 'YYYY-MM' e.g. '2026-02'  invoice_id text, -- Stripe invoice ID once billed  rate_at_time numeric(10,4) DEFAULT 0.35,  created_at timestamptz DEFAULT now());ALTER TABLE image_generations ENABLE ROW LEVEL SECURITY;-- Users can only see their own recordsCREATE POLICY "Users see own generations"  ON image_generations FOR SELECT  USING (auth.uid() = user_id);-- Backend service role inserts recordsCREATE POLICY "Service role inserts"  ON image_generations FOR INSERT  WITH CHECK (true); -- enforced via service key only
5.2 invoices table (NEW)
Local mirror of Stripe invoices for fast queries.
CREATE TABLE invoices (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  stripe_invoice_id text UNIQUE NOT NULL,
  stripe_customer_id text NOT NULL,
  billing_period text NOT NULL, -- 'YYYY-MM'
  period_start date NOT NULL,
  period_end date NOT NULL,
  due_date date NOT NULL,
  image_count integer NOT NULL,
  subtotal numeric(10,2) NOT NULL,
  total numeric(10,2) NOT NULL,
  status text NOT NULL DEFAULT 'draft',
    -- draft | open | paid | uncollectible | void
  stripe_invoice_url text,
  stripe_pdf_url text,
  issued_at timestamptz,
  paid_at timestamptz,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE invoices ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users see own invoices"
  ON invoices FOR SELECT
  USING (auth.uid() = user_id);
CREATE TABLE invoices (  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,  stripe_invoice_id text UNIQUE NOT NULL,  stripe_customer_id text NOT NULL,  billing_period text NOT NULL, -- 'YYYY-MM'  period_start date NOT NULL,  period_end date NOT NULL,  due_date date NOT NULL,  image_count integer NOT NULL,  subtotal numeric(10,2) NOT NULL,  total numeric(10,2) NOT NULL,  status text NOT NULL DEFAULT 'draft',    -- draft | open | paid | uncollectible | void  stripe_invoice_url text,  stripe_pdf_url text,  issued_at timestamptz,  paid_at timestamptz,  created_at timestamptz DEFAULT now());ALTER TABLE invoices ENABLE ROW LEVEL SECURITY;CREATE POLICY "Users see own invoices"  ON invoices FOR SELECT  USING (auth.uid() = user_id);
5.3 user_profiles table (NEW)
Extended user info beyond Supabase auth.
CREATE TABLE user_profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name text,
  company_name text,
  email text NOT NULL,
  stripe_customer_id text UNIQUE,
  role text NOT NULL DEFAULT 'client' CHECK (role IN ('admin', 'client')),
  billing_email text, -- separate billing contact if needed
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users see own profile"
  ON user_profiles FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Admins see all profiles"
  ON user_profiles FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM user_profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );
CREATE TABLE user_profiles (  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,  full_name text,  company_name text,  email text NOT NULL,  stripe_customer_id text UNIQUE,  role text NOT NULL DEFAULT 'client' CHECK (role IN ('admin', 'client')),  billing_email text, -- separate billing contact if needed  is_active boolean DEFAULT true,  created_at timestamptz DEFAULT now(),  updated_at timestamptz DEFAULT now());ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;CREATE POLICY "Users see own profile"  ON user_profiles FOR SELECT  USING (auth.uid() = id);CREATE POLICY "Admins see all profiles"  ON user_profiles FOR SELECT  USING (    EXISTS (      SELECT 1 FROM user_profiles      WHERE id = auth.uid() AND role = 'admin'    )  );
6. Backend Changes
6.1 Usage Logging Middleware
After every successful image generation in server/index.js,
insert a record into image_generations via the Supabase service
client. Must capture:
user_id (from JWT)
job_id
filename
prompt
status ('completed' or 'failed')
billing_period (derived from created_at, e.g. '2026-02')
rate_at_time (0.35, hardcoded constant from config)
Only 'completed' status records are billed. Failed generations
are logged but flagged as billed=true immediately (so they are
never invoiced).
6.2 Billing Config
Create server/config/billing.js:
RATE_PER_IMAGE: 0.35
BILLING_START_DATE: '2026-02-01'
PAYMENT_TERMS_DAYS: 7
CURRENCY: 'usd'
6.3 New API Endpoints (protected, auth middleware)
GET /api/usage/current
Returns current month's usage for authenticated user:
image_count (completed only)
estimated_total (image_count × rate)
billing_period
daily breakdown (array of {date, count})
GET /api/usage/history
Returns all past billing periods for authenticated user:
Array of {billing_period, image_count, total, invoice_status}
GET /api/invoices
Returns all invoices for authenticated user from invoices table.
GET /api/invoices/:invoiceId
Returns single invoice detail including line items.
Admin only:
GET /api/admin/usage
Returns all users' current month usage summary.
GET /api/admin/users
Returns all user_profiles with usage stats.
POST /api/admin/invoices/generate
Manually triggers invoice generation for a specific user
and billing period. Body: { userId, billingPeriod }
6.4 Billing Service
Create server/services/billingService.js:
generateMonthlyInvoices(billingPeriod):
Query all users with unbilled completed generations
in the billing period
For each user:
Get or create Stripe Customer (store ID in user_profiles)
Calculate total: image_count × 0.35
Create Stripe Invoice with:
Customer ID
Line item: "{N} images generated in {Month YYYY}"
Unit amount: $0.35
Quantity: image_count
Due date: invoice date + 7 days
Metadata: { billing_period, user_id }
Finalize invoice (triggers Stripe's own invoice email)
Insert record into local invoices table
Mark all included image_generation records as
billed=true, invoice_id=stripe_invoice_id,
billing_period=period
Return summary: { processed, total_revenue, errors }
6.5 Cron Job
Create server/jobs/monthlyBilling.js:
Runs on 1st of every month at 9:00 AM CST
Calls billingService.generateMonthlyInvoices()
for the previous calendar month
Use node-cron package
Log results to console and Supabase (optional audit log)
Send admin notification email via Resend on completion
7. Email System: Resend
7.1 Setup
Install resend npm package
Store RESEND_API_KEY in .env and Railway env vars
From address: billing@catalyst-nbig.com
(or noreply@catalyst-digital.solutions)
Create server/services/emailService.js
7.2 Email Templates
Use React Email (react-email package) for HTML templates.
Template 1: Invoice Generated
Trigger: When Stripe invoice is finalized on 1st
To: User's billing email
Subject: "Your Nano Banana Invoice for {Month YYYY} — Due {Date}"
Content:
Usage summary: {N} images generated
Amount due: ${total}
Due date: {date} (Net 7)
"View & Pay Invoice" button → Stripe hosted invoice URL
Contact info: mario@catalyst-digital.solutions
Template 2: Invoice Paid Confirmation
Trigger: Stripe webhook — invoice.paid event
To: User's billing email
Subject: "Payment Received — Nano Banana {Month YYYY}"
Content:
Confirmation of payment
Amount paid
Receipt link
Template 3: Usage Milestone Warning
Trigger: When user hits 50, 100, 250 images in current month
To: User's email
Subject: "Heads up: You've generated {N} images this month"
Content:
Current count and estimated bill
Month-to-date usage chart (simple)
"View Dashboard" CTA
Template 4: Admin Billing Summary
Trigger: After cron job completes on 1st
To: mario@catalyst-digital.solutions
Subject: "Nano Banana Billing Run Complete — {Month YYYY}"
Content:
Number of invoices generated
Total revenue
Per-user breakdown
Any errors
7.3 Stripe Webhooks for Email
Set up webhook endpoint POST /api/webhooks/stripe to handle:
invoice.paid → send Template 2 to user
invoice.payment_failed → send alert to Mario
invoice.overdue → send reminder to user
8. Frontend: User Dashboard
8.1 New Route: /dashboard
Protected route, visible to all authenticated users.
Add "Dashboard" link to main nav header.
8.2 Dashboard Layout
Two-column layout on desktop, single column on mobile.
Left Column — Current Month
Card: "Current Month Usage"
Large number: images generated this month
Estimated charge: $X.XX
Billing period label (e.g., "February 2026")
Days remaining in billing period
Simple bar chart: daily usage (last 30 days)
Card: "Billing Info"
Next invoice date: March 1, 2026
Payment terms: Net 7 (due March 8)
Rate: $0.35/image
Contact: mario@catalyst-digital.solutions
Right Column — Invoice History
Table: Past Invoices
Columns: Period | Images | Amount | Status | Actions
Status badges: Paid (green) | Open (yellow) | Overdue (red)
Actions: "View Invoice" → Stripe URL | "Download PDF"
Empty state if no invoices yet
8.3 Admin Dashboard: /admin
Only visible to users with role='admin' in user_profiles.
Add "Admin" link in header (admin only).
Admin dashboard shows:
Card: "This Month — All Users"
Total images generated (all users)
Projected revenue
Per-user breakdown table:
Columns: User | Company | Images | Est. Charge | Last Activity
Card: "Revenue History"
Monthly revenue bar chart (last 12 months)
Table: Month | Invoices Sent | Total Billed | Total Collected
Button: "Generate Invoices Now" (manual trigger)
Confirms billing period, shows preview, then fires
Admin use only (for testing or early invoicing)
User Management Table:
Columns: Name | Email | Role | Status | Stripe Customer | Actions
Actions: View Usage | View Invoices
9. Stripe Integration Details
9.1 Stripe Setup
Use existing Stripe account under Catalyst Digital Solutions
Create Products in Stripe:
Product: "Nano Banana Image Generation"
Price: $0.35/unit (one-time, not recurring)
Store STRIPE_SECRET_KEY and STRIPE_WEBHOOK_SECRET
in .env and Railway env vars
9.2 Stripe Customer Management
On first invoice for a user, create Stripe Customer with:
name: user's full_name
email: user's billing_email or email
metadata: { supabase_user_id: user.id }
Store stripe_customer_id in user_profiles table
Reuse same Customer for all future invoices
9.3 Invoice Structure
Each monthly invoice contains ONE line item:
Description: "Image Generation — {Month YYYY}
({N} images × $0.35)"
Amount: N × 35 (cents)
Due date: collection_method = 'send_invoice',
days_until_due = 7
9.4 Webhook Endpoint
POST /api/webhooks/stripe (no auth middleware — Stripe signed)
Verify signature with STRIPE_WEBHOOK_SECRET.
Handle:
invoice.paid
invoice.payment_failed
invoice.marked_uncollectible
Update local invoices table status on each event.
10. Environment Variables (New)
Railway (backend):
STRIPE_SECRET_KEY
STRIPE_WEBHOOK_SECRET
RESEND_API_KEY
BILLING_RATE=0.35
BILLING_START_DATE=2026-02-01
ADMIN_EMAIL=mario@catalyst-digital.solutions
FROM_EMAIL=billing@catalyst-nbig.com
Vercel (frontend):
No new variables needed (uses existing Supabase connection)
11. Implementation Phases
Phase 1: Usage Tracking (Foundation)
Estimated: 4-6 hours
image_generations table + RLS
user_profiles table + RLS
invoices table + RLS
Usage logging in generation endpoint
GET /api/usage/current endpoint
GET /api/usage/history endpoint
Phase 2: Stripe Invoicing
Estimated: 4-6 hours
Stripe package setup + config
billingService.js (generate invoices)
POST /api/admin/invoices/generate endpoint
Stripe Customer creation/lookup
Invoice generation + finalization
Local invoices table sync
Phase 3: Automated Billing Cron
Estimated: 2-3 hours
node-cron setup
monthlyBilling.js job
Runs 1st of month, 9 AM CST
Error handling + logging
Phase 4: Email System (Resend)
Estimated: 3-4 hours
Resend setup + emailService.js
React Email templates (4 templates)
Stripe webhook endpoint
Usage milestone triggers
Phase 5: User Dashboard (Frontend)
Estimated: 6-8 hours
/dashboard route + components
Current month usage card
Invoice history table
Daily usage chart (recharts)
Phase 6: Admin Dashboard (Frontend)
Estimated: 4-6 hours
/admin route (role-gated)
All-users usage table
Revenue history chart
Manual invoice trigger button
User management table
12. Out of Scope (v1)
Self-service signup
Credit card on file / automatic charge
Prepaid credits
Multi-currency
Proration for mid-month user activation
Automated dunning (overdue reminders)
(can add in v2 via Stripe's built-in dunning)
13. Success Criteria
Every completed image generation is logged within 500ms
Cron job runs reliably on 1st of month ± 5 minutes
Stripe invoices generate and send automatically with zero
manual intervention
Users can log in and see accurate current usage in real time
Admin can see all-user overview in one view
Zero unbilled completed images after cron runs
14. Estimated Total Implementation
Phase Time
Phase 1: Usage Tracking 4-6 hrs
Phase 2: Stripe Invoicing 4-6 hrs
Phase 3: Cron Job 2-3 hrs
Phase 4: Email (Resend) 3-4 hrs
Phase 5: User Dashboard 6-8 hrs
Phase 6: Admin Dashboard  4-6 hrs
Total 23-33 hrs
