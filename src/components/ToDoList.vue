<template>
        <li>
            {{item.id}} - {{item.title}} <button v-on:click="$emit('remove');">remove</button>
        </li>
</template>

<script>
export default {
    name: 'todolist',
    props: {
        item: Object,
        index: Number
    },
    methods: {
    }
}
</script>

<style scoped lang="less">

</style>
