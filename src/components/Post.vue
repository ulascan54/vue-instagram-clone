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

    <div class="comment-list section">
      <div class="main-comment">
        <CustomText tag="b" class="title">ulascan54</CustomText>
        <CustomText>Fotoğraf benim içim yaşamtarzı</CustomText>
      </div>
      <div class="comment-count"><a href="#">919 yorumun tümünü gör</a></div>
      <div class="other-comments">
        <CustomText tag="b" class="title">kübra22</CustomText>
        <CustomText>Helal olsun sana be</CustomText>
        <button type="button"><IconLike width="12" height="12" /></button>
      </div>
      <div class="other-comments">
        <CustomText tag="b" class="title">vesves02</CustomText>
        <CustomText>kim bu kız ?</CustomText>
        <button type="button"><IconLike width="12" height="12" /></button>
      </div>
    </div>

    <div class="datetime section">
      <CustomText class="xxsmall">43 DAKİKA ÖNCE</CustomText>
    </div>
    <div class="comment-form section">
      <div class="emoji">
        <IconEmoji />
      </div>
      <div class="comment-input">
        <input type="text" placeholder="Yorum ekle..." />
      </div>
      <div class="share-text">
        <CustomText tag="b">Paylaş</CustomText>
      </div>
    </div>
  </div>
</template>
<script>
import CustomText from "@/components/CustomText.vue";
import IconMore from "@/icons/more.svg";
import IconLike from "@/icons/like.svg";
import IconComment from "@/icons/comment.svg";
import IconDirect from "@/icons/direct.svg";
import IconSave from "@/icons/save.svg";
import IconEmoji from "@/icons/emoji.svg";

export default {
  components: {
    CustomText,
    IconMore,
    IconLike,
    IconComment,
    IconDirect,
    IconSave,
    IconEmoji,
  },
};
</script>
<style scoped>
.post {
  border-radius: 3px;
  border: 1px solid rgb(var(--b6a));
  margin-bottom: 15px;
  background-color: white;
}
.section {
  padding-left: 16px;
  padding-right: 16px;
}
.header {
  height: 60px;
  display: flex;
  align-items: center;
}
.header-author {
  display: flex;
  align-items: center;
}
.header .header-author .header-author-info {
  margin-left: 8px;
}

.header .header-more {
  margin-left: auto;
}

.action-buttons {
  height: 45px;
  display: flex;
  align-items: center;
}
.action-buttons button {
  margin-right: 16px;
}
.action-buttons .action-save {
  margin-left: auto;
  margin-right: 0;
}
.comment-list .title {
  margin-right: 8px;
}
.comment-list .main-comment,
.comment-count,
.other-comments,
.datetime,
.comment-form {
  margin-top: 8px;
  display: flex;
}
.comment-count a,
.datetime {
  color: rgba(var(--f52), 1);
}
.datetime {
  margin-bottom: 4px;
}
.other-comments button {
  margin-left: auto;
}
.comment-form {
  display: none;
  @media (--t) {
    display: block;
    border-top: 1px solid rgb(var(--b6a));
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 16px;
    padding-bottom: 16px;
  }
}
.comment-form .comment-input {
  width: 80%;
}
.comment-form .comment-input input {
  width: 100%;
  height: 30px;
}
.comment-form .comment-input input:focus {
  outline: 0;
  background: none;
}
.comment-form .share-text {
  text-align: right;
}
.comment-form .share-text,
.comment-form .emoji {
  width: 10%;
}
.comment-form .share-text {
  color: rgb(var(--d69));
}
</style>
