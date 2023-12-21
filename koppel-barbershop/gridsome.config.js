module.exports = {
  siteName: 'KOPPEL BARBERSHOP',
  titleTemplate: '%s',
  plugins: [
    {
      use: "gridsome-plugin-i18n",
      options: {
        locales: [
          'nl-nl',
          'en-gb'
        ],
        pathAliases: {
          'nl-nl': 'nl',
          'en-gb': 'en'
        },
        fallbackLocale: 'nl-nl',
        defaultLocale: 'nl-nl',
        enablePathRewrite: true,
        rewriteDefaultLanguage: true,
        messages: {
          'nl-nl': require('./src/locales/nl-nl.json'),
          'en-gb': require('./src/locales/en-gb.json'),
        },
      },
    },
  ],
}
