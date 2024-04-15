<script setup>
const props = defineProps({
  size: {
    type: [Number, String],
    default: 18
  }
})
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 512 512"
    :height="props.size"
    :width="props.size"
  >
    <path
      d="M464 352H48c-26.5 0-48 21.5-48 48v32c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48v-32c0-26.5-21.5-48-48-48z"
      fill="currentColor"
    ></path>
  </svg>
</template>

<style lang="scss" scoped></style>
