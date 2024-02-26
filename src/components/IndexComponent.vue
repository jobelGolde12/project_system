<template>
    <div class="header bg-light d-flex flex-row justify-content-between align-items-center p-3">
        <div class="sidenav-header">
          <div class="d-flex flex-row align-items-center gap-2">
            <div class="j-logo fnt-natural bg-primary text-light d-flex align-items-center fw-bold">J</div>
            <div class="fnt-natural">Janna's <span class="text-primary fw-bold">Hotel</span></div>
          </div>
        </div>

        <div>

<div class="right-top-icons gap-3 me-5 mt-2  d-flex flex-row align-items-center">


  <div class="theme">
    <i class="bi bi-sun fs-5" v-if="!changeTheme" @click="changeThemeFunc"></i>
    <i class="bi bi-moon fs-5" v-if="changeTheme" @click="changeThemeFunc"></i>
  </div>
  <div class=" container d-flex flex-row align-items-center gap-2"><img src="../assets/my-profile.jpg" alt="" class="user-profile"> 
<div class="text-muted">{{ currentUsername }}</div>
</div>

</div>



</div>



    </div>
    <div class="main-container bg-light d-flex flex-row ">
    
      <div class="sidenav container">
        


        <div class="sidenav-body mt-4 d-flex flex-column ">
            <div class="ul">
                <div class="li">
                    <div class="home p-2 rounded mb-2" :class="{'bg-primary text-light': homeIsclicked}" @click="homeclickFunc" ><i class="bi bi-house"></i> Home</div>
                </div>

                <div class="li" >
                    <div class="my-reservation  p-2 rounded mb-2"  :class="{'bg-primary text-light': reservationIsClicked}" @click="reservationIsClickedFunc"><i class="bi bi-person-lines-fill"></i> My reservation</div>
                </div>

                <div class="li">
                    <div class="profile  p-2 rounded mb-2" :class="{'bg-primary text-light': profileIsClicked}" @click="profileIsClickedFunc"><i class="bi bi-person-circle"></i> Profile</div>
                </div>

                <div class="li">
                    <div class="rooms  p-2 rounded mb-2" :class="{'bg-primary text-light': roomIsClicked}" @click="roomIsClickedFunc"><i class="bi bi-segmented-nav"></i> Rooms</div>
                </div>

                <div class="li">
                    <div class="about-website  p-2 rounded mb-2" :class="{'bg-primary text-light': aboutWebsiteIsClicked}" @click="aboutWebsiteIsClickedFunc"><i class="bi bi-info-circle" ></i> About website</div>
                </div>

                <div class="li">
                    <div class="income  p-2 rounded mb-2" :class="{'bg-primary text-light': incomeIsClicked}" @click="incomeIsClickedFunc"><i class="bi bi-cash"></i> Income</div>
                </div>

                <div class="li">
                    <div class="notifications  p-2 rounded mb-2" :class="{'bg-primary text-light': notificationIsClicked}" @click="notificationIsClickedFunc"><i class="bi bi-bell"></i> Notifications</div>
                </div>

                    <div class="container mt-3">
                        <hr>
                        <p class="text-muted fnt-natural">Trusted with over <span class="text-primary">1,500+</span> people</p>
                        <button class="btn btn-primary">Read more</button>
                    </div>


            </div>
        </div>
      </div>  
      <div class="body d-flex flex-column"  v-if="!reservationIsClicked">
        <div class="container-lg mt-0 card-container">
    <div class="row d-flex flex-row gap-3 justify-content-center align-items-center  pt-1">
        <div class="available-rooms col-lg-3 col-md-3 p-3 text-light rounded text-center ">Available Rooms <br> {{ availableRooms }}</div>
        <div class="all-users col-lg-3 col-md-3 p-3 text-light rounded text-center">All users <br> 5,000</div>
        <div class="active-users col-lg-3 col-md-3 p-3 text-light rounded text-center" >Active user <br> {{ activeUser }}</div>
    </div>
</div>

       <div class="container-fluid d-flex justify-content-between mt-5" v-if="userType === 'user'">
       <div class="text-dark fs-5 fnt-natural">Choose rooms</div>
       <div class="text-dark fs-5 fnt-natural room-info-text">Room info</div>
       
       </div>

       <div class="main-content bg-light d-flex flex-row" v-if="userType === 'user'">

       <div class="rooms p-2 d-flex flex-column gap-2" >
      <div class="room-container" v-for="room in roomData" :key="room.rmCount">
        <div class="room-holder rounded" :style="'background-image: url(' + room.rmImage + ')'">

           <div class="room-holder-footer ps-2 pe-2 pt-1 d-flex flex-row justify-content-between">
            <div>
                <div class="room-name bg-warning rounded ps-1 pe-1"><h5 class="text-dark fnt-natural f-900">{{ room.rmName }}</h5></div>
            <div class="content text-dark">{{room.rmInfo}}</div>
            <div class="ratings text-dark">
                <i class="bi bi-star-fill text-warning me-1"></i>
                <i class="bi bi-star-fill text-warning me-1"></i>
                <i class="bi bi-star-fill text-warning me-1"></i>
                <i class="bi bi-star-fill text-warning me-1"></i>
                <i class="bi bi-star text-warning me-1"></i>

            </div>
            </div>
            <div class="room-info-btn me-3 mt-4">
            <button class="btn btn-primary">Room info</button>
           </div>
           </div>

          
        </div>
      </div>


      <!-- :style="{ backgroundImage: 'url('+  roomData[0].rmImage + ')' }" -->

     



       </div>

       <div class="room-info"> 
        <!-- roomData[0].rmImage -->
        <img :src="rm1" alt="Room inage" style="position:relative;width:100%;height:100%;">
       </div>

       </div>
         
      </div>
        
       

      <!-- ReservationComponent -->
      <div class="body " v-if="reservationIsClicked">
      <ReservationComponent />
      
    </div>
    </div>
    
</template>
<script src="./scripts/IndexComponentScript.js"></script>


<style scoped>
@import url('./styles/indexComponent.css');

</style>