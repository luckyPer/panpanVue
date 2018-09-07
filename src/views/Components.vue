<template>
    <div>
        test
        <BlogList v-for="item in posts" :key="item.id" :title="item.title" v-on:enlargetext="changeBlogTextSize" 
        :style="{fontSize: largetext +'em'}"/>
    </div>
</template>

<script>
    import bloglist from "@/components/BlogPost.vue"
    export default {
        name: 'comlist',
        components: {
            BlogList: bloglist
        },
        data: function() {
            return {
                title: 'title 11',
                posts: [
                    {id: 1, title: 'post first blog'},
                    {id: 2, title: 'post second blog'},
                    {id: 3, title: 'post third blog'},
                ],
                largetext: 1
            }
        },
        methods: {
            changeBlogTextSize: function(size) {
                this.largetext += size
            }
        }
    }
</script>
