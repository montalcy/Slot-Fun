<template>
  <div class="modal-overlay">
    <div class="modal" style="background-color: white;">
      <div :style="fontStyle" style="color:black; font-size: xx-large;">{{ resultMessage }}</div>
      <v-btn :style="fontStyle" style="color:black; margin-top: 5%;" @click="router.push('/game')">
        Play Again!
      </v-btn>
    </div>
  </div>
</template>


<script lang="ts" setup>
import { ref,watch} from 'vue';
import { useRouter } from 'vue-router';
import { resultValue } from './sharedState';

const fontStyle = {
  fontFamily: "'RetroSigned', sans-serif"
};
const router = useRouter();
const resultMessage = ref('');



function showResultMessage(res: boolean) {
  console.log('RESULTS : '+res);
    resultMessage.value = res ? "YOU'VE WON! :)" : "You've lost :(";
}

watch(resultValue, (newResult) => {
  console.log('New Value:', newResult);  // This logs the new value of resultValue
  showResultMessage(newResult);
}, { immediate: true });

</script>


<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #000000da;
}

.modal {
  text-align: center;
  height: 200px;
  width: 400px;
  margin-top: 20%;
  padding: 60px 0;
  border-radius: 20px;
}

</style>
