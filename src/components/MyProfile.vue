<template>
    <div class=" my-profile-main-body" v-if="editProfileIsClicked === false">
      <div class="container bg-image-container">
        <img :src="backgroundImage" alt="Background Image" class="backgroundImage">
      </div>

      <div class="profile-pic-container">
        <img :src="profileImage" alt="profile pic" class="profile-pic">
      </div>

      <div class="container ms-4 name-and-qoute">
        <h4 class="mb-0 pb-0">Boggart</h4>
        <p class="text-muted">{{ quote }}</p>
      </div>

      <div class=" usertype-container ms-3 container d-flex flex-row justify-content-between align-items-center">
        <div class="user-type container">User type: <span class="bg-primary text-light p-2 rounded">{{ userType }}</span></div>
        <div class="edit-profile"><button class="btn btn-info" @click="editProfileFunc">Edit profile</button></div>
      </div>


      <div class="container previous-profile-container ps-4">
        <h5 class="ps-3">Previous profile</h5>
     
            <img :src="profileImage" alt="Previous profile">
       
      </div>

      <div class="footer-gap"></div>
    </div>

            <div class="my-profile-main-body" v-if="editProfileIsClicked">
             <div class="container">
                <h3 class="text-muted ms-2">Edit profile</h3>

               <div class="container-fluid row d-flex align-items-center mt-3">
                <div class="col-6 mt-2 ">
                   <h5 class="text-muted">Edit profile picture</h5>
                  <div class=""><input type="file" class="form-control" id="profilePicture" v-on:change="handleFileUpload"></div>
                </div>

                <div class="col-6 mt-2">
                  <h5 class="text-muted">Edit background image</h5>
                  <div class=""><input type="file" class="form-control" v-on:change="handleBackgroundImage"></div>
                </div>
               </div>

                <div class="container-fluid row mt-3">
                  <div class="col-6">
                    <h5 class="text-muted">Add Quote</h5>
                  <div ><input type="text" placeholder="Enter qoute here" class="form-control" v-model="quote"></div>
                  </div>
                  <div class="col-6 pt-1">
                    <button class="btn btn-primary mt-4" @click="applyAllChangesFunc">Apply all changes</button>
                  </div>
                </div>


                <div class=" profile-and-bg-handler container-fluid mt-5 d-flex" >
                    <div class="container mb-5 ">
                      <h5 class="text-muted mb-3" v-if="!yourPastProfile">Profile picture</h5>
                      <h5 class="text-muted" v-if="yourPastProfile">Your past profile</h5>
                      <img :src="profileImage" class="img-fluid w-100 h-50 profilePic" alt="Image of the file">
                    </div>
                    <div class="container mb-5 ">
                      <h5 class="text-muted mb-3" v-if="!yourPastBgImage">Background image</h5>
                      <h5 class="text-muted" v-if="yourPastBgImage">Your past background image</h5>
                      <img :src="backgroundImage" class="img-fluid w-100 h-50"  alt="Image of the file">
                    </div>
                </div>

                     <!-- <div class="container qoute-holder mt-5" v-if="quote !== ''">
                      <h5 class="text-muted">Quote</h5>
                      <p>{{ quote }}</p>
                     </div> -->

                <div class="container mt-5 pt-5"></div>
             </div>
            </div>
</template>

<script>
import getProfileImage from '../assets/profile.jpg'
export default{
    name: 'MyProfile',
    data(){
        return{
            profileImage: getProfileImage,
            editProfileIsClicked: false,
            profilePic: null,
            backgroundImage: 'https://images.rawpixel.com/image_social_landscape/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8zMF9hbl9hYnN0cmFjdF92aXN1YWxpemF0aW9uX29mX2FfYmxvY2tjaGFpbl9uZV80ZWIwODVmNC0yODFlLTRkYTMtYjdlMS00MmY1ZTFkMDkyM2VfMS5qcGc.jpg',
            quote: 'Make everything possible',
            yourPastBgImage: true,
            yourPastProfile: true
        }
    },
    props: ['userType'],
    methods: {
        editProfileFunc(){
           this.editProfileIsClicked = true
        },
        handleFileUpload(event){
                const getFile = event.target.files[0]
                this.profileImage = URL.createObjectURL(getFile)
                this.yourPastProfile = false
        },
        handleBackgroundImage(event){
                const getFile = event.target.files[0]
                this.backgroundImage = URL.createObjectURL(getFile)
                this.yourPastBgImage = false
        },

        applyAllChangesFunc(){
            this.editProfileIsClicked = false
        }
    }
}

</script>

<style scoped>
.my-profile-main-body{
    position: absolute;
    width: 80vw;
    height: 100vh;
    overflow-y: scroll;
    overflow-x: hidden;
}
.bg-image-container{
    position: absolute;
    top: 5%;
    left: 3%;
    width: 85%;
    height: 50%;
    border-radius: 10px;
    overflow: hidden;
}
.backgroundImage{
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    transition: .5s;
    
}
.backgroundImage:hover ,.profile-pic:hover{
    transform: scale(1.1);
}
.profile-pic-container{
    position: absolute;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    right: 15%;
    top: 35%;
    overflow: hidden;
}
.profile-pic{
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    transition: .5s;
}
.name-and-qoute{
    position: absolute;
    top: 57%;

}
.usertype-container{
    position: absolute;
    top: 80%;
    width: 87%;
}
.edit-profile button{
    font-size: 1rem;
    width: 150px;
}
.previous-profile-container{
    position: absolute;
    top: 95%;
    width: 80vw;
    height: 75%;
    margin-inline-start: 1.5rem;
    background-position: center ;
    background-size: cover;
}
.previous-profile-container img{
    position: relative;
    width: 83%;
    max-height: 100%;
    border-radius: 10px;
}.footer-gap{
    position: absolute;
    width: 100vw;
    height: 20%;
    top: 180%;
}
/* .profile-and-bg-handler .container .profilePic{
  position: relative;
  height: 36%;
  width: 100%;
} */
.profile-and-bg-handler{
  width: 100%;
  height: 90%;
  position: absolute;
}
</style>