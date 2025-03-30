<template>
  <div v-if="!isMobile" class="pagination">
    <div v-show="hasPrev" class="button-pagination button-prev" @click="prev(false)">
      <svg
        width="8"
        height="13"
        viewBox="0 0 8 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.5 1.5L6.5 6.5L1.5 11.5"
          stroke="#494949"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
    <span v-for="page in totalPages" :key="page">
      <div
        class="button-pagination"
        :class="{ active: currentPage === page }"
        @click="onGoToPage(page)"
      >
        {{ page }}
      </div>
    </span>
    <div v-show="hasNext" class="button-pagination button-next" @click="next(false)">
      <svg
        width="8"
        height="13"
        viewBox="0 0 8 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.5 1.5L6.5 6.5L1.5 11.5"
          stroke="#494949"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  </div>
  <div v-else class="pagination">
    <div v-if="hasNext" class="button" @click="prev(true)">Prev</div>
    <div v-if="hasNext" class="button" @click="next(true)">Next</div>
  </div>
</template>

<script setup lang="ts">
import { useAdaptive } from "~/composable/useAdaptive";

const { isMobile } = useAdaptive();

export interface IProps {
  totalPages: number;
  currentPage: number;
}

const props = defineProps<IProps>();

const emit = defineEmits({
  goToPage: (page: number) => page,
});

const hasNext = computed(() => props.currentPage < props.totalPages);
const hasPrev = computed(() => props.currentPage > 1);

const prev = (isGoUp?: boolean) => {
  if (hasPrev.value) {
    emit("goToPage", props.currentPage - 1);
  }
  if (isGoUp) {
    scrollToTop();
  }
};

const next = (isGoUp?: boolean) => {
  if (hasNext.value) {
    emit("goToPage", props.currentPage + 1);
  }
  if (isGoUp) {
    scrollToTop();
  }
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const onGoToPage = (page: number) => {
  emit("goToPage", page);
};
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 20px 0;
  .button-pagination {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 44px;
    height: 44px;
    cursor: pointer;
    border: 1px solid #ccc;
    background-color: $light-gray;
    color: $base-black;
    border-radius: 12px;

    transition: background-color 0.3s ease;

    &:hover {
      background-color: #ccc;
    }
    &.active {
      color: $light-gray;
      background-color: $base-black;
    }
  }

  .button-prev {
    transform: rotate(180deg);
  }
}
</style>
