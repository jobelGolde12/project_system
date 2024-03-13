<template>
    <div class=" my-profile-main-body" v-if="!editProfileIsClicked">
      <div class="container bg-image-container">
        <img src="https://images.rawpixel.com/image_social_landscape/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8zMF9hbl9hYnN0cmFjdF92aXN1YWxpemF0aW9uX29mX2FfYmxvY2tjaGFpbl9uZV80ZWIwODVmNC0yODFlLTRkYTMtYjdlMS00MmY1ZTFkMDkyM2VfMS5qcGc.jpg" alt="Background Image" class="backgroundImage">
      </div>

      <div class="profile-pic-container">
        <img :src="profileImage" alt="profile pic" class="profile-pic">
      </div>

      <div class="container ms-4 name-and-qoute">
        <h4 class="mb-0 pb-0">Boggart</h4>
        <p class="text-muted">Make everything possible</p>
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
                <h3 class="text-muted">Edit profile</h3>

                <div class="container-fluid d-flex flex-column gap-1 mt-5">
                  <div> <h5 class="text-muted">Edit profile picture</h5></div>
                  <div class="w-50"><input type="file" class="form-control" id="profilePicture"></div>
                </div>

                <div class="container-fluid d-flex flex-column gap-1 mt-5">
                  <div> <h5 class="text-muted">Edit background image</h5></div>
                  <div class="w-50"><input type="file" class="form-control"></div>
                </div>

                <div class="container-fluid d-flex flex-column gap-1 mt-5">
                  <div> <h5 class="text-muted">Add Qoute</h5></div>
                  <div class="w-50"><input type="text" placeholder="Enter qoute here" class="form-control"></div>
                  <button class="btn btn-primary w-50 mt-5" @click="applyAllChangesFunc">Apply all changes</button>
                </div>


                <img :src="profilePic" alt="Image of the file">

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
            profilePic: ''
        }
    },
    props: ['userType'],
    methods: {
        editProfileFunc(){
           this.editProfileIsClicked = true
           console.log('clicked') 
        },

        applyAllChangesFunc(){
            let profilePicture = document.getElementById('profilePicture')

           this.profilePic =  URL.createObjectURL(profilePicture.file[0])
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
</style>