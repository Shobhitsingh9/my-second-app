<template>
<div class="home-page">
<section class="intro">
  <h1>Get the latest tech news</h1>
</section>
<section class="fetured-posts">
  <PostPreview
      id="1"
      thumbnail="https://youmatter.world/app/uploads/sites/2/2019/11/tech-planet.jpg"
      title="Hello there!"
      previewtext="This is my first part"/>
  <PostPreview
      id="2"
      thumbnail="https://youmatter.world/app/uploads/sites/2/2019/11/tech-planet.jpg"
      title="Hello there again!"
      previewtext="This is my second part"/>
  <PostPreview
      id="3"
      thumbnail="https://youmatter.world/app/uploads/sites/2/2019/11/tech-planet.jpg"
      title="Hello there thrice!"
      previewtext="This is my third part"/>
  </section>

</div>
</template>

<script>
import PostPreview from '@/components/Posts/PostsPreview'

export default {
  components: {
    PostPreview
  }
}
</script>
<style scoped>
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-image: url('~/assets/images/1.jpg');
  background-position: center;
  background-size: cover;
}

.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}

.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}


</style>
