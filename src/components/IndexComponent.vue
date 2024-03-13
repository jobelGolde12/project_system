<template>
    <div class="header bg-light d-flex flex-row justify-content-between align-items-center p-3">
        <div class="sidenav-header">
          <div class="d-flex flex-row align-items-center gap-2">
            <div class="j-logo fnt-natural bg-primary text-light d-flex align-items-center fw-bold">M</div>
            <div class="fnt-natural"> <span class="text-primary fw-bold">Hotel</span></div>
          </div>
        </div>

        <div>

<div class="right-top-icons gap-3 me-5 mt-2  d-flex flex-row align-items-center">


  <div class="location"><i class="bi bi-geo-alt fs-5" data-bs-toggle="modal" data-bs-target="#locationModal"></i></div>
  <div class="profile-at-top container d-flex flex-row align-items-center gap-2" @click="profileAtTopClickFunc"><img src="https://scontent.fmnl4-5.fna.fbcdn.net/v/t39.30808-6/414453944_1484162515493206_1621779082099115105_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeEm8Vej4ZDH1smt1RDiZ-u5TFOn2YtwVQBMU6fZi3BVAJwAC34z39fOZEf7G6yDk_iPNzwFxOHtoGA8Tb8eWYW7&_nc_ohc=7e37uClJMXEAX_dRnm7&_nc_ht=scontent.fmnl4-5.fna&oh=00_AfD3AJAiXppT_X-TVoesT0DojgO2d5nrjuqx10HwQUAKtQ&oe=65E1C63B" alt="" class="user-profile"> 
<div class="profile-at-top-name text-muted">{{ currentUsername }}</div>
</div>

</div>



