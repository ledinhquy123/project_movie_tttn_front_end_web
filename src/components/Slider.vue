<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <!-- Slider -->
  <div class="slider">
    <div class="float">
      <div id="container_slider">
        <div id="ctai_slider">

          <!-- Logo RAP Phim -->
          <div>
            <img width="50%" :src="require('@/assets/images/logo.png')" title="Cine Aura">
          </div>

          <!-- Slides -->
          <div id="slides">
            <div style="width: 80%; margin: 40px auto;">
              <div id="demo" class="carousel slide" data-bs-ride="carousel">
                <!-- Indicators/dots -->
                <div class="carousel-indicators">
                  <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
                  <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                  <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                </div>

                <!-- Wrapper for slides -->
                <div class="carousel-inner">
                  <!-- Ảnh một -->
                  <div class="carousel-item active">
                    <img :src="require('@/assets/images/anhPhim1.png')" class="d-block w-100" alt="Los Angeles" style="width:100%; max-height: 375px;">
                  </div>
                  <!-- Ảnh hai -->
                  <div class="carousel-item">
                    <img :src="require('@/assets/images/anhPhim1.png')" class="d-block w-100" alt="Chicago" style="width:100%; max-height: 375px">
                  </div>
                  <!-- Ảnh ba -->
                  <div class="carousel-item">
                    <img :src="require('@/assets/images/anhPhim1.png')" class="d-block w-100" alt="New York" style="width:100%; max-height: 375px">
                  </div>

                </div>

                <!-- Left and right controls/icons -->
                <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon"></span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                  <span class="carousel-control-next-icon"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
#ctai_slider{
  display: grid;
  grid-template-columns: 25% 75%;
  align-items: center;
  text-align: center;
  background-color: #cccdcf;
  border: 2px dashed rgba(7, 8, 10, 0.5);
}
#slides{
  border-left: 2px dashed rgba(7, 8, 10, 0.5);
}
.slider{
  background: linear-gradient(to bottom, rgb(59, 63, 74), rgba(201, 64, 68, 0.8));
}
#container_slider{
  padding: 20px 0;
}
/* .carousel-indicators{
  list-style-type: none;
} */
</style>