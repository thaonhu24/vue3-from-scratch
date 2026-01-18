<template>
  <div class="hello">
    <h1>{{ message }}</h1>
    <p>Count: {{ count }}</p>
    <button @click="increment">Click me</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Hello from Vue!",
      count: 0,
    };
  },
  methods: {
    increment() {
      this.count++;
      console.log("Count is now:", this.count);
    },
  },
};
</script>

<style></style>
