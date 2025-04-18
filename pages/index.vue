<template>
  <main>
    <h1 class="home-header">Articles</h1>
    <div class="cards-list">
      <AppCard
        v-for="card in paginatedPosts"
        :id="card.id"
        :key="card.id"
        :image="card.image"
        :description="card.preview"
      />
    </div>
    <PaginationComponent
      class="card-pagination"
      :total-pages="totalPages"
      :current-page="currentPage"
      @go-to-page="goToPage"
    />
  </main>
</template>

<script setup lang="ts">
import { storeToRefs } from "#imports";
import { usePostListStore } from "~/stores/PostList";
import { usePagination } from "~/composable/usePagination";

const listStore = usePostListStore();
const { getPostList } = listStore;
const { posts } = storeToRefs(listStore);

const { error } = await useAsyncData(() => getPostList());

if (error.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page not found",
  });
}

const paginatedPosts = computed(() =>
  posts.value?.slice(
    (currentPage.value - 1) * perPage.value,
    currentPage.value * perPage.value
  )
);

const { currentPage, perPage, totalPages, goToPage } = usePagination({
  itemsPerPage: 8,
  initialPage: 1,
  totalItems: posts.value?.length || 0,
});
</script>

<style lang="scss" scoped>
main {
  .home-header {
    margin-bottom: 60px;
  }
  .cards-list {
    margin-bottom: 60px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    row-gap: 33px;
    column-gap: 33px;

    @media (min-width: 768px) and (max-width: 991px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 760px) {
      grid-template-columns: 1fr;
      row-gap: 66px;
    }
  }

  .card-pagination {
    margin-bottom: 140px;
  }
}
</style>
