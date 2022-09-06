<template>
<div id="app" >
  <div class="container">
    <AddTodo />
    <TodoFilter />
   <todos-list></todos-list>
   
  </div>
</div>
</template>

<script>
import TodosList from './components/TodosList.vue'
import AddTodo from './components/AddTodo.vue'
import TodoFilter from './components/TodoFilter.vue'


export default {
  name: 'App',
  components: {
   TodosList,AddTodo,TodoFilter
  }
}
</script>

<style>
body {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  line-height: 1.6;
  background: #e8f7f0;
}
.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>
