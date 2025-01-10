<template>
  <div class="bookSection">
    <h2 class="bookSection__title heading1">
      {{ $t('book.title') }}
    </h2>

    <div class="bookSection__barbers">
      <div
        v-for="(barber, index) in barbers"
        v-bind:key="index"
        class="bookSection__barber"
      >
        <div class="bookSection__barberTitle">
          {{ $t('book.openingHoursTitle') }}
        </div>

        <span class="is-visible-sm">
          {{ $t('book.openingHoursWeekdaysDesktop', { hours: barber.openingHoursWeekdays }) }}<br />
          {{ $t('book.openingHoursWeekendDesktop', { hours: barber.openingHoursWeekend }) }}
        </span>

        <span class="is-hidden-sm">
          {{ $t('book.openingHoursWeekdaysMobile', { hours: barber.openingHoursWeekdays }) }}<br />
          {{ $t('book.openingHoursWeekendMobile', { hours: barber.openingHoursWeekend }) }}
        </span>

        <br />

        <koppel-button v-bind:href="`https://bookings.gettimely.com/${barber.bookings}/bb/book`">
          {{ $t('book.barberButton', { name: barber.name }) }}
        </koppel-button>
      </div>
    </div>
  </div>
</template>

<script>
import KoppelButton from 'koppel-components/src/components/KoppelButton';

export default {
  components: {
    KoppelButton,
  },

  data() {
    return {
      barbers: [
        {
          name: 'Isa',
          bookings: 'koppelbarbershop1',
          openingHoursWeekdays: '10.00 - 19.00',
          openingHoursWeekend: '09.00 - 16.00',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.bookSection__title {
  text-align: center;
}

.bookSection__barbers {
  display: flex;
  gap: 12px;
  justify-content: center;
}

.bookSection__barber {
  flex: 0 1 50%;
  padding: 12px;
  background: #f0f0f0;
  border-radius: 10px;

  @media(min-width: 768px) {
    padding: 20px;
  }
}

.bookSection__barberTitle {
  margin: 0 0 8px 0;
  font-size: 1.1em;
  color: #000;
}
</style>