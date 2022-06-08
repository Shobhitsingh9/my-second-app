<template>
<div>
    <TheHeader @sidenavToggle="displaySidenav = !displaySidenav"/>
    <TheSidenav
    :show="dislaySidenav"
    @close="displaySidenav = false"/>
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
data() {
    return {
        displaySidenav: false
    }

}

}

</script>
<style>
html {
    font-family: sans-serif;
}
body{
    margin:0;
}



</style>