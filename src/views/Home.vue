<template>
  <div class="home">
    <HelloWorld msg=""/>
    <todo msg="s23s" :class="{burlywood: true}" v-if="resizetime"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import todo from '@/components/To-Do.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    todo
  }, 
  data: function() {
    return {
      resizetime: false
    }
  },
  computed: {
    
  },
  created: function() {
    window.setTimeout(function() {
      this.resizetime = true;
    }, 5000);
  }
}
</script>


<style scoped lang="less">
	.burlywood {
		color: burlywood; 
	}
</style>
