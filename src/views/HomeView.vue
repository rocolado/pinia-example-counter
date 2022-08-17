<template>
  <main>
    <h1>Counter</h1>

    <div class="counter">{{counterStore.counter}}</div>

    <button class="buttons" @click="counterStore.decrement">-</button>
    <button class="buttons" @click="counterStore.increment">+</button>

    <p>This counter is {{counterStore.oddOrEven}}</p>
  </main>
</template>

<script setup>
  import {useCounterStore} from "../stores/counter";

  const counterStore = useCounterStore();
</script>

<style scoped>
  main {
    text-align: center;
    margin-top: 50px;
  }

  h1 {
    font-size: 20px;
    }

  .counter {
    font-size: 30px;
    color: #d60c0c;
    font-weight: 500;
    margin: 20px 0px;
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
    margin: 0px 10px;
  }

  .buttons:hover {
    background-color: #000000;
  }

  p {
    margin-top: 10px;
  }
</style>