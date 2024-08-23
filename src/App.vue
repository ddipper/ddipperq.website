<script>
import NavigationButtons from './components/models/NavigationButtons.vue';
import { ref, onMounted, onBeforeUnmount } from 'vue';

export default {
  setup() {
    const header = ref(null);
    const bodyContentHeight = ref('100vh');

    const adjustConsoleHeight = () => {
      if (header.value) {
        const headerHeight = header.value.offsetHeight;
        const headerMarginTop = parseFloat(getComputedStyle(header.value).marginTop);
        const headerMarginBottom = parseFloat(getComputedStyle(header.value).marginBottom);
        const totalHeaderHeight = headerHeight + headerMarginTop + headerMarginBottom;
        bodyContentHeight.value = `calc(100vh - ${totalHeaderHeight}px)`;
        console.log(bodyContentHeight.value);
      }
    };

    onMounted(() => {
      adjustConsoleHeight();
      window.addEventListener('resize', adjustConsoleHeight);
    });

    onBeforeUnmount(() => {
      window.removeEventListener('resize', adjustConsoleHeight);
    });

    return {
      header,
      bodyContentHeight,
    };
  },
  components: {
    NavigationButtons
  }
};
</script>

<template>
  <header ref="header">
    <div class="header-page-links">
      <router-link :to="{ name: 'Home' }">home</router-link>
      <router-link :to="{ name: 'About' }">about</router-link>
      <router-link :to="{ name: 'Contact' }">contact</router-link>
    </div>
    <div class="header-other-links">
      <a>ip</a>
      <h3><span class="purple-color">/</span></h3>
      <a>???</a>
    </div>
    <div class="header-time">
      <h3><span class="orange-color">time:</span> 11:10:09 PM</h3>
    </div>
  </header>
  <div class="body-content" :style="{ height: bodyContentHeight }">
    <div class="console">
      <div class="console-header">
        <div class="console-header-circles-group">
          <div class="console-header-circle"></div>
          <div class="console-header-circle"></div>
          <div class="console-header-circle"></div>
        </div>
        <h3 class="console-header-title">PAGE_TITLE</h3>
      </div>
      <router-view>
      </router-view>
      <NavigationButtons />
    </div>
  </div>
</template>

<style scoped lang="scss">
  @import './assets/colors';

  header{
    display: flex;
    justify-content: space-between;
    padding: 12px 20px 8px 20px;
    margin: 20px 20px 0 20px;
    border-radius: 10px;
    background-color: $header-color;
    color: $text-color;
    font-size: 1.25rem;
    font-weight: 400;

    a{
      color: $text-color;
      text-decoration: underline;
    }

    h3{
      font-size: 1.25rem;
      font-weight: 400;
    }

    .header-page-links{
      display: flex;
      gap: 20px;
    }

    .header-other-links{
      display: flex;
      gap: 5px;
      h3{
        margin-bottom: 3px;
        font-weight: bold;
      }
    }
  }

  .body-content {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .console {
      background-color: $console-color;
      width: 1300px;
      overflow: hidden;
      border-radius: 10px;
      height: 800px;

      .console-header{
        width: calc(100% - 32px);
        padding: 16px;
        background-color: $console-header-color;
        display: flex;

        .console-header-circles-group{
          display: flex;
          align-items: center;
          gap: 12px;

          .console-header-circle{
            width: 12px;
            height: 12px;
            border-radius: 50%;
          }
          .console-header-circle:nth-child(1){
            background-color: $orange-color;
          }
          .console-header-circle:nth-child(2){
            background-color: $purple-color;
          }
          .console-header-circle:nth-child(3){
            background-color: $green-color;
          }
        }

        .console-header-title{
          color: $text-color;
          font-size: 1.5rem;
          font-weight: 400;
          width: 100%;
          text-align: center;
          margin-right: 60px;
        }
      }
    }
  }

</style>
