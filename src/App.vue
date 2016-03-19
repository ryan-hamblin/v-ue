<template>
  <div id="app">
    <img class="logo" src="./assets/logo.png"/>
    <list></list>
    <form-build></form-build>
    <git-fetcher></git-fetcher>
    
  </div>
</template>

<script>
import FormBuild from './components/Form-Module/FormBuild'
import List from './components/List'
import GitFetcher from './components/GitFetcher'

export default {
  components: {
    FormBuild,
    List,
    GitFetcher
  }
}
</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  margin-top: -100px;
  max-width: 600px;
  font-family: Helvetica, sans-serif;
  text-align: center;
}
.so-long {
  color: blue;
}
.hello {
  color: red;
}
.logo {
  width: 100px;
  height: 100px
}
</style>
