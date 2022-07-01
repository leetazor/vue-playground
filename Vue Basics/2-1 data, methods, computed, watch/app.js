// the Vue comes from the <script src="https://unpkg.com/vue@3"></script> imported in index.html
// createApp function takes 1 argument - configuration object
// creatApp function returns a method 'mount' which we can chain
// mount has 1 argument - the element the application should mount itself to
const vm = Vue.createApp({
  data() {
    return {
      firstName: 'John',
      middleName: '',
      lastName: 'Doe',
      url: 'https://google.com',
      raw_url: '<a href="https://google.com" target="_blank">Google</a>',
      age: 20
    }
  },
  methods: {
    // if we would like to use the functions inside the View instance, we can access them via 'this' keyword
    // we can't use 'this' keyword here, if we are using 'this' keyword - this will cause issues with proxying
    increment() {
      this.age++
    },
    updateLastName(msg, event) {
     // event.preventDefault(); this can be removed if we are using .prevent on the event trigger (@click.prevent)
      console.log(msg);
      this.lastName = event.target.value;
    },
    updateMiddleName(event) {
      this.middleName = event.target.value;
    }
  },
  //computed properties should never be asynchronous
  // computed values are cached and only change when the dependencies inside the computed function change
  computed: {
    fullName() {
      return `${this.firstName} ${this.middleName} ${this.lastName.toUpperCase()}`
    },
  },
  // with watchers, we have a freedom to perform asycn tasks
  // watchers aren't used as much as methods or computed
  watch: {
   age(newVal, oldVal) {
     setTimeout(() => {
      this.age = 20
     }, 3000);
   }
  }
}).mount('#app');

//setting the data inside the view instance:
setTimeout(() => {
  vm.firstName = 'Bob';
}, 2000);

// we can have multiple instances of Vue on a single page:
// Vue.createApp({
//   data() {
//     return {
//       firstName: 'Jane',
//       lastName: 'Cat'
//     }
//   }
// }).mount('#app2');