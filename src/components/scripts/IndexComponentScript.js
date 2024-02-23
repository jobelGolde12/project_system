
import ReservationComponent from '../ReservationComponent.vue'
export default{
    name: 'IndexComponent',
    data(){
        return{
            changeTheme: false,
            albumData: [],
            hoverSidenavListBool: false,
            currentUsername: 'Jobel v. Golde',
            activeUser: 1500,
            availableRooms: 500,
            roomData: [],
            rm1: '../assets/hotel-room1.jpg',
            homeIsclicked: true,
            reservationIsClicked: false,
            profileIsClicked: false,
            roomIsClicked: false,
            aboutWebsiteIsClicked: false,
            incomeIsClicked: false,
            notificationIsClicked:false
        }
    },
    components:{
        ReservationComponent
    },
    methods: {
        changeThemeFunc(){
         this.changeTheme = !this.changeTheme
        },
        hoverSidenavList(){
         this.hoverSidenavListBool = !this.hoverSidenavListBool
        },
        roomDataInfo(){
            class ProvideRoomData{
                constructor(rmImage,rmName,rmInfo,rmRating, available){
                  this.rmImage = rmImage
                  this.rmInfo = rmInfo
                  this.rmName = rmName
                  this.rmRating = rmRating
                  this.available = available
                }
            }

            const rm1 = new ProvideRoomData('../assets/hotel-room1.jpg','Couple room','Room info here',4,true)
            const rm2 = new ProvideRoomData('../assets/hotel-room1.jpg','Couple room','Room info here',4 ,true)
            const rm3 = new ProvideRoomData('../assets/hotel-room1.jpg','Couple room','Room info here',4, true)
            const rm4 = new ProvideRoomData('../assets/hotel-room1.jpg','Couple room','Room info here',4 ,true)
            const rm5 = new ProvideRoomData('../assets/hotel-room1.jpg','Couple room','Room info here',4, true)
            const rm6 = new ProvideRoomData('../assets/hotel-room1.jpg','Couple room','Room info here',4 , true)
            const rm7 = new ProvideRoomData('../assets/hotel-room1.jpg','Couple room','Room info here',4 , false)
            const rm8 = new ProvideRoomData('../assets/hotel-room1.jpg','Couple room','Room info here',4 , false)
            const rm9 = new ProvideRoomData('../assets/hotel-room1.jpg','Couple room','Room info here',4, true)
            const rm10 = new ProvideRoomData('../assets/hotel-room1.jpg','Couple room','Room info here',4 , false)
            const rm11 = new ProvideRoomData('../assets/hotel-room1.jpg','Couple room','Room info here',4 ,true )
            const rm12 = new ProvideRoomData('../assets/hotel-room1.jpg','Couple room','Room info here',4 , true)
            const rm13 = new ProvideRoomData('../assets/hotel-room1.jpg','Couple room','Room info here',4, false)
            const rm14 = new ProvideRoomData('../assets/hotel-room1.jpg','Couple room','Room info here',4 , true)
            const rm15 = new ProvideRoomData('../assets/hotel-room1.jpg','Couple room','Room info here',4 , true)
            const rm16 = new ProvideRoomData('../assets/hotel-room1.jpg','Couple room','Room info here',4,  true)
            const rm17 = new ProvideRoomData('../assets/hotel-room1.jpg','Couple room','Room info here',4, false)
            const rm18 = new ProvideRoomData('../assets/hotel-room1.jpg','Couple room','Room info here',4, true)
            const rm19 = new ProvideRoomData('../assets/hotel-room1.jpg','Couple room','Room info here',4, true)
            const rm20 = new ProvideRoomData('../assets/hotel-room1.jpg','Couple room','Room info here',4, false)
            const rm21 = new ProvideRoomData('../assets/hotel-room1.jpg','Couple room','Room info here',4, true)
            const rm22 = new ProvideRoomData('../assets/hotel-room1.jpg','Couple room','Room info here',4, true)
            const rm23 = new ProvideRoomData('../assets/hotel-room1.jpg','Couple room','Room info here',4, true)
            const rm24 = new ProvideRoomData('../assets/hotel-room1.jpg','Couple room','Room info here',4, false)
            const rm25 = new ProvideRoomData('../assets/hotel-room1.jpg','Couple room','Room info here',4, false)
            const rm26 = new ProvideRoomData('../assets/hotel-room1.jpg','Couple room','Room info here',4, true)
            const rm27 = new ProvideRoomData('../assets/hotel-room1.jpg','Couple room','Room info here',4, true)
            const rm28 = new ProvideRoomData('../assets/hotel-room1.jpg','Couple room','Room info here',4, true)
            const rm29 = new ProvideRoomData('../assets/hotel-room1.jpg','Couple room','Room info here',4, false)
            const rm30 = new ProvideRoomData('../assets/hotel-room1.jpg','Couple room','Room info here',4, false)
            const rm31 = new ProvideRoomData('../assets/hotel-room1.jpg','Couple room','Room info here',4, false)
            const rm32 = new ProvideRoomData('../assets/hotel-room1.jpg','Couple room','Room info here',4, true)
            const rm33 = new ProvideRoomData('../assets/hotel-room1.jpg','Couple room','Room info here',4, true)
            const rm34 = new ProvideRoomData('../assets/hotel-room1.jpg','Couple room','Room info here',4, true)
            const rm35 = new ProvideRoomData('../assets/hotel-room1.jpg','Couple room','Room info here',4, true)
            const rm36 = new ProvideRoomData('../assets/hotel-room1.jpg','Couple room','Room info here',4, true)
            const rm37 = new ProvideRoomData('../assets/hotel-room1.jpg','Couple room','Room info here',4, true)
            const rm38 = new ProvideRoomData('../assets/hotel-room1.jpg','Couple room','Room info here',4, true)
            const rm39 = new ProvideRoomData('../assets/hotel-room1.jpg','Couple room','Room info here',4, true)
            const rm40 = new ProvideRoomData('../assets/hotel-room1.jpg','Couple room','Room info here',4,true)
            const rm41 = new ProvideRoomData('../assets/hotel-room1.jpg','Couple room','Room info here',4, false)
            const rm42 = new ProvideRoomData('../assets/hotel-room1.jpg','Couple room','Room info here',4, false)
            const rm43 = new ProvideRoomData('../assets/hotel-room1.jpg','Couple room','Room info here',4, false)
            const rm44 = new ProvideRoomData('../assets/hotel-room1.jpg','Couple room','Room info here',4, true)
            const rm45 = new ProvideRoomData('../assets/hotel-room1.jpg','Couple room','Room info here',4, false)
            const rm46 = new ProvideRoomData('../assets/hotel-room1.jpg','Couple room','Room info here',4, true)
            const rm47 = new ProvideRoomData('../assets/hotel-room1.jpg','Couple room','Room info here',4, false)
            const rm48 = new ProvideRoomData('../assets/hotel-room1.jpg','Couple room','Room info here',4, true)
            const rm49 = new ProvideRoomData('../assets/hotel-room1.jpg','Couple room','Room info here',4, false)
            const rm50 = new ProvideRoomData('../assets/hotel-room1.jpg','Couple room','Room info here',4, false)
            const rm51 = new ProvideRoomData('../assets/hotel-room1.jpg','Couple room','Room info here',4, true)

            this.roomData.push(rm1)
            this.roomData.push(rm2)
            this.roomData.push(rm3)
            this.roomData.push(rm4)
            this.roomData.push(rm5)
            this.roomData.push(rm6)
            this.roomData.push(rm7)
            this.roomData.push(rm8)
            this.roomData.push(rm9)
            this.roomData.push(rm10)
            this.roomData.push(rm11)
            this.roomData.push(rm12)
            this.roomData.push(rm13)
            this.roomData.push(rm14)
            this.roomData.push(rm15)
            this.roomData.push(rm16)
            this.roomData.push(rm17)
            this.roomData.push(rm18)
            this.roomData.push(rm19)
            this.roomData.push(rm20)
            this.roomData.push(rm21)
            this.roomData.push(rm22)
            this.roomData.push(rm23)
            this.roomData.push(rm24)
            this.roomData.push(rm25)
            this.roomData.push(rm26)
            this.roomData.push(rm27)
            this.roomData.push(rm28)
            this.roomData.push(rm29)
            this.roomData.push(rm30)
            this.roomData.push(rm31)
            this.roomData.push(rm32)
            this.roomData.push(rm33)
            this.roomData.push(rm34)
            this.roomData.push(rm35)
            this.roomData.push(rm36)
            this.roomData.push(rm37)
            this.roomData.push(rm38)
            this.roomData.push(rm39)
            this.roomData.push(rm40)
            this.roomData.push(rm41)
            this.roomData.push(rm42)
            this.roomData.push(rm43)
            this.roomData.push(rm44)
            this.roomData.push(rm45)
            this.roomData.push(rm46)
            this.roomData.push(rm47)
            this.roomData.push(rm48)
            this.roomData.push(rm49)
            this.roomData.push(rm50)
            this.roomData.push(rm51)


        },
        homeclickFunc(){
            this.homeIsclicked = true
            this.reservationIsClicked = false
            this.profileIsClicked = false
            this.roomIsClicked = false
            this.aboutWebsiteIsClicked = false
            this.incomeIsClicked = false
            this.notificationIsClicked =false
        },
        reservationIsClickedFunc(){
            this.homeIsclicked = false
            this.reservationIsClicked = true
            this.profileIsClicked = false
            this.roomIsClicked = false
            this.incomeIsClicked = false
            this.aboutWebsiteIsClicked = false
            this.notificationIsClicked =false
        },
        profileIsClickedFunc(){
            this.homeIsclicked = false
            this.reservationIsClicked = false
            this.profileIsClicked = true
            this.roomIsClicked = false
            this.incomeIsClicked = false
            this.aboutWebsiteIsClicked = false
            this.notificationIsClicked =false
        },
        roomIsClickedFunc(){
            this.homeIsclicked = false
            this.reservationIsClicked = false
            this.profileIsClicked = false
            this.roomIsClicked = true
            this.incomeIsClicked = false
            this.aboutWebsiteIsClicked = false
            this.notificationIsClicked =false
        },
        aboutWebsiteIsClickedFunc(){
            this.homeIsclicked = false
            this.reservationIsClicked = false
            this.profileIsClicked = false
            this.roomIsClicked = false
            this.incomeIsClicked = false
            this.aboutWebsiteIsClicked = true
            this.notificationIsClicked =false
        },
        incomeIsClickedFunc(){
            this.homeIsclicked = false
            this.reservationIsClicked = false
            this.profileIsClicked = false
            this.roomIsClicked = false
            this.aboutWebsiteIsClicked = false
            this.incomeIsClicked = true
            this.notificationIsClicked =false
        },
        notificationIsClickedFunc(){
            this.homeIsclicked = false
            this.reservationIsClicked = false
            this.profileIsClicked = false
            this.roomIsClicked = false
            this.aboutWebsiteIsClicked = false
            this.incomeIsClicked = false
            this.notificationIsClicked =true
        }
    },
    mounted(){
        this.roomDataInfo()
    }
}