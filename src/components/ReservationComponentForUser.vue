<template>
    <div class="container-xxl">
        <h4 class="text-muted mt-2">Your reservation info</h4>

        <div class="container" v-if="reservationData.length >0">
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
                    <tr v-for="data in reservationData" :key="data.rmType">
                        <td>{{ data.rmType }}</td>
                        <td>{{ data.rmPrice }}</td>
                        <td>{{ data.rmOccupacy }}</td>
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
                                      <p class="text-muted" v-if="reserveNowDataAdditional !== 'No additional'">Additional: {{ reserveNowDataAdditional }}</p>
                                      <p class="text-muted" v-if="reserveNowDataAdditional === 'No additional'">Additional: No additional</p>

                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-warning"  data-bs-dismiss="modal" aria-label="Close"  data-bs-toggle="modal" data-bs-target="#cancelReservationModal">Cancel reservation</button>
                                        <button type="button" class="btn btn-primary"  data-bs-dismiss="modal" aria-label="Close">Done</button>
                                    </div>
                                    </div>
                                </div>
                                </div>







                            <!-- A modal for cancelling the reservation -->
                            <div class="modal fade" id="cancelReservationModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Cancel reservation</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    
                                    <p class="text-muted">Why do you want to cancel the reservation?</p>
                                    <textarea name="cancelReservationTextArea" id="cancelReservationTextArea" cols="30" rows="10" class="form-control" v-model="cancelReservation" required></textarea>
                                    <div class="container mt-4">
                                        <div class="dropdown">
                                            <button class="btn btn-info dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Other options
                                            </button>
                                            <ul class="dropdown-menu">
                                                <li><a class="dropdown-item" href="#">Cannot afford room</a></li>
                                                <li><a class="dropdown-item" href="#">I am busy that time</a></li>
                                                <li><a class="dropdown-item" href="#">I don't want the room</a></li>
                                            </ul>
                                            </div>
                                    </div>
                                    <div class="container-fluid d-flex justify-content-end gap-3">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#cancelReservationModal2">Done</button>
                                    </div>
                                </div>
                            </div>
                            </div>
                            </div>




                            <!-- Another modal when the user finish the cancellation of reservation -->
                            <div class="modal fade" id="cancelReservationModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Cancel reservation</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                  <div class="container">

                                    <h5 class="text-muted">Room reservation has been cancelled, the information you entered will send to the admin</h5>
                                  </div>
                                    <div class="modal-footer d-flex justify-content-end">
                                    <button type="button" class="btn btn-primary" :data-bs-dismiss="handleCancelTheReservation"  @click="cancelReservationDone">Done</button>
                                    </div>
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
            reservationData: [],
            toggleReservation: false,
            cancelReservation: '',
            handleCancelTheReservation: ''
           
        }
    },
        props: ['roomType', 'roomPrice','roomOccupacy', 'roomCr', 'roomFeatures', 'reservationDate', 'reserveNowDataAdditional'],
    methods: {
    getTheReservationData(){
     
        if(this.roooBed !== null){
            this.reservationData.push({rmType: this.roomType, rmPrice: this.roomPrice, rmOccupacy: this.roomOccupacy})
        } 

     
    },

    cancelReservationDone(){
        this.reservationData = []
        this.toggleReservation = true
        this.$emit('toggleTheReservation',this.toggleReservation)

        let cancelReservationTextArea = document.getElementById('cancelReservationTextArea').value

        if(this.cancelReservationTextArea !== ''){
            this.handleCancelTheReservation = 'modal'
        }
        console.log(cancelReservationTextArea)

    }

    },
    mounted(){
        this.getTheReservationData()
    }
}

</script>