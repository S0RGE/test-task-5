<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__content">
        <div class="content__title">
          <div class="title__upper">Is there a project?</div>
          <div class="title__main">Let’s work together</div>
        </div>
        <div class="content__contact-info">
          <div class="contact-info__container">
            <div class="contact-info__main">
              <div class="location__title">For all questions</div>
              <div class="location__data">
                +7 (920) 278—00—68 <br >
                qtim@agency.com
              </div>
            </div>
            <div class="contact-info__locations">
              <div
                v-for="office in offices"
                :key="office.country"
                class="location"
              >
                <div class="location__title">
                  Office in {{ office.country }}
                </div>
                <div class="location__data">{{ office.address }}</div>
                <div class="location__icon">
                  <img :src="locationIcon" alt="location icon" >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer__actions">
        <div class="footer__social">
          <div class="social__inner">
            <NuxtLink to="#">Facebook</NuxtLink>
            <NuxtLink to="#">Instagram</NuxtLink>
            <NuxtLink to="#">Telegram</NuxtLink>
          </div>
          <div class="big-black-button">Go</div>
          <div class="social__inner">
            <NuxtLink to="#">Behance</NuxtLink>
            <NuxtLink to="#">Linkedin</NuxtLink>
            <NuxtLink to="#">Privacy Policy</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const locationIcon = "/images/location.svg";
const offices = [
  {
    country: "Russia",
    address: "139 Ruben Station Lake Drew, NM 52678",
  },
  {
    country: "Dubai",
    address: "139 Ruben Station Lake Drew, NM 52678",
  },
];
</script>

<style lang="scss" scoped>
footer.footer {
  height: 900px;
  background-color: $light-violet;
  padding-top: 140px;

  .container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .footer__content {
    height: 80%;
    display: flex;
    justify-content: space-between;

    .content__title {
      width: 50%;

      .title__upper {
        font-weight: 400;
        font-size: 16px;
        line-height: 120%;
        letter-spacing: 1%;
      }

      .title__main {
        font-weight: 400;
        font-size: 112px;
        line-height: 100%;

        margin-top: 56px;
        text-decoration: underline;
        text-decoration-thickness: 1px;
        text-underline-offset: 18px;
        text-decoration-color: $base-black;
      }
    }

    .content__contact-info {
      width: 50%;
      display: flex;

      justify-content: center;
      align-items: center;

      font-weight: 400;
      font-size: 16px;
      line-height: 120%;
      letter-spacing: 1%;

      .contact-info__container {
        max-width: 158px;
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 36px;
        align-items: center;
        justify-content: center;

        .contact-info__locations {
          display: flex;
          flex-direction: column;
          gap: 36px;
        }
      }
    }

    .location__title {
      margin-bottom: 12px;
    }

    .location__icon {
      margin-top: 8px;
      cursor: pointer;
    }
  }

  .footer__actions {
    position: relative;
    height: 20%;
    display: flex;
    flex-direction: column-reverse;
    padding-bottom: 30px;

    .footer__social {
      display: flex;
      justify-content: space-between;

      .social__inner {
        display: flex;
        gap: 32px;

        & > a {
          text-decoration: underline;
          text-decoration-thickness: 0.4px;
          text-underline-offset: 8px;
          text-decoration-color: $base-black;
        }
      }
    }

    .big-black-button {
      position: absolute;
      left: calc(50% - 179px);
      bottom: 0;

      display: flex;
      align-items: end;
      justify-content: center;

      width: 358px;
      height: 179px;
      padding-bottom: 25px;
      border-radius: 179px 179px 0 0;
      background-color: $base-black;
      color: $base-white;

      font-weight: 400;
      font-size: 32px;
      line-height: 100%;
      cursor: pointer;
    }
  }
}
</style>
