<template>
  <h1>Home Page</h1>
</template>

<script>
export default {
 name: 'HomeComp',
 // whenever a component gets toggled out, it actually gets unmounted from the page and all it's data lost
 unmounted() {
  console.log('Home was unmounted');
 },
 // these 2 lifecycle hooks (activated/deactivated) will get triggered
 // when component gets toggled off, but it's kept alive by <keep-alive>
 activated() {
  console.log('Home activated');
 },
 deactivated() {
  console.log('Home deactivated');
 }

}
</script>

