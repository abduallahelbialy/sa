<template>
   <footer :style="{display:  currentPath === '/homecontrol' || currentPath ==='/test'? 'none':'',}" >
        <div class="container">
            <div class="d-flex col-lg-12 border-bottom" >
                <div class="col-lg-4 d-flex justify-content-start f_logo align-items-start">
                    <img src="../assets/12345671.png" alt="">
                </div>
                <div class="col-lg-4 text-center text-white">
                    <div class="urls mb-4">
                        <a href=""><img src="../assets/Group 16320.png" alt=""></a>
                        <a href=""><img src="../assets/Group 16321.png" alt=""></a>
                        <a href=""><img src="../assets/Group 16319.png" alt=""></a>
                        <a href=""><img src="../assets/Group 42995.png" alt=""></a>
                    </div>
                    <p style="font-size: 12px;">Receiving customers in any business where there is a waiting line</p>
                    <p style="font-size: 10px;">Our team is the best to save your time</p>
                </div>
                <div class="col-lg-4 d-flex justify-content-end align-items-start">
                    <div class="top-btn"></div>
                </div>
            </div>
            <div class="d-flex justify-content-between align-items-center py-3">
                <p class="m-0 mr-2 text-white">© All Rights Abduallah El bialy 2024</p>
                <p class="m-0 text-white" style="font-size: 14px;">Developed By Vega Web <i class="fas fa-code"></i></p>
                <div class="privacy">
                    <a href="">Privacy Policy</a>
                    <a href="">Terms of Service</a>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
name:"footer",
data (){
    return{
              currentPath: window.location.pathname,

    }
}
}
</script>

<style>

</style>