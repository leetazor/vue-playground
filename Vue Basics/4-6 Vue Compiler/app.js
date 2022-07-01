let vm = Vue.createApp({
  data() {
    return {
      message: "Hello world!"
    }
  },
  template: `{{message}}`
});

vm.mount('#app');

/* ---- Version of View that works without the compiler ---- */

// let vm2 = Vue.createApp({
//   data() {
//     return {
//       message: "Hello world!"
//     }
//   },
//   render() {
//     return Vue.h(
//       'h1',
//       this.message
//     )
//   }
// }).mount("#app2");

