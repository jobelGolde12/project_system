<template>
    <div class=" my-profile-main-body">
      <div class="container bg-image-container">
        <img src="./hotel-room1.jpg" alt="Background Image" class="backgroundImage">
      </div>

      <div class="profile-pic-container">
        <img src="./hotel-room1.jpg" alt="profile pic" class="profile-pic">
      </div>

      <div class="container ms-4 name-and-qoute">
        <h4 class="mb-0 pb-0">Boggart</h4>
        <p class="text-muted">Make everything possible</p>
      </div>

      <div class=" usertype-container ms-3 container d-flex flex-row justify-content-between align-items-center">
        <div class="user-type container">User type: <span class="bg-primary text-light p-2 rounded">{{ userType }}</span></div>
        <div class="edit-profile"><button class="btn btn-info">Edit profile</button></div>
      </div>


      <div class="container previous-profile-container ps-4">
        <h5 class="ps-3">Previous profile</h5>
     
            <img src="./hotel-room1.jpg" alt="Previous profile">
       
      </div>

      <div class="footer-gap"></div>
    </div>
</template>

<script>
export default{
    name: 'MyProfile',
    data(){
        return{
            backgroundImage: '../assetes/my-profile.jpg',
            userType: 'Admin'
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
    width: 85vw;
    height: 70%;
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