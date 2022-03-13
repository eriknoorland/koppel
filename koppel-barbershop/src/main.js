// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue';
import latoRegular from '~/assets/fonts/lato-v17-latin-regular.woff2';
import latoBlack from '~/assets/fonts/LatoLatin-Black.woff2';

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);

  head.link.push({ rel: 'preload', href: latoRegular, as: 'font', crossorigin: 'crossorigin', type: 'font/woff2' });
  head.link.push({ rel: 'preload', href: latoBlack, as: 'font', crossorigin: 'crossorigin', type: 'font/woff2' });
};
