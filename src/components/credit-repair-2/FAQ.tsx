import { useState } from "react";
import { ChevronDown } from "lucide-react";
const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);
  return <section id="faq" className="py-16 md:py-24 px-6 md:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#3E3E3E] mb-4 text-center">
          Your <span className="text-[#f9c65d]">Questions</span>, Answered.
        </h2>
        <p className="text-xl text-gray-700 mb-12 text-center">
          We believe in transparency. Here are honest answers to the questions most people ask before starting their credit restoration journey.
        </p>

        {/* Section Header: THE BIG 5 OBJECTIONS */}
        <div className="mb-6">
          <h3 className="font-bold mb-4 uppercase tracking-wide text-3xl text-foreground">THE BIG 5 QUESTIONS</h3>
        </div>

        <div className="space-y-4 mb-12">
          {/* FAQ 1 */}
          <FAQItem index={0} openFAQ={openFAQ} setOpenFAQ={setOpenFAQ} question="1. Is this legit or a scam?">
            <p className="mb-4">Absolutely legitimate. Mesa Group Consulting is a CROA-compliant financial services company operating in full accordance with federal consumer protection laws. We're not a fly-by-night operation—we're a real business with:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>A physical office in Bakersfield, CA that you can visit</li>
              <li>2,500+ clients served nationwide</li>
              <li>150+ five-star reviews from real customers</li>
              <li>Featured in local media (KGET17, Studio17, Telemundo, The CW)</li>
              <li>Full legal team for FCRA violation cases</li>
              <li>Transparent pricing with no hidden fees</li>
            </ul>
            <p>We're proud to serve clients in English, Spanish, and Punjabi (🇺🇸 🇪🇸 🇮🇳). You can call us, visit us, or read reviews from real people we've helped. We're as real as it gets.</p>
          </FAQItem>

          {/* FAQ 2 */}
          <FAQItem index={1} openFAQ={openFAQ} setOpenFAQ={setOpenFAQ} question="2. Will this hurt my credit more?">
            <p className="mb-4">No. Legitimate credit disputes filed under the Fair Credit Reporting Act (FCRA) cannot hurt your credit score. In fact, it's your legal right to dispute inaccurate, incomplete, or unverifiable information on your credit report.</p>
            <p className="font-semibold mb-2">Here's what happens when we dispute items:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Credit bureaus investigate the item (they have 30 days to respond)</li>
              <li>If the item cannot be verified, it must be removed</li>
              <li>If it's verified as accurate, it stays on your report</li>
              <li>Your credit score is not penalized for disputing items</li>
            </ul>
            <p className="font-semibold mb-2">What CAN hurt your credit:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Continuing to miss payments on current accounts</li>
              <li>Applying for too much new credit during the process</li>
              <li>Closing old credit card accounts (reduces your credit age)</li>
            </ul>
            <p>That's why our program includes 1-on-1 financial coaching—we teach you what to do AND what NOT to do while we're working on your disputes.</p>
          </FAQItem>

          {/* FAQ 3 */}
          <FAQItem index={2} openFAQ={openFAQ} setOpenFAQ={setOpenFAQ} question="3. How much is this going to cost total?">
            <p className="mb-4">We believe in transparent pricing. Here's exactly what you'll pay:</p>
            <p className="font-semibold mb-2">Monthly Plans:</p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li><strong>Mesa360 Lite:</strong> $350 initial setup + $149/month (ongoing)</li>
              <li><strong>Mesa360 Flex:</strong> $500 initial setup + $199/month (ongoing)</li>
              <li><strong>Mesa360 Elite:</strong> $800 initial setup + $299/month (ongoing)</li>
            </ul>
            <p className="font-semibold mb-2">12-Month Programs (Pay in Full & Save):</p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li><strong>Ruby Plan:</strong> $1,500 one-time payment (saves you $888 vs. monthly Flex)</li>
              <li><strong>Emerald Plan:</strong> $1,800 one-time payment (saves you $1,788 vs. monthly Elite)</li>
            </ul>
            <p className="font-semibold mb-2">What's included in every plan:</p>
            <ul className="space-y-1 mb-4">
              <li>✅ Dedicated account manager</li>
              <li>✅ 1-on-1 financial coaching</li>
              <li>✅ Customized action plan</li>
              <li>✅ Monthly progress reports</li>
              <li>✅ Client portal + mobile app access</li>
              <li>✅ Ongoing support (monthly plans) or 12 months of service (prepaid plans)</li>
            </ul>
            <p className="mb-4"><strong>Additional requirement:</strong> You must maintain a SmartCredit 3-Bureau monitoring account ($27.99/month after $1 for 7-day trial) throughout the entire process. This gives us—and you—real-time access to your credit reports from all three bureaus.</p>
            <p className="mb-4"><strong>No hidden fees. No upsells. No surprises.</strong></p>
            <p>You can cancel your monthly plan anytime (we have a 3-day risk-free cancellation window from signup). The 12-month programs are paid in full but can be financed through Buy Now, Pay Later (BNPL) options.</p>
          </FAQItem>

          {/* FAQ 4 */}
          <FAQItem index={3} openFAQ={openFAQ} setOpenFAQ={setOpenFAQ} question="4. How long does it actually take to see results?">
            <p className="mb-4">Most clients see their first results within 45-90 days. However, timelines vary based on several factors:</p>
            <p className="font-semibold mb-2">What affects your timeline:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Complexity of your credit situation:</strong> Someone with 3 collections will see results faster than someone with bankruptcies, repos, and charge-offs</li>
              <li><strong>Credit bureau responsiveness:</strong> Bureaus have 30 days to investigate disputes, but sometimes they respond sooner</li>
              <li><strong>Creditor cooperation:</strong> Some creditors respond quickly; others require multiple rounds of disputes</li>
              <li><strong>Ongoing credit behavior:</strong> If you're still missing payments or adding new negative items, progress will be slower</li>
            </ul>
            <p className="font-semibold mb-2">Realistic expectations:</p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li><strong>First 30-45 days:</strong> Initial disputes filed, first bureau responses received</li>
              <li><strong>45-90 days:</strong> Most clients see first deletions and score improvements</li>
              <li><strong>90-180 days:</strong> Significant progress; multiple rounds of disputes completed</li>
              <li><strong>6-12 months:</strong> Most comprehensive results achieved</li>
            </ul>
            <p className="mb-4"><strong>What we guarantee:</strong> We cannot guarantee specific score increases or exact timelines—any company that does is violating federal law (CROA). What we CAN promise is a legally compliant, persistent dispute process with measurable progress tracking every step of the way.</p>
            <p><strong>Important note on monthly plans:</strong> Our monthly plans (Lite/Flex/Elite) provide ongoing support. If you add new items during the process, we'll work on them. This is different from our 12-month programs, which focus only on your credit profile at the time of enrollment.</p>
          </FAQItem>

          {/* FAQ 5 */}
          <FAQItem index={4} openFAQ={openFAQ} setOpenFAQ={setOpenFAQ} question="5. Can I do this myself instead of paying someone?">
            <p className="mb-4">Yes—and we'll be the first to tell you that you have every legal right to dispute items yourself for free.</p>
            <p className="mb-2"><strong>But here's the reality:</strong></p>
            <p className="font-semibold mb-2">Why DIY often fails:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Credit bureaus recognize generic templates:</strong> If you're using dispute letter templates from the internet, so are thousands of other people. Bureaus know these templates and often reject them automatically.</li>
              <li><strong>It's time-consuming:</strong> You'll spend hours researching laws, tracking responses, following up with multiple bureaus, and managing documentation.</li>
              <li><strong>It's confusing:</strong> Understanding FCRA, FDCPA, Metro 2 reporting, and creditor verification processes requires specialized knowledge.</li>
              <li><strong>One mistake can hurt you:</strong> Saying the wrong thing in a dispute letter can actually hurt your case or give bureaus ammunition to verify inaccurate items.</li>
            </ul>
            <p className="font-semibold mb-2">What we bring to the table:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Personalized dispute strategies:</strong> No cookie-cutter templates—every letter is customized to your unique situation</li>
              <li><strong>Advanced methods:</strong> Digital uploads, Experian rapid inquiry removal, CFPB complaints, direct creditor disputes, Metro 2 challenges, and more</li>
              <li><strong>Full legal team for violations:</strong> When bureaus or creditors violate your FCRA rights, we escalate with attorney support. Qualified clients have received settlements of $1,000–$2,500 for violations.</li>
              <li><strong>Ongoing coaching:</strong> We don't just dispute items—we teach you how to build and maintain good credit long-term</li>
              <li><strong>It's our full-time job:</strong> While you're working, spending time with family, or running your business, we're managing your disputes</li>
            </ul>
            <p className="mb-4"><strong>Think of it this way:</strong> You CAN change your own oil, fix your own plumbing, or file your own taxes. But most people hire professionals because the time, expertise, and peace of mind are worth it.</p>
            <p><strong>Still want to try DIY first?</strong> We respect that. Download our free credit dispute letter template and give it a shot. If it works, great! If not, we're here when you're ready for professional help.</p>
          </FAQItem>
        </div>

        {/* Section Header: ADDITIONAL IMPORTANT QUESTIONS */}
        <div className="mb-6">
          <h3 className="text-xl font-bold text-[#3E3E3E] mb-4 uppercase tracking-wide">ADDITIONAL IMPORTANT QUESTIONS</h3>
        </div>

        <div className="space-y-4">
          {/* FAQ 6 */}
          <FAQItem index={5} openFAQ={openFAQ} setOpenFAQ={setOpenFAQ} question="6. What items can be removed from my credit report?">
            <p className="mb-4">We can dispute any item that is:</p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li><strong>Inaccurate:</strong> Wrong account number, incorrect balance, belongs to someone else</li>
              <li><strong>Incomplete:</strong> Missing required information under FCRA guidelines</li>
              <li><strong>Outdated:</strong> Most negative items must be removed after 7 years (bankruptcies after 10 years)</li>
              <li><strong>Unverifiable:</strong> If the creditor cannot verify the debt or provide proper documentation</li>
            </ul>
            <p className="font-semibold mb-2">Common items we successfully dispute:</p>
            <ul className="space-y-1 mb-4">
              <li>✅ Collections (medical, utility, credit card, etc.)</li>
              <li>✅ Late payments</li>
              <li>✅ Inquiries (hard pulls that weren't authorized)</li>
              <li>✅ Charge-offs</li>
              <li>✅ Bankruptcies (Chapter 7, Chapter 13)</li>
              <li>✅ Repossessions</li>
              <li>✅ Foreclosures</li>
              <li>✅ Evictions</li>
              <li>✅ Student loan defaults</li>
              <li>✅ Identity theft accounts</li>
              <li>✅ Accounts with inaccurate balances or payment history</li>
            </ul>
            <p className="font-semibold mb-2">What we CANNOT remove:</p>
            <ul className="space-y-1 mb-4">
              <li>❌ Accurate, verifiable negative items (that would be illegal)</li>
              <li>❌ Current bankruptcies still within the 7-10 year reporting period if properly documented</li>
              <li>❌ Tax liens (these are public records)</li>
              <li>❌ Court judgments that are accurate and within reporting period</li>
            </ul>
            <p><strong>Our approach:</strong> We follow consumer law, factual disputing principles, and FCRA/FDCPA regulations to help clients fix their credit ethically and legally. We don't promise to "erase" everything—we promise to challenge everything that's legally disputable and get results where creditors and bureaus can't verify their claims.</p>
          </FAQItem>

          {/* FAQ 7 */}
          <FAQItem index={6} openFAQ={openFAQ} setOpenFAQ={setOpenFAQ} question="7. Do you have legal support for FCRA violations?">
            <p className="mb-4">Yes. While Mesa Group Consulting is not a law firm, we have a full legal team available for cases where creditors or credit bureaus violate your rights under the Fair Credit Reporting Act (FCRA) or Fair Debt Collection Practices Act (FDCPA).</p>
            <p className="font-semibold mb-2">When legal escalation happens:</p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>A bureau fails to investigate your dispute within 30 days</li>
              <li>A creditor re-reports deleted information without proper verification</li>
              <li>A collector contacts you after being told to cease communication</li>
              <li>A bureau reports inaccurate information after you've provided proof of error</li>
              <li>Any other violation of federal consumer protection laws</li>
            </ul>
            <p className="font-semibold mb-2">What legal support includes:</p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>Paralegal FCRA/FDCPA audits of your case</li>
              <li>Attorney review and escalation letters</li>
              <li>Legal demand letters to creditors and bureaus</li>
              <li>Support for potential violation claims</li>
            </ul>
            <p className="mb-4"><strong>Settlements:</strong> Many qualified clients have received settlements ranging from $1,000 to $2,500 (or more) when creditors or bureaus are found in violation of federal law. These settlements are in addition to the removal of inaccurate items.</p>
            <p><strong>Important note:</strong> Not every case qualifies for legal escalation—violations must be clear and documented. Your account manager will identify potential violations during your dispute process and escalate when appropriate.</p>
          </FAQItem>

          {/* FAQ 8 */}
          <FAQItem index={7} openFAQ={openFAQ} setOpenFAQ={setOpenFAQ} question="8. Do you work with all three credit bureaus?">
            <p className="mb-4">Yes. We file disputes with all three major credit bureaus:</p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>Experian</li>
              <li>Equifax</li>
              <li>TransUnion</li>
            </ul>
            <p className="mb-2"><strong>Why all three matter:</strong> Different lenders report to different bureaus. Your score can vary significantly between bureaus depending on what's reported. For example:</p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>Your mortgage lender might pull Equifax</li>
              <li>Your auto lender might pull Experian</li>
              <li>Your credit card company might pull TransUnion</li>
            </ul>
            <p className="mb-4">That's why we dispute items across all three bureaus to ensure comprehensive coverage. When you apply for credit, you want clean reports everywhere.</p>
            <p className="mb-2"><strong>How we access your reports:</strong> Through your SmartCredit 3-Bureau monitoring account, we (and you) get real-time access to your reports from all three bureaus. This allows us to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>See exactly what creditors are reporting</li>
              <li>Track which disputes are successful</li>
              <li>Identify new items that appear</li>
              <li>Monitor your score changes in real-time</li>
            </ul>
          </FAQItem>

          {/* FAQ 9 */}
          <FAQItem index={8} openFAQ={openFAQ} setOpenFAQ={setOpenFAQ} question="9. What happens if an item comes back 'verified'?">
            <p className="mb-4">If a credit bureau verifies an item after our first dispute, that doesn't mean the process is over. Here's what happens next:</p>
            <p className="font-semibold mb-2">Round 2: Advanced Dispute Methods</p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>We request the "method of verification" (MOV) from the bureau—they must tell us HOW they verified it</li>
              <li>We review the creditor's documentation for errors or missing information</li>
              <li>We file a second dispute with additional evidence or a different angle of challenge</li>
            </ul>
            <p className="font-semibold mb-2">Round 3: Direct Creditor Disputes</p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>We bypass the bureau and go directly to the creditor/collector</li>
              <li>We demand proof of the debt under FDCPA guidelines</li>
              <li>We challenge reporting accuracy at the source</li>
            </ul>
            <p className="font-semibold mb-2">Round 4: CFPB Complaints</p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>We file complaints with the Consumer Financial Protection Bureau (CFPB)</li>
              <li>This triggers a mandatory investigation and response from creditors/bureaus</li>
              <li>Often results in deletions when companies realize they lack proper documentation</li>
            </ul>
            <p className="font-semibold mb-2">Round 5: Legal Review (If Applicable)</p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>If we identify FCRA violations, we escalate to our legal team</li>
              <li>Attorney escalation letters often result in removal to avoid legal liability</li>
            </ul>
            <p className="mb-2"><strong>Persistence pays off:</strong> Many items that are initially "verified" are eventually removed on subsequent rounds. Why? Because:</p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>Creditors often don't have complete documentation</li>
              <li>Bureaus and creditors hope you'll give up after one attempt</li>
              <li>Each dispute round forces them to re-verify—and they often can't</li>
            </ul>
            <p><strong>Client example:</strong> Sarah had a $4,200 medical collection verified twice. On the third dispute, we went directly to the collection agency and demanded documentation under FDCPA. They couldn't provide itemized medical records (HIPAA privacy protection), so they deleted it.</p>
          </FAQItem>

          {/* FAQ 10 */}
          <FAQItem index={9} openFAQ={openFAQ} setOpenFAQ={setOpenFAQ} question="10. Can you guarantee my score will increase by X points?">
            <p className="mb-4">No—and you should run from any company that makes that promise.</p>
            <p className="mb-4">Under the Credit Repair Organizations Act (CROA), it is illegal for credit restoration companies to:</p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>Guarantee specific score increases</li>
              <li>Promise removal of accurate negative items</li>
              <li>Charge upfront fees before work is performed (we comply with this through our $0 due today model with 3-day cancellation window)</li>
            </ul>
            <p className="font-semibold mb-2">What we CAN promise:</p>
            <ul className="space-y-1 mb-4">
              <li>✅ A legally compliant, personalized dispute process</li>
              <li>✅ Persistent challenges to inaccurate, incomplete, or unverifiable items</li>
              <li>✅ Measurable progress tracking with monthly reports</li>
              <li>✅ 1-on-1 coaching to build positive credit during the process</li>
              <li>✅ Full legal team support for FCRA violations</li>
              <li>✅ Transparency every step of the way</li>
            </ul>
            <p className="font-semibold mb-2">Why we can't guarantee specific results:</p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>We don't control how creditors and bureaus respond</li>
              <li>Your score depends on multiple factors (payment history, utilization, credit age, etc.)</li>
              <li>Everyone's credit situation is unique</li>
            </ul>
            <p className="mb-2"><strong>What we CAN show you:</strong> Real results from real clients:</p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>Sarah: 540 → 695 in 75 days (6 collections removed)</li>
              <li>Carlos: 520s → 100+ point increase in under 4 months</li>
              <li>Maria: 580 → 710 in 9 months (included charge-offs and late payments)</li>
            </ul>
            <p className="text-sm italic">Results may vary. Individual timelines and outcomes depend on the complexity of your credit situation.</p>
          </FAQItem>

          {/* FAQ 11 */}
          <FAQItem index={10} openFAQ={openFAQ} setOpenFAQ={setOpenFAQ} question="11. What's included in the 1-on-1 financial coaching?">
            <p className="mb-4">Every Mesa Group client—regardless of which plan you choose—gets a dedicated account manager and personalized financial coaching. This isn't just credit restoration; it's a complete financial transformation program.</p>
            <p className="font-semibold mb-2">Your coaching includes:</p>
            <p className="font-semibold mt-4 mb-2">📊 Customized Action Plan</p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>Review of your current credit situation</li>
              <li>Identification of all disputable items</li>
              <li>Strategy for building positive credit during the process</li>
              <li>Timeline expectations based on your unique situation</li>
            </ul>
            <p className="font-semibold mb-2">👤 Dedicated Account Manager</p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>Real person assigned to your case (no switching between random reps)</li>
              <li>Direct phone and email access</li>
              <li>Trilingual support available (🇺🇸 English | 🇪🇸 Español | 🇮🇳 Punjabi)</li>
              <li>They know your name, your story, and your goals</li>
            </ul>
            <p className="font-semibold mb-2">📈 Monthly Progress Reviews</p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>Detailed updates on dispute progress</li>
              <li>Explanation of what's working and what's not</li>
              <li>Strategy adjustments as needed</li>
              <li>Score change analysis</li>
            </ul>
            <p className="font-semibold mb-2">🎯 Credit Building Education</p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>How to use credit cards responsibly (utilization ratios, payment timing)</li>
              <li>When to apply for new credit (and when NOT to)</li>
              <li>Building positive payment history</li>
              <li>Understanding credit mix and account age</li>
              <li>Protecting your credit long-term</li>
            </ul>
            <p className="font-semibold mb-2">💡 Ongoing Support</p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>Questions answered throughout the process</li>
              <li>Guidance on major financial decisions (buying a car, applying for a mortgage)</li>
              <li>Help understanding credit bureau responses</li>
              <li>Support beyond just the disputes</li>
            </ul>
            <p className="mb-4"><strong>Why coaching matters:</strong> Removing negative items is only half the battle. Without learning how to build and maintain good credit, you'll end up back where you started. Our clients don't just see score increases—they achieve lasting financial transformation.</p>
            <div className="bg-gray-100 p-4 rounded-lg mt-4">
              <p className="italic">"I came to Mesa Group with a 540 score and collections I didn't understand. My account manager, Maria, didn't just file disputes—she explained every step, taught me how credit utilization works, and helped me build a plan to keep my score high after the program. Nine months later, I'm at 710 and I finally understand how to manage my credit."</p>
              <p className="font-semibold mt-2">— Carlos R., Bakersfield, CA</p>
            </div>
          </FAQItem>

          {/* FAQ 12 */}
          <FAQItem index={11} openFAQ={openFAQ} setOpenFAQ={setOpenFAQ} question="12. What's the difference between your monthly plans and 12-month programs?">
            <p className="mb-4">Great question—we offer both options to fit different needs and budgets.</p>
            
            <div className="bg-amber-50 p-4 rounded-lg mb-4">
              <p className="font-bold text-lg mb-2">MONTHLY PLANS (Lite, Flex, Elite) - BEST FOR FLEXIBILITY</p>
              <p className="font-semibold mb-2">Structure:</p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Initial setup fee ($350-$800 depending on plan)</li>
                <li>Ongoing monthly fee ($149-$299 depending on plan)</li>
                <li>Cancel anytime (after 3-day risk-free window)</li>
              </ul>
              <p className="mb-2"><strong>Key Advantage:</strong> ✅ Ongoing support for new items—If you add new negative items during the process (like a late payment or new collection), we'll work on them. No additional charge.</p>
              <p className="mb-2"><strong>Why this matters:</strong> Life happens. Despite our coaching and guidance, clients sometimes add new late payments or inquiries during the credit recovery process. Monthly plans keep you covered and accountable—we don't abandon your case when new challenges arise. This flexibility is worth the ongoing investment for clients with active or evolving credit situations.</p>
              <p className="font-semibold mb-2">Best for:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>People who want maximum flexibility</li>
                <li>Active credit situations (still working on paying down debts, applying for credit)</li>
                <li>Those who prefer to pay as they go</li>
                <li>Clients who want ongoing support as long as needed</li>
              </ul>
            </div>

            <div className="bg-green-50 p-4 rounded-lg mb-4">
              <p className="font-bold text-lg mb-2">12-MONTH PROGRAMS (Ruby, Emerald) - BEST FOR SAVINGS</p>
              <p className="font-semibold mb-2">Structure:</p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>One-time payment ($1,500 for Ruby, $1,800 for Emerald)</li>
                <li>Can be paid in full OR financed through Buy Now, Pay Later (BNPL)</li>
                <li>Full 12 months of service</li>
              </ul>
              <p className="mb-2"><strong>Key Advantage:</strong> ✅ Significant savings—Save $888 (Ruby) or $1,788 (Emerald) vs. paying monthly</p>
              <p className="mb-2"><strong>Important Note:</strong> ❌ Comprehensive 12-month program focused on your current credit profile at enrollment. New items added during the program will NOT be worked on.</p>
              <p className="font-semibold mb-2">Best for:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>People who want to save money upfront</li>
                <li>Stable credit situations (no new negatives expected)</li>
                <li>Clients committed to a full year of service</li>
                <li>Those who prefer one-and-done payment</li>
              </ul>
            </div>

            <p className="font-semibold mb-2">Which plan is right for you?</p>
            <p className="mb-2"><strong>Choose Monthly Plans if:</strong></p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>You want flexibility to cancel anytime</li>
              <li>Your credit situation is still evolving</li>
              <li>You want support for new items as they appear</li>
              <li>You prefer to pay as you go</li>
            </ul>
            <p className="mb-2"><strong>Choose 12-Month Programs if:</strong></p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>You want to save money (up to $1,788)</li>
              <li>Your credit situation is stable</li>
              <li>You're committed to a full year</li>
              <li>You prefer to pay once and be done</li>
            </ul>
            <p className="mb-2"><strong>Still not sure?</strong> Book a free consultation, and we'll review your credit situation and recommend the best plan for your needs.</p>
            <p>📞 Call us: (661) 310-3040<br />📧 Email: contact@mesagroupconsulting.com<br />🏢 Visit us: 5001 California Ave Suite 219, Bakersfield, CA 93309</p>
          </FAQItem>

          {/* FAQ 13 */}
          <FAQItem index={12} openFAQ={openFAQ} setOpenFAQ={setOpenFAQ} question="13. Do I need to live in Bakersfield to work with you?">
            <p className="mb-4">Not at all! While we're headquartered in Bakersfield, California, we serve clients <strong>nationwide</strong>.</p>
            <p className="font-semibold mb-2">How it works:</p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li><strong>Everything is done remotely:</strong> Phone, email, and our client portal</li>
              <li><strong>No office visits required:</strong> We handle everything digitally</li>
              <li><strong>Same great service:</strong> Whether you're in California, Texas, Florida, or anywhere else in the U.S., you get the same dedicated account manager, 1-on-1 coaching, and personalized service</li>
            </ul>
            <p className="font-semibold mb-2">But if you ARE local:</p>
            <ul className="space-y-1 mb-4">
              <li>✅ You're welcome to visit our Bakersfield office for in-person consultations</li>
              <li>✅ We love meeting clients face-to-face when possible</li>
              <li>✅ It's nice to know we're a real business with a real office you can walk into</li>
            </ul>
            <p className="font-semibold mb-2">Our Office:</p>
            <p>📍 5001 California Ave Suite 219<br />Bakersfield, CA 93309<br />📞 (661) 310-3040<br />📧 contact@mesagroupconsulting.com</p>
            <p className="mt-4"><strong>Trilingual support <em>nationwide</em>:</strong> Our English, Spanish, and Punjabi speaking team members (🇺🇸 🇪🇸 🇮🇳) work remotely with clients across the country.</p>
          </FAQItem>

          {/* FAQ 14 */}
          <FAQItem index={13} openFAQ={openFAQ} setOpenFAQ={setOpenFAQ} question="14. How do I track my progress?">
            <p className="mb-4">Transparency is one of our core values. You'll always know exactly what's happening with your credit.</p>
            <p className="font-semibold mb-2">You get access to:</p>
            <p className="font-semibold mt-4 mb-2">📱 Mobile App</p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>Track dispute progress in real-time</li>
              <li>See which items are being worked on</li>
              <li>View bureau responses as they come in</li>
              <li>Check your score changes</li>
            </ul>
            <p className="font-semibold mb-2">💻 Client Portal (Desktop)</p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>Full dashboard of all disputes</li>
              <li>Document uploads and storage</li>
              <li>Communication history with your account manager</li>
              <li>Monthly progress reports</li>
            </ul>
            <p className="font-semibold mb-2">📊 Monthly Progress Reports</p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>Detailed written updates every 35 days</li>
              <li>What was disputed</li>
              <li>What was removed</li>
              <li>What's still in progress</li>
              <li>Next steps</li>
            </ul>
            <p className="font-semibold mb-2">📧 Direct Communication</p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>Email updates when important changes occur</li>
              <li>Phone access to your dedicated account manager</li>
              <li>Timely response to your questions and requests</li>
            </ul>
            <p className="font-semibold mb-2">🔍 SmartCredit 3-Bureau Monitoring</p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>Real-time access to all three credit reports</li>
              <li>Score tracking across all bureaus</li>
              <li>Alerts when changes occur</li>
            </ul>
            <p className="font-semibold">You're never in the dark about what's happening with your credit.</p>
          </FAQItem>

          {/* FAQ 15 */}
          <FAQItem index={14} openFAQ={openFAQ} setOpenFAQ={setOpenFAQ} question="15. What happens after my credit is restored?">
            <p className="mb-4">Our goal isn't just to fix your credit—it's to transform your financial future. Here's what happens:</p>
            <p className="font-semibold mb-2">During the Program:</p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>We remove inaccurate items</li>
              <li>You learn credit building strategies through coaching</li>
              <li>Your score improves steadily</li>
              <li>You start getting approved for better credit products</li>
            </ul>
            <p className="font-semibold mb-2">After Major Items Are Removed:</p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li><strong>Monthly plan clients:</strong> You can continue service as long as you want ongoing support, or you can cancel anytime</li>
              <li><strong>12-month program clients:</strong> You complete your full year of service with continued monitoring and coaching</li>
              <li>We provide a "credit maintenance" guide with long-term strategies</li>
            </ul>
            <p className="font-semibold mb-2">Your next steps:</p>
            <p className="mb-4">🏠 Apply for that mortgage you've been denied for<br />🚗 Get approved for a car loan with reasonable rates<br />💳 Access better credit cards with rewards and lower APRs<br />💼 Secure business funding if you're an entrepreneur<br />🎓 Refinance student loans at lower interest rates</p>
            <p className="font-semibold mb-2">Ongoing support (if needed):</p>
            <p className="mb-4">Many clients stay with us on monthly plans even after major clean-up work is done because:</p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>They want ongoing monitoring and coaching</li>
              <li>They like having an account manager to call with questions</li>
              <li>They continue applying for new accounts and want guidance</li>
              <li>They want protection if new items appear</li>
            </ul>
            <p className="mb-4"><strong>You're in control:</strong> There's no pressure to stay or leave. When you feel confident managing your credit independently, you're free to cancel (monthly plans) or you'll complete your 12-month term (prepaid plans) and graduate from the program.</p>
            <p><strong>Our success = your success:</strong> When you close on a house, buy your dream car, or secure that business loan, that's what it's all about. We're here to make that happen.</p>
          </FAQItem>

          {/* FAQ 16 */}
          <FAQItem index={15} openFAQ={openFAQ} setOpenFAQ={setOpenFAQ} question="16. What is SmartCredit and why do I need it?">
            <p className="mb-4">SmartCredit is a credit monitoring service that provides real-time access to your credit reports from all three bureaus (Experian, Equifax, TransUnion). It's a required tool for our program.</p>
            <p className="font-semibold mb-2">Why it's required:</p>
            <p className="font-semibold mt-4 mb-2">📊 Real-Time Access</p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>We need to see your actual credit reports to file accurate disputes</li>
              <li>You get to track your progress in real-time</li>
              <li>Both you and your account manager see the same information</li>
            </ul>
            <p className="font-semibold mb-2">🔍 3-Bureau Coverage</p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>Most free credit monitoring (like Credit Karma) only shows Vantage Scores, which lenders don't use</li>
              <li>SmartCredit shows FICO scores, which are what mortgage, auto, and credit card lenders actually pull</li>
              <li>Covers all three bureaus, not just one or two</li>
            </ul>
            <p className="font-semibold mb-2">⚡ Updates Fast</p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>When items are removed, you see it within days</li>
              <li>Alerts you to new items or changes immediately</li>
              <li>Critical for tracking dispute effectiveness</li>
            </ul>
            <p className="font-semibold mb-2">Cost:</p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>$1 for 7-day trial</li>
              <li>Then $27.99/month after trial ends</li>
              <li>You must maintain this throughout your program</li>
            </ul>
            <p className="font-semibold mb-2">Why we don't include it in our price:</p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>SmartCredit is a third-party service (not owned by Mesa Group)</li>
              <li>You maintain direct control over your account</li>
              <li>You can cancel SmartCredit separately if you leave our program</li>
            </ul>
            <p className="font-semibold mb-2">After your program:</p>
            <p>Many clients choose to keep SmartCredit even after completing credit recovery because it's valuable for:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Ongoing monitoring</li>
              <li>Identity theft protection</li>
              <li>Tracking your continued credit building</li>
            </ul>
          </FAQItem>

          {/* FAQ 17 */}
          <FAQItem index={16} openFAQ={openFAQ} setOpenFAQ={setOpenFAQ} question="17. Can I apply for new credit during the program?">
            <p className="mb-4">Yes, but strategically.</p>
            <p className="mb-4">This is one of the most important topics we cover in your 1-on-1 coaching, because applying for new credit during credit rebuilding can either help or hurt—depending on timing and approach.</p>
            <p className="font-semibold mb-2">General guidance:</p>
            <p className="font-semibold mt-4 mb-2">✅ GOOD IDEAS:</p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li><strong>Secured credit cards:</strong> These report positive payment history and help build credit with minimal risk</li>
              <li><strong>Credit builder loans:</strong> Specifically designed to help build credit</li>
              <li><strong>Becoming an authorized user:</strong> On someone else's account with good payment history</li>
              <li><strong>Applying for credit AFTER major removals:</strong> Once your score improves, your approval odds increase</li>
            </ul>
            <p className="font-semibold mb-2">❌ BAD IDEAS:</p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li><strong>Applying for multiple cards at once:</strong> Hard inquiries can temporarily lower your score</li>
              <li><strong>Applying right before buying a house/car:</strong> Lenders want stable credit for 6+ months before major purchases</li>
              <li><strong>Opening store credit cards impulsively:</strong> Just because you get approved doesn't mean you should say yes</li>
              <li><strong>Taking on debt you can't afford:</strong> New credit is only helpful if you manage it responsibly</li>
            </ul>
            <p className="mb-2"><strong>Our approach:</strong> Your account manager will create a personalized credit building strategy that includes:</p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>When to apply for new credit (timing matters)</li>
              <li>What types of credit to apply for</li>
              <li>How to keep utilization low on new accounts</li>
              <li>Building positive payment history while we remove negative items</li>
            </ul>
            <p className="font-semibold mb-2">Example strategy:</p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li><strong>Months 1-2:</strong> Focus on disputes only; avoid new applications</li>
              <li><strong>Month 3:</strong> Apply for secured credit card after first removals boost your score</li>
              <li><strong>Months 4-6:</strong> Use secured card responsibly (under 10% utilization, pay in full monthly)</li>
              <li><strong>Month 6+:</strong> Consider additional credit building based on your goals</li>
            </ul>
            <p className="mb-4"><strong>Monthly plan advantage:</strong> If you're on a monthly plan with ongoing support for new items, we'll work on any new inquiries or accounts that appear during the process.</p>
            <p><strong>Bottom line:</strong> Yes, you can apply for credit—but let's be strategic about it. That's what the coaching is for.</p>
          </FAQItem>

          {/* FAQ 18 */}
          <FAQItem index={17} openFAQ={openFAQ} setOpenFAQ={setOpenFAQ} question="18. What's your refund policy?">
            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-4">
              <p className="font-bold text-lg">90 Days. Real Results. Or You Get Every Dollar Back.</p>
            </div>
            <p className="mb-4">We don't just talk about results—we put it in writing.</p>
            <p className="mb-4">Every Mesa Group client is protected by <strong>The Mesa360 Guarantee</strong>: a legally written, contract-backed <strong>90-Day Money-Back Promise</strong> that most credit service companies aren't confident enough to offer.</p>
            <p className="font-semibold mb-2">Here's how it works:</p>
            <p className="mb-4">If you hold up your end of the agreement and we don't deliver real, verifiable progress within the first 90 days, you get 100% of your money back. No excuses. No runaround. No fine print.</p>
            
            <p className="font-semibold mb-2">Your Responsibilities (What "Holding Up Your End" Means):</p>
            <p className="mb-2">To qualify for the guarantee, you must:</p>
            <ul className="space-y-2 mb-4">
              <li>✅ <strong>Keep SmartCredit Active:</strong> Maintain your 3-bureau monitoring throughout the 90 days (we need real-time access to your reports to work effectively). If your SmartCredit account is inactive for more than 30 days, you become ineligible for the guarantee.</li>
              <li>✅ <strong>Stay Responsive:</strong> Respond to your account manager's requests for information or documentation. If you become unresponsive for more than 30 days, we can no longer service your account and the guarantee becomes void.</li>
              <li>✅ <strong>Keep Your Account Current:</strong> Maintain payment on your Mesa Group account. Unpaid invoices for more than 30 days result in service suspension and guarantee ineligibility.</li>
              <li>✅ <strong>Avoid New Negative Items:</strong> Don't add new late payments, collections, or charge-offs during the 90-day period (new negatives work against the progress we're making)</li>
              <li>✅ <strong>Avoid New Hard Inquiries:</strong> Don't apply for multiple new credit accounts during the initial dispute period (this can temporarily lower your score and complicate the process)</li>
              <li>✅ <strong>Follow Your Account Manager's Guidance:</strong> Your 1-on-1 coaching includes strategic advice—following it matters</li>
            </ul>

            <p className="font-semibold mb-2">Our Guarantee:</p>
            <p className="mb-4">If you meet all those conditions and we don't remove at least 1 verifiable negative item from your credit report within 90 days, you qualify for a full refund of all fees paid to Mesa Group.</p>
            <p className="mb-2"><strong>Important clarification:</strong></p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>"Results" means documented removal of at least 1 inaccurate, incomplete, or unverifiable item</li>
              <li>We cannot guarantee specific score increases (that would violate CROA regulations)</li>
              <li>Most clients see multiple removals within 90 days—this is a conservative baseline</li>
            </ul>

            <p className="font-semibold mb-2">Why We Can Offer This:</p>
            <p className="mb-4">Most of our clients start seeing results in the first 30-45 days. Why? Because we work your file like our reputation depends on it—because it does.</p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>Your case doesn't sit in a queue collecting dust</li>
              <li>Your dedicated account manager is personally invested in your success</li>
              <li>We use advanced dispute methods, not cookie-cutter templates</li>
              <li>When violations occur, our legal team escalates</li>
            </ul>
            <p className="mb-4 font-semibold">We're that confident in our process.</p>
          </FAQItem>

          {/* FAQ 19 */}
          <FAQItem index={18} openFAQ={openFAQ} setOpenFAQ={setOpenFAQ} question="19. What are the cancellation terms and guarantee exclusions?">
            <p className="font-semibold mb-2">What's NOT Covered by the Guarantee:</p>
            <ul className="space-y-1 mb-4">
              <li>❌ <strong>SmartCredit subscription fees</strong> (that's a third-party service you control)</li>
              <li>❌ <strong>Inactive SmartCredit account</strong> (if your CMS is inactive for more than 30 days, we can't work on your case)</li>
              <li>❌ <strong>Unpaid invoices</strong> (if your Mesa Group account has unpaid invoices for more than 30 days, service is suspended)</li>
              <li>❌ <strong>Unresponsive clients</strong> (if you don't respond to communications for more than 30 days, we can no longer service your account)</li>
              <li>❌ <strong>New negative items you add during the process</strong> (late payments, collections, inquiries)</li>
            </ul>

            <p className="font-semibold mb-2">3-Day Risk-Free Cancellation Window (All Plans):</p>
            <p className="mb-2">In addition to the 90-Day Guarantee, you also get:</p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>3-day cancellation window from signup date</li>
              <li>Full refund if you cancel within 3 days for any reason</li>
              <li>No questions asked, no hassle</li>
            </ul>

            <p className="font-semibold mb-2">After the 90-Day Period:</p>
            <p className="font-semibold mb-1">Monthly Plans (Lite, Flex, Elite):</p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>You can cancel anytime after the 90-day guarantee period</li>
              <li>No refund on work already completed, but no further charges</li>
              <li>No cancellation fees or penalties</li>
            </ul>
            <p className="font-semibold mb-1">12-Month Programs (Ruby, Emerald):</p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>Refunds after the 90-day guarantee window are evaluated case-by-case based on work completed</li>
              <li>These are prepaid programs, so the 90-day guarantee is your primary protection</li>
            </ul>

            <div className="bg-green-50 border-l-4 border-green-500 p-4 my-4">
              <p className="font-bold">You've Got Nothing to Lose. Everything to Gain.</p>
              <p className="mt-2">If you're serious about transforming your credit and your financial future, we'll match your commitment with everything we've got.</p>
              <p className="mt-2 font-semibold">✨ This is The Mesa360 Guarantee.<br />Real Results in 90 Days — or Your Money Back.</p>
            </div>

            <p className="font-semibold mb-2">Questions about the guarantee?</p>
            <p>📞 Call us: (661) 310-3040<br />📧 Email: contact@mesagroupconsulting.com<br />🏢 Visit us: 5001 California Ave Suite 219, Bakersfield, CA 93309</p>
          </FAQItem>

          {/* FAQ 20 */}
          <FAQItem index={19} openFAQ={openFAQ} setOpenFAQ={setOpenFAQ} question="20. Will you help me with identity theft?">
            <p className="mb-4">Yes, absolutely.</p>
            <p className="mb-4">Identity theft accounts (fraudulent accounts opened in your name) are some of the most damaging items that can appear on your credit report—and they're 100% disputable since they're not your responsibility.</p>
            <p className="font-semibold mb-2">What we do:</p>
            <p className="font-semibold mt-4 mb-2">🚨 Identify Fraudulent Accounts</p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>Review your credit report for accounts you don't recognize</li>
              <li>Look for addresses you've never lived at</li>
              <li>Spot inquiries you didn't authorize</li>
              <li>Find patterns consistent with identity theft</li>
            </ul>
            <p className="font-semibold mb-2">📋 File Identity Theft Reports</p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>Guide you through filing a report with the FTC (IdentityTheft.gov)</li>
              <li>Help you file a police report (required for many disputes)</li>
              <li>Document everything for credit bureau disputes</li>
            </ul>
            <p className="font-semibold mb-2">💼 Dispute Fraudulent Accounts</p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>File disputes with all three bureaus</li>
              <li>Submit identity theft affidavits</li>
              <li>Provide police reports and FTC documentation</li>
              <li>Escalate to legal team if bureaus don't comply</li>
            </ul>
            <p className="font-semibold mb-2">🛡️ Protect Your Credit Going Forward</p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>Set up fraud alerts on your credit reports</li>
              <li>Guide you through credit freezes (if appropriate)</li>
              <li>Monitor for new fraudulent activity through SmartCredit</li>
            </ul>
            <p className="font-semibold mb-2">Important distinction:</p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li><strong>Identity theft disputes:</strong> These are typically resolved faster because you have documentation proving fraud</li>
              <li><strong>Regular disputes:</strong> These challenge inaccurate or unverifiable items that may be yours but were misreported</li>
            </ul>
            <p className="mb-4"><strong>Client example:</strong> Juan discovered 4 credit cards on his report that he never opened, totaling $18,000 in fraudulent charges. We helped him file FTC and police reports, disputed all four accounts, and had them removed within 60 days. His score jumped 127 points.</p>
            <p className="font-semibold">If you suspect identity theft, tell your account manager immediately.</p>
          </FAQItem>

          {/* FAQ 21 */}
          <FAQItem index={20} openFAQ={openFAQ} setOpenFAQ={setOpenFAQ} question="21. Can you help with student loans?">
            <p className="mb-4">Yes—but it depends on the situation.</p>
            <p className="mb-4">Student loans are one of the most complex credit issues we handle. Here's what we can and can't do:</p>
            
            <div className="bg-green-50 p-4 rounded-lg mb-4">
              <p className="font-bold mb-2">✅ WHAT WE CAN DISPUTE:</p>
              <p className="font-semibold mb-2">Inaccurate Reporting:</p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Late payments that you actually made on time</li>
                <li>Incorrect balances or loan amounts</li>
                <li>Loans showing as in default when they're current</li>
                <li>Duplicate reporting of the same loan</li>
                <li>Loans that don't belong to you</li>
              </ul>
              <p className="font-semibold mb-2">Federal Student Loan Rehabilitations:</p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>If you've completed a loan rehabilitation program, the default should be removed from your credit report</li>
                <li>We can dispute if it's still showing after successful rehabilitation</li>
              </ul>
              <p className="font-semibold mb-2">Private Student Loan Issues:</p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Unverifiable private student loans</li>
                <li>Statute of limitations issues on very old private loans</li>
                <li>Identity theft related to student loans</li>
              </ul>
              <p className="font-semibold mb-2">Older Student Loan Defaults:</p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Student loans in default that are older than 7 years should be removed</li>
                <li>We can dispute these for deletion</li>
              </ul>
              <p className="font-semibold mb-2">Elite Plan Specific:</p>
              <p>Our Mesa360 Elite plan specifically covers student loans with advanced dispute strategies</p>
            </div>

            <div className="bg-red-50 p-4 rounded-lg mb-4">
              <p className="font-bold mb-2">❌ WHAT WE CANNOT DO:</p>
              <p className="font-semibold mb-2">Remove Accurate, Current Student Loans:</p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>If your student loans are accurately reported and you're responsible for them, they stay on your report</li>
                <li>This applies to both federal and private student loans</li>
              </ul>
              <p className="font-semibold mb-2">Forgive or Reduce Your Student Loan Debt:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>We don't negotiate student loan settlements or forgiveness</li>
                <li>We're credit restoration experts, not student loan debt negotiators</li>
              </ul>
            </div>

            <p className="font-semibold mb-2">What we CAN help with:</p>
            <p className="font-semibold mt-4 mb-2">📚 Education and Guidance:</p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>Explain your student loan repayment options (IBR, PAYE, REPAYE, etc.)</li>
              <li>Direct you to resources for federal loan forgiveness programs</li>
              <li>Help you understand deferment and forbearance impacts on credit</li>
            </ul>
            <p className="font-semibold mb-2">💡 Strategic Advice:</p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>When to dispute vs. when to rehabilitate</li>
              <li>How student loans affect your overall credit strategy</li>
              <li>Building credit while managing student loans</li>
            </ul>
            <p className="font-semibold mb-2">🎯 Optimization:</p>
            <p className="mb-4">If you're on an Elite plan, we include "funding profile optimization" which considers your entire financial picture, including student loans</p>
            
            <p className="font-semibold mb-2">Bottom line:</p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li><strong>Inaccurate student loan reporting:</strong> We can fix that</li>
              <li><strong>Old defaulted student loans:</strong> We can dispute for removal</li>
              <li><strong>Accurate current student loans:</strong> These stay, but we help you manage their credit impact</li>
            </ul>
            <p>If student loans are your main concern, mention that when booking your consultation so we can assess your specific situation.</p>
          </FAQItem>
        </div>
      </div>
    </section>;
};

// Reusable FAQ Item component
interface FAQItemProps {
  index: number;
  openFAQ: number | null;
  setOpenFAQ: (index: number | null) => void;
  question: string;
  children: React.ReactNode;
}
const FAQItem = ({
  index,
  openFAQ,
  setOpenFAQ,
  question,
  children
}: FAQItemProps) => {
  return <div className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden hover:border-amber-300 transition-colors duration-300">
      <button onClick={() => setOpenFAQ(openFAQ === index ? null : index)} className="w-full px-6 py-5 flex items-center justify-between text-left bg-white hover:bg-gray-50 transition-colors duration-200">
        <span className="font-semibold text-gray-900 pr-4">{question}</span>
        <ChevronDown className={`w-5 h-5 text-[#3e3e3e] flex-shrink-0 transition-transform duration-300 ${openFAQ === index ? "transform rotate-180" : ""}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${openFAQ === index ? "max-h-[2000px]" : "max-h-0"}`}>
        <div className="px-6 pb-5 pt-2 bg-white text-gray-700 leading-relaxed">
          {children}
        </div>
      </div>
    </div>;
};
export default FAQ;