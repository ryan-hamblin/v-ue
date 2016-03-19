<template>
  <h1>Data:</h1>
  
    <ul class='list-group' >
      <li class="list-group-item" 
          :class="{'completed': person.completed}"
          v-for='person in people'
          @click="person.completed = !person.completed"
        >
      {{ person.name }} {{ person.age }} {{ person.occupation }}</li>
    </ul>
    <counter></counter>
  
</template>

<script>
  import Counter from './Counter'
  export default {
    methods: {

    },
    components: {
      Counter
    },
    data () {
      return {
        people: [
          {name: 'Cosmo', age: 123, occupation: 'Mascot', completed: false},
          {name: 'Trump', age: 70, occupation: 'Billionare', completed: false},
          {name: 'Jeffrey', age: 35, occupation: 'Software Engineer', completed: false}
        ]
      }
    }
  }
</script>

<style>
  .completed {
    text-decoration: line-through;
  }
  .list-group-item:hover {
    cursor: pointer;
  }
  
</style>