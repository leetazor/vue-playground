<template>
  <hr>
  <h1>List Animation</h1>

  <button type="button" @click="addItem">Add</button>

<!-- Full list of Vue Animation classes: -->

    <!-- enter-from-class=""
    enter-active-class=""
    enter-to-class=""
    leave-from-class=""
    leave-active-class=""
    leave-to-class="" -->

    <!-- animate__animated, animate__flipInX and animate__flipOutX are from
     https://animate.style/ library
     animate__animated class will set some default styling for the animations,
     it's required whenever we want to use any animaions from the 'animated' library -->
  
  <TransitionGroup
    name="fade"
    tag="ul"
    enter-active-class="animate__animated animate__flipInX"
    leave-active-class="animate__animated animate__flipOutX"
  >
      <li v-for="(number, index) in numbers" :key="number"
        @click="removeItem(index)">
        {{ number }}
      </li>     
  </TransitionGroup> 

</template>

<script>
export default {
name: "ListAnimComp",
data() {
  return {
    numbers: [1,2,3,4,5]
  }
},
methods: {
  addItem() {
    // this expression will generate a random number between 1 and 100
    const num = Math.floor(Math.random() * 100 + 1);

    // this algoruthm will randomly select a number inside of the array
    const index = Math.floor(Math.random() * this.numbers.length);

    // this number will push a number into the array
    this.numbers.splice(index, 0, num);
  },
  removeItem(i) {
    //this method will remove the number the user clicked on
    this.numbers.splice(i, 1);
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

  .animate__flipOutX {
    position: absolute;    
  }

  .animate__animated {
    animation-duration: 1.5s;
  }

  li {
    font-size: 22px;
    cursor: pointer;
  }

  .fade-enter-from {
    opacity: 0;
  }
  .fade-enter-active {
    transition: all 1s linear;
  }

 .fade-leave-active {
    position: absolute;
  }

  .fade-leave-to {
    transition: all 1s linear;
    opacity: 0;
  }
  
  /* this class is applied to the elements that are moving
  when other elements appear or disappear off the page */
  .fade-move {
    transition: all 1s linear;
  }

</style>


