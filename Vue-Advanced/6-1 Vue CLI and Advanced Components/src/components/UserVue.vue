<template>

  <p>The user is {{ age }} years old</p>
  <p>Age doubled: {{ ageDoubled }} years old</p>

<!-- onClickAge function does 1 thing: it will emit change 'age-change' defined in methods for this component -->
  <button type="button" @click="onClickAge">Increase Age Event</button>  
   <button type="button" @click="updateAgeFn(3)">Increase Age CB</button>  
</template>

<script>
export default {
name: "UserVue",
props: {
  age: {
    // prop validation 
    type: Number,
    //required: true,
    // if we're using a 'default', we don't need 'required'.
    // we the type is object or array, the default must be a function, returning an obj or array
    //default: 20

// custom validator 
// must be a function, we pass it a value of the prop
// Validator functions run before the instance of the component is created
// therefore, we won't have access to the data, methods or computed inside of this component
    validator(value) {
      return value < 130
    }
  },
  // we can directly set the type like below,
  // instead of running a validation object, like we did with age above:
  updateAgeFn: Function
},
emits: ['age-change'],
computed: {
  ageDoubled() {
    //using 'this' keyword allows us to not change the value in the parent prop.
    // it allows us to grab the prop and create a new value out of it
    return this.age * 2;
  }
},
methods: {
  onClickAge() {
    // vue likes to name its function starting with a $
    // emitting an even allows us to change data located in the parent component
    // from a child component. 
    // only Parent components can listen to events from their children component
    // Any components that are using the UserVue component will be able
    // to listen to any custom events emitted from it
    // we can pass additional data to any listeners, like number 3 below
    this.$emit('age-change', 3);
  }
}
}
</script>

<style>

</style>