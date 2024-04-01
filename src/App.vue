

<template>
  
<Nav/>
<div v-if="shouldShowSidebar" class="content-wrapper">
        <Dasbord />
      </div>
      <div v-else>
        <router-view/>
      </div>
<Footer/>
</template>
<script >
import Nav from './components/Nav.vue';
import Footer from './components/Footer.vue';
import Dasbord from './components/Dasbord.vue';
export default{
  components:{Nav,Footer,Dasbord},
   computed:{ shouldShowSidebar(){
    return(
       this.$route.path.startsWith("/homecontrol")|| this .$route.path.startsWith("/test")
    )
   }}
}

</script>
<style scoped>

</style>
