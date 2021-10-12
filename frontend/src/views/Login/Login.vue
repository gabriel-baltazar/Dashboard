<template>
  <div class="main">
    <div class="login">
      <div class="content-login">
        <header>
          <h1>Login</h1>
        </header> 

        <div class="form">
          <form>
            <div class="form-group">
              <label for="exampleInputEmail1">Email</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email">
            </div>
            <div class="form-group mt-2">
              <label for="exampleInputPassword1">Senha</label>
              <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Senha">
            </div>
            <button type="submit" class="btn btn-light mt-3" @click.prevent="login">Entrar</button>
          </form>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginComponent',

  data(){
    return{

    }
  },

  methods:{
    login(){
      this.$router.push({name:'home'})
    }
  }

};
</script>

<style lang="scss" src="./style.scss" scoped />