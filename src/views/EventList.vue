<template>
    <div id="event-container">
        <EventCom/>
        <div>
            <button @click="addMethod">add event</button>
            <p>{{counter}}</p>
            <hr>
            <button @click="getEventMethod($event)">get Event Method</button>
            <p>{{eve}}</p>
            <input v-model.lazy="eve"/>

            <p><a target="_blank" href="https://cn.vuejs.org/v2/guide/events.html#%E4%BA%8B%E4%BB%B6%E4%BF%AE%E9%A5%B0%E7%AC%A6">
            go to event decorator  </a></p>
            <hr>
            <p>selected value : {{selected}}</p>
            <select name="" id="" v-model="selected">
                <option v-for="item in option" :key="item.value" :value="item.value">{{item.text}}</option>
            </select>

        </div>
    </div>
</template>

<script>
import EventCom from '@/components/EventCom.vue'
    export default {
        name: 'eventlist',
        components: {
            EventCom
        },
        data: function() {
            return {
                counter: 0,
                eve: '',
                selected: 'A',
                option: [
                    {text: 'one', value: 'A'},
                    {text: 'two', value: 'B'},
                    {text: 'three', value: 'C'},
                ],
            }
        },
        methods: {
            addMethod: function(event) {
                this.counter += 1;
                if(event) console.log(event)
            },
            getEventMethod: function(e) {
                this.eve = e.target.tagName
            }
        }
    }
</script>
