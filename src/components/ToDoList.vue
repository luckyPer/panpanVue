<template>
        <li>
            {{item.id}} <button @click="$emit('remove')">remove</button>
        </li>
</template>

<script>
export default {
    name: 'todolist',
    props: ['item'],
}
</script>

<style scoped lang="less">

</style>
