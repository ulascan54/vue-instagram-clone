<template>
  <div class="stories-container">
    <div class="main-story">
      <button type="button">
        <Avatar :size="60" />
      </button>
      <div class="pluss-icon">
        <p>+</p>
      </div>
      <div>ulascan54</div>
    </div>
    <div class="other-story" v-for="i in 20" :key="i">
      <button type="button">
        <Avatar
          :size="60"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmaphotoportrait.fr%2F1391-thickbox_default%2Fseance-de-coaching-image-et-photo-de-profil-linkedin-et-cv.jpg&f=1&nofb=1"
        />
      </button>
      <div>otherusers</div>
    </div>
  </div>
</template>
<style scoped>
.stories-container {
  background-color: none;
  border: none;
  display: flex;
  max-width: 605px;
  height: 118px;
  margin-bottom: 24px;
  padding: 16px 8px;
  border-radius: 3px;
  overflow-y: hidden;
  scrollbar-width: none;
  align-items: stretch;
  @media (--t) {
    background-color: white;
    border: 1px solid rgb(var(--b6a));
  }
}
.stories-container::-webkit-scrollbar {
  display: none;
}
.main-story,
.other-story {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 16px;
  position: relative;
}
.main-story {
  display: flex;
  @media (--t) {
    display: none;
  }
}
.pluss-icon {
  position: absolute;
  background-color: rgb(var(--d69));
  width: 18px;
  height: 18px;
  text-align: center;
  line-height: 13px;
  border-radius: 999px;
  color: white;
  border: 1px solid white;
  left: 40px;
  bottom: 20px;
}
</style>
