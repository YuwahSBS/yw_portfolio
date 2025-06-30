<template>
     <!-- tpm-header-area start -->
    <header class="tmp-header-area-start header-one header--sticky header--transparent">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="header-content">
                        <div class="logo">
                            <a href="index.html">
                                <img class="logo-dark" src="../assets/images/images/white-logo-reeni.png" alt="Reeni - Personal Portfolio HTML Template for developers and freelancers">
                                <img class="logo-white" src="../assets/images/images/logo-white.png" alt="Reeni - Personal Portfolio HTML Template for developers and freelancers">
                            </a>
                        </div>
                        <nav class="tmp-mainmenu-nav d-none d-xl-block">
                            <ul class="tmp-mainmenu">
                                <li>
                                    <a href="#" >Home
                                    </a>
                                </li>
                                <li>
                                    <a href="#" @click="scrollToAbout">About</a>
                                </li>
                                <li>
                                    <a href="#" @click="scrollToPortfolio">Projects</a>
                                </li>
                                <li>
                                    <a href="#" @click="scrollToSkill">Skills</a>
                                </li>
                               
                                <li>
                                    <a href="#" @click="scrollToContace">Contact Us</a>
                                </li>
                            </ul>

                        </nav>
                        <div class="tmp-header-right">
                          
                            <div class="actions-area">
                                <div class="tmp-side-collups-area d-none d-xl-block">
                                    <button class="tmp-menu-bars tmp_button_active"><i class="fa-regular fa-bars-staggered"></i></button>
                                </div>
                                <div class="tmp-side-collups-area d-block d-xl-none" @click="toggleMenu">
                                    <button class="tmp-menu-bars humberger_menu_active"><i class="fa-regular fa-bars-staggered"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <!-- tpm-header-area end -->
    <div class="d-none d-xl-block">
        <div class="tmp-sidebar-area tmp_side_bar">
            <div class="inner">
                <div class="top-area">
                    <a href="#" class="logo">
                        <img class="logo-dark" src="../assets/images/images/white-logo-reeni.png" alt="yw-portfolio">
                        <img class="logo-white" src="../assets/images/images/logo-white.png" alt="yw-portfolio">
                    </a>
                    <div class="close-icon-area">
                        <button class="tmp-round-action-btn close_side_menu_active">
                            <i class="fa-sharp fa-light fa-xmark"></i>
                        </button>
                    </div>
                </div>
                <div class="content-wrapper">
                    <div class="image-area-feature">
                        <a href="#">
                            <img src="../assets/images/images/man.png" alt="yw-logo">
                        </a>
                    </div>
                    <h5 class="title mt--30">Freelancer delivering exceptional Webflow, and Next.js solutions.</h5>
                    <p class="disc">
                        From Myanmar, Yangon. I have rich experience in Front End web development and design, also I am good at wordpress. 
                        I love to talk with you about our unique.
                    </p>
                    <div class="short-contact-area">
                        <!-- single contact information -->
                        <div class="single-contact">
                            <i class="fa-solid fa-phone"></i>
                            <div class="information tmp-link-animation">
                                <span>Call Now</span>
                                <a href="#" class="number">+959 4421 488 68 </a>
                            </div>
                        </div>
                        <!-- single contact information end -->

                        <!-- single contact information -->
                        <div class="single-contact">
                            <i class="fa-solid fa-envelope"></i>
                            <div class="information tmp-link-animation">
                                <span>Mail Us</span>
                                <a href="#" class="number">yuwahtetaung6@gmail.com</a>
                            </div>
                        </div>
                        <!-- single contact information end -->

                        <!-- single contact information -->
                        <div class="single-contact">
                            <i class="fa-solid fa-location-crosshairs"></i>
                            <div class="information tmp-link-animation">
                                <span>My Address</span>
                                <span class="number">Yangon, Myanmar</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <a class="overlay_close_side_menu close_side_menu_active" href="javascript:void(0);"></a>
    </div>

    <div class="d-block d-xl-none">
        <div class="tmp-popup-mobile-menu" :class="{ active: isMenuActive }">
            <div class="inner">
                <div class="header-top">
                    <div class="logo">
                        <a href="#" class="logo-area">
                            <img class="logo-dark" src="../assets/images/images/white-logo-reeni.png" alt="yw-portfolio">
                            <img class="logo-white" src="../assets/images/images/logo-white.png" alt="yw-portfolio">
                        </a>

                    </div>
                    <div class="close-menu" @click="closeMenu">
                        <button class="close-button tmp-round-action-btn">
                            <i class="fa-sharp fa-light fa-xmark"></i>
                        </button>
                    </div>
                </div>
                <ul class="tmp-mainmenu">
                    <li>
                        <a href="#">Home
                        </a>
                    </li>
                    <li>
                        <a @click="scrollToAbout">About</a>
                    </li>
                    <li>
                        <a href="#" @click="scrollToPortfolio">Projects
                        </a>
                    </li>
                    <li>
                        <a href="#" @click="scrollToSkill">Skills
                        </a>
                    </li>
                    <li>
                        <a @click="scrollToContace">Contact</a>
                    </li>
                    
                </ul>

