<template>
  <div class="card">
    <div class="card__link">
      <NuxtLink
        :to="`/post/${id}`"
        >Read more</NuxtLink
      >
    </div>
    <div class="card__content">
      <div class="card__img">
        <NuxtImg
          v-slot="{ src, isLoaded, imgAttrs }"
          :src="image"
          alt="card-image"
          loading="lazy"
          :custom="true"
        >
          <img
            v-if="isLoaded"
            v-bind="imgAttrs"
            :src="src"
            class="card__img-element"
          >
          <img
            v-else
            src="/images/gray-background.jpg"
            alt="placeholder"
            class="card__img-element"
          >
        </NuxtImg>
      </div>
      <div class="card__description">
        {{ description }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
export interface ICard {
  image: string;
  description: string;
  id: string;
}

defineProps<ICard>();
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;

  &:hover .card__content {
    transform: translateY(-36px);
  }

  .card__content {
    transition: transform 0.9s ease;
    position: relative;
    width: 100%;
    height: 100%;

    .card__img {
      position: relative;
      overflow: hidden;
      aspect-ratio: 4/3;
      max-width: 100%;
      max-height: 100%;

      .card__img-element {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }
    }

    .card__description {
      margin-top: 34px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  .card__link {
    opacity: 0;
    visibility: hidden;
    position: absolute;
    bottom: 8px;
    left: 0;
    color: $light-violet;
    transition: all 0.7s ease-in-out;
  }

  .card__link:hover {
    color: $base-violet;
  }

  &:hover .card__link {
    opacity: 1;
    visibility: visible;
  }
}
</style>
