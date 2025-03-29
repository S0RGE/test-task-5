<template>
  <div class="post-item">
    <div class="post-item__title">
      <h1>{{ post?.title }}</h1>
    </div>
    <div class="post-item__image">
      <NuxtImg
        v-slot="{ src, isLoaded, imgAttrs }"
        :src="postImage"
        alt="post-image"
        loading="lazy"
        :placeholder="[500, 300]"
        :custom="true"
        @error="handleError"
      >
        <img v-if="isLoaded" v-bind="imgAttrs" :src="src" >

        <img v-else src="/images/photo.png" alt="placeholder" >
      </NuxtImg>
    </div>
    <div class="post-item__content">
      <h6 class="content__title">About</h6>
      <div class="content__description">
        {{ post?.description }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { fetchPostById } from "~/api";

const route = useRoute();

const { data: post } = await useAsyncData(
  async () => await fetchPostById(route.params.id as string)
);

const baseImage = ref("");

const postImage = computed(() => baseImage.value || post.value.image);

const handleError = () => {
  baseImage.value = "/images/photo.png";
};
</script>

<style lang="scss">
.post-item {
  .post-item__image {
    margin-top: 73px;

    position: relative;
    overflow: hidden;
    max-width: 100%;
    height: auto;
    max-height: 700px;

    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      max-height: 700px;
      object-position: center;
    }
  }

  .post-item__content {
    margin-top: 80px;

    .content__title {
      font-weight: 400;
      font-size: 16px;
      line-height: 100%;
    }

    .content__description {
      margin-top: 32px;
      font-weight: 400;
      font-size: 36px;
      line-height: 124%;

      max-width: 55%;
    }
  }
}
</style>
