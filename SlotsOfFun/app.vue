<template>
  <NuxtLayout>
    <NuxtPage>
      <div class="page-container">
        <h1 class="font">🎰 Welcome to Slots of Fun 🎰</h1>
        <br /><br />
        <div class="button-container">
          <v-btn
          style="
              font-weight: bold;
              color: yellow;
              background-color: orangered;"
            rounded
            variant="elevated"
            size="x-large"
            @click="dialog = true"
            class="btn-style"
          >
            <v-icon>mdi-play</v-icon> Let's Play
          </v-btn>
        </div>
      </div>
    </NuxtPage>
  </NuxtLayout>
</template>

<script></script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Nabla&display=swap");

.page-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Full viewport height */
  text-align: center;
}

.font {
  font-family: "Nabla", sans-serif;
}

.button-container {
  margin-top: 16px; /* Adjust spacing if needed */
}

.btn-style {
  font-weight: bold;
  color: greenyellow;
  background-color: orangered;
}
</style>
