<template>
    <div class="container">
      <div class="grid">
        <div class="square">🍒</div>
        <div class="square">🍋</div>
        <div class="square">🍌</div>
      </div>
    </div>
    <div :style="fontStyle" style="text-align-last: center; margin-top: 50px;">
        <v-btn >
            SPIN
        </v-btn>
        <v-btn style="margin-left: 20px;" @click="router.push('/')">
            HOME
        </v-btn>
    </div>
  </template>

<script lang="ts" setup>
const fontStyle = {
  fontFamily: "'RetroSigned', sans-serif"
}
import { useRouter } from 'vue-router';

const router = useRouter();
</script>
  
  <style>
  @font-face {
  font-family: 'RetroSigned';
  src: url('/fonts/RetroSigned-DYYY0.ttf') format('truetype');
}
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .grid {
    display: grid;
    grid-template-columns: repeat(3, 100px);
    gap: 60px;
  }
  
  .square {
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #838383;
    font-size: 40px;
  }
  </style>
  