<template>
  <div class="home">
    <div class="timeline">
      <h1>Home</h1>
      <CustomText> Merhaba Dünya </CustomText>
      <CustomText tag="p"> Merhaba Dünya </CustomText>
      <CustomText tag="b" size="xsmall"> Merhaba Dünya </CustomText>
      <IconHome width="60" height="60" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ipsam
        consequuntur, molestiae error quaerat minus nesciunt explicabo eos quod
        sed, voluptates omnis, quo velit consequatur est? Alias aliquid atque
        dolorem!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ipsam
        consequuntur, molestiae error quaerat minus nesciunt explicabo eos quod
        sed, voluptates omnis, quo velit consequatur est? Alias aliquid atque
        dolorem!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ipsam
        consequuntur, molestiae error quaerat minus nesciunt explicabo eos quod
        sed, voluptates omnis, quo velit consequatur est? Alias aliquid atque
        dolorem!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ipsam
        consequuntur, molestiae error quaerat minus nesciunt explicabo eos quod
        sed, voluptates omnis, quo velit consequatur est? Alias aliquid atque
        dolorem!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ipsam
        consequuntur, molestiae error quaerat minus nesciunt explicabo eos quod
        sed, voluptates omnis, quo velit consequatur est? Alias aliquid atque
        dolorem!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ipsam
        consequuntur, molestiae error quaerat minus nesciunt explicabo eos quod
        sed, voluptates omnis, quo velit consequatur est? Alias aliquid atque
        dolorem!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ipsam
        consequuntur, molestiae error quaerat minus nesciunt explicabo eos quod
        sed, voluptates omnis, quo velit consequatur est? Alias aliquid atque
        dolorem!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ipsam
        consequuntur, molestiae error quaerat minus nesciunt explicabo eos quod
        sed, voluptates omnis, quo velit consequatur est? Alias aliquid atque
        dolorem!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ipsam
        consequuntur, molestiae error quaerat minus nesciunt explicabo eos quod
        sed, voluptates omnis, quo velit consequatur est? Alias aliquid atque
        dolorem!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ipsam
        consequuntur, molestiae error quaerat minus nesciunt explicabo eos quod
        sed, voluptates omnis, quo velit consequatur est? Alias aliquid atque
        dolorem!
      </p>
    </div>
    <div class="sidebar">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ipsam
        consequuntur, molestiae error quaerat minus nesciunt explicabo eos quod
        sed, voluptates omnis, quo velit consequatur est? Alias aliquid atque
        dolorem!
      </p>
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
import CustomText from "@/components/CustomText";
export default {
  name: "Home",
  components: {
    CustomText,
  },
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
