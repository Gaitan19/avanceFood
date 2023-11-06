export const tableHeaders = [
  'remove',
  'image',
  'food',
  'price',
  'quantity',
  'total',
];

export const billingsInformation = [
  {
    placeholder: 'First name*',
    type: 'text',
    isRequired: true,
  },
  {
    placeholder: 'Last name*',
    type: 'text',
    isRequired: true,
  },
  {
    placeholder: 'Email address (optional)',
    type: 'email',
    isRequired: false,
  },
  {
    placeholder: 'Mobile number',
    type: 'tel',
    isRequired: true,
  },
];

export const checkoutSelectors = [
  ['khulna', 'New York', 'Barisal', 'Nator', 'Joybangla'],
  ['State', 'New York', 'Barisal', 'Nator', 'Joybangla'],
  ['Country', 'New York', 'Barisal', 'Nator', 'Joybangla'],
];

export const paymentMethods = [
  'Payment by card',
  'Paypal',
  'Payponeer',
  'Cash on delivery',
];
