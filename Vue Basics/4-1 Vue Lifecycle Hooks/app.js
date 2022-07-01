let vm = Vue.createApp({
  data() {
    return {
      message: "Hello world!"
    }
  },
  beforeCreate() {
    console.log('beforeCreate() function called!', this.message);
  },
  created() {
    console.log('created() function called!', this.message);
  },
  beforeMount() {
    // $el is the element vue has been mounted to
    console.log('beforeMount() function called!', this.$el);
  },
  mounted() {
    console.log('mounted() function called!', this.$el);
  },
  beforeUpdate() {
    //this is triggered whenever update in our data occurs, 
    // before these changes are applied to the template
    // we don't have access to which property was updated
    console.log('beforeUpdate() function called!');
  },
  updated() {
    console.log('updated() function called!');
  },
  beforeUnmount() {
    console.log('beforeUnmount() function called!');
  },
  unmounted() {
    console.log('unmounted() function called!');
  }
});

vm.mount('#app');

// setTimeout(() => {
//   vm.mount('#app')
// }, 3000);