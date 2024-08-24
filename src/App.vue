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
  mounted() {
    this.updateTime();
    setInterval(this.updateTime, 1000);
  },
  components: {
    NavigationButtons
  },
  data(){
    return{
      pages: ['Home', 'About', 'Contact'],
      formattedTime: '',
    }
  },
  methods: {
    isActive(route) {
      return this.$route.path === route;
    },
    getCurrentRouteName() {
      return this.$route.name;
    },
    getFormattedTime() {
      const options = {
        day: '2-digit',
        month: 'short',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      const now = new Date();
      return now.toLocaleString('en-US', options).replace(',', '');
    },
    updateTime() {
      this.formattedTime = this.getFormattedTime();
    }
  }
};
</script>

<template>
  <header ref="header">
    <div class="header-page-links">
      <router-link :to="{ name: 'Home' }" :class="{ active: isActive('/') }">home</router-link>
      <router-link :to="{ name: 'About' }" :class="{ active: isActive('/about') }">about</router-link>
      <router-link :to="{ name: 'Contact' }" :class="{ active: isActive('/contact') }">contact</router-link>
    </div>
    <div class="header-other-links">
      <a href="http://localhost:8080">ip</a>
      <h3><span class="purple-color">/</span></h3>
      <a>???</a>
    </div>
    <div class="header-time">
      <h3><span class="orange-color">time:</span> {{ formattedTime }}</h3>
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
        <h3 class="console-header-title">{{this.$route.name}}</h3>
      </div>
      <router-view>
      </router-view>
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

      .active {
        text-decoration: none;
        color: $orange-color;
        transition: ease-out .25s;
        pointer-events: none;
        cursor: none;
      }
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
        padding: 7.6px 16px;
        background-color: $console-header-color;
        display: flex;

        .console-header-circles-group{
          display: flex;
          align-items: center;
          justify-content: center;
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