<!-- 
                <div class="social-wrapper mt--40">
                    <span class="subtitle">find with me</span>
                    <div class="social-link">
                        <a href="#"><i class="fa-brands fa-instagram"></i></a>
                        <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                        <a href="#"><i class="fa-brands fa-twitter"></i></a>
                        <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                    </div>
                </div> -->
                <!-- social area end -->



            </div>
        </div>
    </div>


    <!-- tmp banner area start -->
    <div class="rpp-banner-two-area">
        <div class="container">
            <div class="banner-two-main-wrapper">
                <div class="row align-items-center">
                    <div class="col-lg-6 order-lg-2">
                        <div class="banner-right-content">
                            <div class="main-img">
                                <img class="tmp-scroll-trigger tmp-zoom-in animation-order-1" src="../assets/images/images/banner-user-image-two.png" alt="banner-img">
                                <h2 class="banner-big-text-1 up-down-2">Web Designer</h2>
                                <h2 class="banner-big-text-2 up-down">Frontend Developer</h2>
                                <div class="benner-two-bg-red-img">
                                    <img src="../assets/images/images/banner-user-image-two-red-bg.png" alt="red-img">
                                </div>
                                <div class="logo-under-img-wrap">
                                    <div class="logo-under-img">
                                        <img src="../assets/images/images/logo-under-image.png" alt="logo-under-image">
                                    </div>
                                    <div class="logo-under-img-2">
                                        <img src="../assets/images/images/logo-under-image-2.png" alt="logo-under-image">
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 order-lg-1 mt--100">
                        <div class="sub-title tmp-scroll-trigger tmp-fade-in animation-order-1">I'm a</div>
                        <div class="inner">
                     
                        <div class="wrapper">
                            <ul class="dynamic-txts">
                                <li><span>Frontend Developer</span></li>
                                <li><span>WordPress Developer</span></li>
                                <li><span>Web Designer</span></li>
                                <li><span>UI/UX Designer</span></li>
                            </ul>
                            </div>
                            <!-- <span class="sub-title tmp-scroll-trigger tmp-fade-in animation-order-1">I am</span>
                            <h1 class="title tmp-scroll-trigger tmp-fade-in animation-order-2">
                                Ralph Edwards <br>
                                
                                <span class="header-caption">
                                    <span class="cd-headline clip is-full-width">
                                        <span class="cd-words-wrapper dynamic-text">
                                            <b class="is-visible theme-gradient">Web Designer</b>
                                            <b class="is-hidden theme-gradient">Frontend Developer</b>
                                            <b class="is-hidden theme-gradient">UI/UX Designer</b>
                                            <b class="is-hidden theme-gradient">Wordpress Developer</b>
                                        </span>
                                </span>
                                </span>
                            </h1> -->
                            <p class="disc tmp-scroll-trigger tmp-title-split tmp-fade-in animation-order-3">
                                From Myanmar, Yangon. I have rich experience in <span>Front End</span> web development and <span>design</span>, also I am good at <span>wordpress</span>. 
                                I love to talk with you about our unique.
                            </p>
                            <div class="button-area-banner-two tmp-scroll-trigger tmp-fade-in animation-order-4">

                                <a class="tmp-btn hover-icon-reverse radius-round" @click="scrollToAbout">
                                    <span class="icon-reverse-wrapper">
                                        <span class="btn-text">More About Us</span>
                                    <span class="btn-icon"><i class="fa-sharp fa-regular fa-arrow-right"></i></span>
                                    <span class="btn-icon"><i class="fa-sharp fa-regular fa-arrow-right"></i></span>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div class="banner-shape-two">
            <img src="../assets/images/images/banner-shape-two.png" alt="">
        </div>
    </div>
    <!-- tmp banner area end -->

    <!-- tmp text para start -->
    <div class="about-content-area">
        <div class="container tmp-section-gap">
            <div class="text-para-doc-wrap">
                <h2 class="text-para-documents" ref="scrollSplit" >
                    Hello! I'm Yu Wah, a passionate Frontend Developer with 8+ years of experience specializing in <span>Angular</span>, 
                    <span>Vue</span>, <span>React</span> and <span>wordpress</span> with a solid foundation in <span>UI/UX design</span>. I've worked on a range of projects, including admin dashboards, 
                    e-commerce platforms, different kinds of websites, and job seeker site.
                </h2>
                <div class="right-bg-text-para">
                    <img src="../assets/images/images/right-bg-text-para-doc.png" alt="">
                </div>
                <div class="left-bg-text-para">
                    <img src="../assets/images/images/left-bg-text-para-doc.png" alt="">
                </div>
            </div>
        </div>
    </div>
    <!-- tmp text para end -->

    <!-- tmp About Me Start -->
    <section class="about-us-area">
        <div class="container">
            <div class="row align-items-center" ref="box" style="height: 100vh;">
                <div class="col-lg-6">
                    <div class="about-us-left-content-wrap bg-vactor-one">
                        <div class="years-of-experience-card tmp-scroll-trigger tmp-fade-in animation-order-1">
                            <h2 class="counter card-title"><span class="odometer" data-count="10">8</span>+
                            </h2>
                            <p class="card-para">years of experience</p>
                        </div>
                        <div class="design-card tmp-scroll-trigger tmp-fade-in animation-order-2">
                            <div class="design-card-img">
                                <div class="icon"><i class="fa-sharp fa-thin fa-lock"></i></div>
                            </div>
                            <div class="card-info">
                                <h3 class="card-title">Web Projects</h3>
                                <p class="card-para">50+</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6" ref="container">
                    <div class="about-us-right-content-wrap">
                        <div class="section-head text-align-left mb--50" ref="content">
                            <div class="section-sub-title tmp-scroll-trigger tmp-fade-in animation-order-1">
                                <span class="subtitle">About Me</span>
                            </div>
                            <h2 class="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">My Story</h2>
                            <p class="description tmp-scroll-trigger tmp-fade-in animation-order-3"> I specialize in building responsive, user-friendly websites using Angular, Vue , Wordpress and frontend frameworks like Tailwind CSS, Bootstrap. I have experience with other frontend tools and libraries that help enhance the functionality and design of my projects. I enjoy creating responsive layouts and optimizing performance, and I'm always excited to tackle new frontend challenges.If you’re looking for a frontend developer with experience in both UI/UX design and web development, feel free to get in touch!</p>
                        </div>
                        <!-- <div class="about-us-section-card row g-5">

                            <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="about-us-card tmponhover tmp-scroll-trigger tmp-fade-in animation-order-4">
                                    <div class="card-head">
                                        <div class="logo-img">
                                            <img src="../assets/images/images/logo-1.svg" alt="logo">
                                        </div>
                                        <h3 class="card-title">Business Solutions</h3>
                                    </div>
                                    <p class="card-para">
                                        I have experience with other frontend tools and libraries that help enhance the functionality and design of my projects. 
                I enjoy creating responsive layouts and optimizing performance, and I'm always excited to tackle new frontend challenges.
                                    </p>
                                </div>
                            </div>

                            <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="about-us-card tmponhover tmp-scroll-trigger tmp-fade-in animation-order-5">
                                    <div class="card-head">
                                        <div class="logo-img">
                                            <img src="../assets/images/images/logo-2.svg" alt="logo">
                                        </div>
                                        <h3 class="card-title">Profit Partners</h3>
                                    </div>
                                    <p class="card-para">
                                        If you’re looking for a frontend developer with experience in both UI/UX design and web development, feel free to get in touch!
                                    </p>
                                </div>
                            </div>

                        </div>
                        <div class="about-btn mt--40 tmp-scroll-trigger tmp-fade-in animation-order-6">
                            <a class="tmp-btn hover-icon-reverse radius-round" href="about.html">
                                <span class="icon-reverse-wrapper">
                        <span class="btn-text">Read More About Me</span>
                                <span class="btn-icon"><i class="fa-sharp fa-regular fa-arrow-right"></i></span>
                                <span class="btn-icon"><i class="fa-sharp fa-regular fa-arrow-right"></i></span>
                                </span>
                            </a>
                        </div> -->
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- tmp About Me end -->


    <section class="resume-section tmp-section-gapTop" id="resume-section">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="section-header mb--50 tmp-scroll-trigger tmp-fade-in animation-order-1">
                        <h2 class="section-title"><i class="fa-regular fa-award"></i> My Experience</h2>
                    </div>

                    <div class="resume-widget">
                        <div class="resume-single tmp-scroll-trigger tmp-fade-in animation-order-1">
                            <div class="time"><i class="fa-duotone fa-solid fa-circle-dot fa-fade mr--15"></i> 2020 -
                                Present</div>
                            <h3 class="resume-title">Senior Frontend Developer</h3>
                            <div class="institute">Systematic Solutions Co.,Ltd.</div>
                        </div>
                        <div class="resume-single tmp-scroll-trigger tmp-fade-in animation-order-2">
                            <div class="time"><i class="fa-duotone fa-solid fa-circle-dot fa-fade mr--15"></i> 2019 -
                                2020</div>
                            <h3 class="resume-title">Remote Wordpress Developer</h3>
                            <div class="institute">Imedia Co.,Ltd.</div>
                        </div>
                        <div class="resume-single tmp-scroll-trigger tmp-fade-in animation-order-3">
                            <div class="time"><i class="fa-duotone fa-solid fa-circle-dot fa-fade mr--15"></i> 2017 - 2018</div>
                            <h3 class="resume-title">Web Designer</h3>
                            <div class="institute">Evolxit Co.,Ltd.</div>
                        </div>
                        <div class="resume-single mb--0 tmp-scroll-trigger tmp-fade-in animation-order-4">
                            <div class="time"><i class="fa-duotone fa-solid fa-circle-dot fa-fade mr--15"></i> 2017 -
                                2016</div>
                            <h3 class="resume-title">Intern Web Designer</h3>
                            <div class="institute">Myanmar Net Co.,Ltd.</div>
                        </div>
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="section-header mb--50 tmp-scroll-trigger tmp-fade-in animation-order-1">
                        <h2 class="section-title"> <i class="fa-regular fa-graduation-cap"></i> My Education</h2>
                    </div>

                    <div class="resume-widget">
                        <div class="resume-single tmp-scroll-trigger tmp-fade-in animation-order-1">
                            <div class="time"><i class="fa-duotone fa-solid fa-circle-dot fa-fade mr--15"></i>2018</div>
                            <h3 class="resume-title">Bachelor of Engineering(IT)</h3>
                            <div class="institute">West Yangon Technological University</div>
                        </div>
                        <div class="resume-single tmp-scroll-trigger tmp-fade-in animation-order-2">
                            <div class="time"><i class="fa-duotone fa-solid fa-circle-dot fa-fade mr--15"></i> 2016</div>
                            <h3 class="resume-title">Bachelor of Technology(IT)</h3>
                            <div class="institute">West Yangon Technological University</div>
                        </div>
                        <div class="resume-single tmp-scroll-trigger tmp-fade-in animation-order-3">
                            <div class="time"><i class="fa-duotone fa-solid fa-circle-dot fa-fade mr--15"></i> 2021</div>
                            <h3 class="resume-title">Web Design Course</h3>
                            <div class="institute">M3WI Education</div>
                        </div>
                        <div class="resume-single mb--0 tmp-scroll-trigger tmp-fade-in animation-order-4">
                            <div class="time"><i class="fa-duotone fa-solid fa-circle-dot fa-fade mr--15"></i> 2022</div>
                            <h3 class="resume-title">Frontend Web Development</h3>
                            <div class="institute">Creative Coder</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- tmp skill area start -->
    <div class="tmp-skill-area tmp-section-gapTop">
        <div class="container">
            <div class="row g-5">
                <div class="col-lg-12">
                       <h2 class="custom-title mb--30 tmp-scroll-trigger tmp-fade-in animation-order-1">
                                Professional Skills <span><img src="../assets/images/images/custom-line.png" alt="custom-line"></span>
                            </h2>
                </div>
                <div class="col-lg-6">
                    <div class="progress-wrapper">
                        <div class="content">

                            <!-- Start Single Progress Charts -->
                            <div class="progress-charts">
                                <h6 class="heading heading-h6">
                                   Angular</h6>
                                <div class="progress">
                                    <div class="progress-bar wow fadeInLeft" data-wow-duration="0.7s" data-wow-delay=".5s" role="progressbar" style="width: 60%; visibility: visible; animation-duration: 0.7s; animation-delay: 0.5s; animation-name: fadeInLeft;" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
                                        <span class="percent-label">80%</span>
                                    </div>
                                </div>
                            </div>
                            <!-- End Single Progress Charts -->

                            <!-- Start Single Progress Charts -->
                            <div class="progress-charts">
                                <h6 class="heading heading-h6">
                                    Vue/React</h6>
                                <div class="progress">
                                    <div class="progress-bar wow fadeInLeft" data-wow-duration="0.8s" data-wow-delay=".6s" role="progressbar" style="width: 70%; visibility: visible; animation-duration: 0.8s; animation-delay: 0.6s; animation-name: fadeInLeft;" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
                                        <span class="percent-label">80%</span>
                                    </div>
                                </div>
                            </div>
                            <!-- End Single Progress Charts -->

                             <!-- Start Single Progress Charts -->
                            <div class="progress-charts">
                                <h6 class="heading heading-h6">
                                    Javascript</h6>
                                <div class="progress">
                                    <div class="progress-bar wow fadeInLeft" data-wow-duration="0.7s" data-wow-delay=".5s" role="progressbar" style="width: 60%; visibility: visible; animation-duration: 0.7s; animation-delay: 0.5s; animation-name: fadeInLeft;" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
                                        <span class="percent-label">85%</span>
                                    </div>
                                </div>
                            </div>
                            <!-- End Single Progress Charts -->

                             <!-- Start Single Progress Charts -->
                            <div class="progress-charts">
                                <h6 class="heading heading-h6">
                                    Wordpress</h6>
                                <div class="progress">
                                    <div class="progress-bar wow fadeInLeft" data-wow-duration="0.6s" data-wow-delay=".4s" role="progressbar" style="width: 95%; visibility: visible; animation-duration: 0.6s; animation-delay: 0.4s; animation-name: fadeInLeft;" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
                                        <span class="percent-label">85%</span>
                                    </div>
                                </div>
                            </div>
                            <!-- End Single Progress Charts -->

                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="progress-wrapper">
                        <div class="content">
                            <!-- <h2 class="custom-title mb--30 tmp-scroll-trigger tmp-fade-in animation-order-1">
                                Development Skill <span><img src="../assets/images/images/custom-line.png" alt="custom-line"></span>
                            </h2> -->
                            <!-- Start Single Progress Charts -->
                            <div class="progress-charts">
                                <h6 class="heading heading-h6">
                                    HTML</h6>
                                <div class="progress">
                                    <div class="progress-bar wow fadeInLeft" data-wow-duration="0.5s" data-wow-delay=".3s" role="progressbar" style="width: 100%; visibility: visible; animation-duration: 0.5s; animation-delay: 0.3s; animation-name: fadeInLeft;" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
                                        <span class="percent-label">95%</span>
                                    </div>
                                </div>
                            </div>
                            <!-- End Single Progress Charts -->

                            <!-- Start Single Progress Charts -->
                            <div class="progress-charts">
                                <h6 class="heading heading-h6">
                                    CSS</h6>
                                <div class="progress">
                                    <div class="progress-bar wow fadeInLeft" data-wow-duration="0.6s" data-wow-delay=".4s" role="progressbar" style="width: 95%; visibility: visible; animation-duration: 0.6s; animation-delay: 0.4s; animation-name: fadeInLeft;" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
                                        <span class="percent-label">95%</span>
                                    </div>
                                </div>
                            </div>
                            <!-- End Single Progress Charts -->

                           

                            <div class="progress-charts">
                                <h6 class="heading heading-h6">
                                    Figma/Adobe XD</h6>
                                <div class="progress">
                                    <div class="progress-bar wow fadeInLeft" data-wow-duration="0.5s" data-wow-delay=".3s" role="progressbar" style="width: 100%; visibility: visible; animation-duration: 0.5s; animation-delay: 0.3s; animation-name: fadeInLeft;" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
                                        <span class="percent-label">85%</span>
                                    </div>
                                </div>
                            </div>

                            <!-- Start Single Progress Charts -->
                            <div class="progress-charts">
                                <h6 class="heading heading-h6">
                                    Git</h6>
                                <div class="progress">
                                    <div class="progress-bar wow fadeInLeft" data-wow-duration="0.8s" data-wow-delay=".6s" role="progressbar" style="width: 70%; visibility: visible; animation-duration: 0.8s; animation-delay: 0.6s; animation-name: fadeInLeft;" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
                                        <span class="percent-label">80%</span>
                                    </div>
                                </div>
                            </div>
                            <!-- End Single Progress Charts -->

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- tmp skill area end -->

    <!-- tmp Latest Portfolio Start -->
    <section class="latest-portfolio-area custom-column-grid tmp-section-gap">
        <div class="container">
            <div class="section-head mb--60">
                <div class="section-sub-title center-title tmp-scroll-trigger tmp-fade-in animation-order-1">
                    <span class="subtitle">Latest Portfolio</span>
                </div>
                <h2 class="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2"> My Cases </h2>
                <!-- <p class="description section-sm tmp-scroll-trigger tmp-fade-in animation-order-3">Business consulting
                    consultants provide expert advice and guida
                    businesses to help them improve their performance, efficiency, and organizational</p> -->
            </div>
            <div class="latest-portfolio-tabs-area">
                <!-- <nav>
                    <ul class="nav nav-tabs" id="nav-tab" role="tablist">
                        <li>
                            <button class="nav-link active" id="nav-all-tab" data-bs-toggle="tab" data-bs-target="#nav-all" type="button" role="tab" aria-controls="nav-all" aria-selected="true">All</button>
                        </li>
                        <li>
                            <button class="nav-link" id="nav-branding-tab" data-bs-toggle="tab" data-bs-target="#nav-branding" type="button" role="tab" aria-controls="nav-branding" aria-selected="false">Branding</button>
                        </li>
                        <li>
                            <button class="nav-link" id="nav-design-tab" data-bs-toggle="tab" data-bs-target="#nav-design" type="button" role="tab" aria-controls="nav-design" aria-selected="false">Design</button>
                        </li>
                        <li>
                            <button class="nav-link" id="nav-content-writing-tab" data-bs-toggle="tab" data-bs-target="#nav-content-writing" type="button" role="tab" aria-controls="nav-content-writing" aria-selected="false">Content writing</button>
                        </li>
                        <li>
                            <button class="nav-link" id="nav-marketing-tab" data-bs-toggle="tab" data-bs-target="#nav-marketing" type="button" role="tab" aria-controls="nav-marketing" aria-selected="false">Marketing</button>
                        </li>
                    </ul>
                </nav> -->
                <div class="tab-content bg-blur-style-one" id="nav-tabContent">
                    <div class="tab-pane fade show active" id="nav-all" role="tabpanel" aria-labelledby="nav-all-tab" tabindex="0">
                        <div class="row">
                            <div class="col-lg-4">
                                <div class="latest-portfolio-card-style-two image-box-hover tmp-scroll-trigger tmp-fade-in animation-order-1">
                                    <div class="portfoli-card-img">
                                        <div class="img-box v2">
                                            <a class="tmp-scroll-trigger tmp-zoom-in animation-order-1" href="https://www.jobclick.com.mm/home">
                                                <img class="w-100" src="../assets/images/portfolio1.jpg" alt="Thumbnail">
                                            </a>
                                        </div>
                                    </div>
                                    <div class="portfolio-card-content-wrap">
                                        <div class="content-left">
                                            <h3 class="portfolio-card-title"><a href="https://www.jobclick.com.mm/home">Job Search Portal</a></h3>
                                        </div>

                                        <a class="tmp-btn hover-icon-reverse radius-round btn-border btn-md" href="https://www.jobclick.com.mm/home">
                                            <span class="icon-reverse-wrapper">
                                    <span class="btn-text">View design</span>
                                            <span class="btn-icon"><i class="fa-sharp fa-regular fa-arrow-right"></i></span>
                                            <span class="btn-icon"><i class="fa-sharp fa-regular fa-arrow-right"></i></span>
                                            </span>
                                        </a>

                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="latest-portfolio-card-style-two image-box-hover tmp-scroll-trigger tmp-fade-in animation-order-2">
                                    <div class="portfoli-card-img">
                                        <div class="img-box v2">
                                            <a class="tmp-scroll-trigger tmp-zoom-in animation-order-1" href="https://kudostoyou.com.mm/home">
                                                <img class="w-100" src="../assets/images/portfolio2.jpg" alt="Thumbnail">
                                            </a>
                                        </div>
                                    </div>
                                    <div class="portfolio-card-content-wrap">
                                        <div class="content-left">
                                            <h3 class="portfolio-card-title"><a href="https://kudostoyou.com.mm/home">Learning Online Portal</a></h3>
                                        </div>
                                        <a class="tmp-btn hover-icon-reverse radius-round btn-border btn-md" href="https://kudostoyou.com.mm/home">
                                            <span class="icon-reverse-wrapper">
                                    <span class="btn-text">View design</span>
                                            <span class="btn-icon"><i class="fa-sharp fa-regular fa-arrow-right"></i></span>
                                            <span class="btn-icon"><i class="fa-sharp fa-regular fa-arrow-right"></i></span>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="latest-portfolio-card-style-two image-box-hover tmp-scroll-trigger tmp-fade-in animation-order-3">
                                    <div class="portfoli-card-img">
                                        <div class="img-box v2">
                                            <a class="tmp-scroll-trigger tmp-zoom-in animation-order-1" href="https://soesanrealestate.com.mm/">
                                                <img class="w-100" src="../assets/images/portfolio3.jpg" alt="Thumbnail">
                                            </a>
                                        </div>
                                    </div>
                                    <div class="portfolio-card-content-wrap">
                                        <div class="content-left">
                                            <h3 class="portfolio-card-title"><a href="https://soesanrealestate.com.mm/">Real Estate Portal</a></h3>
                                        </div>
                                        <a class="tmp-btn hover-icon-reverse radius-round btn-border btn-md" href="https://soesanrealestate.com.mm/">
                                            <span class="icon-reverse-wrapper">
                                    <span class="btn-text">View design</span>
                                            <span class="btn-icon"><i class="fa-sharp fa-regular fa-arrow-right"></i></span>
                                            <span class="btn-icon"><i class="fa-sharp fa-regular fa-arrow-right"></i></span>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="latest-portfolio-card-style-two image-box-hover tmp-scroll-trigger tmp-fade-in animation-order-4">
                                    <div class="portfoli-card-img">
                                        <div class="img-box v2">
                                            <a class="tmp-scroll-trigger tmp-zoom-in animation-order-1" href="https://ticket.com.mm/">
                                                <img class="w-100" src="../assets/images/portfolio4.jpg" alt="Thumbnail">
                                            </a>
                                        </div>
                                    </div>
                                    <div class="portfolio-card-content-wrap">
                                        <div class="content-left">
                                            <h3 class="portfolio-card-title"><a href="https://ticket.com.mm/">Air Ticketing</a></h3>
                                           
                                        </div>
                                        <a class="tmp-btn hover-icon-reverse radius-round btn-border btn-md" href="https://ticket.com.mm/">
                                            <span class="icon-reverse-wrapper">
                                    <span class="btn-text">View design</span>
                                            <span class="btn-icon"><i class="fa-sharp fa-regular fa-arrow-right"></i></span>
                                            <span class="btn-icon"><i class="fa-sharp fa-regular fa-arrow-right"></i></span>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="latest-portfolio-card-style-two image-box-hover tmp-scroll-trigger tmp-fade-in animation-order-3">
                                    <div class="portfoli-card-img">
                                        <div class="img-box v2">
                                            <a class="tmp-scroll-trigger tmp-zoom-in animation-order-1" href="#">
                                                <img class="w-100" src="../assets/images/portfolio6.png" alt="Thumbnail">
                                            </a>
                                        </div>
                                    </div>
                                    <div class="portfolio-card-content-wrap">
                                        <div class="content-left">
                                            <h3 class="portfolio-card-title"><a href="#">ERP Product</a></h3>
                                           
                                        </div>
                                        <a class="tmp-btn hover-icon-reverse radius-round btn-border btn-md" href="#">
                                            <span class="icon-reverse-wrapper">
                                    <span class="btn-text">View design</span>
                                            <span class="btn-icon"><i class="fa-sharp fa-regular fa-arrow-right"></i></span>
                                            <span class="btn-icon"><i class="fa-sharp fa-regular fa-arrow-right"></i></span>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="latest-portfolio-card-style-two image-box-hover tmp-scroll-trigger tmp-fade-in animation-order-4">
                                    <div class="portfoli-card-img">
                                        <div class="img-box v2">
                                            <a class="tmp-scroll-trigger tmp-zoom-in animation-order-1" href="https://gaullacmommyanmar.com/">
                                                <img class="w-100" src="../assets/images/portfolio5.jpg" alt="Thumbnail">
                                            </a>
                                        </div>
                                    </div>
                                    <div class="portfolio-card-content-wrap">
                                        <div class="content-left">
                                            <h3 class="portfolio-card-title"><a href="https://gaullacmommyanmar.com/">Gaullac Website</a></h3>
                                        </div>
                                        <a class="tmp-btn hover-icon-reverse radius-round btn-border btn-md" href="https://gaullacmommyanmar.com/">
                                            <span class="icon-reverse-wrapper">
                                    <span class="btn-text">View design</span>
                                            <span class="btn-icon"><i class="fa-sharp fa-regular fa-arrow-right"></i></span>
                                            <span class="btn-icon"><i class="fa-sharp fa-regular fa-arrow-right"></i></span>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- <div class="tab-pane fade" id="nav-branding" role="tabpanel" aria-labelledby="nav-branding-tab" tabindex="0">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="latest-portfolio-card-style-two image-box-hover tmp-scroll-trigger tmp-fade-in animation-order-1">
                                    <div class="portfoli-card-img">
                                        <div class="img-box v2">
                                            <a class="tmp-scroll-trigger tmp-zoom-in animation-order-1" href="project-details.html">
                                                <img class="w-100" src="../assets/images/images/portfoli-img-1.jpg" alt="Thumbnail">
                                            </a>
                                        </div>
                                    </div>
                                    <div class="portfolio-card-content-wrap">
                                        <div class="content-left">
                                            <h3 class="portfolio-card-title"><a href="project-details.html">SAAS website
                                                    design</a></h3>
                                            <div class="tag-items">
                                                <ul>
                                                    <li>
                                                        <a href="#" class="tag-item">Figma</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" class="tag-item">Figma</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <a class="tmp-btn hover-icon-reverse radius-round btn-border btn-md" href="project-details.html">
                                            <span class="icon-reverse-wrapper">
                                    <span class="btn-text">View design</span>
                                            <span class="btn-icon"><i class="fa-sharp fa-regular fa-arrow-right"></i></span>
                                            <span class="btn-icon"><i class="fa-sharp fa-regular fa-arrow-right"></i></span>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="latest-portfolio-card-style-two image-box-hover tmp-scroll-trigger tmp-fade-in animation-order-2">
                                    <div class="portfoli-card-img">
                                        <div class="img-box v2">
                                            <a class="tmp-scroll-trigger tmp-zoom-in animation-order-1" href="project-details.html">
                                                <img class="w-100" src="../assets/images/images/portfoli-img-3.jpg" alt="Thumbnail">
                                            </a>
                                        </div>
                                    </div>
                                    <div class="portfolio-card-content-wrap">
                                        <div class="content-left">
                                            <h3 class="portfolio-card-title"><a href="project-details.html">Workout App
                                                    design</a></h3>
                                            <div class="tag-items">
                                                <ul>
                                                    <li>
                                                        <a href="#" class="tag-item">Adobe</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" class="tag-item">Webflow</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" class="tag-item">Ai</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <a class="tmp-btn hover-icon-reverse radius-round btn-border btn-md" href="project-details.html">
                                            <span class="icon-reverse-wrapper">
                                    <span class="btn-text">View design</span>
                                            <span class="btn-icon"><i class="fa-sharp fa-regular fa-arrow-right"></i></span>
                                            <span class="btn-icon"><i class="fa-sharp fa-regular fa-arrow-right"></i></span>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="latest-portfolio-card-style-two image-box-hover tmp-scroll-trigger tmp-fade-in animation-order-3">
                                    <div class="portfoli-card-img">
                                        <div class="img-box v2">
                                            <a class="tmp-scroll-trigger tmp-zoom-in animation-order-1" href="project-details.html">
                                                <img class="w-100" src="../assets/images/images/portfoli-img-4.jpg" alt="Thumbnail">
                                            </a>
                                        </div>
                                    </div>
                                    <div class="portfolio-card-content-wrap">
                                        <div class="content-left">
                                            <h3 class="portfolio-card-title"><a href="project-details.html">Workout App
                                                    design</a></h3>
                                            <div class="tag-items">
                                                <ul>
                                                    <li>
                                                        <a href="#" class="tag-item">Figma</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" class="tag-item">Framer</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" class="tag-item">Wordpress</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <a class="tmp-btn hover-icon-reverse radius-round btn-border btn-md" href="project-details.html">
                                            <span class="icon-reverse-wrapper">
                                    <span class="btn-text">View design</span>
                                            <span class="btn-icon"><i class="fa-sharp fa-regular fa-arrow-right"></i></span>
                                            <span class="btn-icon"><i class="fa-sharp fa-regular fa-arrow-right"></i></span>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="latest-portfolio-card-style-two image-box-hover tmp-scroll-trigger tmp-fade-in animation-order-4">
                                    <div class="portfoli-card-img">
                                        <div class="img-box v2">
                                            <a class="tmp-scroll-trigger tmp-zoom-in animation-order-1" href="project-details.html">
                                                <img class="w-100" src="../assets/images/images/portfoli-img-2.jpg" alt="Thumbnail">
                                            </a>
                                        </div>
                                    </div>
                                    <div class="portfolio-card-content-wrap">
                                        <div class="content-left">
                                            <h3 class="portfolio-card-title"><a href="project-details.html">Dashboard
                                                    design</a></h3>
                                            <div class="tag-items">
                                                <ul>
                                                    <li>
                                                        <a href="#" class="tag-item">Adobe</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" class="tag-item">Webflow</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <a class="tmp-btn hover-icon-reverse radius-round btn-border btn-md" href="project-details.html">
                                            <span class="icon-reverse-wrapper">
                                    <span class="btn-text">View design</span>
                                            <span class="btn-icon"><i class="fa-sharp fa-regular fa-arrow-right"></i></span>
                                            <span class="btn-icon"><i class="fa-sharp fa-regular fa-arrow-right"></i></span>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="nav-design" role="tabpanel" aria-labelledby="nav-design-tab" tabindex="0">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="latest-portfolio-card-style-two image-box-hover tmp-scroll-trigger tmp-fade-in animation-order-1">
                                    <div class="portfoli-card-img">
                                        <div class="img-box v2">
                                            <a class="tmp-scroll-trigger tmp-zoom-in animation-order-1" href="project-details.html">
                                                <img class="w-100" src="../assets/images/images/portfoli-img-1.jpg" alt="Thumbnail">
                                            </a>
                                        </div>
                                    </div>
                                    <div class="portfolio-card-content-wrap">
                                        <div class="content-left">
                                            <h3 class="portfolio-card-title"><a href="project-details.html">SAAS website
                                                    design</a></h3>
                                            <div class="tag-items">
                                                <ul>
                                                    <li>
                                                        <a href="#" class="tag-item">Figma</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" class="tag-item">Figma</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <a class="tmp-btn hover-icon-reverse radius-round btn-border btn-md" href="project-details.html">
                                            <span class="icon-reverse-wrapper">
                                    <span class="btn-text">View design</span>
                                            <span class="btn-icon"><i class="fa-sharp fa-regular fa-arrow-right"></i></span>
                                            <span class="btn-icon"><i class="fa-sharp fa-regular fa-arrow-right"></i></span>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="latest-portfolio-card-style-two image-box-hover tmp-scroll-trigger tmp-fade-in animation-order-2">
                                    <div class="portfoli-card-img">
                                        <div class="img-box v2">
                                            <a class="tmp-scroll-trigger tmp-zoom-in animation-order-1" href="project-details.html">
                                                <img class="w-100" src="../assets/images/images/portfoli-img-3.jpg" alt="Thumbnail">
                                            </a>
                                        </div>
                                    </div>
                                    <div class="portfolio-card-content-wrap">
                                        <div class="content-left">
                                            <h3 class="portfolio-card-title"><a href="project-details.html">Workout App
                                                    design</a></h3>
                                            <div class="tag-items">
                                                <ul>
                                                    <li>
                                                        <a href="#" class="tag-item">Adobe</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" class="tag-item">Webflow</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" class="tag-item">Ai</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <a class="tmp-btn hover-icon-reverse radius-round btn-border btn-md" href="project-details.html">
                                            <span class="icon-reverse-wrapper">
                                    <span class="btn-text">View design</span>
                                            <span class="btn-icon"><i class="fa-sharp fa-regular fa-arrow-right"></i></span>
                                            <span class="btn-icon"><i class="fa-sharp fa-regular fa-arrow-right"></i></span>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="latest-portfolio-card-style-two image-box-hover tmp-scroll-trigger tmp-fade-in animation-order-3">
                                    <div class="portfoli-card-img">
                                        <div class="img-box v2">
                                            <a class="tmp-scroll-trigger tmp-zoom-in animation-order-1" href="project-details.html">
                                                <img class="w-100" src="../assets/images/images/portfoli-img-4.jpg" alt="Thumbnail">
                                            </a>
                                        </div>
                                    </div>
                                    <div class="portfolio-card-content-wrap">
                                        <div class="content-left">
                                            <h3 class="portfolio-card-title"><a href="project-details.html">Workout App
                                                    design</a></h3>
                                            <div class="tag-items">
                                                <ul>
                                                    <li>
                                                        <a href="#" class="tag-item">Figma</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" class="tag-item">Framer</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" class="tag-item">Wordpress</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <a class="tmp-btn hover-icon-reverse radius-round btn-border btn-md" href="project-details.html">
                                            <span class="icon-reverse-wrapper">
                                    <span class="btn-text">View design</span>
                                            <span class="btn-icon"><i class="fa-sharp fa-regular fa-arrow-right"></i></span>
                                            <span class="btn-icon"><i class="fa-sharp fa-regular fa-arrow-right"></i></span>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="latest-portfolio-card-style-two image-box-hover tmp-scroll-trigger tmp-fade-in animation-order-4">
                                    <div class="portfoli-card-img">
                                        <div class="img-box v2">
                                            <a class="tmp-scroll-trigger tmp-zoom-in animation-order-1" href="project-details.html">
                                                <img class="w-100" src="../assets/images/images/portfoli-img-2.jpg" alt="Thumbnail">
                                            </a>
                                        </div>
                                    </div>
                                    <div class="portfolio-card-content-wrap">
                                        <div class="content-left">
                                            <h3 class="portfolio-card-title"><a href="project-details.html">Dashboard
                                                    design</a></h3>
                                            <div class="tag-items">
                                                <ul>
                                                    <li>
                                                        <a href="#" class="tag-item">Adobe</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" class="tag-item">Webflow</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <a class="tmp-btn hover-icon-reverse radius-round btn-border btn-md" href="project-details.html">
                                            <span class="icon-reverse-wrapper">
                                    <span class="btn-text">View design</span>
                                            <span class="btn-icon"><i class="fa-sharp fa-regular fa-arrow-right"></i></span>
                                            <span class="btn-icon"><i class="fa-sharp fa-regular fa-arrow-right"></i></span>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="nav-content-writing" role="tabpanel" aria-labelledby="nav-content-writing-tab" tabindex="0">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="latest-portfolio-card-style-two image-box-hover tmp-scroll-trigger tmp-fade-in animation-order-1">
                                    <div class="portfoli-card-img">
                                        <div class="img-box v2">
                                            <a class="tmp-scroll-trigger tmp-zoom-in animation-order-1" href="project-details.html">
                                                <img class="w-100" src="../assets/images/images/portfoli-img-1.jpg" alt="Thumbnail">
                                            </a>
                                        </div>
                                    </div>
                                    <div class="portfolio-card-content-wrap">
                                        <div class="content-left">
                                            <h3 class="portfolio-card-title"><a href="project-details.html">SAAS website
                                                    design</a></h3>
                                            <div class="tag-items">
                                                <ul>
                                                    <li>
                                                        <a href="#" class="tag-item">Figma</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" class="tag-item">Figma</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <a class="tmp-btn hover-icon-reverse radius-round btn-border btn-md" href="project-details.html">
                                            <span class="icon-reverse-wrapper">
                                    <span class="btn-text">View design</span>
                                            <span class="btn-icon"><i class="fa-sharp fa-regular fa-arrow-right"></i></span>
                                            <span class="btn-icon"><i class="fa-sharp fa-regular fa-arrow-right"></i></span>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="latest-portfolio-card-style-two image-box-hover tmp-scroll-trigger tmp-fade-in animation-order-2">
                                    <div class="portfoli-card-img">
                                        <div class="img-box v2">
                                            <a class="tmp-scroll-trigger tmp-zoom-in animation-order-1" href="project-details.html">
                                                <img class="w-100" src="../assets/images/images/portfoli-img-3.jpg" alt="Thumbnail">
                                            </a>
                                        </div>
                                    </div>
                                    <div class="portfolio-card-content-wrap">
                                        <div class="content-left">
                                            <h3 class="portfolio-card-title"><a href="project-details.html">Workout App
                                                    design</a></h3>
                                            <div class="tag-items">
                                                <ul>
                                                    <li>
                                                        <a href="#" class="tag-item">Adobe</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" class="tag-item">Webflow</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" class="tag-item">Ai</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <a class="tmp-btn hover-icon-reverse radius-round btn-border btn-md" href="project-details.html">
                                            <span class="icon-reverse-wrapper">
                                    <span class="btn-text">View design</span>
                                            <span class="btn-icon"><i class="fa-sharp fa-regular fa-arrow-right"></i></span>
                                            <span class="btn-icon"><i class="fa-sharp fa-regular fa-arrow-right"></i></span>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="latest-portfolio-card-style-two image-box-hover tmp-scroll-trigger tmp-fade-in animation-order-3">
                                    <div class="portfoli-card-img">
                                        <div class="img-box v2">
                                            <a class="tmp-scroll-trigger tmp-zoom-in animation-order-1" href="project-details.html">
                                                <img class="w-100" src="../assets/images/images/portfoli-img-4.jpg" alt="Thumbnail">
                                            </a>
                                        </div>
                                    </div>
                                    <div class="portfolio-card-content-wrap">
                                        <div class="content-left">
                                            <h3 class="portfolio-card-title"><a href="project-details.html">Workout App
                                                    design</a></h3>
                                            <div class="tag-items">
                                                <ul>
                                                    <li>
                                                        <a href="#" class="tag-item">Figma</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" class="tag-item">Framer</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" class="tag-item">Wordpress</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <a class="tmp-btn hover-icon-reverse radius-round btn-border btn-md" href="project-details.html">
                                            <span class="icon-reverse-wrapper">
                                    <span class="btn-text">View design</span>
                                            <span class="btn-icon"><i class="fa-sharp fa-regular fa-arrow-right"></i></span>
                                            <span class="btn-icon"><i class="fa-sharp fa-regular fa-arrow-right"></i></span>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="latest-portfolio-card-style-two image-box-hover tmp-scroll-trigger tmp-fade-in animation-order-4">
                                    <div class="portfoli-card-img">
                                        <div class="img-box v2">
                                            <a class="tmp-scroll-trigger tmp-zoom-in animation-order-1" href="project-details.html">
                                                <img class="w-100" src="../assets/images/images/portfoli-img-2.jpg" alt="Thumbnail">
                                            </a>
                                        </div>
                                    </div>
                                    <div class="portfolio-card-content-wrap">
                                        <div class="content-left">
                                            <h3 class="portfolio-card-title"><a href="project-details.html">Dashboard
                                                    design</a></h3>
                                            <div class="tag-items">
                                                <ul>
                                                    <li>
                                                        <a href="#" class="tag-item">Adobe</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" class="tag-item">Webflow</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <a class="tmp-btn hover-icon-reverse radius-round btn-border btn-md" href="project-details.html">
                                            <span class="icon-reverse-wrapper">
                                    <span class="btn-text">View design</span>
                                            <span class="btn-icon"><i class="fa-sharp fa-regular fa-arrow-right"></i></span>
                                            <span class="btn-icon"><i class="fa-sharp fa-regular fa-arrow-right"></i></span>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="nav-marketing" role="tabpanel" aria-labelledby="nav-marketing-tab" tabindex="0">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="latest-portfolio-card-style-two image-box-hover tmp-scroll-trigger tmp-fade-in animation-order-1">
                                    <div class="portfoli-card-img">
                                        <div class="img-box v2">
                                            <a class="tmp-scroll-trigger tmp-zoom-in animation-order-1" href="project-details.html">
                                                <img class="w-100" src="../assets/images/images/portfoli-img-1.jpg" alt="Thumbnail">
                                            </a>
                                        </div>
                                    </div>
                                    <div class="portfolio-card-content-wrap">
                                        <div class="content-left">
                                            <h3 class="portfolio-card-title"><a href="project-details.html">SAAS website
                                                    design</a></h3>
                                            <div class="tag-items">
                                                <ul>
                                                    <li>
                                                        <a href="#" class="tag-item">Figma</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" class="tag-item">Figma</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <a class="tmp-btn hover-icon-reverse radius-round btn-border btn-md" href="project-details.html">
                                            <span class="icon-reverse-wrapper">
                                    <span class="btn-text">View design</span>
                                            <span class="btn-icon"><i class="fa-sharp fa-regular fa-arrow-right"></i></span>
                                            <span class="btn-icon"><i class="fa-sharp fa-regular fa-arrow-right"></i></span>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="latest-portfolio-card-style-two image-box-hover tmp-scroll-trigger tmp-fade-in animation-order-2">
                                    <div class="portfoli-card-img">
                                        <div class="img-box v2">
                                            <a class="tmp-scroll-trigger tmp-zoom-in animation-order-1" href="project-details.html">
                                                <img class="w-100" src="../assets/images/images/portfoli-img-3.jpg" alt="Thumbnail">
                                            </a>
                                        </div>
                                    </div>
                                    <div class="portfolio-card-content-wrap">
                                        <div class="content-left">
                                            <h3 class="portfolio-card-title"><a href="project-details.html">Workout App
                                                    design</a></h3>
                                            <div class="tag-items">
                                                <ul>
                                                    <li>
                                                        <a href="#" class="tag-item">Adobe</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" class="tag-item">Webflow</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" class="tag-item">Ai</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <a class="tmp-btn hover-icon-reverse radius-round btn-border btn-md" href="project-details.html">
                                            <span class="icon-reverse-wrapper">
                                    <span class="btn-text">View design</span>
                                            <span class="btn-icon"><i class="fa-sharp fa-regular fa-arrow-right"></i></span>
                                            <span class="btn-icon"><i class="fa-sharp fa-regular fa-arrow-right"></i></span>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="latest-portfolio-card-style-two image-box-hover tmp-scroll-trigger tmp-fade-in animation-order-3">
                                    <div class="portfoli-card-img">
                                        <div class="img-box v2">
                                            <a class="tmp-scroll-trigger tmp-zoom-in animation-order-1" href="project-details.html">
                                                <img class="w-100" src="../assets/images/images/portfoli-img-4.jpg" alt="Thumbnail">
                                            </a>
                                        </div>
                                    </div>
                                    <div class="portfolio-card-content-wrap">
                                        <div class="content-left">
                                            <h3 class="portfolio-card-title"><a href="project-details.html">Workout App
                                                    design</a></h3>
                                            <div class="tag-items">
                                                <ul>
                                                    <li>
                                                        <a href="#" class="tag-item">Figma</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" class="tag-item">Framer</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" class="tag-item">Wordpress</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <a class="tmp-btn hover-icon-reverse radius-round btn-border btn-md" href="project-details.html">
                                            <span class="icon-reverse-wrapper">
                                    <span class="btn-text">View design</span>
                                            <span class="btn-icon"><i class="fa-sharp fa-regular fa-arrow-right"></i></span>
                                            <span class="btn-icon"><i class="fa-sharp fa-regular fa-arrow-right"></i></span>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="latest-portfolio-card-style-two image-box-hover tmp-scroll-trigger tmp-fade-in animation-order-4">
                                    <div class="portfoli-card-img">
                                        <div class="img-box v2">
                                            <a class="tmp-scroll-trigger tmp-zoom-in animation-order-1" href="project-details.html">
                                                <img class="w-100" src="../assets/images/images/portfoli-img-2.jpg" alt="Thumbnail">
                                            </a>
                                        </div>
                                    </div>
                                    <div class="portfolio-card-content-wrap">
                                        <div class="content-left">
                                            <h3 class="portfolio-card-title"><a href="project-details.html">Dashboard
                                                    design</a></h3>
                                            <div class="tag-items">
                                                <ul>
                                                    <li>
                                                        <a href="#" class="tag-item">Adobe</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" class="tag-item">Webflow</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <a class="tmp-btn hover-icon-reverse radius-round btn-border btn-md" href="project-details.html">
                                            <span class="icon-reverse-wrapper">
                                    <span class="btn-text">View design</span>
                                            <span class="btn-icon"><i class="fa-sharp fa-regular fa-arrow-right"></i></span>
                                            <span class="btn-icon"><i class="fa-sharp fa-regular fa-arrow-right"></i></span>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> -->
                </div>
            </div>
            <a class="tmp-btn hover-icon-reverse radius-round" @click="scrollToPortfolio">
                                    <span class="icon-reverse-wrapper">
                                        <span class="btn-text">More About Us</span>
                                    <span class="btn-icon"><i class="fa-sharp fa-regular fa-arrow-right"></i></span>
                                    <span class="btn-icon"><i class="fa-sharp fa-regular fa-arrow-right"></i></span>
                                    </span>
                                </a>
        </div>
    </section>
    <!-- tmp Latest Portfolio end -->

    <!-- Tpm Get In touch start -->
    <section class="get-in-touch-area tmp-section-gapTop">
        <div class="container">
            <div class="get-in-touch-wrapper tmponhover">
                <div class="row g-5 align-items-center">
                    <div class="col-lg-12">
                        <div class="contact-inner">
                            <div class="section-head section-head-one-side text-align-center tmp-scroll-trigger tmp-fade-in animation-order-1">
                                <span class="title-left">Get Ready To Create Great</span>
                            </div>
                            <ul class="ft-link v2">
                                <li class="tmp-scroll-trigger tmp-fade-in animation-order-1 tmp-link-animation">
                                    <span class="ft-icon"><i class="fa-solid fa-envelope"></i></span>
                                    <div class="ft-link-wrap">
                                        <h4 class="link-title">E-mail:</h4>
                                        <a href="#">yuwahtetaung6@gmail.com</a>
                                    </div>
                                </li>
                                <li class="tmp-scroll-trigger tmp-fade-in animation-order-2">
                                    <span class="ft-icon"><i class="fa-solid fa-location-dot"></i></span>
                                    <div class="ft-link-wrap">
                                        <h4 class="link-title">Location:</h4>
                                        <div>Yangon, Myanmar.</div>
                                    </div>
                                </li>
                                <li class="tmp-scroll-trigger tmp-fade-in animation-order-2">
                                    <span class="ft-icon"><i class="fa-solid fa-location-dot"></i></span>
                                    <div class="ft-link-wrap">
                                        <h4 class="link-title">Contact:</h4>
                                        <div>+959 4421 488 68</div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Tpm Get In touch End -->
