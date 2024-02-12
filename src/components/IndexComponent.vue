<template>
    <div class="main-container bg-light d-flex flex-row">
        
      <div class="sidenav bg-primary">
        <h1 class="text-light">Sidenav</h1>
      </div>  
      <div class="body bg-secondary d-flex flex-column">
       <div class="header bg-secondary"><h1 class="text-light">Header</h1></div>
       <div class="main-content bg-info"><h1 class="text-light">body</h1></div>
       
      </div>
        
    </div>
</template>

<style scoped>
.main-container{
 position: absolute;
 width: 100vw;
 height: 100vh;
}
.sidenav{
    position: relative;
    width: 20%;
    height: 100%;
}
.body{
    position: relative;
    height: 100%;
    flex: 1;

}
.body > .header{
    position: relative;
    height: 30%;
    width: 100%;
}
.body > .main-content{
    flex: 1;
    position: relative;
    width: 100%;
}
</style>