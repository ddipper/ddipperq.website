<template>
  <div class="nav-buttons">
    <button @click="prevPage">{{ texts[0].displayedText }}</button>
    <h3 class="purple-color">{{texts[1].displayedText}}</h3>
    <button @click="nextPage">{{ texts[2].displayedText }}</button>
    <span v-if="currentTextIndexProps > neededIndex[this.$route.name]" class="blinking-cursor">|</span>
  </div>
</template>

<script>
export default {
  watch: {
    currentTextIndexProps() {
      this.printText();
    }
  },
  props: {
    currentTextIndexProps: Number
  },
  data() {
    return {
      texts: [
        { fullText: "prev", displayedText: "", currentIndex: 0 },
        { fullText: "/", displayedText: "", currentIndex: 0 },
        { fullText: "next", displayedText: "", currentIndex: 0 },
      ],
      neededIndex: {"Home": 6, "About": 17, "Links": 27},
      currentTextIndex: 0,
      routes: ['/', '/about', '/links'],
      currentIndex: 0
    };
  },
  methods: {
    updateCurrentIndex() {
      this.currentIndex = this.routes.indexOf(this.$route.path);
    },
    nextPage() {
      this.updateCurrentIndex();
      this.currentIndex = (this.currentIndex + 1) % this.routes.length;
      this.$router.push({ path: this.routes[this.currentIndex] });
      console.log(this.currentTextIndexProps);
    },
    prevPage() {
      this.updateCurrentIndex();
      this.currentIndex = (this.currentIndex - 1 + this.routes.length) % this.routes.length;
      this.$router.push({ path: this.routes[this.currentIndex] });
    },
    printText() {
      if (this.currentTextIndex < this.texts.length && this.currentTextIndexProps > this.neededIndex[this.$route.name] ) {
        let text = this.texts[this.currentTextIndex];
        if (text.currentIndex < text.fullText.length) {
          text.displayedText += text.fullText[text.currentIndex];
          text.currentIndex++;
          setTimeout(this.printText.bind(this), 30);
        } else {
          this.currentTextIndex++;
          if (this.currentTextIndex < this.texts.length) {
            setTimeout(this.printText.bind(this), 30);
          }
        }
      }
    }
  },
  mounted() {
    this.updateCurrentIndex();
    this.printText();
  }

};
</script>

<style scoped lang="scss">
.nav-buttons{
  display: flex;
  gap: 6px;
  align-items: center;
  padding: 17px 34px 0 34px;

  button{
    background-color: transparent;
    border: none;
    font-family: 'JetBrains Mono', monospace;
    font-size: 1.4rem;
    font-weight: 400;
    text-decoration: underline;
    line-height: 1.6;

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

.blinking-cursor {
  font-weight: 600;
  font-size: 1.4rem;
  color: #FFFFFFFF;
  animation: 0.75s blink step-end infinite;
}

@keyframes blink {
  from, to {
    color: transparent;
  }
  50% {
    color: #FFFFFFFF;
  }
}
</style>