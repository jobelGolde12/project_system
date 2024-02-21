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
                    <div class="home p-2 rounded mb-2"><i class="bi bi-house"></i> Home</div>
                </div>

                <div class="li" >
                    <div class="my-reservation  p-2 rounded mb-2" ><i class="bi bi-person-lines-fill"></i> My reservation</div>
                </div>

                <div class="li">
                    <div class="profile  p-2 rounded mb-2"><i class="bi bi-person-circle"></i> Profile</div>
                </div>

                <div class="li">
                    <div class="rooms  p-2 rounded mb-2"><i class="bi bi-segmented-nav"></i> Rooms</div>
                </div>

                <div class="li">
                    <div class="about-website  p-2 rounded mb-2"><i class="bi bi-info-circle"></i> About website</div>
                </div>

                <div class="li">
                    <div class="income  p-2 rounded mb-2"><i class="bi bi-cash"></i> Income</div>
                </div>

                <div class="li">
                    <div class="notifications  p-2 rounded mb-2"><i class="bi bi-bell"></i> Notifications</div>
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

       <div class="rooms p-2 d-flex flex-column gap-2">
      <div class="room-container">
        <div class="room-holder rounded ">
           <div class="room-holder-footer ps-2 pe-2 pt-1 d-flex flex-row justify-content-between">
            <div>
                <div class="room-name bg-warning rounded ps-1 pe-1"><h5 class="text-dark fnt-natural f-900">Couple room</h5></div>
            <div class="content text-dark">A room design perfect for couple</div>
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


      <div class="room-container">
        <div class="room-holder rounded">
            <div class="room-holder-footer ps-2 pe-2 pt-1 d-flex flex-row justify-content-between">
            <div>
                <div class="room-name  bg-warning rounded ps-1 pe-1"><h5 class="text-dark fnt-natural f-bold">Couple room</h5></div>
            <div class="content text-dark">A room design perfect for couple</div>
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

      <div class="room-container">
        <div class="room-holder rounded" >
            <div class="room-holder-footer ps-2 pe-2 pt-1 d-flex flex-row justify-content-between">
            <div>
                <div class="room-name  bg-warning rounded ps-1 pe-1"><h5 class="text-dark fnt-natural f-bold">Couple room</h5></div>
            <div class="content text-dark">A room design perfect for couple</div>
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



       </div>

       <div class="room-info"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quia minus veritatis velit blanditiis placeat earum perspiciatis, deleniti, dolor provident aliquam laboriosam numquam. Culpa, quam sequi perspiciatis cupiditate sit ducimus!
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde laboriosam sunt exercitationem obcaecati dolores voluptas cumque, deserunt omnis blanditiis corporis quis voluptate similique a provident iure dicta, dolor voluptates repellendus? Veniam dolorum consequatur ipsam sit id ea eos repudiandae hic aspernatur quod culpa quisquam omnis earum eveniet voluptates, adipisci dolor minima nulla soluta tempore! Exercitationem aliquam rerum tenetur quaerat voluptate adipisci soluta at facere eveniet, voluptatem velit aliquid dolorum delectus omnis? Illo numquam quisquam at, fugiat quasi aperiam deserunt, laboriosam atque cum pariatur mollitia nostrum nemo maxime quaerat quos quibusdam maiores ut quae impedit dolorem. Odit dolorem ipsam eveniet porro!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi incidunt maiores, ipsa aut harum officia placeat modi, blanditiis maxime, iure delectus rem quis ea non similique beatae. Quaerat neque praesentium ex repudiandae obcaecati, vitae accusantium placeat laboriosam sunt eaque, animi sed ullam pariatur, tempora dolorum nisi iure. Eos, ipsam neque. Doloribus eos, provident dolorum asperiores voluptates accusantium ipsam pariatur atque error, molestiae commodi assumenda, ab distinctio obcaecati eum! Ratione non facere praesentium nihil, possimus a recusandae incidunt hic rerum est sapiente enim tenetur nostrum magni repellendus quidem id provident quaerat ab ex, repellat cupiditate ipsum aperiam. Officia accusantium tenetur suscipit?
       </div>

       </div>
         
      </div>
        
    </div>
</template>
<script src="./scripts/IndexComponentScript.js"></script>

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
    height: 100%;
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
    width: 30%;
    height: 100%;
    overflow-y: scroll;
    background: #f1f1f1;
    padding: 1rem;
}
.room-info-text{
margin-right: 15rem;
}
.rooms .room-container{
    position: relative;
    width: 100%;
    min-height: 60%;
    margin-bottom: 2rem;
}

.rooms .room-container .room-holder{
     background: url('../assets/hotel-room1.jpg'); 
    background-size: cover;
    background-position: center;
    width: 95%;
    min-height: 100%;
    position: absolute;
}
.room-holder .room-holder-footer{
  position: relative;
  transform: translateY(325%);
  width: 100%;
  height: 20%;
  background: rgba(250,250,250,.5);
  border-radius: 10px;
  
}
.room-name h5{
    text-shadow: #333 solid black;
}
.available-rooms{
    background-color: #4158D0;
background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);

}
.room-holder-footer h5{
    font-size: 1.5rem;
    padding-bottom:0;
    margin-bottom: 0;
}
.all-users{
    background-image: linear-gradient( 109.6deg,  rgba(61,131,97,1) 11.2%, rgba(28,103,88,1) 91.1% );


}
.active-users{
    background-image: radial-gradient( circle 897px at 9% 80.3%,  rgba(55,60,245,1) 0%, rgba(234,161,15,0.90) 100.2% );
}

</style>