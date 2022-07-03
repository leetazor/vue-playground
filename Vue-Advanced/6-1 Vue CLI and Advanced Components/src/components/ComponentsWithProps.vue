<template>
<h3>Component with props</h3>

  <GreetingVue :age="age"   /> 
  <!-- if the 'age-change' event gets triggered from UserVue child component,
  the updateAge function will get executed. We've defined this fuction in 'methods'
  this function takes a number -->
  <!-- we're passing the function updateAgeCB down to the child compnent as a prop -->
  <UserVue :age="age" @age-change="updateAge" :updateAgeFn="updateAgeCB" /> 
</template>

<script>
import GreetingVue from './GreetingVue.vue';
import UserVue from './UserVue.vue';

export default {
  name: "ComponentsWithProps",
  components: {
     GreetingVue,
     UserVue
  },
  data() {
    return {
      age: 20
    }
  },
  methods: {
    // updating data with emitting event
    updateAge(num) {
      this.age += num;
    },
    // updating data with callback function
    // we're passing this function down to the child compnent
    updateAgeCB(num) {
      this.age += num;
    }
  }   
}
</script>

