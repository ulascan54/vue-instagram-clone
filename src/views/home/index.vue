<template>
  <div class="home">
    <h1>Home</h1>
    <CustomText> Merhaba Dünya </CustomText>
    <CustomText tag="p"> Merhaba Dünya </CustomText>
    <CustomText tag="b" size="xsmall"> Merhaba Dünya </CustomText>
    <IconHome width="60" height="60" />
  </div>
</template>

<script>
import CustomText from "@/components/CustomText";
export default {
  name: "Home",
  components: {
    CustomText,
  },
};
</script>
