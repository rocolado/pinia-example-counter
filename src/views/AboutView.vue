<template>
  <div class="about">
    <h1>The About Counter</h1>

    <button class="buttons" @click="counterStore.increment">{{counterStore.counter}}</button>
  </div>
</template>

<script setup> 
  import {useCounterStore} from "../stores/counter";

  const counterStore = useCounterStore();
</script>

<style>
  .about {
    text-align: center;
    margin-top: 50px;
  }

  h1 {
    font-size: 20px;
  }

  .buttons {
    font-size: 16px;
    text-align: center;
    text-decoration: none;
    border: none;
    color: white;
    background-color: #252525;
    cursor: pointer;
    display: inline-block;
    padding: 15px 35px;
    margin: 10px;
  }

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
