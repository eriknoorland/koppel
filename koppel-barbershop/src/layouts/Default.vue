<template>
  <div class="container">
    <slot/>
  </div>
</template>

<script>
import 'koppel-components/src/scss/base.scss';

const pageTitle = 'KOPPEL BARBERSHOP';
const metaDescription = 'Met haar schat aan ervaring, werkende voor verschillende barbershops en kapperszaken in Rotterdam, Amsterdam en Utrecht, zijn we erg blij om Isa in onze Koppel Barbershop te zien doen wat ze het beste doet: Het knippen, stylen en scheren van mannen';
const metaKeywords = 'Koppel Barbershop, knippen, stylen, scheren, mannen, heren, Amersfoort';
const productionUrl = 'https://www.koppel-barbershop.nl';

export default {
  metaInfo: {
    meta: [
      {
        vmid: 'description',
        name: 'description',
        content: metaDescription,
      },
      {
        vmid: 'keywords',
        name: 'keywords',
        content: metaKeywords,
      },
      {
        property: 'og:title',
        content: pageTitle,
      },
      {
        property: 'og:description',
        content: metaDescription,
      },
      {
        property: 'og:type',
        content: 'company',
      },
      {
        property: 'og:url',
        content: productionUrl,
      },
      {
        property: 'og:image',
        content: `${productionUrl}/social-share.jpg`,
      },
      {
        property: 'link',
        rel: 'manifest',
        href: '/site.webmanifest',
      },
      {
        property: 'link',
        rel: 'mask-icon',
        href: '/safari-pinned-tab.svg',
        color: '#303030',
      },
      {
        property: 'meta',
        name: 'msapplication-TileColor',
        content: '#000000'
      },
      {
        property: 'meta',
        name: 'theme-color',
        content: '#ffffff',
      },
    ],
    title: pageTitle,
  },
}
</script>