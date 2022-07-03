<template>
  <hr>
  <h1>JS Animations</h1>
  <button type="button" @click="flag = !flag">Toggle</button>
  <!-- if 'css' is set to 'false' - Vue will not apply animation classes to the element
  and will only use Java Script hooks -->
  <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
      :css="false"
  >

    <h2  v-if="flag" key="main3" >Yo00ooooooo</h2>
  </transition>

</template>

<script>
export default {
name: "JSAnimComponent",
data(){
  return {
    flag: false
  }
},
methods: {
  beforeEnter(el) {
    console.log('before enter event fired', el);
  },
  // the done function is a callback that will tell Vue that the animaion is finished playing
  enter(el, done) {
    const animation = el.animate([{ transform: "scale3d(0,0,0)" }, {}], {
      duration: 1000 //1000 ms
    });
    // 'onfinish' event gets emitted when animation is finished, the value must be a function
    animation.onfinish = () => {
      done();
    } 
  },
  afterEnter(el) {
    console.log('after enter event fired', el);
  },
  beforeLeave(el) {
   console.log('before leave event fired', el);
  },
  leave(el, done) {
    const animation = el.animate([{}, { transform: "scale3d(0,0,0)" }], {
      duration: 1000
    });    
    animation.onfinish = () => {
      done();
    } 
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