</template>
<script setup>
import { ref, onMounted, onUnmounted  } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'   // needs a Club GreenSock license

/* ─── refs to DOM elements ─────────────────────────────── */
const box = ref(null)   // <section class="cards">
const scrollSplit = ref(null)   // <h2 class="scrollSplit">

const isMenuActive = ref(false)
const toggleMenu = () => {
    isMenuActive.value = !isMenuActive.value
}
const closeMenu = () => {
    isMenuActive.value = false
}

/* ─── GSAP setup ────────────────────────────────────────── */
gsap.registerPlugin(ScrollTrigger, SplitText)

onMounted(() => {
  /* 1 ▸  fade / slide the cards in one by one */
  gsap.utils.toArray(box.value.children).forEach(card => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: ".box",
        start: "top 85%",
        toggleActions: "play none none none",
        markers: false
    },
    y: 120,
    opacity: 0,
    scale: 0.5,
    duration: 2,
    ease: "back.out(1.7)",
    })
  })

  /* 2 ▸  Split the scrollSplit into lines and animate each one */
  const split = new SplitText(scrollSplit.value, {
    type: 'lines',
    linesClass: 'line',   // → <div class="line">…</div>
  })

  gsap.from(split.lines, {
    scrollTrigger: {
      trigger: scrollSplit.value,
      start: 'top 90%',
      toggleActions: 'play none none none',
    },
    yPercent: 300,
    opacity: 0,
    stagger: 0.1,
    duration: 0.6,
    ease: 'expo.out',
  })


})

