<template>
    <div class="body">
        
       <div class="cards-holder d-flex flex-row justify-content-around mt-3">
        <div class="card">
            <div class="card-body bg-primary rounded text-light">
                <h5 class="mb-0 pb-0 text-center">Available rooms</h5>
             <div class="container rounded text-center bg-warning text-dark pt-2 pb-2">
                500
             </div>
             <div class="container d-flex flex-row pt-2 d-flex flex-row justify-content-between gap-3">
                <div class="card-body-content ">Modified <br> Feb 12, 2024</div>
                <button class="btn btn-info">Edit</button>
             </div>
            </div>
        </div>

        <div class="card">
            <div class="card-body bg-primary rounded text-light">
                <h5 class="text-center mb-0 pb-0">Special guest</h5>

                <div class="container rounded text-center bg-warning text-dark pt-2 pb-2">
                50
             </div>
             <div class="container d-flex flex-row pt-2 d-flex flex-row justify-content-between gap-3">
                <div class="card-body-content ">Modified <br> Feb 12, 2024</div>
                <button class="btn btn-info">Edit</button>
             </div>


            </div>
        </div>

        <div class="card">
            <div class="card-body bg-primary rounded text-light">
                <h5 class="text-center mb-0 pb-0">Repairing room</h5>

                <div class="container rounded text-center bg-warning text-dark pt-2 pb-2">
                5
             </div>
             <div class="container d-flex flex-row pt-2 d-flex flex-row justify-content-between gap-3">
                <div class="card-body-content ">Modified <br> Feb 12, 2024</div>
                <button class="btn btn-info">Edit</button>
             </div>


            </div>
        </div>
       </div>

       <!-- ================================ -->
       <div class="list-of-current-costumers mt-4">
        <h5 class="text-dark">List of current customers</h5>
        <table class="list-of-current-costumers-table table table-striped ">
         <thead >
            <tr >
            <th class="bg-secondary text-light">Costumer name</th>
            <th class="bg-secondary text-light">Email</th>
            <th class="bg-secondary text-light">Province</th>
            <th class="bg-secondary text-light">Info</th>
         </tr>
         </thead>

         <tbody >
            <tr v-for="data in userDataHolder" :key="data.password">
            <td>{{  data.name }}</td>
            <td>{{  data.email }}</td>
            <td>{{  data.address.city }}</td>
            <td><button class="btn btn-primary"><i class="bi bi-eye"></i> See info</button></td>
         </tr>
         </tbody>
        </table>
       </div>
    </div>
</template>
<script>
import userData from '../../data/userData.json'
export default{
    name: 'ReservationComponent',
    data(){
        return{
            userDataHolder: userData
        }
    }
}
</script>

<style scoped>
.cards-holder .card .card-body .container .card-body-content{
    font-size: .7rem;
}

.list-of-current-costumers .list-of-current-costumers-table{
    position: relative;
    width: 100%;
    height: 100%;
}
.list-of-current-costumers .list-of-current-costumers-table tbody tr td{
    padding-top: 1rem;
}
.list-of-current-costumers .list-of-current-costumers-table tbody{
    overflow: scroll;

}
.list-of-current-costumers .list-of-current-costumers-table tbody .btn{
    transform: translateY(-10%);
}
.list-of-current-costumers{
    position: absolute;
    top: 30%;
    width: 98%;
    height: 100%;
    overflow: scroll;
}
</style>