// Financial calculation utility functions

export const calculateMonthsToPayoff = (
  balance: number,
  apr: number,
  monthlyPayment: number
): number => {
  if (balance <= 0 || monthlyPayment <= 0) return 0;
  const monthlyRate = (apr / 100) / 12;
  if (monthlyRate === 0) return Math.ceil(balance / monthlyPayment);
  
  const ratio = balance * monthlyRate / monthlyPayment;
  if (ratio >= 1) return Infinity; // Payment too low to ever pay off
  
  return Math.ceil(
    -Math.log(1 - ratio) / Math.log(1 + monthlyRate)
  );
};

export const calculateTotalInterest = (
  monthlyPayment: number,
  months: number,
  principal: number
): number => {
  return Math.max(0, (monthlyPayment * months) - principal);
};

export const calculateMonthlyPayment = (
  principal: number,
  apr: number,
  months: number
): { payment: number; totalInterest: number; totalPaid: number } => {
  if (principal <= 0 || months <= 0) {
    return { payment: 0, totalInterest: 0, totalPaid: 0 };
  }
  
  const monthlyRate = (apr / 100) / 12;
  
  let payment: number;
  if (monthlyRate === 0) {
    payment = principal / months;
  } else {
    payment = principal * (monthlyRate * Math.pow(1 + monthlyRate, months)) / 
              (Math.pow(1 + monthlyRate, months) - 1);
  }
  
  const totalPaid = payment * months;
  const totalInterest = totalPaid - principal;
  
  return { payment, totalInterest, totalPaid };
};

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount);
};

export const formatMonths = (months: number): string => {
  if (!isFinite(months) || months <= 0) return 'N/A';
  
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;
  
  if (years === 0) return `${months} month${months === 1 ? '' : 's'}`;
  if (remainingMonths === 0) return `${years} year${years === 1 ? '' : 's'}`;
  return `${years} year${years === 1 ? '' : 's'}, ${remainingMonths} month${remainingMonths === 1 ? '' : 's'}`;
};

export const getUtilizationColor = (percentage: number): string => {
  if (percentage < 10) return 'bg-green-500';
  if (percentage < 30) return 'bg-yellow-500';
  return 'bg-red-500';
};

export const getDTIZone = (percentage: number): { color: string; bgColor: string; label: string; textColor: string } => {
  if (percentage < 36) return { color: 'bg-green-500', bgColor: 'bg-green-100', label: 'Excellent', textColor: 'text-green-600' };
  if (percentage < 43) return { color: 'bg-yellow-500', bgColor: 'bg-yellow-100', label: 'Good', textColor: 'text-yellow-600' };
  if (percentage < 50) return { color: 'bg-orange-500', bgColor: 'bg-orange-100', label: 'Fair', textColor: 'text-orange-600' };
  return { color: 'bg-red-500', bgColor: 'bg-red-100', label: 'Poor', textColor: 'text-red-600' };
};
