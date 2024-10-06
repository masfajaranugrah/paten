import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer class="footer-area footer-style-one-wrapper bg-color-footer-2 bg_images tmp-section-gap">
        <div class="container">
   

            <div class="footer-main footer-style-one">
                <div class="row g-5">
                    <div class="col-lg-4 col-md-6">
                        <div class="single-footer-wrapper border-right mr--20">
                            <div class="logo">
                                <a href="index.html">
                                    <h4 className='text-[30px] font-bold text-white'>POI</h4>
                                </a>
                            </div>

                            <p class="description">
                                paten Online Indonesia
                            </p>


                            <div class="day-time">
                                <div class="icon"><i class="fa-regular fa-clock"></i></div>
                                <div class="content">
                                    <div class="day">Sunday - Friday:</div>
                                    <div class="time">9:00 AM – 8:00 PM</div>
                                </div>
                            </div>

                            <ul class="social-icons solid-social-icons rounded-social-icons">
                                <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
                                <li><a href="#"><i class="fa-brands fa-linkedin-in"></i></a></li>
                                <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-2 col-md-6">
                        <div class="single-footer-wrapper pl-50 pl_md--0 pl_sm--0">
                            <h5 class="ft-title">Quick Link</h5>
                            <ul class="ft-link">
                                <li>
                                    <a href="about.html">About Company</a>
                                </li>
                                <li>
                                    <a href="team.html">Meet Our Team</a>
                                </li>
                                <li>
                                    <a href="service.html">Our Services</a>
                                </li>
                                <li>
                                    <a href="blog.html">News & Media</a>
                                </li>
                                <li>
                                    <a href="contact.html">Contact Us</a>
                                </li>

                                <li>
                                    <a href="faq.html">Support</a>
                                </li>

                            </ul>

                        </div>
                    </div>
 

                    <div class="col-lg-3 col-md-6">
                        <div class="single-footer-wrapper">
                            <h5 class="ft-title">Official info:</h5>
                            <ul class="ft-link">
                                <li class="ft-location">Epicentrum Walk Building D-717 Kawasan Tuman Rasuna</li>

                                <li>
                                    <div class="single-contact">

                                        <div class="icon">
                                            <i class="fa-solid fa-envelope-open-text"></i>
                                        </div>

                                        <div class="content">
                                            <span>E-mail:</span>
                                            <a href="mailto:webmaster@example.com">info@patenonline.com</a>
                                        </div>

                                    </div>
                                </li>

                                <li>
                                    <div class="single-contact">
                                        <div class="icon">
                                            <i class="fa-solid fa-phone-volume"></i>
                                        </div>
                                        <div class="content">
                                            <span>Phone:</span>
                                            <a href="tel:+4733378901">+123 34598768</a>
                                        </div>

                                    </div>

                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </footer>
    <div class="copyright-area-one two">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="main-wrapper">
                        <p>© Copyright 2024. All Rights Reserved by <a href="#">Paten Online Indonesia</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Footer
