<template> 
  <button class='btn btn-warning' type="submit" @click="count++">Click Me: {{count}}</button>
</template>

<script>
  export default {
    data () {
      return {
        count: 0
      }
    }
  }
</script>
