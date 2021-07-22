<template>
  <section :class="`content-section container ${ slice.variation }`">
    <prismic-rich-text :field="slice.primary.text"/>
    <prismic-link v-if="slice.primary.link" :field="slice.primary.link">My Link</prismic-link>
  </section>
</template>

<script>
export default {
  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },
}
</script>

<style scoped>
.default-slice {
  column-count: 1;
}
.twoColumn {
  column-count: 2;
}
</style>