<template>
    <div class="container-xxl">
        <h4 class="text-muted mt-2">Your reservation info</h4>

        <div class="container">
            <table class="table table-striped mt-4">
                <thead>
                    <tr>
                        <th>Room type</th>
                        <th>Room price</th>
                        <th>Occupacy</th>
                        <th>Info</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{{ roomType }}</td>
                        <td>{{ roomPrice }}</td>
                        <td>{{ roomOccupacy }}</td>
                        <td><button class="btn btn-primary"  data-bs-toggle="modal" data-bs-target="#seeReservationInfoModal"><i class="bi bi-eye"></i> See</button></td>
                    </tr>
                </tbody>
            </table>
        </div>

                              <div class="modal fade" id="seeReservationInfoModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                    <div class="modal-header">
                                        <p class="modal-title" id="exampleModalLabel">Your reservation info</p>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                      <p class="text-muted">Room type: {{ roomType }}</p>
                                      <p class="text-muted">Room price: {{ roomPrice }}</p>
                                      <p class="text-muted">Room occupacy: {{ roomOccupacy }}</p>
                                      <p class="text-muted">Room cr: {{ roomCr }}</p>
                                      <p class="text-muted">Room features: {{ roomFeatures }}</p>
                                      <p class="text-muted">Date: {{ reservationDate }}</p>


                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-warning"  data-bs-dismiss="modal" aria-label="Close">Cancel reservation</button>
                                        <button type="button" class="btn btn-primary"  data-bs-dismiss="modal" aria-label="Close">Done</button>
                                    </div>
                                    </div>
                                </div>
                                </div>




        <div class="container-xxl mt-5 pt-5">
            <h5 class="text-muted">Past reservation info</h5>

             <div class="container mt-5">
                <h1 class="text-muted text-center">You don't have a past reservation</h1>
             </div>
        </div>


        
    </div>
</template>

<script>
export default{
    name: 'ReservationComponentForUser',
    data(){
        return{
            reservationData: []
           
        }
    },
        props: ['roomType', 'roomPrice','roomOccupacy', 'roomCr', 'roomFeatures', 'reservationDate'],
    methods: {
    getTheReservationData(){
     
        if(this.roooBed !== null){
            this.reservationData.push({rmBed : this.roomBed, rmPrice: this.roomPrice, rmOccupacy: this.roomOcupacy})
        } 
     
    }
    },
    mounted(){
        this.getTheReservationData()
    }
}

</script>