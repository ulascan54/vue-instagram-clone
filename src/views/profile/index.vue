<template>
  <div class="home">
    <CustomText tag="h1">Profile</CustomText>
  </div>
  <router-link to="/profile">Post</router-link> |
  <router-link to="/profile/igtv">IGTV</router-link> |
  <router-link to="/profile/save">Save</router-link> |
  <router-link to="/profile/tag">Tag</router-link> |
  <router-view></router-view>
</template>

<script>
import CustomText from "@/components/CustomText";
export default {
  name: "Profile",
  components: {
    CustomText,
  },
};
</script>
