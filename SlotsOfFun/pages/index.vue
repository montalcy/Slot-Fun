<template >
  <main style="background-color: black; height:100vh; width:100vw; align-content: center;">

    <div class="page-container">
      <div class="scrolling-content">
        <div class="money-line" style="text-align: center;">
          💰&emsp; 💰&emsp; 💰&emsp;💰&emsp;&emsp;💰💰&emsp; 💰
        </div>
        <div class="money-line" style="text-align: center;">
          💰&emsp; 💰&emsp; 💰&emsp; 💰&emsp; 💰&emsp;
      </div>
      <div class="money-line" style="text-align: right;">
        &emsp;&emsp;💰&emsp;&emsp;&emsp;💰💰&emsp;&emsp;&emsp;&emsp;💰
      </div>
    </div>
    <div class="scrolling-content" style="width: 100%;">
      <div class="money-line" style="text-align: center;">
        💰&emsp; 💰&emsp; 💰&emsp;💰&emsp;&emsp;💰💰&emsp; 💰
        💰&emsp; 💰&emsp; 💰&emsp;💰&emsp;&emsp;💰💰&emsp; 💰
      </div>
      <div class="money-line" style="text-align: center;">
        💰&emsp; 💰&emsp; 💰&emsp; 💰&emsp; 💰&emsp;
      </div>
      <div class="money-line" style="text-align: right;">
        &emsp;&emsp;💰&emsp;&emsp;&emsp;💰💰&emsp;&emsp;&emsp;&emsp;💰
      </div>
    </div>
    <div :style="fontStyle" style="font-size: xx-large; color: white;">🎰 Welcome to Slots of Fun 🎰</div>
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
</main>
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

.v-container {
  margin: 0 !important; /* Remove any unwanted margins */
  padding: 0 !important; /* Remove any unwanted padding */
  box-sizing: border-box; /* Ensure box-sizing is consistent */
}
.page-container {
  display: flex;
  background-color: black;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  white-space: nowrap;
  text-align: center;
  overflow: hidden; /* Hide overflow to ensure smooth animation */
}

.scrolling-content {
  display: flex;
  flex-direction: column;
  position:absolute;
  height: 100%;
  overflow: hidden; /* Hide overflowing content */
}

.money-line {
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
