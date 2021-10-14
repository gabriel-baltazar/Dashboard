<template>
    <div class="navbar">
        <h3 class="logo">Logo</h3>
        <a href="" @click.prevent="logout" class="logout">Logout <i class="fas fa-sign-out-alt"></i></a>
    </div>
</template>

<script>
export default {
    name: 'NavbarComponent',
    methods: {
        logout(){
            this.$router.push({name:'login'})
        }
    }
}
</script>

<style lang="scss" scoped>
    .navbar{
        div{
            color:white;
        }
        .logout{
            color: white;
            text-decoration: none;
        }

    }
</style>