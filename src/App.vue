<template>
  <MasterHeader />
  <main class="main">
    <Container>
      <router-view />
    </Container>
  </main>
</template>
<script>
import MasterHeader from "@/components/Header";
import Container from "./components/Container.vue";
export default {
  name: "app",
  components: {
    MasterHeader,
    Container,
  },
};
</script>
<style scoped>
.main {
  padding: 40px;
}
</style>
