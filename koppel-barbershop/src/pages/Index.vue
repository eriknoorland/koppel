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
          {{ $t('prices.title') }}
        </h2>
      </div>

      <table style="margin: 0 auto;">
        <tr
          v-for="(option, index) in options"
          v-bind:key="index"
        >
          <td>
            {{ option.label }}
            <span style="font-style: italic;">
              ({{ option.duration }})
            </span>
          </td>

          <td>
            {{ option.price }}
          </td>
        </tr>
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
          title="Contact Daan"
          body="<a href='https://instagram.com/barbier_de_kortwiek' target='_blank' rel='noopener noreferrer'>Instagram</a><br /><a href='tel:0618924989'>Tel: 06 18 92 49 89</a><br /><a href='mailto:info@barbierdekortwiek.nl'>E-mail: info@barbierdekortwiek.nl</a>"
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

export default {
  components: {
    KoppelSection,
    KoppelHero,
    KoppelCards,
    KoppelCard,
    BaseNotification,
    BarbersSection,
  },

  computed: {
    options() {
      return [
        {
          label: this.$t('prices.haircut'),
          duration: '40 min',
          price: '€32.50',
        },
        {
          label: this.$t('prices.haircutSidesRear'),
          duration: '30 min',
          price: '€17.50',
        },
        {
          label: this.$t('prices.haircutInSilence'),
          duration: '40 min',
          price: '€32.50',
        },
        {
          label: this.$t('prices.haircutChild'),
          duration: '40 min',
          price: '€20',
        },
        {
          label: this.$t('prices.buzzcut'),
          duration: '15 min',
          price: '€12,50',
        },
        {
          label: this.$t('prices.haircutBeardTrim'),
          duration: `1 ${this.$t('common.hour')}, 10 min`,
          price: '€42.50',
        },
        {
          label: this.$t('prices.beardtrim'),
          duration: '40 min',
          price: '€17,50',
        },
        {
          label: this.$t('prices.haircutAndShave'),
          duration: `1 ${this.$t('common.hour')}, 40 min`,
          price: '€45',
        },
        {
          label: this.$t('prices.shave'),
          duration: '50 min',
          price: '€25',
        },
        {
          label: this.$t('prices.headShave'),
          duration: '45 min',
          price: '€17.50',
        },
        {
          label: this.$t('prices.headShaveAndBeardTrim'),
          duration: `1 ${this.$t('common.hour')}, 25 min`,
          price: '€42.50',
        },
      ];
    },
  },
}
</script>
