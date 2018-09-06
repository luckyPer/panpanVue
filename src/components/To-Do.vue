<template>
	<div>		
		<ul>
			<li v-for="item in testList" :key="item.id">{{item.id}} -- {{testmsg}}</li>
		</ul>
		<p v-bind:class="[{ warning : isactive},{ danger : !isactive}]">{{answer}}</p>
		<input type="text" v-model ="testmsg">
		<button @click= "clickBtn">click</button>
		<div v-if="type === 'a'">
			type a
		</div>
		<div v-else-if="type === 'b'">
			type b
		</div>
		<div v-else>
			not type a/b
		</div>
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
				type: 'a'
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