</script>
<style>
ul.ft-link{
    display:flex;
    justify-content:center;
    column-gap:60px;
}
.ft-link.v2 li:last-child {
    margin-bottom: 22px;
}
.text-para-doc-wrap .text-para-documents{
    font-size:38px;
}
.latest-portfolio-card-style-two .portfolio-card-title{
    font-size:20px;
}
.latest-portfolio-card-style-two .portfolio-card-content-wrap{
    align-items: center;
}
.tmp-btn.btn-md.btn-border{
    line-height:39px;
}
.tmp-btn.btn-md{
    height: 40px;
    padding: 0 15px;
}
.img-box.v2{
    height: auto;
}
.latest-portfolio-tabs-area .tab-content img{
    height: 240px;
}
.banner-two-main-wrapper .banner-right-content .main-img .banner-big-text-2{
    font-size: 70px;
}
.banner-two-main-wrapper .banner-right-content .main-img .banner-big-text-1{
    font-size:70px;
}

/* text animation */
.wrapper {
  display: inline-flex;
  align-items: center;
}

.static-txt {
  color: #fff;
  font-size: 45px;
}

.dynamic-txts {
  list-style: none;
  margin-left: 0px;
  position: relative;
  height: 60px;
  width: 400px; /* Fix width for consistent effect */
}

.dynamic-txts li {
  position: absolute;
  top: 0;
  left: 0;
  color: var(--color-primary);
  font-size: 45px;
  opacity: 0;
  white-space: nowrap;
  overflow: hidden;
  border-right: 2px solid pink;
  animation: type 12s steps(30) infinite;
}

.dynamic-txts li:nth-child(1) {
  animation-delay: 0s;
}
.dynamic-txts li:nth-child(2) {
  animation-delay: 3s;
}
.dynamic-txts li:nth-child(3) {
  animation-delay: 6s;
}
.dynamic-txts li:nth-child(4) {
  animation-delay: 9s;
}

@keyframes type {
  0% {
    width: 0;
    opacity: 1;
  }
  20% {
    width: 100%;
    opacity: 1;
  }
  25% {
    width: 100%;
    opacity: 0;
  }
  100% {
    width: 0;
    opacity: 0;
  }
}


</style>
