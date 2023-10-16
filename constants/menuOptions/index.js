import routes from '../routes';

export const menuOptions = {
  foodMenu: [
    {
      route: '/',
      text: 'Food Grip',
    },
    {
      route: '/',
      text: 'Food details',
    },
    {
      route: '/',
      text: 'Cart View',
    },
    {
      route: '/',
      text: 'Checkout View',
    },
    {
      route: '/',
      text: 'Order Succes',
    },
  ],

  blogMenu: [
    {
      route: '/',
      text: 'Blog',
    },
    {
      route: '/',
      text: 'Blog Details',
    },
  ],

  pagesMenu: [
    {
      route: '/',
      text: 'About us',
    },
    {
      route: '/',
      text: 'Reservation',
    },
    {
      route: '/',
      text: 'Chefs',
    },
    {
      route: '/',
      text: 'Testimonials',
    },
    {
      route: '/',
      text: 'FAQ',
    },
    {
      route: '/',
      text: 'Privacy Policy',
    },
    {
      route: '/',
      text: 'Terms Of Service',
    },
  ],

  userMenu: [
    {
      route: '/',
      text: 'Login',
    },
    {
      route: '/',
      text: 'Register',
    },
    {
      route: '/',
      text: 'Verify OTP',
    },
    {
      route: '/',
      text: 'Reset Password',
    },
    {
      route: '/',
      text: 'About us',
    },
  ],
  costumerMenu: [
    {
      route: '/',
      text: 'Dashboard',
    },
    {
      route: '/',
      text: 'Order history',
    },
    {
      route: '/',
      text: 'My profile',
    },
    {
      route: '/',
      text: 'notifications',
    },
  ],
};

export const mainMenuOptions = [
  {
    text: 'Home',
    route: routes.home,
  },

  {
    text: 'About us',
    route: routes.aboutUs,
  },

  {
    text: 'Food Menu',
    menuOptions: menuOptions.foodMenu,
  },
  {
    text: 'Blog',
    menuOptions: menuOptions.blogMenu,
  },
  {
    text: 'Pages',
    menuOptions: menuOptions.pagesMenu,
  },
  {
    text: 'Contact',
    route: routes.contact,
  },
];
