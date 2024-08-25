<script>
import NavigationButtons from "@/components/models/NavigationButtons.vue";

export default {
  components: {NavigationButtons},
  data() {
    return {
      texts: [
        { fullText: "root@root", displayedText: "", currentIndex: 0 },
        { fullText: ":~$", displayedText: "", currentIndex: 0 },
        { fullText: "echo home", displayedText: "", currentIndex: 0 },
        { fullText: "Hello! I’m Dmitry, a passionate and dedicated software developer with a strong background in web development. I have worked on various projects that have allowed me to develop a deep understanding of different programming languages and frameworks.", displayedText: "", currentIndex: 0 },
        { fullText: "root@root", displayedText: "", currentIndex: 0 },
        { fullText: ":~$", displayedText: "", currentIndex: 0 },
        { fullText: "echo buttons", displayedText: "", currentIndex: 0 }
      ],
      currentTextIndex: 0,
    };
  },
  mounted() {
    this.printText();
  },
  methods: {
    printText() {
      if (this.currentTextIndex < this.texts.length) {
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
    },
  }
};
</script>

<template>
  <router-view>
    <h3>
      <span class="orange-color">{{ texts[0].displayedText }}</span><span class="purple-color">{{ texts[1].displayedText }}</span> <span class="green-color">{{ texts[2].displayedText }}</span><span v-if="currentTextIndex < 3" class="blinking-cursor">|</span>
    </h3>
    <h3 class="home-main-text">{{ texts[3].displayedText }}<span v-if="currentTextIndex < 4 && currentTextIndex > 2" class="blinking-cursor">|</span></h3>
    <h3>
      <span class="orange-color">{{ texts[4].displayedText }}</span><span class="purple-color">{{ texts[5].displayedText }}</span> <span class="green-color">{{ texts[6].displayedText }}</span><span v-if="currentTextIndex > 3 && currentTextIndex < 7" class="blinking-cursor">|</span>
    </h3>
    <NavigationButtons :currentTextIndexProps="this.currentTextIndex"/>
  </router-view>
</template>

<style scoped lang="scss">
  @import '../assets/colors';

  .home-page{
    display: flex;
    flex-direction: column;
    gap: 34px;

  }

  .home-main-text {
    color: $text-color;
  }

  h3{
    font-family: 'JetBrains Mono', monospace;
    font-weight: 400;
    font-size: 1.4rem;
    padding: 17px 34px 0 34px;
    line-height: 1.6;
    text-align: justify;

    &:nth-child(2){
      padding-top: 34px;
    }
  }

  .blinking-cursor {
    font-weight: 600;
    font-size: 1.4rem;
    color: $text-color;
    animation: 0.75s blink step-end infinite;
  }

  @keyframes blink {
    from, to {
      color: transparent;
    }
    50% {
      color: $text-color;
    }
  }

  @media all and (max-width: 1340px) {
    h3{
      font-size: 1.25rem;
      padding: 0 20px 0 20px;

      &:nth-child(2){
        padding: 20px 20px 15px 20px;
      }
      &:nth-child(4){
        padding-top: 15px;
      }
    }
    .blinking-cursor {
      font-size: 1.25rem;
    }
  }

  @media all and (max-width: 850px){
    h3{
      font-size: 1.15rem;
      padding: 0 15px 0 15px;
      line-height: 1.4;

      &:nth-child(2){
        padding: 15px 15px 15px 15px;
      }
      &:nth-child(4){
        padding-top: 15px;
      }
    }
    .blinking-cursor {
      font-size: 1.15rem;
    }
  }
</style>