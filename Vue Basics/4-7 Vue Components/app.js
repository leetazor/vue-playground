let vm = Vue.createApp({
  data() {
    return {
      message: "Root Vue Instance Message"
    }
  }
});

// Vue Component. Arguments passed: name, configuration object (data, computed, methods.. etc)
// mount method can't be used with a component
vm.component('hello', {
  template:  `<h3>{{message}}</h3>`,
  data() {
    return {
      message: "Component Message."
    }
  }
});

vm.mount('#app');


