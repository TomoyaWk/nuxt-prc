<template>
<div class="column is-10">
  <section class="card">
    <div class="card-header">
        <h1 class="card-header-title title is-1">{{ title }}</h1>
    
    </div>
    <div class="card-content">
        <p v-html="message">no message</p>
        <hr>

    <router-link to="/">Go to Top</router-link>
    </div>
    
  </section>
</div>
</template>

<script lang="ts">
import Vue from "vue";

interface Data {
    title : string,
}

export default Vue.extend({
    validate({ params }) {
      if (params.id == undefined || params.pass == undefined) {
        return false;
      } else {
        return true;
      }
    },
    data() : Data {
        return {
        title : "Login",
        }
    },

    computed : {
      message : function () {
        let id = this.$route.params.id != undefined ? this.$route.params.id : '*** no id! ***';
        let pass = this.$route.params.pass != undefined ? this.$route.params.pass : '*** no password! ***';
        
        return 'ID:' + id + '<br> PASS:' + pass;
      },
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
