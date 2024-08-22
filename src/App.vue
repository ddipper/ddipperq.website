<script setup>

</script>

<template>
  <header>
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
      <h3>time: 11:10:09 PM</h3>
    </div>
  </header>
  <router-view>
  </router-view>
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
      }
    }

  }

</style>
