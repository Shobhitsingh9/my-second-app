<template>
<div class="posts-page">
   <PostList />
</div>
</template>


<script>
import PostList from '@/components/Posts/PostList'

export default {
  components: {
    PostList
  },
  props:{
      posts:{
    type: Array,
    required: true
  }
}
}
</script>
<style scoped>
.posts-page {
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>