<template>
    <main style="background-color: black; height:100vh; width:100vw; align-content: center;">
      <div class="container">
        <div class="grid">
          <div class="square">{{ randomFruit }}</div>
          <div class="square">{{ randomFruit2 }}</div>
          <div class="square">{{ randomFruit3 }}</div>
        </div>
      </div>
      <div :style="fontStyle" style="text-align-last: center; margin-top: 50px;">
        <v-btn @click="spinAndRoute">
          SPIN
        </v-btn>
        <v-btn style="margin-left: 20px;" @click="router.push('/')">
          HOME
        </v-btn>
      </div>
    </main>
  </template>

  
  <script lang="ts" setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import { getRandomFruit, checkRandomFruit, fruits } from '~/scripts/spinRandom';
  import { resultValue } from './sharedState';

  const fontStyle = {
    fontFamily: "'RetroSigned', sans-serif"
  };
  const router = useRouter();
  const randomFruit = ref('');
  const randomFruit2 = ref('');
  const randomFruit3 = ref('');
  
  function spin() {
      randomFruit.value = getRandomFruit();
      randomFruit2.value = getRandomFruit();
      randomFruit3.value = getRandomFruit();
      if (!checkRandomFruit(randomFruit.value, randomFruit2.value, randomFruit3.value)) {
        console.log('try again!');
        resultValue.value = false;
      }
      if (checkRandomFruit(randomFruit.value, randomFruit2.value, randomFruit3.value)) {
        console.log('you won!');
        resultValue.value = true;
      }   
  }

  function spinAndRoute(){
    spin();
       setTimeout(() => {
      router.push('/results');
  }, 700); 
   
  }
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
    background-color: black;
  }
  
  .grid {
    display: grid;
    grid-template-columns: repeat(3, 100px);
    gap: 60px;
    background-color: black;
  }
  
  .square {
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #838383;
    font-size: 40px;
    background-color: black;
  }
  </style>
  