</div>

   




        

                <!-- Location Modal -->
                <div class="modal fade" id="locationModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Hotel's location</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="hotel-name">Hotel Name: <p class="text-primary d-inline mb-2">{{ hotelName }}</p></div>
                        <div class="mb-3">Hotel location <p class="text-primary d-inline">{{ hotelLocation }}</p></div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.36436456693!2d120.97935079999999!3d14.578301999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397ca2f1b3f6db3%3A0x4268a4edaa08a17d!2sM%20Hotel%20Manila!5e0!3m2!1sen!2sph!4v1709628253606!5m2!1sen!2sph" position="relative;" width="100%" height="70%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    
                        <p class="text-muted">Click the <span class="d-inline text-info">view large map</span> at the top to open a newtab</p>
                    </div>
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
                    <div class="about-website  p-2 rounded mb-2" :class="{'bg-primary text-light': aboutWebsiteIsClicked}" @click="aboutWebsiteIsClickedFunc"><i class="bi bi-info-circle" ></i> About website</div>
                </div>

                <div class="li">
                    <div class="income  p-2 rounded mb-2"  v-if="userType !== 'user'" :class="{'bg-primary text-light': incomeIsClicked}" @click="incomeIsClickedFunc"><i class="bi bi-cash"></i> Income</div>
                </div>


                <div class="li">
                    <div class="contact  p-2 rounded mb-2" :class="{'bg-primary text-light': contactIsClicked}" @click="contactIsClickedFunc"><i class="bi bi-telephone"></i> Contact</div>
                </div>


                <div class="li">
                    <div class="notifications  p-2 rounded mb-2" :class="{'bg-primary text-light': notificationIsClicked}" @click="notificationIsClickedFunc"><i class="bi bi-bell"></i> Notifications</div>
                </div>

                    <div class="container mt-3">
                        <hr>
                        <p class="text-muted fnt-natural">Trusted with over <span class="text-primary">1,500+</span> people</p>
                        <button class="btn btn-primary d-flex flex-row align-items-center">

                           
                            <lord-icon
                                src="https://cdn.lordicon.com/prjooket.json"
                                trigger="hover"
                                colors="primary:#ffffff"
                                style="width:20px;height:20px">
                            </lord-icon>
                            Read more</button>
                    </div>


            </div>
        </div>
      </div>  
      <div class="body d-flex flex-column"  v-if="!reservationIsClicked && !profileIsClicked && !aboutWebsiteIsClicked && !contactIsClicked">
        <div class="container-lg mt-0 card-container">
    <div class="row d-flex flex-row gap-3 justify-content-center align-items-center  pt-1">
        <div class="available-rooms col-lg-3 col-md-3 p-3 text-light rounded text-center ">Available Rooms <br> {{ availableRooms }}</div>
        <div class="all-users col-lg-3 col-md-3 p-3 text-light rounded text-center">All users <br> 2,000</div>
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
            <div class="content text-dark">{{room.rmInfo.roomInfoQoute}}</div>
            <div class="ratings text-dark">
                <i v-for="num in room.rmRating" :key="num.rmRating" class="bi bi-star-fill text-warning me-1"></i>
                <!-- <i class="bi bi-star-fill text-warning me-1"></i>
                <i class="bi bi-star-fill text-warning me-1"></i>
                <i class="bi bi-star-fill text-warning me-1"></i>
                <i class="bi bi-star text-warning me-1"></i> -->

            </div>
            </div>
            <div class="room-info-btn me-3 mt-4">
            <button class="btn btn-info" @click="roomInfoFunc(room.rmCount)">Room info</button>
           </div>
           </div>

          
        </div>
      </div>


      <!-- :style="{ backgroundImage: 'url('+  roomData[0].rmImage + ')' }" -->

     



       </div>

       <div class="room-info"> 
        <!-- roomData[0].rmImage -->
        <img :src="roomImage" alt="Room inage" style="position:relative;width:100%;height:30%;" v-if="roomImage != ''">
        
        
        <div class="room-info-content container p-0 mt-0 pt-0">
            <div class="rating-holder d-flex mt-0 pt-0 flex-row gap-2" v-if="roomImage != ''">
            <div v-for="num in roomRating" :key="num" class="  d-flex flex-row gap-2">
        <div><i class="bi bi-star-fill text-warning d-inline"></i></div>

        </div>
        
        <i class="bi bi-star d-inline" v-if="roomRating === 1 "></i>
        <i class="bi bi-star d-inline" v-if="roomRating < 2"></i>
        <i class="bi bi-star d-inline" v-if="roomRating < 3"></i>
        <i class="bi bi-star d-inline" v-if="roomRating < 4"></i>
        <i class="bi bi-star d-inline" v-if="roomRating < 5"></i>

        </div>
