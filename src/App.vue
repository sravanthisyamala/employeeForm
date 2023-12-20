<template>
  <div id="app">
    <header>
      <div class="container">
      <div class="row">
      <div class="logo col-3">
      <img class="img-fluid" src="./assets/logo.png">
    </div>
    <div class="col-6 text-center">
      <h1>WELCOME TO INMAR</h1>
      <p> Please fill in your details in the below form</p>
    </div>
  </div>
</div>
    </header>
  
    <ApplicationForm/>
   
  </div>
</template>

<script>
import ApplicationForm from './components/ApplicationForm.vue'

export default {
  name: 'App',
  components: {
    ApplicationForm
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  color: #2c3e50;
  margin-top: 20px;
}
</style>
