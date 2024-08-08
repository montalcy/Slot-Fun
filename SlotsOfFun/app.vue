<template>
  <NuxtLayout>
    <NuxtPage>
      <div>
        <h1 class="font" style="text-align: center;">Welcome to Slots of Fun</h1>
        <div class="text-center pa-16">
          
          <v-btn
          rounded
          variant="elevated"
            size="x-large"
            @click="dialog = true"
            style="
              font-weight: bold;
              color: greenyellow;
              background-color: orangered;
            "
          >
            <v-icon>mdi-play-circle-outline</v-icon>Let's Play
          </v-btn>
        </div>
      </div>
    </NuxtPage>
  </NuxtLayout>
</template>

<script></script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Nabla&display=swap");
.font {
  font-family: "Nabla";
}

.btn-style {
  font-weight: bold;
  color: yellowgreen;
  background-color: orangered;
}
</style>
