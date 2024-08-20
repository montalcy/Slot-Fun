<template>
  <div class="page-container">
    <div class="scrolling-content">
      <div class="fruit-line" style="text-align: center;">
        💰&emsp; 💰&emsp; 💰&emsp;💰&emsp;&emsp;💰💰&emsp; 💰
      </div>
      <div class="fruit-line" style="text-align: center;">
        💰&emsp; 💰&emsp; 💰&emsp; 💰&emsp; 💰&emsp;
      </div>
      <div class="fruit-line" style="text-align: right;">
        &emsp;&emsp;💰&emsp;&emsp;&emsp;💰💰&emsp;&emsp;&emsp;&emsp;💰
      </div>
    </div>
    <div class="scrolling-content" style="width: 150%;">
      <div class="fruit-line" style="text-align: center;">
        💰&emsp; 💰&emsp; 💰&emsp;💰&emsp;&emsp;💰💰&emsp; 💰
        💰&emsp; 💰&emsp; 💰&emsp;💰&emsp;&emsp;💰💰&emsp; 💰
      </div>
      <div class="fruit-line" style="text-align: center;">
        💰&emsp; 💰&emsp; 💰&emsp; 💰&emsp; 💰&emsp;
      </div>
      <div class="fruit-line" style="text-align: right;">
        &emsp;&emsp;💰&emsp;&emsp;&emsp;💰💰&emsp;&emsp;&emsp;&emsp;💰
      </div>
    </div>
    <div :style="fontStyle" style="font-size: xx-large;">🎰 Welcome to Slots of Fun 🎰</div>
    <br /><br />
    <div class="button-container">
      <v-btn
      :style="fontStyle"
        style="
           "
          rounded
          variant="elevated"
          size="x-large"
          @click="router.push('/game')"
          class="btn-style"
        >
        <v-icon>mdi-play</v-icon> Let's Play
      </v-btn>
    </div>
  </div>
</template>

<script lang="ts" setup>
const fontStyle = {
  fontFamily: "'RetroSigned', sans-serif"

}
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<style>
@font-face {
  font-family: 'RetroSigned';
  src: url('/fonts/RetroSigned-DYYY0.ttf') format('truetype');
}
.page-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  overflow: hidden; /* Hide overflow to ensure smooth animation */
  position: relative;
}

.scrolling-content {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  overflow: hidden; /* Hide overflowing content */
}

.fruit-line {
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  font-size: 2rem; /* Adjust size as needed */
  animation: moveDown 10s linear infinite;
}

@keyframes moveDown {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(100%);
  }
}

.font {
  margin-top: 20px;
}

.button-container {
  margin-top: 20px;
}
</style>
