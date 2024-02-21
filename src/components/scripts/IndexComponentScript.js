
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
            roomData: []
        }
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
                constructor(rmImage,rmName,rmInfo,rmRating){
                  this.rmImage = rmImage
                  this.rmInfo = rmInfo
                  this.rmName = rmName
                  this.rmRating = rmRating
                }
            }

            const rm1 = new ProvideRoomData('../../assets/hotel-room1.jpg','Couple room','Room info here',4)
            this.roomData.push(rm1)
        }
    },
    mounted(){
        this.roomDataInfo()
    }
}