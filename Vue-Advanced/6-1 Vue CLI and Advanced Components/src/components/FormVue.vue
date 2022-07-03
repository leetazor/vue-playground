<template>
   <!-- slots are used to pass down html markup from the parent component -->
    <!-- if we add something between <slot></slot> - it will be rendered by default, if nothing is passed -->
   <form>
    <div class="help">
     <slot name="help"></slot>
    </div>
    <div class="fields">
     <slot name="fields"></slot>
    </div>
    <div class="buttons">
     <slot name="buttons"></slot>
    </div> 
    <!-- any elements that are not assigned by name will be put in the default slot -->
    <slot></slot>
  </form>
</template>



