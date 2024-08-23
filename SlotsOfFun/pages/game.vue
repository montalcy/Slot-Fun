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

      
<!-- THIS IS FOR THE POP UP -->
   <div v-if="showModal" class="modal-overlay">
    <div class="modal" style="background-color: white;">
      <div :style="fontStyle" style="color:black; font-size: xx-large;">{{ resultMessage }}</div>
      <v-btn :style="fontStyle" style="color:black; margin-top: 5%;" @click="closeModal">
        Play Again!
      </v-btn>
    </div>
  </div>



    </main>
  </template>

  
  <script lang="ts" setup>
  import { ref, watch } from 'vue';
  import { useRouter } from 'vue-router';
  import { getRandomFruit, checkRandomFruit, fruits } from '~/scripts/spinRandom';
  import { resultValue } from '../scripts/sharedState';

  const fontStyle = {
    fontFamily: "'RetroSigned', sans-serif"
  };
  const router = useRouter();
  const randomFruit = ref('');
  const randomFruit2 = ref('');
  const randomFruit3 = ref('');
  const showModal = ref(false);
  
  function spin() {
      randomFruit.value = getRandomFruit();
      randomFruit2.value = getRandomFruit();
      randomFruit3.value = getRandomFruit();
      resultValue.value = checkRandomFruit(randomFruit.value, randomFruit2.value, randomFruit3.value);
     
  }

  function spinAndRoute(){
    spin();
       setTimeout(() => {
        showModal.value = true;
  }, 900); 
   
  }

// THIS IS FOR POPUP

const resultMessage = ref('');
function closeModal() {
showModal.value = !showModal.value;
}


function showResultMessage(res: boolean) {
  console.log('RESULTS : '+res);
    resultMessage.value = res ? "YOU'VE WON! :)" : "You've lost :(";
}

watch(resultValue, (newResult) => {
  console.log('New Value:', newResult);  
  showResultMessage(newResult);
}, { immediate: true });


  function toggleLightDark(){
    
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
 /* STYLE FOR POPUP */
  .modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5); /* Adjust opacity here (0 to 1) */}

.modal {
  text-align: center;
  height: 200px;
  width: 400px;
  margin-top: 20%;
  padding: 60px 0;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.8); /* Adjust opacity here (0 to 1) */

}
  </style>
  