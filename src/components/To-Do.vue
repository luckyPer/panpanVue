<template>
	<div>		
		<ul>
			<li v-for="item in testList" :key="item.id">{{item.id}} -- {{testmsg}}</li>
		</ul>
		<ol>
			<li v-for="(item, index) in testList" :key="item.id">{{item.id}} -- {{testmsg}} -- {{index}}</li>
		</ol>
		<div v-for="(value, key, index) in objectList" :key="key">{{index}} -- {{value}} --{{key}} --</div>
		<p v-bind:class="[{ warning : isactive},{ danger : !isactive}]">{{answer}}</p>
		<input type="text" v-model ="testmsg">
		<button @click= "clickBtn">click</button>
		<div v-if="type === 'a'">
			type a
			<input type="text" placeholder="type a">
		</div>
		<div v-else-if="type === 'b'">
			type b
			<input type="text" placeholder="type b">
		</div>
		<div v-show="type === 'b'">
			type b
			<input type="text" placeholder="type b">
		</div>
		<button @click="togglebtn">togglebtn</button>
	</div>
</template>

<script>
	import lodash from 'lodash'
	import axios from 'axios'
	export default{
		name: 'todo',
		data: function () {
			return {
				testList: [
					{id: 0, val: '111'},
					{id: 1, val: '222'},
					{id: 2, val: '333'},
				],
				testmsg: this.msg,
				answer: '???',
				isactive: true,
				type: 'a',
				objectList: [
					{
						firstname: 'pan',
						lastname: 'roger',
						age: 22
					}
				],
				userProfiler: {
					name: 'monika'
				}
			}
		},
		props: {
			msg: String
		},
		methods: {
			clickBtn: function () {
				this.testmsg = this.reverseMsg;
				this.isactive = !this.isactive;
				this.getAnswer();
			},
			getAnswer: function() {
				var _that = this;
				axios.get('https://yesno.wtf/api').
					then(function(response) {
						_that.answer = response.data.answer;
					});
			},
			togglebtn: function() {
				return this.type = this.type === 'a' ? 'b' : 'a'
			}
		},
		computed: {
			reverseMsg: function () {
				return this.testmsg.split("").reverse().join("");
			}
		},
		watch: {
			answer: function() {
				console.log("answer")
			}
		},
		created:  function() {
			this.objectList.push({
				firstname: 'vv',
				lastname: 'vv',
				age: 21
			});
			this.objectList[0]['firstname'] = 'PAN';

		}
	}
</script>

<style scoped lang="less">
	.danger {
		color: red; 
	}
	.warning {
		color: blue;
	}
</style>