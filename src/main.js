import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

Vue.config.productionTip = false

var vm = new Vue({
  router,
  store,
  render: h => h(App),
  data: function (){
    return {
      userProfiler: {
        name: 'mmmmoo'
      }
    }
  },
  created: function() {
    this.userProfiler = Object.assign({}, this.userProfiler, {
      age: 30,
      salary: 1212
    });
    console.log(this.userProfiler)
    store.commit("increment");
    console.log(store.state)
  },
}).$mount('#app');

// vm.$set(vm.userProfiler, 'age', 27);

// vm.$set(vm.userProfiler, 'salary', 11111);



