<template>
  <div class="nav-buttons">
    <button @click="prevPage">prev</button>
    <h3 class="purple-color">/</h3>
    <button @click="nextPage">next</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pages: ['Home', 'About', 'Contact'],
      currentIndex: 0
    };
  },
  methods: {
    nextPage() {
      this.currentIndex = (this.currentIndex + 1) % this.pages.length;
      this.$router.push({ name: this.pages[this.currentIndex] });
    },
    prevPage() {
      this.currentIndex = (this.currentIndex - 1 + this.pages.length) % this.pages.length;
      this.$router.push({ name: this.pages[this.currentIndex] });
    }
  }
};
</script>

<style scoped lang="scss">
.nav-buttons{
  display: flex;
  gap: 6px;
  align-items: center;

  button{
    background-color: transparent;
    border: none;
    font-family: 'JetBrains Mono', monospace;
    font-size: 1.4rem;
    font-weight: 400;
    text-decoration: underline;

    &:hover{
      cursor: pointer;
      opacity: 0.3;
      transition: .25s cubic-bezier(0,0,.2,1);
    }
    &:not(:hover){
      transition: .25s cubic-bezier(0,0,.2,1);
    }
  }
  h3{
    font-size: 1.4rem;
    font-weight: bold;
  }
}
</style>