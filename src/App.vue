<template>
  <div>
    <SigninComponent @loginFunction="loginFunction"/>
  </div>
</template>

<script>
 import SigninComponent from './components/SigninComponent.vue';
export default {
  name: 'App',
  data(){
    return{
      dataArray: [],
      username: '',
      password: '',
      getLoginData: null
    }
  },
  props: {

  },
  components:{
    SigninComponent
  },
  methods: {
    fetchData(){
      console.log('fetching data')
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res =>{
        if(res.ok){
          console.log('fetching data success...')
        }
        return res.json()
      })
      .then(data =>{
        this.dataArray = data
      
       for(let i = 0; i < data.length; i++){
        console.log('id: ' + this.dataArray[i].id)
       }
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
      })
      .catch(error =>{
        console.log('Error while fetching data ' + error)
      })
    },
    loginFunction(getLoginData){
     this.getLoginData = getLoginData
      this.username = getLoginData[0]
      this.password = getLoginData[0]

      for(let i = 0; i < this.dataArray.length; i++){
        if(this.dataArray[i].username === this.username && this.dataArray[i].password === this.password){
        console.log('Login Success')
      }else{
        console.log('Failed')
      }
      }
      
    }
    
  },
  mounted(){
    this.fetchData()
  }
 
}
</script>


