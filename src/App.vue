<template>
  <div>
    <div class="wrong-username-or-password alert alert-warning ps-3 pe-3"><i class="bi bi-times"></i>Wrong Username or Password</div>
    <SigninComponent @loginFunction="loginFunction" v-if="!signin" />
    <IndexComponent v-if="signin"/>
  </div>

  <div class="login-loading" v-if="loadingSignin">
        <div class="bg-lightdark d-flex flex-column gap-2">
            <div class="loading-message"><h3 class="text-light fnt-natural">Logging in...</h3></div>
            <div class="spinner-border text-primary" role="status">
            </div>
        </div>    
    </div>
</template>

<script>
 import SigninComponent from './components/SigninComponent.vue';
 import IndexComponent from './components/IndexComponent.vue';
 import userData from '../data/userData.json'
export default {
  name: 'App',
  data(){
    return{
      dataArray: [],
      username: '',
      ID: '',
      getLoginData: null,
      signin: false,
      WrongIdOrPassword: false,
      loadingSignin: false
    }
  },
  props: {

  },
  components:{
    SigninComponent,IndexComponent
  },
  methods: {
   async fetchData(){
      console.log('fetching data')
   
    this.dataArray = userData

    },
    loginFunction(getLoginData){
     this.getLoginData = getLoginData
      this.username = getLoginData[0]
      this.ID = getLoginData[1]

       

      
      for(let i = 0; i < this.dataArray.length; i++){
        if(this.dataArray[i].username === this.username && this.dataArray[i].id === +this.ID){
        this.WrongIdOrPassword = false
        this.loadingSignin = true
            setTimeout(() =>{
                this.loadingSignin = false
        this.signin = true
                
            },2000)
        break
      }else{
        this.WrongIdOrPassword = true

        if(document.querySelector('.wrong-username-or-password').style.display == 'block'){
          document.querySelector('.wrong-username-or-password').style.display = 'none'
        }else{
          document.querySelector('.wrong-username-or-password').style.display = 'block'
        }
        this.loadingSignin = false
        this.$emit('toggleLoadingSystem',this.loadingSignin)
      }
      }
      
    }
    
  },
  mounted(){
    this.fetchData()
  }
 
}

</script>

<style>
@import "./components/styles/global.css";
</style>
