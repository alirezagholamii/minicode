<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <div class="list">
      <SomeItem v-for="item of items" :key="item" :value="item" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import SomeItem from "@/components/SomeItem.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    SomeItem,
  },
  data() {
    return {
      items: ["1", "2", "3", "4"],
    };
  },
};
</script>
<style scoped lang="scss">
.list {
  display: flex;
  justify-content: center;
  gap: 12px;
}
</style>
