<template>
  <header class="header">
    <div class="header__logo">
      <NuxtLink to="/">
        <NuxtImg :src="logo" />
      </NuxtLink>
    </div>
    <div class="header-actions">
      <nav class="nav">
        <ul class="nav__list">
          <li v-for="nav in navigation" :key="nav.name" class="nav__item">
            <NuxtLink :to="nav.href" class="nav__link">{{ nav.name }}</NuxtLink>
          </li>
        </ul>
      </nav>
      <div class="header__options">
        <div class="options__lang">
          <img :src="image" alt="lang" >
        </div>
        <div class="options__button">
          <div class="button button-large">Let’s work</div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const image = "/images/uk.svg";
const logo = "/images/logo.svg";

const navigation = ref([
  {
    name: "Works",
    href: "/",
  },
  {
    name: "About",
    href: "/",
  },
]);
</script>

<style lang="scss" scoped>
header.header {
  max-width: 1360px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 35px 40px;

  .header__logo {
    img {
        width: 84px;
        height: 25px;
    }
  }

  .header-actions {
    display: flex;
    gap: 91px;
    align-items: center;

    .nav {
      .nav__list {
        display: flex;
        gap: 58px;
        margin: 0;
        padding: 0;
      }

      @media (max-width: 642px) {
        .nav__list{
          gap: 32px;
        }
      }
    }

    .header__options {
      display: flex;
      gap: 16px;

      .options__lang {
        cursor: pointer;
        width: 52px;
        height: 52px;
        border-radius: 50%;
        border: 2px solid $light-gray;

        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }

  @media (max-width: 642px) {
    .header-actions{
      width: 100%;
      justify-content: space-between;
      gap: unset;
    }
    
  }
}

@media (max-width: 642px) {
  header.header {
    flex-direction: column;
    gap: 40px;
  }
}
</style>
