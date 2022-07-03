<template>
  <FormVue>
  <!-- the below will dynamically render inside of an AppForm component instance -->
    <template v-slot:help>
    <!-- we can use data from the parent component inside of slots without having to pass it down to the child component -->
      <p>{{ help }}</p>
    </template>
    <template v-slot:fields>
      <input type="text" placeholder="email">
      <input type="text" placeholder="username">
      <input type="password" placeholder="password">
    </template>
    <template v-slot:buttons>
      <button type="submit">Submit</button>
    </template>
    <p>Dummy Text</p>
 </FormVue>
 <FormVue> 
   <template v-slot:help>
      <p>Contact help text</p>
    </template>
    <template v-slot:fields>
      <input type="text" placeholder="name">
      <input type="text" placeholder="message">
    </template>
    <template v-slot:buttons>
      <button type="submit">Submit</button>
    </template>
 </FormVue>
</template>

<script>
import FormVue from './FormVue.vue';
export default {
 name: 'AppForm',
  components: {
    FormVue,
  },
  data() {
    return {
      help: 'some help text'
    }
  }
}
</script>
