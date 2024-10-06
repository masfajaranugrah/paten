import React from 'react'

const Navbar = () => {
  return (
    <div>
          <header class="tmp-header-area-start header-two header--sticky">


<div class="container">
    <div class="row ">
        <div class="col-lg-12 py-4">
            <div class="header-mida-area style-two">
                <div class="logo-area-start">
                    <a href="index.html">
                       <h4 className='text-[20px] font-bold'>POI</h4>
                    </a>
                </div>

                <div class="header-nav main-nav-one">
                    <nav>
                        <ul class="parent-nav">
                            
                            <li>
                                <a class="nav-link" href="#">
                                    <span class="rolling-text">Home</span>
                                </a>
                            </li>
                            <li>
                                <a class="nav-link" href="#">
                                    <span class="rolling-text">layanan</span>
                                </a>
                            </li>
                            <li>
                                <a class="nav-link" href="#">
                                    <span class="rolling-text">Visi & Misi</span>
                                </a>
                            </li>
                            <li>
                                <a class="nav-link" href="#">
                                    <span class="rolling-text">About</span>
                                </a>
                            </li>
                            <li>
                                <a class="nav-link" href="#">
                                    <span class="rolling-text">Contact</span>
                                </a>
                            </li>
                           
                        </ul>
                    </nav>
                </div>

                <div class="button-area-header-two">
                    <a href="contact.html" class="tmp-btn btn-secondary">Get Consulting</a>

                    <div class="actions-area">
                   
                        <div class="tmp-side-collups-area" id="side-collups">
                            <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect y="14" width="20" height="2" fill="#1F1F25"></rect>
                                <rect y="7" width="20" height="2" fill="#1F1F25"></rect>
                                <rect width="20" height="2" fill="#1F1F25"></rect>
                            </svg>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</div>




</header>



<div id="side-hide">
    <div class="top-area">
    <a href="index.html" class="logo-area">
    <h4 className='text-[20px] font-bold text-white'>POI</h4>
    </a>
    <div class="close-icon-area">
        <div id="close-slide__main">
            <i class="fa-solid fa-x"></i>
        </div>
    </div>
</div>
<div class="body">

    <div class="image-area-feature">
        <img src="assets/images/sidebar/01.jpg" alt="sidebar"/>
    </div>
    <h5 class="title mt--30">Transforming your ideas into digital reality</h5>
    <p class="disc">
        Sed ut perspiciatis unde omnis natus error voluptatem santium doloremque laudantium, totam rem aperiam, eaque.
    </p>
    <div class="short-contact-area-side-collups">
       
        <div class="single-contact-information-side">
            <i class="fa-solid fa-phone"></i>
            <div class="information">
                <span>Call Now</span>
                <a href="#" class="number">+92 (8800) - 98670</a>
            </div>
        </div>
       
        <div class="single-contact-information-side">
            <i class="fa-light fa-envelope"></i>
            <div class="information">
                <span>Mail Us</span>
                <a href="#" class="number">example@info.com</a>
            </div>
        </div>
       
        <div class="single-contact-information-side">
            <i class="fa-sharp fa-light fa-location-dot"></i>
            <div class="information">
                <span>Our Address</span>
                <a href="#" class="number">66 Broklyant, New York 3269</a>
            </div>
        </div>
       
    </div>
    
    <ul class="social-icons solid-social-icons rounded-social-icons">
        <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
        <li><a href="#"><i class="fa-brands fa-linkedin-in"></i></a></li>
        <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
        <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
    </ul>
    
</div>
 
<div class="mobile-menu-main">
    <nav class="nav-main mainmenu-nav mt--30">
        <ul class="mainmenu metismenu" id="mobile-menu-active">
        <li>
                                <a class="nav-link" href="#">
                                    <span class="rolling-text">Home</span>
                                </a>
                            </li>
                            <li>
                                <a class="nav-link" href="#">
                                    <span class="rolling-text">layanan</span>
                                </a>
                            </li>
                            <li>
                                <a class="nav-link" href="#">
                                    <span class="rolling-text">Visi & Misi</span>
                                </a>
                            </li>
                            <li>
                                <a class="nav-link" href="#">
                                    <span class="rolling-text">About</span>
                                </a>
                            </li>
                            <li>
                                <a class="nav-link" href="#">
                                    <span class="rolling-text">Contact</span>
                                </a>
                            </li>
                        
        </ul>
    </nav>

</div>
 
</div>
    </div>
  )
}

export default Navbar
