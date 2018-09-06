<template>
	<div>		
		<ul>
			<li v-for="item in evenNumber" :key="item">{{item}}</li>
		</ul>
        <ol>
			<li v-for="item in even(numbers)" :key="item">{{item}}</li>
		</ol>
        <div>
            <template v-for="(item, index) in numbers">
                <span :key="index">{{item}}</span>
            </template>
        </div>
         <div>
            <p v-for="(item, index) in todo" v-if="item" :key="index">
                {{item}}
            </p>
            <hr>
            <div v-if="todo.length">
                <p v-for="(item, index) in todo" :key="index">
                    {{item}}
                </p>
            </div>
            <p v-else>
                no item in todo
            </p>
        </div>
	</div>
</template>

<script>
export default{
    name: 'List',
    data: function () {
        return {
            numbers: [ 1, 2, 3, 4, 5 ],
            todo:[true, true, false]
        }
    },
    props: {
    },
    methods: {
        even: function(numbers) {
            return this.numbers.filter(function (number) {
                return number % 2 === 0;
            });
        }
    },
    computed: {
        evenNumber: function() {
            return this.numbers.filter(function(number) {
                return number % 2 === 0;
            });
        }
    },
    watch: {
    },
    created:  function() {
    }
}
</script>

<style scoped lang="less">
</style>