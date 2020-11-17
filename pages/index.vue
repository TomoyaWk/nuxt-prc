<template>
<div class="column is-10">
  <section class="card">
    <div class="card-header">
      <h1 class="card-header-title title is-1">{{ title }}</h1>
    
    </div>
    <div class="card-content">
      <button @click="$store.commit('count')">click!</button>
      <button @click="$store.commit('reset')">reset!</button>
      <p> clicked :{{ $store.state.counter }}</p>
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
      message: this.$store.state.message,
      clock : "please wait.....",
    }
  },
  created : function() {
    setInterval( () => {
      var d : any = new Date();
      var time = {
        'hour' : d.getHours(),
        'minite' : d.getMinutes(),
        'second' : d.getSeconds()
      };

      this.clock =  ("00" + time.hour ).slice(-2) + ":" + ("00" + time.minite ).slice(-2) + ":" + ("00" + time.second ).slice(-2);
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
