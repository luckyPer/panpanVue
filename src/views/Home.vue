<template>
  <div class="home">
    <HelloWorld msg=""/>
    <todo msg="s23s" :class="{burlywood: true}" v-if="resizetime"/>
    <button @click="clickBtn">click</button>
    <hr/>
    <list/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import todo from '@/components/To-Do.vue'
import list from '@/components/List.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    todo,
    list
  }, 
  data: function() {
    return {
      resizetime: true
    }
  },
  methods: {
    clickBtn: function() {
      this.resizetime = this.resizetime1
    }
  },
  computed:{
    resizetime1: function() {
      return this.resizetime = !this.resizetime;
    }
  },
  created: function() {
    
  },
  watch: {

  }
}
</script>


<style scoped lang="less">
	.burlywood {
		color: burlywood; 
	}
</style>
