
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
            img: '../../assets/my-profile.jpg',
            homeIsclicked: true,
            reservationIsClicked: false,
            profileIsClicked: false,
            roomIsClicked: false,
            aboutWebsiteIsClicked: false,
            incomeIsClicked: false,
            notificationIsClicked:false,
            userType: ''
        }
    },
    props: ['getUserType'],
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
                constructor(rmImage,rmName,rmInfo,rmRating, available , rmCount){
                  this.rmImage = rmImage
                  this.rmInfo = rmInfo
                  this.rmName = rmName
                  this.rmRating = rmRating
                  this.available = available
                  this.rmCount = rmCount
                }
            }

            const rm1 = new ProvideRoomData('https://www.berjayahotel.com/sites/default/files/hotel-room-type/makati/04-premier-room.jpg','Couple room','Room info here',4,true,1)
            const rm2 = new ProvideRoomData('https://www.nobuhotelmanila.com/rooms/images/FA-Primier.jpg','Couple room','Room2 info here',4 ,true,2)
            const rm3 = new ProvideRoomData('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/aa/71/f6/cheap-price-based.jpg?w=1200&h=-1&s=1','Couple room','Room3 info here',4, true,3)
            const rm4 = new ProvideRoomData('https://s3-cdn.hotellinksolutions.com/hls/data/1044/website/general/bn/mobile_ban2.jpg','Couple room','Room4 info here',4 ,true,4)
            const rm5 = new ProvideRoomData('https://cdn4.equinox-hotels.com/wp-content/uploads/2019/12/25163413/deluxekingcity-room-cityview.webp','Couple room','Room5 info here',4, true,5)
            const rm6 = new ProvideRoomData('https://images.oyoroomscdn.com/uploads/hotel_image/100327/medium/8afe4fe548f3313c.jpg','Couple room','Room info here',4 , true,6)
            const rm7 = new ProvideRoomData('https://www.kayak.com.ph/rimg/himg/0b/4f/cd/expediav2-2170076-5b0ba2-373710.jpg?width=1366&height=768&crop=true','Couple room','Room info here',4 , false,7)
            const rm8 = new ProvideRoomData('https://cf.bstatic.com/xdata/images/hotel/max1024x768/500106660.jpg?k=b60b775b4c1fccf3207d14677279ed98f90b9a9756c42282a7dd705bf7ca469e&o=&hp=1','Couple room','Room info here',4 , false,8)
            const rm9 = new ProvideRoomData('https://images.trvl-media.com/lodging/10000000/9020000/9016700/9016660/790d25dc.jpg?impolicy=fcrop&w=608&h=342&p=0.5&q=mediumHigh','Couple room','Room info here',4, true,9)
            const rm10 = new ProvideRoomData('https://www.hotelsbarriere.com/content/dam/hotels/CAN/CANGA/chambres-%26-suites/615x550/chamsuppterrasseville.jpg/jcr%3Acontent/renditions/cq5dam.web.1280.1280.jpeg','Couple room','Room info here',4 , false,10)
            const rm11 = new ProvideRoomData('https://d8a6qj9sir70y.cloudfront.net/media/dgnbzshf/acl-rm-deluxe-family-kids-at-apex-dsc01812.jpg?mode=crop&width=1000&height=666','Couple room','Room info here',4 ,true ,11)
            const rm12 = new ProvideRoomData('https://ak-d.tripcdn.com/images/0226a12000ar4jif8965B_R_550_412_R5.jpg','Couple room','Room info here',4 , true,12)
            const rm13 = new ProvideRoomData('https://cdn.daybreakhotels.com/images/hotels/5164930/01_New_York_Hilton_Midtown_79054513_4K.0x33d88969d4f1f7c3300e67c1b33c9313.L.jpg?size=L&quality=85&width=1134','Couple room','Room info here',4, false,13)
            const rm14 = new ProvideRoomData('https://www.caesars.com/content/dam/empire/cac/rooms/deluxe/1920x1080/cac-deluxe-king-1920x1080.jpg','Couple room','Room info here',4 , true,14)
            const rm15 = new ProvideRoomData('https://www.berjayahotel.com/sites/default/files/hotel-room-type/makati/01-deluxe-room.jpg','Couple room','Room info here',4 , true,16)
            const rm16 = new ProvideRoomData('https://tagaytay-sixb.tagaytay-city-hotels.com/data/Pictures/OriginalPhoto/12872/1287269/1287269074/picture-tagaytay-city-tagaytay-hotel-sixb-30.JPEG','Couple room','Room info here',4,  true,17)
            const rm17 = new ProvideRoomData('https://c.otcdn.com/imglib/hotelfotos/7/048/grand-astoria-hotel-zamboanga-city-20231010041524487000.jpg','Couple room','Room info here',4, false,18)
            const rm18 = new ProvideRoomData('https://webbox.imgix.net/images/orzvknidmcqimzcm/4083d66f-9597-4472-9df2-754bb97a3088.jpg?auto=format,compress&fit=crop&crop=entropy&w=750&h=600','Couple room','Room info here',4, true,19)
            const rm19 = new ProvideRoomData('https://www.queensangeles.com/media/k2/items/cache/8012f255a337782bffaadea968723f36_L.jpg','Couple room','Room info here',4, true,20)
            const rm20 = new ProvideRoomData('https://i.travelapi.com/lodging/2000000/1760000/1758000/1757987/556e318b_z.jpg','Couple room','Room info here',4, false,21)
            const rm21 = new ProvideRoomData('https://www.lemontreehotels.com/Images/slider/29_22_2023_11_22_025.-Deluxe-Room,-King-Bed.jpg','Couple room','Room info here',4, true,22)
            const rm22 = new ProvideRoomData('https://image-tc.galaxy.tf/wijpeg-59cca3y68nz7tagkfuzg82eas/cityseasonsdubai-cityseasonshotel-cityseasonshoteldubai-cityseasonsdubaihotel-hotelindubai-dubaijotels-dubairooms-hotelroom-hotelrooms-dubairooms_standard.jpg?crop=400%2C0%2C1200%2C900','Couple room','Room info here',4, true,23)
            const rm23 = new ProvideRoomData('https://www.inntelhotelsamsterdamcentre.nl/wp-content/uploads/sites/7/2020/05/Inntel-Hotels-Amsterdam-Centre-Single-Room-Overview-1030x687.jpg','Couple room','Room info here',4, true,24)
            const rm24 = new ProvideRoomData('https://w.hotels-mexico-city.com/data/Pics/OriginalPhoto/13508/1350887/1350887719/w-hotel-mexico-city-pic-30.JPEG','Couple room','Room info here',4, false,25)
            const rm25 = new ProvideRoomData('https://www.colcordhotel.com/resourcefiles/home-room-slider-images/colcord-hotel-rooms-queen-double-beds.jpg?version=2142024194555','Couple room','Room info here',4, false,26)
            const rm26 = new ProvideRoomData('https://www.jeddah-hotels-sa.com/data/Photos/OriginalPhoto/10250/1025049/1025049250/jeddah-city-view-hotel-by-crown-town-photo-19.JPEG','Couple room','Room info here',4, true,27)
            const rm27 = new ProvideRoomData('https://images.trvl-media.com/lodging/38000000/37160000/37153600/37153573/9ceda20a.jpg?impolicy=fcrop&w=608&h=342&p=0.5&q=mediumHigh','Couple room','Room info here',4, true,28)
            const rm28 = new ProvideRoomData('https://pix10.agoda.net/hotelImages/1126781/-1/7db715e1be3668caf28ccceadc46e3d3.jpg?ce=0&s=702x392','Couple room','Room info here',4, true,29)
            const rm29 = new ProvideRoomData('https://img.freepik.com/premium-photo/generic-concept-luxury-hotel-room-hotel-close-tourist-attraction-modern-city_451699-246.jpg','Couple room','Room info here',4, false,30)
            const rm30 = new ProvideRoomData('https://www.grandcentralhotelbelfast.com/wp-content/uploads/2018/09/city-suite-02.jpg','Couple room','Room info here',4, false,31)
            const rm31 = new ProvideRoomData('https://image-tc.galaxy.tf/wijpeg-44dqcz134nh9c6mjaha92ltsa/1-deluxe-room-city-view-twin_wide.jpg?crop=0%2C25%2C800%2C450','Couple room','Room info here',4, false,32)
            const rm32 = new ProvideRoomData('https://cdn1.clickthecity.com/wp-content/uploads/2023/08/15082639/Seda-Manila-Bay-Deluxe-King-Room-1024x631.jpg','Couple room','Room info here',4, true,33)
            const rm33 = new ProvideRoomData('https://qtxasset.com/cdn-cgi/image/w=384,h=216,f=auto,fit=crop,g=0.5x0.5/https://qtxasset.com/quartz/qcloud1/media/image/Cama%20suite%20205.jpg?VersionId=CrlP3biOS8VR6HPZIi73ZZpA_K02qZ3j','Couple room','Room info here',4, true,34)
            const rm34 = new ProvideRoomData('https://media-cdn.tripadvisor.com/media/photo-s/11/13/1a/f8/photo1jpg.jpg','Couple room','Room info here',4, true,35)
            const rm35 = new ProvideRoomData('https://www.thegrandyork.co.uk/wp-content/uploads/elementor/thumbs/Heritage-Suite-454-Bedroom-Roman-House-min-q23v365yakb8sr2urqt7rdcxdbb9oe2939e3n5vii8.jpg','Couple room','Room info here',4, true,36)
            const rm36 = new ProvideRoomData('https://lh3.googleusercontent.com/proxy/k78RwGJWjTxd5I1ZHV5CYHnGaRJqBOp0GBtGpRrfBQYfowPj1N981XW_n-RxoYgcPeT-QFY0qr83-6hmBXtNRuG79-xtskiV9uiXcTfYuGgP3vUgF_SpX3q5P5BYc2nq0479Vn1tuI7jkzvSNdqeFfYsEFkHHaaXC5UgW6NbXrI','Couple room','Room info here',4, true,37)
            const rm37 = new ProvideRoomData('https://www.zurich-hotels-now.com/data/Photos/700x500/8187/818747/818747429/hotel-old-town-zurich-photo-1.JPEG','Couple room','Room info here',4, true,38)
            const rm38 = new ProvideRoomData('https://i.guim.co.uk/img/static/sys-images/Travel/Pix/pictures/2014/3/14/1394812315147/Thao-Dien-Village-Ho-Chi--001.jpg?width=445&dpr=1&s=none','Couple room','Room info here',4, true,39)
            const rm39 = new ProvideRoomData('https://symphony.cdn.tambourine.com/_pacifica-hotels/media/marina-del-rey-rooms-grand-one-bedroom-marina-suite-02-5f03993dbbf97.jpg','Couple room','Room info here',4, true,40)
            const rm40 = new ProvideRoomData('https://www.themidlandhotel.co.uk/image/fit/1250x600/cms/midland/images/new/themidland_bedroom_2023v2.jpg','Couple room','Room info here',4,true,41)
            const rm41 = new ProvideRoomData('https://ik.imgkit.net/3vlqs5axxjf/external/ik-seo/http://images.ntmllc.com/v4/Hotel/T27/T27983/T27983_ROM_Z26700/Majestic-City-Retreat-Hotel-Room.JPG?tr=w-780%2Ch-437%2Cfo-auto','Couple room','Room info here',4, false,42)
            const rm42 = new ProvideRoomData('https://virginhotels.com/media/bnqohz2y/chamber-king.jpg?width=1500&height=820&quality=60&v=1d9c06090ae3670','Couple room','Room info here',4, false,43)
            const rm43 = new ProvideRoomData('https://pix10.agoda.net/hotelImages/13416444/-1/1bd6ad86d4aafc2839c2cc2cecd6ca2b.jpg?ca=29&ce=0&s=702x392','Couple room','Room info here',4, false,44)
            const rm44 = new ProvideRoomData('https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_600,q_auto,w_600//hotelier-images/4a/8d/549ad211f33d8466e4f10ca0b85c46d1dead14cca311f5af3db77ea4de94.jpeg','Couple room','Room info here',4, true,45)
            const rm45 = new ProvideRoomData('https://image-tc.galaxy.tf/wijpeg-exj43dse42bwv7kketc7oi70v/premium-sea-view-bed-room-2_standard.jpg?crop=111%2C0%2C1779%2C1334','Couple room','Room info here',4, false,46)
            const rm46 = new ProvideRoomData('https://oyohcity.hotels-manila.com/data/Images/OriginalPhoto/7375/737571/737571472/manila-24h-apartment-hotel-image-18.JPEG','Couple room','Room info here',4, true,47)
            const rm47 = new ProvideRoomData('https://i.travelapi.com/lodging/12000000/11930000/11923600/11923550/acb8a3c1_z.jpg','Couple room','Room info here',4, false,48)
            const rm48 = new ProvideRoomData('https://images.trvl-media.com/hotels/11000000/10380000/10376800/10376757/cba959a0_z.jpg','Couple room','Room info here',4, true,49)
            const rm49 = new ProvideRoomData('https://remington-hotel-pasay.at-hotels.com/data/Pictures/OriginalPhoto/12837/1283770/1283770261/manila-remington-hotel-picture-4.JPEG','Couple room','Room info here',4, false,50)
            const rm50 = new ProvideRoomData('https://content.jdmagicbox.com/comp/paonta_sahib/a8/9999p1704.1704.130429173318.s8a8/catalogue/city-heart-hotel-paonta-sahib-paonta-sahib-hotels-2eivs34ph7.jpg','Couple room','Room info here',4, false,51)
            const rm51 = new ProvideRoomData('https://tagaytay-sixb.tagaytay-city-hotels.com/data/Pictures/OriginalPhoto/12872/1287281/1287281155/picture-tagaytay-city-tagaytay-hotel-sixb-25.JPEG','Couple room','Room info here',4, true,52)

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

            this.userType = this.$props.getUserType
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