<!--         
        <div v-if="roomData[roomCount].available === true" class="bg-success">Available</div>
        <div v-if="roomData[roomCount].available === false" class="bg-warning">Not available</div> -->

        <div class="container" v-if="roomImage != ''">
           <div class="text-muted text-center mt-1 lead"> {{roomData[currentIndex -1].rmInfo.roomInfoQoute}}  </div>  <br>
           <span class="fw-bold " >Cr:</span>  {{ roomData[currentIndex -1].rmInfo.roomCr }}          <br>
           <span class="fw-bold " >room:</span>  {{ roomData[currentIndex -1].rmInfo.roomBed }}          <br>
           <span class="fw-bold">Features:</span> {{ roomData[currentIndex -1].rmInfo.roomFeatures }} <br>
           <span class="fw-bold">Price:</span> {{ roomData[currentIndex -1].rmInfo.roomPrice }}        <br><br>
        </div>
        
            <button class="btn btn-primary" style="transform: translateY(-50%);" v-if="roomImage != ''" data-bs-toggle="modal" data-bs-target="#reserveNowModal">Reserve Now!</button>
        
        </div>
            <div class="houseGIF-container container d-flex w-100 h-100 flex-column" v-if="roomImage === ''">
                <img class="houseGif" src="https://media3.giphy.com/media/JbEuH54me0ho96xbmU/source.gif" alt="House GIF">
                <h5 class="text-muted text-center pt-0 mt-0">Room info will appear here</h5>
            </div>






                                      
                                <div class="modal fade" id="reserveNowModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                    <div class="modal-header">
                                        <p class="modal-title" id="exampleModalLabel">Please fill up the form to continue the reservation</p>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                      <form class="form" id="reserveNowForm">
                                       
                                        <div class="input-group mb-3">
                                          <span class="input-group-text" id="reservationFirstname1"><i class="bi bi-person"></i></span>
                                            <input type="text" class="form-control" placeholder="Firstname" aria-label="Username" aria-describedby="reservationFirstname1" name="reservationFirstname" id="reservationFirstname" required>
                                        </div>

                                        <div class="input-group mb-3">
                                          <span class="input-group-text" id="reservationLastname1"><i class="bi bi-person"></i></span>
                                            <input type="text" class="form-control" placeholder="Lastname" aria-label="Username" aria-describedby="reservationLastname1" name="reservationLastname" id="reservationLastname" required>
                                        </div>

                                        <div class="input-group mb-3">
                                          <span class="input-group-text" id="reservationEmail1"><i class="bi bi-envelope"></i></span>
                                            <input type="text" class="form-control" placeholder="Email" aria-label="Username" aria-describedby="reservationEmail1" name="reservationEmail" id="reservationEmail" required>
                                        </div>

                                        <div>
                                            <p class="text-muted mb-0 pb-0">Enter the date you want to use the room</p>
                                            <input type="date" class="form-control mt-o" id="reservationDate" required>
                                        </div>

                                        <div class="container-fluid d-flex justify-content-end gap-2 mt-3">
                                            <div class="dropdown">
                                            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Additional
                                            </button>
                                            <ul class="dropdown-menu">
                                                <li><a class="dropdown-item" href="#" @click="addFood">food <span class="text-primary">500 PHP</span></a></li>
                                                <li><a class="dropdown-item" href="#" @click="addRoomUpgrades">Room upgrades <span class="text-primary">300 PHP</span></a></li>
                                                <li><a class="dropdown-item" href="#" @click="addTransportationService">Transportation Service <span class="text-primary">700 PHP</span></a></li>
                                            </ul>
                                            </div>
                                        <button type="submit" class="btn btn-primary"  id="reservationDone" data-bs-dismiss="modal" aria-label="Close" @click="reserveNowFunc">Done</button> 
                                        <!-- data-bs-dismiss="modal" aria-label="Close" -->

                                        </div>

                                      </form>
                                    </div>
                                        
                                    </div>
                                </div>
                                </div>



       </div>

       </div>
         
      </div>
        
       

                <!-- ReservationComponent -->
                <div class="body " v-if="reservationIsClicked" >
                <ReservationComponent v-if="getUserType !== 'user'"/>
                <ReservationComponentForUser v-if="getUserType === 'user' && finalCurrentIndexForReservation !== null"  :roomType="roomData[finalCurrentIndexForReservation -1].rmName" :roomPrice="roomData[finalCurrentIndexForReservation -1].rmInfo.roomPrice" :roomOccupacy="roomData[finalCurrentIndexForReservation -1].rmInfo.roomOccupacy" :roomCr="roomData[finalCurrentIndexForReservation -1].rmInfo.roomCr" :roomFeatures="roomData[finalCurrentIndexForReservation -1].rmInfo.roomFeatures" :reservationDate="reservationDate" :reserveNowDataAdditional="reserveNowDataAdditional[0].list"/>
               
                <!-- alt + z -->
                <div class="container-fluid text-center mt-5 pt-5" v-if="finalCurrentIndexForReservation === null">
                  <h1 class="text-muted mt-5">You don't have any reserve room yet</h1>
               </div>
                </div>

           <div class="body" v-if="profileIsClicked">
            <MyProfile :userType="userType"/>
           </div>

           <div class="body" v-if="aboutWebsiteIsClicked">
           <AboutWebsite />
        </div>

        <div class="body" v-if="contactIsClicked">
            <ContactComponent />
        </div>
    </div>
    
</template>
<script src="./scripts/IndexComponentScript.js"></script>


<style scoped>
@import url('./styles/indexComponent.css');

</style>