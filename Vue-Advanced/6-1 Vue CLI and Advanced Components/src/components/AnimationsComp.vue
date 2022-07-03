<template>
  <hr>
  <h1>Animations</h1>
  <button type="button" @click="flag = !flag">Toggle</button>

  <!-- mode 'out-in' means that elements leaving the document will be animated first.
  By default, mode set to 'in-out' -->
  <transition name="fade" mode="out-in">
    <h2 v-if="flag" key="main">Hello Word!</h2>
    <h2 v-else key="secondary">Another Hello</h2>
  </transition>

  <!-- 'type' will tell view whch duration to use for this animation -->
  <!-- 'appear' will make animation play on page load -->
  <transition name="zoom" type="animation"  appear>
    <h2  v-if="flag" key="main2" >Yo</h2>
  </transition>



</template>

<script>
export default {
name: "AnimationsComp",
data() {
  return {
    flag: false,
  }
}
}
</script>

<style>
  h2 {
    width: 400px;
    padding: 20px;
    margin: 20px;
  }

 .fade-enter-from {
   opacity: 0;
 }
 .fade-enter-active {
  transition: all 0.5s linear;
 }
 .fade-leave-to {
   transition: all 0.3s linear;
   opacity: 0;
 }

  .zoom-enter-from {
   opacity: 0;
 }

 .zoom-enter-active {
  animation: zoom-in 1s linear forwards;
  transition: all 5s linear;
 }

 .zoom-leave-active {
    animation: zoom-out 1s linear forwards;
    transition: all 5s linear;
 }

  .zoom-leave-to {
   opacity: 0;
 }


 @keyframes zoom-in {
  from {
    transform: scale(0,0);
  }
  to {
   transform: scale(1,1);
  }
 }

  @keyframes zoom-out {
  from {
    transform: scale(1,1);
  }
  to {
    transform: scale(0,0);
  }
 }



</style>