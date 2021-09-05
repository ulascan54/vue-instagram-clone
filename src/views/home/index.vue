<template>
  <div class="home">
    <div class="timeline">
      <Stories />
      <Post v-for="i in 15" :key="i" />
    </div>
    <div class="sidebar">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ipsam
        consequuntur, molestiae error quaerat minus nesciunt explicabo eos quod
        sed, voluptates omnis, quo velit consequatur est? Alias aliquid atque
        dolorem!
      </p>
    </div>
  </div>
</template>

<script>
import Post from "@/components/Post.vue";
import Stories from "@/components/Stories/index.vue";
export default {
  components: { Post, Stories },
  name: "Home",
};
</script>
<style scoped>
.home {
  max-width: 605px;
  margin-left: auto;
  margin-right: auto;
  @media (--t) {
    max-width: none;
    grid-template-columns: 1fr 295px;
    display: grid;
    grid-gap: 30px;
  }
}
.sidebar {
  display: none;
  @media (--t) {
    display: block;
  }
}
</style>
