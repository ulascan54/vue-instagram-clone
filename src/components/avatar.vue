<template>
  <figure :class="bordernone">
    <img :src="src" :alt="alt" :width="size" :height="size" />
  </figure>
</template>
<script>
export default {
  name: "avatar",
  props: {
    src: {
      type: String,
      default: "https://avatars.githubusercontent.com/u/39746408?v=4",
    },
    alt: {
      type: String,
    },
    size: {
      type: Number,
    },
    bordernone: {
      type: String,
      default: "avatar",
    },
  },
};
</script>
<style scoped>
.avatar {
  border-radius: 999px;
  padding: 2px;
  background: linear-gradient(
    219deg,
    rgba(184, 63, 140, 1) 0%,
    rgba(237, 158, 90, 1) 100%
  );
  display: inline-flex;
  img {
    border-radius: inherit;
    border: 2px solid white;
  }
}
.bordernone {
  padding: 0px;
  background: none;
  img {
    border: none;
  }
}
</style>
