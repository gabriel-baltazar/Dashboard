<template>
    <div class="sidebar">
        <div class="top">
            <div class="avatar">
                <span class="icon"><i class="fa fa-user"></i></span>
                        
            </div>
        
        <div class="info">
            <p>Gabriel Baltazar</p>
            <span>Online</span>
        </div>
        </div>

        <div class="menu">

        </div>
    </div>
</template>

<script>
export default {
    name: 'SidebarComponent'
}
</script>

<style lang="scss" scoped>
 .sidebar{
     color: #fff;
       .top{
           width: 100%;
           display: flex;
           justify-content: center;
           align-items: center;
           .avatar{
               span{
                   display: block;
                   width: 50px;
                   height: 50px;
                   border-radius: 50%;
                   background-color: #ccc;
                   display: flex;
                   justify-content: center;
                   align-items: center;
                   font-size: 30px;
                   color: #000;

               }
           }
       }
    }
</style>