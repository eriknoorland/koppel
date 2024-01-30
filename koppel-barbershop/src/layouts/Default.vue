<template>
  <div class="container" style="overflow-x: hidden;">
    <div class="languageSwitcher">
      <router-link
        v-if="$i18n.locale === 'nl-nl'"
        v-bind:to="$tp($route.path, 'en-gb', true)"
        class="languageSwitcher__language"
      >
        <span class="languageSwitcher__languageLabel">
          English version
        </span>

        <svg class="languageSwitcher__languegFlag" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30"><clipPath id="a"><path d="M0 0v30h60V0z"/></clipPath><clipPath id="b"><path d="M30 15h30v15zv15H0zH0V0zV0h30z"/></clipPath><g clip-path="url(#a)"><path d="M0 0v30h60V0z" fill="#012169"/><path d="M0 0l60 30m0-30L0 30" stroke="#fff" stroke-width="6"/><path d="M0 0l60 30m0-30L0 30" clip-path="url(#b)" stroke="#C8102E" stroke-width="4"/><path d="M30 0v30M0 15h60" stroke="#fff" stroke-width="10"/><path d="M30 0v30M0 15h60" stroke="#C8102E" stroke-width="6"/></g></svg>
      </router-link>

      <router-link
        v-if="$i18n.locale === 'en-gb'"
        v-bind:to="$tp($route.path, 'nl-nl', true)"
        class="languageSwitcher__language"
      >
        <span class="languageSwitcher__languageLabel">
          Nederlandse versie
        </span>

        <svg class="languageSwitcher__languegFlag" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 6"><path fill="#21468B" d="M0 0h9v6H0z"/><path fill="#FFF" d="M0 0h9v4H0z"/><path fill="#AE1C28" d="M0 0h9v2H0z"/></svg>
      </router-link>
    </div>

    <slot />
  </div>
</template>

<script>
import 'koppel-components/src/scss/base.scss';

const pageTitle = 'KOPPEL BARBERSHOP';
const productionUrl = 'https://www.koppel-barbershop.nl';

export default {
  metaInfo() {
    return {
      meta: [
        {
          vmid: 'description',
          name: 'description',
          content: this.$t('metadata.description'),
        },
        {
          vmid: 'keywords',
          name: 'keywords',
          content: this.$t('metadata.keywords'),
        },
        {
          property: 'og:title',
          content: pageTitle,
        },
        {
          property: 'og:description',
          content: this.$t('metadata.description'),
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
    }
  },
}
</script>

<style lang="scss" scoped>
.languageSwitcher {
  display: flex;
  justify-content: flex-end;
  padding: 10px 0 0 0;
}

.languageSwitcher__language {
  display: flex;
  align-items: center;
  color: #000;
}

.languageSwitcher__languageLabel {
  display: block;
  margin: 0 8px 0 0;
}

.languageSwitcher__languegFlag {
  height: 14px;
}
</style>