<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost" @submit="onSubmitted"/>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
import AdminPostForm from "@/components/admin/AdminPostForm";

export default {
  layout: 'admin',
  components: {
    AdminPostForm
  },
  aysncData(context) {
    return axios
    .get( 
      "https://nuxt-blog-29b74-default-rtdb.firebaseio.com/posts/" +
      context.params.postId +
      ".json"
      )
      .then(res => {
        return {
          loadedPost: { ...res.data, id: context.params.postId }
        }
      })
      .catch(e => context.error());
  },
  methods: {
    onSubmitted(editedPost) {
      axios.put("https://nuxt-blog-29b74-default-rtdb.firebaseio.com/posts/" +
      this.$route.params.postId +
      ".json", editedPost)
      .then(res => this.$router.push("/admin"))
      .catch(e => console.log(e))
    }
  }
};
</script>

<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>
