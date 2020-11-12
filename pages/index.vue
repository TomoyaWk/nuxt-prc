<template>
<div class="column is-10">
  <section class="card">
    <div class="card-header">
      <h1 class="card-header-title title is-1">{{ title }}</h1>
    
    </div>
    <div class="card-content">
      <p>{{ message }}</p>
      <hr>
      <pre> {{ clock }}</pre>

      <router-link to="/other">to OtherPage</router-link>
    </div>
    
  </section>
</div>
</template>

<script lang="ts">
import Vue from "vue";

interface Data {
      title : string,
      message: string,
      clock : string,
}

export default Vue.extend({
  data() : Data {
    return {
      title : "hello!",
      message: "message is here",
      clock : "please wait.....",
    }
  },
  created : function() {
    setInterval( () => {
      var d : any = new Date();
      this.clock = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    }, 1000)
  }

});
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
