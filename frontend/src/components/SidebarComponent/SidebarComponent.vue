<template>
    <div class="sidebar">
        <div class="top">
            <div class="avatar">
                <span class="icon"><i class="fa fa-user"></i></span>
                        
            </div>
        
        <div class="info">
            <p>Gabriel Baltazar</p>
            <p>Online</p>
        </div>
        </div>

        <div class="menu">
            <ul>
                <li><router-link :to="{name: 'home'}"> <i class="fa fa-home"></i> Home</router-link></li>
                <li><router-link :to="{name: 'products'}"> <i class="fa fa-box"></i> Products</router-link></li>
                <li><router-link :to="{name: 'sales'}"> <i class="fa fa-store"></i> Sales</router-link></li>
                <li><router-link :to="{name: 'home'}"> <i class="fa fa-chart-bar"></i> Reports</router-link></li>
            </ul>
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
     
       .top{
           width: 100%;
           display: flex;
           justify-content: center;
           align-items: center;
           padding: 25px 5px;
           margin-top: 50px;

           .avatar{
               margin-right: 10px;

               span{
                   display: block;
                   width: 50px;
                   height: 50px;
                   border-radius: 50%;
                   background-color: #ccc;
                   display: flex;
                   justify-content: center;
                   align-items: center;
                   font-size: 25px;
                   color: #292828;

               }
           }
           .info{
               p{
                   margin:0;
                   color: #fff;
               }
               p:nth-child(2){
                   font-size: 15px;
               }
           }
       }
       .menu{
           padding: 10px;

           ul li {
               font-size: 18px;
               margin: 15px 0;
               list-style: none;
               font-weight: 300;
           a{
               color: #fff;
               text-decoration: none;
           }
           }
       }
    }
</style>