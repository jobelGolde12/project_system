<template>
  <div>
    <div class="wrong-username-or-password alert alert-warning ps-3 pe-3"><i class="bi bi-times"></i>Wrong Username or Password</div>
    <SigninComponent @loginFunction="loginFunction" v-if="!signin" />
    <IndexComponent v-if="signin" :getUserType="type"/>
  </div>

  <!-- <div class="login-loading" v-if="loadingSignin">
        <div class="bg-lightdark d-flex flex-column gap-2">
            <div class="loading-message"><h3 class="text-light fnt-natural">Logging in...</h3></div>
            <div class="spinner-border text-primary" role="status">
            </div>
        </div>    
    </div> -->
</template>

<script>
 import SigninComponent from './components/SigninComponent.vue';
 import IndexComponent from './components/IndexComponent.vue';
 import userData from '../data/userData.json'
 // import {ref} from 'vue'
export default {
  name: 'App',
  data(){
    return{
      dataArray: [],
      username: '',
      password: '',
      getLoginData: null,
      signin: false,
      WrongIdOrPassword: false,
      loadingSignin: false,
      type: ''
    }
   },
  // setup(){
  // const userType = ref([{type: this.type}])
  //   return {userType}
  // },
  components:{
    SigninComponent,IndexComponent
  },
  methods: {
    fetchData(){
   
    this.dataArray = userData

    },
    loginFunction(getLoginData){
     this.getLoginData = getLoginData
      this.username = getLoginData[0]
      this.password = getLoginData[1]
      this.type = getLoginData[2]
      
      for(let i = 0; i < this.dataArray.length; i++){
        if(this.dataArray[i].username === this.username && this.dataArray[i].password === this.password){
        this.WrongIdOrPassword = false
        if(this.type === this.dataArray[i].type){
          document.querySelector('.wrong-username-or-password').style.display = 'none'
          this.signin = true
        }else{
          console.log(this.type + ' Didnt match')
          
        }
        

        break
      }else{

        if(document.querySelector('.wrong-username-or-password').style.display == 'block'){
          document.querySelector('.wrong-username-or-password').style.display = 'none'
        }else{
          document.querySelector('.wrong-username-or-password').style.display = 'block'
        }
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
