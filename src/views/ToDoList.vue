<template>
<div>
    <div>
        Add a list <input type="text" v-model="itemValue"> <button @click="addItem">add</button>
    </div>
    <ul>
        <li is="ToDoList" v-for="(item, index) in itemList" :key="item.id" :item="item" :index="index" v-on:remove="removeItem(index)">
        </li>       
    </ul>
</div>
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
                    title: '111',
                },
                {
                    id: 2,
                    title: '222',
                },
                {
                    id: 3,
                    title: '333'
                }
            ],
            itemValue: '',
            nextTodoId: 4
        }
    },
    methods: {
        addItem: function() {
            this.itemList.push({
                id: this.nextTodoId++,
                title: this.itemValue
            })
        },
        removeItem: function(index) {
            this.itemList.splice(index, 1)
        }
    }
}
</script>
