<script>
import NavigationButtons from "@/components/models/NavigationButtons.vue";

export default {
  components: {NavigationButtons},
  data() {
    return {
      texts: [
        { fullText: "root@root", displayedText: "", currentIndex: 0 },
        { fullText: ":~$", displayedText: "", currentIndex: 0 },
        { fullText: "echo about", displayedText: "", currentIndex: 0 },
        { fullText: "location", displayedText: "", currentIndex: 0 },
        { fullText: ":", displayedText: "", currentIndex: 0 },
        { fullText: "Belarus, Minsk.", displayedText: "", currentIndex: 0 },
        { fullText: "front-end skills", displayedText: "", currentIndex: 0 },
        { fullText: ":", displayedText: "", currentIndex: 0 },
        { fullText: "html, css, sass, tailwindcss, vuejs, bootstrap.", displayedText: "", currentIndex: 0 },
        { fullText: "back-end skills", displayedText: "", currentIndex: 0 },
        { fullText: ":", displayedText: "", currentIndex: 0 },
        { fullText: ".net, javascript, typescript, c++, asp.net, nodejs, mysql, mssql, postgresql.", displayedText: "", currentIndex: 0 },
        { fullText: "other skills", displayedText: "", currentIndex: 0 },
        { fullText: ":", displayedText: "", currentIndex: 0 },
        { fullText: "unity, linux, figma, git, bash, docker, npm, vercel, vs, vscode, rider, webstorm.", displayedText: "", currentIndex: 0 },
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
    }
  }
};
</script>

<template>
  <h3>
    <span class="orange-color">{{ texts[0].displayedText }}</span><span class="purple-color">{{ texts[1].displayedText }}</span> <span class="green-color">{{ texts[2].displayedText }}</span><span v-if="currentTextIndex < 3" class="blinking-cursor">|</span>
  </h3>
  <h3 class="about-main-text">
    <span class="about-me-text"><span class="purple-color">{{ texts[3].displayedText }}</span><span class="orange-color">{{texts[4].displayedText}}</span> {{texts[5].displayedText}}</span><span v-if="currentTextIndex > 2 && currentTextIndex < 6" class="blinking-cursor">|</span>
  </h3>
  <h3 class="about-main-text">
    <span class="about-me-text"><span class="purple-color">{{ texts[6].displayedText }}</span><span class="orange-color">{{ texts[7].displayedText }}</span> {{ texts[8].displayedText }}</span><span v-if="currentTextIndex > 5 && currentTextIndex < 9" class="blinking-cursor">|</span>
  </h3>
  <h3 class="about-main-text">
    <span class="about-me-text"><span class="purple-color">{{ texts[9].displayedText }}</span><span class="orange-color">{{ texts[10].displayedText }}</span> {{texts[11].displayedText}}</span><span v-if="currentTextIndex > 8 && currentTextIndex < 12" class="blinking-cursor">|</span>
  </h3>
  <h3 class="about-main-text">
    <span class="about-me-text"><span class="purple-color">{{texts[12].displayedText}}</span><span class="orange-color">{{texts[13].displayedText}}</span> {{texts[14].displayedText}}</span><span v-if="currentTextIndex > 11 && currentTextIndex < 15" class="blinking-cursor">|</span>
  </h3>
  <h3>
    <span class="orange-color">{{ texts[15].displayedText }}</span><span class="purple-color">{{ texts[16].displayedText }}</span> <span class="green-color">{{ texts[17].displayedText }}</span><span v-if="currentTextIndex > 14 && currentTextIndex < 18" class="blinking-cursor">|</span>
  </h3>
  <NavigationButtons :currentTextIndexProps="this.currentTextIndex"/>
</template>

<style scoped lang="scss">
  @import '../assets/colors';

  .about-main-text {
    color: $text-color;
  }

  h3{
    font-family: 'JetBrains Mono', monospace;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 1.6;
    padding-left: 34px;

    &:nth-child(2){
      padding: 34px 0 17px 34px;
    }
    &:nth-child(7){
      padding-top: 17px;
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
      padding: 0 20px;
      text-align: justify;

      &:nth-child(2){
        padding: 20px 0 15px 20px;
      }
      &:nth-child(7){
        padding-top: 15px;
      }
    }
  }

  @media all and (max-width: 850px) {
    h3{
      font-size: 1.15rem;
      padding: 0 15px;
      text-align: justify;
      line-height: 1.4;

      &:nth-child(2){
        padding: 15px 0 15px 15px;
      }
      &:nth-child(7){
        padding-top: 15px;
      }
    }
  }
</style>