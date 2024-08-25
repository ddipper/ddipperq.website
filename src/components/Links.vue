<script>
import NavigationButtons from "@/components/models/NavigationButtons.vue";

export default {
  components: {NavigationButtons},
  data() {
    return {
      texts: [
        { fullText: "root@root", displayedText: "", currentIndex: 0 },
        { fullText: ":~$", displayedText: "", currentIndex: 0 },
        { fullText: "echo links", displayedText: "", currentIndex: 0 },
        { fullText: "socials", displayedText: "", currentIndex: 0 },
        { fullText: ":", displayedText: "", currentIndex: 0 },
        { fullText: "github", displayedText: "", currentIndex: 0 },
        { fullText: ":", displayedText: "", currentIndex: 0 },
        { fullText: "@ddipper", displayedText: "", currentIndex: 0 },
        { fullText: "discord", displayedText: "", currentIndex: 0 },
        { fullText: ":", displayedText: "", currentIndex: 0 },
        { fullText: "@ddipperq", displayedText: "", currentIndex: 0 },
        { fullText: "steam", displayedText: "", currentIndex: 0 },
        { fullText: ":", displayedText: "", currentIndex: 0 },
        { fullText: "@goddamn", displayedText: "", currentIndex: 0 },
        { fullText: "boosty", displayedText: "", currentIndex: 0 },
        { fullText: ":", displayedText: "", currentIndex: 0 },
        { fullText: "@ddipperq", displayedText: "", currentIndex: 0 },
        { fullText: "contact me", displayedText: "", currentIndex: 0 },
        { fullText: ":", displayedText: "", currentIndex: 0 },
        { fullText: "telegram", displayedText: "", currentIndex: 0 },
        { fullText: ":", displayedText: "", currentIndex: 0 },
        { fullText: "@ddipperq", displayedText: "", currentIndex: 0 },
        { fullText: "email", displayedText: "", currentIndex: 0 },
        { fullText: ":", displayedText: "", currentIndex: 0 },
        { fullText: "@ddipperq@proton.me", displayedText: "", currentIndex: 0 },
        { fullText: "root@root", displayedText: "", currentIndex: 0 },
        { fullText: ":~$", displayedText: "", currentIndex: 0 },
        { fullText: "echo buttons", displayedText: "", currentIndex: 0 }
      ],
      currentTextIndex: 0,
    };
  },
  mounted() {
    this.printText();
    this.getCurrentIndex();
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
    getCurrentIndex(){
      return this.currentTextIndex;
    }
  }
};
</script>

<template>
  <router-view>
    <h3>
      <span class="orange-color">{{ texts[0].displayedText }}</span><span class="purple-color">{{ texts[1].displayedText }}</span> <span class="green-color">{{ texts[2].displayedText }}</span><span v-if="currentTextIndex < 3" class="blinking-cursor">|</span>
    </h3>
    <h3 class="links-main-text">
     <span class="green-color">{{ texts[3].displayedText }}</span><span class="orange-color">{{texts[4].displayedText}}</span><span v-if="currentTextIndex > 2 && currentTextIndex < 5" class="blinking-cursor">|</span>
    </h3>
    <h3 class="links-main-text">
      <span class="purple-color">{{ texts[5].displayedText }}</span><span class="orange-color">{{texts[6].displayedText}}</span> <a href="https://github.com/ddipper" target="_blank"> {{texts[7].displayedText}} </a><span v-if="currentTextIndex > 4 && currentTextIndex < 8" class="blinking-cursor">|</span>
    </h3>
    <h3 class="links-main-text">
      <span class="purple-color">{{ texts[8].displayedText }}</span><span class="orange-color">{{texts[9].displayedText}}</span> <a href="https://discord.com/users/557826619952332801" target="_blank"> {{ texts[10].displayedText}} </a><span v-if="currentTextIndex > 7 && currentTextIndex < 11" class="blinking-cursor">|</span>
    </h3>
    <h3 class="links-main-text">
      <span class="purple-color">{{ texts[11].displayedText }}</span><span class="orange-color">{{texts[12].displayedText}}</span> <a href="https://steamcommunity.com/id/ddipperq/" target="_blank"> {{texts[13].displayedText}} </a><span v-if="currentTextIndex > 10 && currentTextIndex < 14" class="blinking-cursor">|</span>
    </h3>
    <h3 class="links-main-text">
      <span class="purple-color">{{ texts[14].displayedText }}</span><span class="orange-color">{{texts[15].displayedText}}</span> <a href="https://boosty.to/ddipperq" target="_blank"> {{texts[16].displayedText}} </a><span v-if="currentTextIndex > 13 && currentTextIndex < 17" class="blinking-cursor">|</span>
    </h3>
    <h3 class="links-main-text">
      <span class="green-color">{{ texts[17].displayedText }}</span><span class="orange-color">{{texts[18].displayedText}}</span><span v-if="currentTextIndex > 16 && currentTextIndex < 19" class="blinking-cursor">|</span>
    </h3>
    <h3 class="links-main-text">
      <span class="purple-color">{{ texts[19].displayedText }}</span><span class="orange-color">{{texts[20].displayedText}}</span> <a href="https://t.me/ddipperq" target="_blank"> {{texts[21].displayedText}} </a><span v-if="currentTextIndex > 18 && currentTextIndex < 22" class="blinking-cursor">|</span>
    </h3>
    <h3 class="links-main-text">
      <span class="purple-color">{{ texts[22].displayedText }}</span><span class="orange-color">{{texts[23].displayedText}}</span> <a href="mailto:ddipperq@proton.me" target="_blank"> {{texts[24].displayedText}} </a><span v-if="currentTextIndex > 21 && currentTextIndex < 25" class="blinking-cursor">|</span>
    </h3>
    <h3>
      <span class="orange-color">{{ texts[25].displayedText }}</span><span class="purple-color">{{ texts[26].displayedText }}</span> <span class="green-color">{{ texts[27].displayedText }}</span><span v-if="currentTextIndex > 24 && currentTextIndex < 28" class="blinking-cursor">|</span>
    </h3>
    <NavigationButtons :currentTextIndexProps="this.currentTextIndex"/>
  </router-view>
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
    &:nth-child(11){
      padding-top: 17px;
    }
  }

  a{
    color: $text-color;

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
    h3{
      font-size: 1.25rem;
      padding-left: 20px;

      &:nth-child(2){
        padding: 20px 0 15px 20px;
      }
      &:nth-child(11){
        padding-top: 15px;
      }
    }
    .blinking-cursor {
      font-size: 1.25rem;
    }
  }

  @media all and (max-width: 850px) {
    h3{
      font-size: 1.15rem;
      padding-left: 15px;
      line-height: 1.4;
      text-align: justify;

      &:nth-child(2){
        padding: 15px 0 15px 15px;
      }
      &:nth-child(11){
        padding-top: 15px;
      }
    }
    .blinking-cursor {
      font-size: 1.15rem;
    }
  }
</style>