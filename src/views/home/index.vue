<template>
  <div class="home">
    <div class="timeline">
      <h1>Home</h1>
      <Post />
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
export default {
  components: { Post },
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
