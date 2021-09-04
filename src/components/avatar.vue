<template>
  <figure :class="bordernone">
    <img :src="src" :alt="alt" :width="size" :height="size" />
  </figure>
</template>
<script>
export default {
  name: "Avatar",
  props: {
    src: {
      type: String,
      default:
        "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.yediharika.com%2Fuploads%2Fposts%2F2014-10%2F1412346286_5.jpg&f=1&nofb=1",
    },
    alt: {
      type: String,
      default: "avatar",
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
