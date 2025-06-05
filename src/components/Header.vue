<template>
  <header class="header">
        <div class="navbar-area">
            <div class="container">
                <div class="row align-items-center justify-content-center">
                    <div class="col-lg-8 position-relative p-0">
                        <div class="little-box"></div>
                         <div class="little-box-l"></div>
                        <nav class="navbar navbar-expand-lg">
                            <a class="navbar-brand logo" href="#">
                              <img src="../assets/images/daisy.png" alt=""> yuwah.
                            </a>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="toggler-icon"></span>
                                <span class="toggler-icon"></span>
                                <span class="toggler-icon"></span>
                            </button>

                            <div class="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                                <ul id="nav" class="navbar-nav ml-auto">
                                    <li class="nav-item" @click="scrollToAbout">
                                        <a href="#">About //</a>
                                    </li>
                                    <li class="nav-item" @click="scrollToPortfolio"><a href="#">Portfolio</a> </li>
                                    <li class="nav-item" @click="scrollToSkill"><a href="#">Skills</a></li>
                                    <li class="nav-item" @click="scrollToContace"><a href="#">Hire Me</a></li>
                                </ul>
                            </div>
                        </nav>
                        <!-- navbar -->
                         <div class="little-box-b-l"></div>
                         <div class="little-box-b-r"></div>

                    </div>
                </div>
                <!-- row -->
            </div>
            <!-- container -->
        </div>
        <!-- navbar area -->
    </header>

    
</template>

<script>
export default {
methods: {
    scrollToAbout() {
      const el = document.getElementById("about");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    },
    scrollToPortfolio() {
      const el = document.getElementById("portfolio");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    },
    scrollToSkill() {
      const el = document.getElementById("skill");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    },
    scrollToContace() {
      const el = document.getElementById("contact");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }
}
</script>

<style>
.navbar-nav .nav-item a{
    font-size:15px;
    font-weight:600;
}
.navbar-nav .nav-item a:hover{
    color: #29a587;
}
.navbar-nav .nav-item a::before{
    background: #29a587;
}
a.logo{
    font-size: 20px;
    color: #000;
    font-weight: 700;
}

a.logo > img{
    width: 40px;
}
.navbar-area {
    top:-32px;
    background-color: transparent;
}
.navbar{
    border: 3px solid #000;
    background-color: #ffffffba;
    border-radius: 0;
    padding: 0 30px;
}
.little-box{
background-color: #fff;
border: 3px solid #000;
width: calc(0.25rem * 2);
height: calc(0.25rem * 2);
right:-6px;
top:-6px;
position:absolute;
}
.little-box-l{
background-color: #fff;
border: 3px solid #000;
width: calc(0.25rem * 2);
height: calc(0.25rem * 2);
left:-6px;
top:-6px;
position:absolute;
}
.little-box-b-l{
background-color: #fff;
border: 3px solid #000;
width: calc(0.25rem * 2);
height: calc(0.25rem * 2);
left:-6px;
bottom:-6px;
position:absolute;
}
.little-box-b-r{
background-color: #fff;
border: 3px solid #000;
width: calc(0.25rem * 2);
height: calc(0.25rem * 2);
right:-6px;
bottom:-6px;
position:absolute;
}
</style>