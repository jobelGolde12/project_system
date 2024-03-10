<template>
    <div>
       <h4 class="text-muted ms-2">Contact</h4>

       <div class="container  d-flex align-items-left">
        <form class="form">

            <div class="input-group mb-3">
               <span class="input-group-text" ><i class="bi bi-person"></i></span>
               <input type="username" class="form-control" placeholder="Username" aria-label="Username" id="contactUsername" required>
               
            </div>


            <div class="input-group mb-3">
               <span class="input-group-text" ><i class="bi bi-envelope"></i></span>
               <input type="email" class="form-control" placeholder="Email" aria-label="Username" id="contactEmail" required>
               
            </div>

            <div>
                <p class="text-muted message">Message</p>
                <textarea id="contactMessage" cols="30" rows="8" class="form-control"></textarea>
            </div>

            <button class="btn btn-primary ps-3 pe-3 mb-3 mt-2">Submit</button>
        </form>
       </div>
    </div>
</template>

<script>
export default{
    name: 'ContactComponent'
}
</script>

<style scoped>

#contactMessage:hover .message{
    top: -50%;
    background: #000;
}
</style>