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
      text-decoration: underline;
      background: linear-gradient(270deg, #FFA680, #8085FF, #74D483);
      background-size: 600% 600%;
      background-clip: text;
      color: transparent;
      animation: gradientAnimation 5s ease infinite;
      transition: .25s linear;
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

@keyframes gradientAnimation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@media all and (max-width: 1340px) {
  .nav-buttons{
    padding: 15px 20px 0 20px;
    h3, button{
      font-size: 1.25rem;
    }
  }
  .blinking-cursor {
    font-size: 1.25rem;
  }
}

@media all and (max-width: 850px){
  .nav-buttons{
    padding: 15px 15px 0 15px;
    h3, button{
      font-size: 1.15rem;
      line-height: 1.4;
    }
  }
  .blinking-cursor {
    font-size: 1.15rem;
  }
}
</style>