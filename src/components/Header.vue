<template>
  <div class="navbar-area">
    <div class="container">
      <div class="row align-items-center justify-content-center">
        <div class="col-lg-8 position-relative p-0">
          <div class="little-box"></div>
          <div class="little-box-l"></div>

          <nav class="navbar navbar-expand-lg">
            <a class="navbar-brand logo" @click="gotoHome" style="cursor:pointer;">my portfolio.
            </a>

            <!-- Hamburger -->
            <button @click="toggleMenu" class="navbar-toggler" type="button" aria-label="Toggle navigation">
              <span class="toggler-icon"></span>
              <span class="toggler-icon"></span>
              <span class="toggler-icon"></span>
            </button>

            <!-- Menu -->
            <div :class="['sub-menu-bar', 'navbar-collapse', { open: isOpen }]">
              <ul id="nav" class="navbar-nav ml-auto">
                <li class="nav-item" @click="scrollToAbout">
                  <a href="#">About //</a>
                </li>
                <li class="nav-item" @click="scrollToPortfolio">
                  <a href="#">Portfolio</a>
                </li>
                <li class="nav-item" @click="scrollToSkill">
                  <a href="#">Skills</a>
                </li>
                <li class="nav-item" @click="scrollToContace">
                  <a href="#">Hire Me</a>
                </li>
              </ul>
            </div>
          </nav>

          <div class="little-box-b-l"></div>
          <div class="little-box-b-r"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
    gotoHome(){
      this.$router.push('/');
    },
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
    top:20px;
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
/* Toggle menu on small screens */
.sub-menu-bar {
  display: flex;
}

@media (max-width: 991px) {
  .sub-menu-bar {
    display: none;
    flex-direction: column;
  }

  .sub-menu-bar.open {
    display: block;
  }
}

/* Hamburger styling if needed */
.navbar-toggler {
  border: none;
  background: none;
}
.toggler-icon {
  display: block;
  width: 25px;
  height: 3px;
  background-color: #000;
  margin: 4px 0;
}
@media only screen and (max-width: 767px){
  .navbar-area{top:0;}
}
</style>