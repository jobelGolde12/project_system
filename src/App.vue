<template>
  <div>
    <div class="alert alert-warning ps-3 pe-3 d-none"><i class="bi bi-times"></i>Wrong Username or Password</div>
    <SigninComponent @loginFunction="loginFunction" v-if="!signin" />
    <IndexComponent v-if="signin"/>
  </div>
</template>

<script>
 import SigninComponent from './components/SigninComponent.vue';
 import IndexComponent from './components/IndexComponent.vue';

export default {
  name: 'App',
  data(){
    return{
      dataArray: [],
      username: '',
      ID: '',
      getLoginData: null,
      signin: false,
      WrongIdOrPassword: false
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
      this.dataArray.push({
    "id": 11,
    "name": "Jobel",
    "username": "Jobel v. Golde",
    "email": "jobelgolde43@gmail.com",
    "password": "nonong123",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  })
   
      try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await response.json()
      this.dataArray = data
      console.log('Fetching data successfully...')
     
}catch(error){
        console.log('Error while fetching data: ' + error)
      }

    },
    loginFunction(getLoginData){
     this.getLoginData = getLoginData
      this.username = getLoginData[0]
      this.ID = getLoginData[1]

      for(let i = 0; i < this.dataArray.length; i++){
        if(this.dataArray[i].username === this.username && this.dataArray[i].id === +this.ID){
        this.signin = true
        this.WrongIdOrPassword = false
        break
      }else{
        this.WrongIdOrPassword = true
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
