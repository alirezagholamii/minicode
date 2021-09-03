<template>
  <p>
    {{ value }}
  </p>
</template>

<script>
export default {
  name: "SomeItem",
  props: {
    value: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
p {
  color: hsl(192, 44%, 78%);
  font-size: 2rem;
  min-width: 2.5rem;
  min-height: 2.5rem;
  background-color: hsl(330, 53%, 39%);
  border-radius: 50%;
}
</style>
