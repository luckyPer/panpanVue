<template>
    <div>
        <h2>{{title}}</h2>
        <button v-on:click="$emit('enlargetext', 2)">enlarge text</button>
    </div>
</template>

<script>
    export default {
        name: 'blogpost',
        props: {
            title: String
        },
        data: function() {
            return {

            }
        },
    }
</script>
