<template>
<ul>
    <ToDoList v-for="(item, key, index) in itemList" :key="key" :item="item" v-on:remove="itemList.splice(index, 1)"/>
</ul>
</template>

<script>
import ToDoList from '@/components/ToDoList.vue'
export default {
    name: 'todolist',
    components: {
        ToDoList
    },
    data: function() {
        return {
            itemList: [
                {
                    id: 1,
                    title: 'Do the dishes',
                },
                {
                    id: 2,
                    title: 'Take out the trash',
                },
                {
                    id: 3,
                    title: 'Mow the lawn'
                }
            ]
        }
    }
}
</script>
