<template>
<div>
    <nuxt/>
</div>
</template>
<script>
import TheHeader from '@/components/Navigation/TheHeader'
import TheSidenav from '@/components/Navigation/TheSidenav'

export default{
    components: {
        TheHeader,
        TheSidenav
},
computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts
    }
},

data() {
    return {
        displaySidenav: false
    }

}

};

</script>
<style>
html {
    font-family: sans-serif;
}
body{
    margin:0;
}



</style>