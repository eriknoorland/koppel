<template>
  <Layout>
    <koppel-section>
      <div>
        <g-image
          src="~/assets/img/koppel_barbershop.jpg"
          alt="Koppel Barbershop"
          style="display: block; margin: 0 auto; width: 240px;"
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
        Welkom bij Koppel Barbershop
      </h1>

      <p class="justify">
        Met haar schat aan ervaring, werkende voor verschillende barbershops en kapperszaken in Rotterdam, Amsterdam en Utrecht, zijn we erg blij om Isa in onze Koppel Barbershop te zien doen wat ze het beste doet: Het knippen, stylen en scheren van mannen. Als een van de eerste vrouwlijke barbers in Nederland weet ze haar mannetje te staan en ze is zeer toegeweid om de perfecte klassieke coupe in een relaxte omgeving te creëren. Daarnaast verkoopt ze in de shop een aantal fijne producten om er na de knipbeurt perfect uit te blijven zien. Wacht niet en maak een afspraak met Isa door hier beneden op de knop te klikken en je afspraak online inplannen.
      </p>
    </koppel-section>

    <koppel-section modifiers="section">
      <div style="text-align: center;">
        <h2 class="heading1">
          Tarieven en afspraak maken
        </h2>
      </div>

      <table>
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

      <p class="center" style="margin: 0 0 20px 0;">
        <span class="is-visible-sm">
          Dinsdag t/m vrijdag geopend van 11:00 - 19:00 uur.<br />
          Zaterdag geopend van 09:00 - 17:00 uur.
        </span>

        <span class="is-hidden-sm">
          di t/m vr geopend van 11:00 - 19:00 uur.<br />
          za geopend van 09:00 - 17:00 uur.
        </span>
      </p>

      <div style="text-align: center;">
        <koppel-button href="https://bookings.gettimely.com/koppelbarbershop1/bb/book">
          Plan je afspraak online
        </koppel-button>
      </div>
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
          title="Contact"
          body="Koppel Barbershop is tegenover onze Koppel Bikeshop gevestigd in de oude Prodent fabriek, onderdeel van de Nieuwe Stad in Amersfoort. Wil je langs komen? Boek dan een afspraak met Isa, voor vragen kun je mailen met het adres hier onder.<br /><br /><a href='https://instagram.com/koppel_barbershop' target='_blank' rel='noopener noreferrer'>Instagram</a><br /><a href='tel:0618924989'>Tel: 06 18 92 49 89</a><br /><a href='mailto:info@koppel-barbershop.nl'>E-mail: info@koppel-barbershop.nl</a>"
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
          title="Kom langs (op afspraak)"
          body="di t/m vrij geopend van 11:00 - 19:00 uur<br />za geopend van 09:00 - 17:00 uur<br /><br />Koppel Barbershop<br />Oude Fabriekstraat 14<br />3812 NR Amersfoort"
        >
          <template v-slot:image="slotProps">
            <g-image
              src="~/assets/img/shop-location.jpg"
              alt="Koppel Barbershop Locatie"
              v-bind:class="slotProps.className"
            />
          </template>
        </koppel-card>

        <koppel-card
          link="https://www.koppel-frameworks.nl"
          linkLabel="KOPPEL-FRAMEWORKS.NL"
          target="_blank"
          title="Koppel Frameworks"
          body="Om het vak van framebouwer echt te begrijpen kun je maar een ding doen: Frames bouwen! We zijn op bezoek geweest bij enkele van europa's beste framebouwers om het vak te leren en doorgronden. Deze ervaring, samen met onze opgedane kennis van geometrieen en bikefitting, heeft ons doen besluiten om zelf frames te gaan bouwen onder de naam Koppel. Custom frames van staal en titanium."
        >
          <template v-slot:image="slotProps">
            <g-image
              src="~/assets/img/frameworks_bij_barbershop2.jpg"
              alt="Koppel Frameworks"
              v-bind:class="slotProps.className"
            />
          </template>
        </koppel-card>

        <koppel-card
          link="https://www.koppel-bikeshop.nl"
          linkLabel="KOPPEL-BIKESHOP.NL"
          target="_blank"
          title="Koppel Bikeshop"
          body="Naast de Barbershop hebben we aan de overkant van de straat natuurlijk nog de gelijknamige Bikeshop. Begonnen als werkplaats en uitgegroeid tot een complete winkel gespecialiseerd in racefietsen en gravelbikes. Daarnaast hebben we ons ontwikkeld in het bikefitten. In de loop der jaren is er een duidelijke en unieke visie ontstaan die zich eerst op de renner/renster richt en pas daarna op het materiaal."
        >
          <template v-slot:image="slotProps">
            <g-image
              src="~/assets/img/bikeshop_bw.jpg"
              alt="Koppel BarbersBikeshop"
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
import KoppelButton from 'koppel-components/src/components/KoppelButton';

export default {
  components: {
    KoppelSection,
    KoppelHero,
    KoppelCards,
    KoppelCard,
    KoppelButton,
  },

  data() {
    return {
      options: [
        {
          label: 'Knippen',
          duration: '40 min',
          price: '€32.50',
        },
        {
          label: 'Enkel zij & achterkant bijwerken',
          duration: '30 min',
          price: '€17.50',
        },
        {
          label: 'Knippen in stilte',
          duration: '40 min',
          price: '€32.50',
        },
        {
          label: 'Knippen kind (8 t/m 12 jaar)',
          duration: '40 min',
          price: '€20',
        },
        {
          label: 'Buzzcut',
          duration: '15 min',
          price: '€12,50',
        },
        {
          label: 'Knippen & baard trim',
          duration: '1 uur, 10 min',
          price: '€42.50',
        },
        {
          label: 'Baard trim',
          duration: '40 min',
          price: '€17,50',
        },
        {
          label: 'Knippen & scheren',
          duration: '1 uur, 40 min',
          price: '€45',
        },
        {
          label: 'Scheren',
          duration: '50 min',
          price: '€25',
        },
        {
          label: 'Hoofd scheren',
          duration: '45 min',
          price: '€17.50',
        },
        {
          label: 'Hoofd scheren & baard trim',
          duration: '1 uur, 25 min',
          price: '€42.50',
        },
      ],
    };
  },
}
</script>
