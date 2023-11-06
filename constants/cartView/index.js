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
    text: 'First name*',
    type: 'text',
  },
  {
    text: 'Last name*',
    type: 'text',
  },
  {
    text: 'Email address',
    type: 'email',
  },
  {
    text: 'Mobile number',
    type: 'tel',
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

export const orderDetails = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'yourmail@domain.com',
};

export const costumersInformation = [
  {
    text: 'First name',
    value: orderDetails.firstName,
  },
  {
    text: 'Last name',
    value: orderDetails.lastName,
  },

  {
    text: 'Email address',
    value: orderDetails.email,
  },

  {
    text: 'Address',
    value: '1901 Thornridge Cir. Shiloh, Hawaii 81063',
  },
  {
    text: 'City',
    value: 'Thornridge',
  },
  {
    text: 'State',
    value: 'Hawaii',
  },

  {
    text: 'Postal code',
    value: '81063',
  },

  {
    text: 'Country',
    value: 'USA',
  },
];

export const ordersInformation = [
  {
    text: 'Order ID',
    value: '#MN3293KH',
  },
  {
    text: 'Order date',
    value: '10/06/2023',
  },
  {
    text: 'Payment method',
    value: 'Bank transfer',
  },
  {
    text: 'Order status',
    value: true,
  },
];
