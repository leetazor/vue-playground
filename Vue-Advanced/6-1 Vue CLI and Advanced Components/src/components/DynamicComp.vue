<template>
<div style="margin-top: 25px;">
  <hr>
<h1>Dynamic Components</h1>
<select v-model="componentName">
  <option value="HomeComp">Home</option>
  <option value="AboutComp">About</option>
</select>

<!-- <keep-alive> allows to persist the data inside of a component
  even if it gets unmounted. 'unmount() will not get triggered in this case.  -->
<!-- <component></component> allows us to load components dynamically
  it's like a placeholder for the actual component -->
<keep-alive>
  <component :is="componentName"></component>
</keep-alive>

</div>
</template>

<script>
import AboutComp from './AboutComp.vue';
import HomeComp from './HomeComp.vue';

export default {
  name: 'DynamicComp',
  components: {
    AboutComp,
    HomeComp
  },
  data() {
    return {
     componentName: "HomeComp"  
    };
  }
};
</script>
