<template>
  <p v-if="age > 25">{{msg}}</p>
  <p v-else >You must be 25 years or older to view this message</p>
</template>

<script>
export default {
 name: "GreetingVue",
  data() {
    return {
      msg: "Hello World!"
    }
  },
  props: ["age"]
};
</script>

<style scoped lang="scss">
$color: red;

p {
  color: $color;
}
</style>