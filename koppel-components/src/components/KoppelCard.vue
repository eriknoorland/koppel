<template>
  <div class="card">
    <component
      v-bind:is="link ? 'a' : 'span'"
      v-bind:href="link"
      v-bind:target="target"
      rel="noopener noreferrer"
      class="card__link"
    >
      <div class="card__inner">
        <slot
          v-bind:className="'card__image'"
          name="image"
        />

        <div class="card__content">
          <h3 class="card__title">
            {{ title }}
          </h3>

          <p
            class="card__body"
            v-html="body"
          />
        </div>

        <div
          v-if="linkLabel"
          class="card__footer"
        >
          {{ linkLabel }}
        </div>
      </div>
    </component>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },

    body: {
      type: String,
      required: true,
    },

    link: {
      type: String,
      default: '',
    },

    linkLabel: {
      type: String,
      default: '',
    },

    target: {
      type: String,
      default: '_self',
    },
  },
}
</script>

<style lang="scss" scoped>
@import "../scss/lib";

.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.card {
  display: block;
  margin: 0 0 24px 0;
  background: #f0f0f0;

  .cards--2-columns & {
    width: 100%;

    @media(min-width: $xsmall) {
      width: calc(50% - 12px);
    }
  }

  .cards--4-columns & {
    width: calc(50% - 12px);

    @media(min-width: $xsmall) {
      width: calc(25% - 12px);
    }
  }
}

.card__link {
  display: block;
  height: 100%;
  text-decoration: none;
  color: inherit;
}

.card__inner {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.card__image {
  display: block;
  height: 175px;
  object-fit: cover;
}

.card__content {
  margin: 0 0 14px 0;
  padding: 14px 14px 0 14px;
  flex: 1 1 auto;
  align-self: stretch;

  &:not(:last-child) {
    margin: 0 0 20px 0;
  }
}

.card__title {
  margin: 0 0 20px 0;
  font-size: 15px;
  text-transform: uppercase;
  color: #000;
}

.card__body {
  a {
    color: inherit;
  }
}

.card__footer {
  display: flex;
  align-items: center;
  padding: 5px 14px;
  font-size: 10px;
  color: #000;
  transition: background .35s, color .35s;

  .card__link:hover & {
    background: #000;
    color: #fff;
  }
}
</style>