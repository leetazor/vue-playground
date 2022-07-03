<template>
  <hr>
  <h1>JS and CSS Animations</h1>
  <button type="button" @click="flag = !flag">Toggle</button>

  <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
      :css="true"
      name ="fade"
  >
    <h2  v-if="flag" key="main3" >Shenanigans</h2>
  </transition>

</template>

<script>
export default {
name: "CssJsAnimComp",
data(){
  return {
    flag: false
  }
},
methods: {
  beforeEnter(el) {
    console.log('before enter event fired', el);
  },
  enter(el) {
    console.log('enter event fired', el);
    // const animation = el.animate([{ transform: "scale3d(0,0,0)" }, {}], { duration: 1000 });    
    // animation.onfinish = () => { done(); } 
  },
  afterEnter(el) {
    console.log('after enter event fired', el);
  },
  beforeLeave(el) {
   console.log('before leave event fired', el);
  },
  leave(el) {
     console.log('leave event fired', el);
    // const animation = el.animate([{}, { transform: "scale3d(0,0,0)" }], { duration: 1000 });    
    // animation.onfinish = () => { done(); } 
  },
  afterLeave(el) {
   console.log('after leave event fired', el);
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
 
</style>