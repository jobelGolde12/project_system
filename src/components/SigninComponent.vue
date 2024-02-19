<template>
    <div class="main-content container-fluid bg-light ">
        <div class="circle-bg" v-if="!loadSystem"></div>
        <div class="circle-bg2"  v-if="!loadSystem"></div>
        <div class="circle-bg3"  v-if="!loadSystem"></div>

        <div class="signin-card d-flex flex-column">
            <div class="header d-flex flex-row justify-content-between align-items-center mb-2 pt-2 ps-3 pe-3">
                <div class="logo"><h5 class="fs-5 fw-bold text-dark">Java <span class="text-primary">Rice</span></h5></div>
                <div class="links"><a href="#">About</a></div>
            </div>

            <div class="body  d-flex flex-row gap-2">
                <div class="image"></div>
                <div class="content">
                <h5 class="text-primary mt-3 ms-2 welcome-back" v-if="!signupIsClicked">Welcome Back!</h5>
                <h5 class="text-primary mt-3 ms-2 signup" v-if="signupIsClicked">Signup</h5>
                <div class=" container-fluid mt-4">
     
                    <div class="input-group mb-2" v-if="signupIsClicked">
                    <span class="input-group-text" id="basic-addon1"><i class="bi bi-envelope"></i></span>
                    <input type="text" class="form-control" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1">
                    </div>

            <div class="input-group mb-2">
            <span class="input-group-text" id="basic-addon1"><i class="bi bi-person"></i></span>
            <input type="text" class="form-control" placeholder="username" aria-label="Username" aria-describedby="basic-addon1" v-model="username">
            </div>


            <div class="input-group mb-2">
            <span class="input-group-text" id="basic-addon1"><i class="bi bi-person-lock"></i></span>
            <input type="text" class="form-control" placeholder="ID" aria-label="ID" aria-describedby="basic-addon1" v-model="ID">
            </div>

            <div class="input-group mb-2" v-if="signupIsClicked">
            <span class="input-group-text" id="basic-addon1"><i class="bi bi-lock"></i></span>
            <input type="text" class="form-control" placeholder="Confirm ID" aria-label="ID" aria-describedby="basic-addon1">
            </div>

             <div class="button-container">
                <button class="btn btn-primary">
                    <span v-if="!signupIsClicked" @click="loginFunc">Login</span>
                    <span v-if="signupIsClicked">Done</span>
                </button>
                <div class="mt-2">
                   <p v-if="!signupIsClicked"> Didn't have an account? | <a href="#" @click="signupFunc">Signup</a> </p>
                   <p v-if="signupIsClicked"> Already have an account? | <a href="#" @click="signinFunc">Login</a> </p>
                </div>
             </div>
            </div>
                </div>
            </div>
        </div>
    </div>

    <div class="login-loading" v-if="loadingSignin">
        <div class="bg-lightdark d-flex flex-column gap-2">
            <div class="loading-message"><h3 class="text-light fnt-natural">Logging in...</h3></div>
            <div class="spinner-border text-primary" role="status">
            </div>
        </div>    
    </div>

    
            <div class="load-system bg-light d-flex align-items-center fnt-natural justify-content-center flex-column" v-if="loadSystem">
               <div> <h1>Hotel Management System</h1></div>
               <div class="loading"> <div class="loader"></div></div>
                </div>
</template>
<script>
 export default{
    name: 'SigninComponent',
    data(){
        return{
          login: '',
          signupIsClicked: false,
          username: '',
          ID: '',
          loadingSignin: false,
          loadSystem: true
        }
    },
    methods:{
        signupFunc(){
            this.signupIsClicked = !this.signupIsClicked
            document.querySelector('.signin-card').style.height = '70%'
            document.querySelector('.image').style.height = '100%'

        },
        signinFunc(){
            this.signupIsClicked = !this.signupIsClicked
            document.querySelector('.signin-card').style.height = '60%'
            document.querySelector('.image').style.height = '90%'

           

        },
        loginFunc(){
            this.loadingSignin = true
            this.$emit('loginFunction',[this.username,this.ID])
            console.log('clicked')
            setTimeout(() =>{
                this.loadingSignin = false
            
            },2000)
            
        },
        handleLoadSystem(){
            setTimeout(() =>{
            this.loadSystem = !this.loadSystem
            },5000)
        }
    },
    mounted(){
        this.handleLoadSystem()
    }
}
</script>

<style>
@import "./styles/global.css";
</style>

<style scoped>

.main-content{
    position: absolute;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
}
.main-content .signin-card{
    position: absolute;
    background: var(--bg-primary);
    top: 5rem;
    box-shadow: 0 0 1px #ccc;
   width:50%;
   height: 60%;
    top: 50%;
    left:50%;
    transform: translate(-50%,-50%);
}
.signin-card .body{
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
}
.signin-card .body .image{
    background-image: url('../assets/signin_image.png');
    width: 50%;
    height: 90%;
    position: relative;
background-size: cover;
    background-position: center;
    transition: .3s;
}
.signin-card .body .image:hover{
    transform:scale(1.1);
}
.links a{
    text-decoration: none;
    color: var(--clr-secondary);
}
.links a:hover{
    color: var(--clr-in-hover);
}
.form{
    position: relative;
    width: 100%;
}
.links a{
    text-transform: uppercase;
    font-weight: 600;
}
.circle-bg{
    position: absolute;
    top: 5%;
    left: 10%;
    width: 20%;
    aspect-ratio: 10 / 9;
    background: var(--circle-bg);
    border-radius: 50%;
    opacity: .5;
    animation: animateWidth 1s ease forwards;
}
@keyframes animateWidth{
    from{
        width: 0;
        left: 15%;
    }
    to{
        width: 20%;
    }
}
.circle-bg2{
    position: absolute;
    top: 9%;
    right: -10%;
    width: 40%;
    aspect-ratio: 10 / 9;
    background: var(--circle-bg);
    border-radius: 50%;
    animation: animateWidth2 1s ease forwards;

}
@keyframes animateWidth2{
    from{
        width: 0;
    }
    to{
        width: 40%;
    }
}
.welcome-back{
    animation: animate1 1s ease forwards;
    animation-delay: .1s;
}
@keyframes animate1{
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
}
.login-loading{
position: absolute;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
}
.login-loading .bg-lightdark{
    position: relative;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.5);
    display: flex;
justify-content: center;
align-items: center;
}
.load-system{
    position:absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 999;
}
.load-system .loading{
    position: relative;
    width: 30%;
    height: 5%;
    background: #ccc;
    border-radius: 20px;
}
.load-system .loading .loader{
    position: relative;
    width: 0;
    height: 100%;
    border-radius: inherit;
    animation: animateLoader 5s ease forwards;
    background: linear-gradient(to right , blue,#007bff);
}
@keyframes animateLoader{
    from{
        width: 5%;

    }
    to{
        width: 100%;
    }
}
</style>