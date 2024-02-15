<template>
    <div class="main-container bg-light d-flex flex-row">
        
      <div class="sidenav container">
        <div class="sidenav-header mt-3">
          <div class="d-flex flex-row align-items-center gap-2">
            <div class="j-logo fnt-natural bg-primary text-light d-flex align-items-center fw-bold">J</div>
            <div class="fnt-natural">Java<span class="text-primary">Rice</span> Web</div>
          </div>
        </div>


        <div class="sidenav-body mt-3 d-flex flex-column">
            <div class="ul">
                <div class="li">
                    <div class="home bg-primary text-light  p-2 rounded mb-2"><i class="bi bi-house"></i> Home</div>
                </div>

                <div class="li" >
                    <div class="home  p-2 rounded mb-2" ><i class="bi bi-list"></i> list</div>
                </div>

                <div class="li">
                    <div class="home  p-2 rounded mb-2"><i class="bi bi-list"></i> list</div>
                </div>

                <div class="li">
                    <div class="home  p-2 rounded mb-2"><i class="bi bi-list"></i> list</div>
                </div>

                <div class="li">
                    <div class="home  p-2 rounded mb-2"><i class="bi bi-list"></i> list</div>
                </div>

                <div class="li">
                    <div class="home  p-2 rounded mb-2"><i class="bi bi-list"></i> list</div>
                </div>

                <div class="li">
                    <div class="home  p-2 rounded mb-2"><i class="bi bi-list"></i> list</div>
                </div>
            </div>
        </div>
      </div>  
      <div class="body d-flex flex-column">
       <div class="header">


        <div class="right-top-icons d-flex flex-row gap-4 me-5 mt-2">
          <div><i class="bi bi-person fs-5"></i></div>
          <div class="theme">
            <i class="bi bi-sun fs-5" v-if="!changeTheme" @click="changeThemeFunc"></i>
            <i class="bi bi-moon fs-5" v-if="changeTheme" @click="changeThemeFunc"></i>
          </div>
          <div><i class="bi bi-list fs-5"></i></div>

        </div>


        <div class="container-lg">
            <div class="row d-flex flex-row gap-3 justify-content-center align-items-center mt-5 pt-1">
                <div class="col-lg-3 col-md-3 bg-primary p-3 text-light rounded">Card</div>
                <div class="col-lg-3 bg-info col-md-3 p-3 text-light rounded">Card</div>
                <div class="col-lg-3 bg-success col-md-3 p-3 text-light rounded" >Card</div>
            </div>
        </div>
       </div>


       <div class="main-content bg-light">
        <div class="container">
            <h5 class="fnt-natural fw-bold">User information</h5>
        </div>

        <div class="container-lg">
            <div class="row d-flex gap-1">
                <div class="col-lg-7 bg-primary text-light p-5">User data info chart</div>
                <div class="col-lg-4 bg-warning text-light p-5">Chart 2</div>
            </div>
            <div class="row mt-3">
                <div class="col-lg-11 bg-info p-5 rounded">Chart</div>
            </div>
            <p>Another info sa baba</p>
        </div>
       </div>
         
      </div>
        
    </div>
</template>

<script>
export default{
    name: 'IndexComponent',
    data(){
        return{
            changeTheme: false,
            albumData: [],
            hoverSidenavListBool: false
        }
    },
    methods: {
        changeThemeFunc(){
         this.changeTheme = !this.changeTheme
        },
        hoverSidenavList(){
         this.hoverSidenavListBool = !this.hoverSidenavListBool
        }
    }
}
</script>
<style scoped>
.main-container{
 position: absolute;
 width: 100vw;
 height: 100vh;
}
.sidenav{
    position: relative;
    width: 20%;
    height: 100%;
}
.body{
    position: relative;
    height: 100%;
    flex: 1;

}
.body > .header{
    position: relative;
    height: 30%;
    width: 100%;
}
.body > .main-content{
    flex: 1;
    position: relative;
    width: 100%;
}
.j-logo{
    width: 30px;
    height: 30px;
    border-radius: 50%;
    justify-content: center;
    
}
.header > .right-top-icons{
    position: relative;
    float: right;
}
.right-top-icons i:hover{
    position: relative;
    color: var(--clr-in-hover2);
    font-weight: 900;
    cursor: pointer;
}
</style>