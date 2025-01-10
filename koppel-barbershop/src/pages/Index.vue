<template>
  <Layout>
    <koppel-section>
      <div>
        <g-image
          src="~/assets/img/logo.jpg"
          alt="Koppel Barbershop"
          style="display: block; margin: 20px auto; padding: 0 10px;"
        />
      </div>
    </koppel-section>

    <koppel-section modifiers="no-padding padding-bottom breakout">
      <koppel-hero>
        <template v-slot:image="slotProps">
          <g-image
            src="~/assets/img/55a-16.jpg"
            alt="Koppel Barbershop"
            v-bind:class="slotProps.className"
          />
        </template>
      </koppel-hero>
    </koppel-section>

    <!-- <koppel-section modifiers="padding-top">
      <base-notification>
        <span v-html="$t('notifications.startOf2024')" />
      </base-notification>
    </koppel-section> -->

    <koppel-section modifiers="padding-top">
      <h1 class="heading1" style="text-align: center;">
        {{ $t('intro.title') }}
      </h1>

      <p class="justify">
        {{ $t('intro.body') }}
      </p>
    </koppel-section>

    <koppel-section modifiers="section">
      <div style="text-align: center;">
        <h2 class="heading1">
          {{ $t('prices.titleIsa') }}
        </h2>
      </div>

      <table style="margin: 0 auto;">
        <price-row
          v-for="(option, index) in optionsIsa"
          v-bind:key="index"
          v-bind:data="option"
        />
      </table>
    </koppel-section>

    <koppel-section>
      <barbers-section />
    </koppel-section>

    <koppel-section modifiers="no-padding padding-top">
      <div style="position: relative;">
        <g-image
          src="~/assets/img/11a-10.jpg"
          alt="Koppel Barbershop Interieur"
        />

        <span style="position: absolute; bottom: 10px; left: 10px; color: #fff;">
          pictures by Paul Bink
        </span>
      </div>
    </koppel-section>

    <koppel-section modifiers="section">
      <koppel-cards modifiers="2-columns">
        <koppel-card
          title="Contact Isa"
          body="<a href='https://instagram.com/koppel_barbershop' target='_blank' rel='noopener noreferrer'>Instagram</a><br /><a href='tel:0618924989'>Tel: 06 18 92 49 89</a><br /><a href='mailto:info@koppel-barbershop.nl'>E-mail: info@koppel-barbershop.nl</a>"
        >
          <template v-slot:image="slotProps">
            <g-image
              src="~/assets/img/kwast_bw.jpg"
              alt="Koppel Barbershop Contact"
              v-bind:class="slotProps.className"
            />
          </template>
        </koppel-card>

        <koppel-card
          v-bind:title="$t('location.title')"
          v-bind:body="`${$t('location.body')}<br /><br />Koppel Barbershop<br />Koestraat 24<br />3811 HK Amersfoort`"
        >
          <template v-slot:image="slotProps">
            <g-image
              src="~/assets/img/shop-location-bw.jpg"
              alt="Koppel Barbershop Locatie"
              v-bind:class="slotProps.className"
            />
          </template>
        </koppel-card>
      </koppel-cards>
    </koppel-section>
  </Layout>
</template>

<script>
import KoppelSection from 'koppel-components/src/components/KoppelSection';
import KoppelHero from 'koppel-components/src/components/KoppelHero';
import KoppelCards from 'koppel-components/src/components/KoppelCards';
import KoppelCard from 'koppel-components/src/components/KoppelCard';
import BaseNotification from '@/components/BaseNotification';
import BarbersSection from '@/components/BarbersSection';
import PriceRow from '@/components/PriceRow';

export default {
  components: {
    KoppelSection,
    KoppelHero,
    KoppelCards,
    KoppelCard,
    BaseNotification,
    BarbersSection,
    PriceRow,
  },

  computed: {
    optionsIsa() {
      return [
        {
          label: this.$t('prices.haircut'),
          price: '€35',
          duration: '40 min',
        },
        {
          label: this.$t('prices.haircutInSilence'),
          price: '€35',
          duration: '40 min',
        },
        {
          label: this.$t('prices.haircutSidesRear'),
          price: '€20',
          duration: '30 min',
        },
        {
          label: this.$t('prices.haircutChild8T012'),
          price: '€20',
          duration: '40 min',
        },
        {
          label: this.$t('prices.haircutChild13T018'),
          price: '€22,50',
          duration: '40 min',
        },
        {
          label: this.$t('prices.buzzcut'),
          price: '€15',
          duration: '20 min',
        },
        {
          label: this.$t('prices.haircutBeardTrimWithShave'),
          price: '€47,50',
          duration: '1 uur & 10 min',
        },
        {
          label: this.$t('prices.haircutBeardTrimWithoutShave'),
          price: '€42,50',
          duration: '50 min',
        },
        {
          label: this.$t('prices.beardtrimWithShave'),
          price: '€22,50',
          duration: '40 min',
        },
        {
          label: this.$t('prices.beardtrimWithoutShave'),
          price: '€17,50',
          duration: '30 min',
        },
        {
          label: this.$t('prices.buzzcutAndBeardTrimWithShave'),
          price: '€35',
          duration: '50 min',
        },
        {
          label: this.$t('prices.buzzcutAndBeardTrimWithoutShave'),
          price: '€30',
          duration: '30 min',
        },
        {
          label: this.$t('prices.shave'),
          price: '€27,50',
          duration: '40 min',
        },
        {
          label: this.$t('prices.haircutAndShave'),
          price: '€55',
          duration: `1 ${this.$t('common.hour')}, 10 min`,
        },
        {
          label: this.$t('prices.headShave'),
          price: '€22,50',
          duration: '40 min',
        },
        {
          label: this.$t('prices.headShaveAndBeardTrimWithShave'),
          price: '€45',
          duration: `1 ${this.$t('common.hour')}, 10 min`,
        },
        {
          label: this.$t('prices.headShaveAndBeardTrimWithoutShave'),
          price: '€40',
          duration: '50 min',
        },
      ];
    },
  },
}
</script>
