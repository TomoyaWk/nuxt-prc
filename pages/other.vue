<template>
<div class="column is-10">
    <section class="card">
        <div class="card-header">
            <h1 class="card-header-title title is-1">{{ title }}</h1>
        </div>
        <div class="card-content">
            <p>{{ message }}</p>
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
    message: string,
}

export default Vue.extend({
    data(): Data {
        return {
            title : "This is Other Page!",
            message: "other message is here",
        }
    },    


})
</script>

