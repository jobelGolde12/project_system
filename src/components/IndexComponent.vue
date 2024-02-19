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
                    <div class="home  p-2 rounded mb-2" ><i class="bi bi-person-lines-fill"></i> My reservation</div>
                </div>

                <div class="li">
                    <div class="home  p-2 rounded mb-2"><i class="bi bi-person-circle"></i> Profile</div>
                </div>

                <div class="li">
                    <div class="home  p-2 rounded mb-2"><i class="bi bi-segmented-nav"></i> Rooms</div>
                </div>

                <div class="li">
                    <div class="home  p-2 rounded mb-2"><i class="bi bi-info-circle"></i> About website</div>
                </div>

                <div class="li">
                    <div class="home  p-2 rounded mb-2"><i class="bi bi-cash"></i> Income</div>
                </div>

                <div class="li">
                    <div class="home  p-2 rounded mb-2"><i class="bi bi-bell"></i> Notifications</div>
                </div>

                    <div class="container mt-3">
                        <hr>
                        <p class="text-muted fnt-natural">Trusted with over <span class="text-primary">1,500+</span> people</p>
                        <button class="btn btn-primary">Read more</button>
                    </div>


            </div>
        </div>
      </div>  
      <div class="body d-flex flex-column">
       <div class="header">

        <div class="right-top-icons gap-3 me-5 mt-2  d-flex flex-row align-items-center">


          <div class="theme">
            <i class="bi bi-sun fs-5" v-if="!changeTheme" @click="changeThemeFunc"></i>
            <i class="bi bi-moon fs-5" v-if="changeTheme" @click="changeThemeFunc"></i>
          </div>
          <div class=" container d-flex flex-row align-items-center gap-2"><img src="../assets/my-profile.jpg" alt="" class="user-profile"> 
        <div class="text-muted">{{ currentUsername }}</div>
        </div>
        
        </div>


        <div class="container-lg pt-3 card-container">
            <div class="row d-flex flex-row gap-3 justify-content-center align-items-center mt-5 pt-1">
                <div class="available-rooms col-lg-3 col-md-3 p-3 text-light rounded text-center ">Available Rooms <br> {{ availableRooms }}</div>
                <div class="all-users col-lg-3 col-md-3 p-3 text-light rounded text-center">All users <br> 5,000</div>
                <div class="active-users col-lg-3 col-md-3 p-3 text-light rounded text-center" >Active user <br> {{ activeUser }}</div>
            </div>
        </div>
       </div>

       <div class="container-fluid d-flex justify-content-between mt-5">
       <div class="text-dark fs-5 fnt-natural">Choose rooms</div>
       <div class="text-dark fs-5 fnt-natural room-info-text">Room info</div>
       
       </div>

       <div class="main-content bg-light d-flex flex-row">

       <div class="rooms p-2 d-flex flex-column">
      <div class="container">
        <div class="room-holder rounded">
           <div class="room-holder-footer">
            <div class="room-name"><h5 class="text-light">Boggart</h5></div>
            <div class="content text-light">Content of a room here</div>
            <div class="ratings text-light">star here</div>
           </div>
        </div>
      </div>


      <div class="container">
        <div class="room-holder rounded">
           <div class="room-holder-footer">
            <div class="room-name"><h5 class="text-light">Boggart</h5></div>
            <div class="content text-light">Content of a room here</div>
            <div class="ratings text-light">star here</div>
           </div>
        </div>
      </div>


      <div class="container">
        <div class="room-holder rounded">
           <div class="room-holder-footer">
            <div class="room-name"><h5 class="text-light">Boggart</h5></div>
            <div class="content text-light">Content of a room here</div>
            <div class="ratings text-light">star here</div>
           </div>
        </div>
      </div>



       </div>

       <div class="room-info bg-primary">

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
            hoverSidenavListBool: false,
            currentUsername: 'Jobel v. Golde',
            activeUser: 1500,
            availableRooms: 500
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
.body .header{
    position: relative;
    height: 30%;
    width: 100%;
}
.body .main-content{
    position: relative;
    width: 100%;
    height: 80vh;
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
.user-profile{
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: url('');
    background-position: center;
    align-items: center;
}

.main-content .rooms{
    position: relative;
    width:65%;
    height:100%;
    left: 0;
    overflow-y: auto;
}
.main-content .room-info{
    top: 0;
    position: relative;
    width: 35%;
    height: 100%;
    background: #ccc;
    overflow-y: auto;
}
.room-info-text{
margin-right: 15rem;
}


.rooms .container .room-holder{
    background: url('../assets/hotel-room1.jpg');
    background-size: cover;
    background-position: center;
    width: 95%;
    min-height: 100%;
    position: absolute;
}
.room-holder .room-holder-footer{
  position: relative;
  transform: translateY(350%);
  width: 100%;
  height: 20%;
  background: #000;
  
}
.available-rooms{
    background-color: #4158D0;
background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);

}
.all-users{
    background-image: linear-gradient( 109.6deg,  rgba(61,131,97,1) 11.2%, rgba(28,103,88,1) 91.1% );


}
.active-users{
    background-image: radial-gradient( circle 897px at 9% 80.3%,  rgba(55,60,245,1) 0%, rgba(234,161,15,0.90) 100.2% );
}
</style>