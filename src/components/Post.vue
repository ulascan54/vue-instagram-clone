<template>
  <div class="post">
    <header class="header section">
      <div class="header-author">
        <Avatar :size="40" />
        <div class="header-author-info">
          <div>
            <CustomText tag="b">ulascan54</CustomText>
          </div>
          <div>
            <CustomText size="xsmall">Texas</CustomText>
          </div>
        </div>
      </div>
      <div class="header-more">
        <button type="button">
          <IconMore />
        </button>
      </div>
    </header>
    <div class="post-media">
      <img
        src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fmediatrend.mediamarkt.com.tr%2Fwp-content%2Fuploads%2F2017%2F06%2Ffoto_nasil_01.jpg&f=1&nofb=1"
        alt=""
      />
    </div>
    <div class="action-buttons section">
      <button type="button">
        <IconLike />
      </button>
      <button type="button">
        <IconComment />
      </button>
      <button type="button">
        <IconDirect />
      </button>
      <button class="action-save" type="button">
        <IconSave />
      </button>
    </div>

    <div class="view-count section">
      <CustomText tag="b">1345.beğenme</CustomText>
    </div>
    <div class="comme-list"></div>
    <div class="datetime"></div>
    <div class="comment-form"></div>
  </div>
</template>
<script>
import Avatar from "@/components/Avatar.vue";
import CustomText from "@/components/CustomText.vue";
import IconMore from "@/icons/more.svg";
import IconLike from "@/icons/like.svg";
import IconComment from "@/icons/comment.svg";
import IconDirect from "@/icons/direct.svg";
import IconSave from "@/icons/save.svg";
export default {
  components: {
    Avatar,
    CustomText,
    IconMore,
    IconLike,
    IconComment,
    IconDirect,
    IconSave,
  },
};
</script>
<style scoped>
.post {
  border-radius: 3px;
  border: 1px solid rgb(var(--b6a));
  margin-bottom: 15px;
}
.section {
  padding-left: 16px;
  padding-right: 16px;
}
.header {
  height: 60px;
  display: flex;
  align-items: center;
  &-author {
    display: flex;
    align-items: center;
    &-info {
      margin-left: 8px;
    }
  }

  &-more {
    margin-left: auto;
  }
}

.action-buttons {
  height: 45px;
  display: flex;
  align-items: center;
  button {
    margin-right: 16px;
  }
  .action-save {
    margin-left: auto;
    margin-right: 0;
  }
}
</style>
