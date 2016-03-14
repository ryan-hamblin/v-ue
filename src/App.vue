<template>
  <div id="app">
    <img class="logo" src="./assets/logo.png"/>
    <hello></hello>
    <goodbye></goodbye>
    <counter></counter>
    <form-build></form-build>
  </div>
</template>

<script>
import Hello from './components/Hello'
import Goodbye from './components/Goodbye'
import Counter from './components/Counter'
import FormBuild from './components/Form-Module/FormBuild'

export default {
  components: {
    Hello,
    Goodbye,
    Counter,
    FormBuild
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
