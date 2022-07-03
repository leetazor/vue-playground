<template>
 <AppFormComponent />
 <DynamicComp/>
 <AnimationsComp/>
 <JSAnimComponent/>
 <CssJsAnimComp/>
 <ListAnimComp/>
 <ComponentsWithProps/>
</template>

<script>
import AppFormComponent from './components/AppFormComponent.vue';
import DynamicComp from './components/DynamicComp.vue';
import AnimationsComp from './components/AnimationsComp.vue';
import JSAnimComponent from './components/JSAnimComponent.vue';
import CssJsAnimComp from './components/CssJsAnimComp.vue';
import ListAnimComp from './components/ListAnimComp.vue';
import ComponentsWithProps from './components/ComponentsWithProps.vue';

export default {
  name: 'App',
  components: {
    AppFormComponent,
    DynamicComp,
    AnimationsComp,
    JSAnimComponent,
    CssJsAnimComp,
    ListAnimComp,
    ComponentsWithProps
  }
};
</script>

