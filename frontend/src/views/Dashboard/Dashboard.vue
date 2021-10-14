<template>
    <div class="main">
       <div class="sidebar">
         <SidebarComponent />
       </div>
       <div class="content-rigth">
           <div class="navbar">
             <NavbarComponent />
           </div>
           <div class="content-pages">
           </div>

       </div>
    </div>
</template>

<script>
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent.vue'
import SidebarComponent from '../../components/SidebarComponent/SidebarComponent.vue'

export default {
  name: 'Dashboard',
  components:{
    NavbarComponent,
    SidebarComponent
  }
}
</script>

<style lang="scss" src="./style.scss" scoped />
