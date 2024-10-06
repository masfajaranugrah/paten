import React from 'react'

const Contact = () => {
  return (
    <div>
         <div class="contact-area contact-bg-1 bg_image tmp-section-gap">
        <div class="container">
            <div class="grid md:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 ms:grid-cols-1 ">
                <div class="my-20">
                    <div class="contact-inner">
                        <div class="section-head section-head-one-side text-align-left">
                            <h2 class="title split-collab">Get free marketing <br/>
                                consultation today</h2>
                            <p class="description mt--30">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor magnaaliqua.
                            </p>
                        </div>

                        <ul class="ft-link ft-link-style-two">


                            <li>
                                <div class="single-contact background-transparent">
                                    <div class="icon">
                                    <i class="fa-solid fa-phone-volume"></i>                                    </div>
                                    <div class="content">
                                        <span>Call Us</span>
                                        <a class="contact-here" href="#">+123 34598768</a>
                                    </div>
                                </div>
                            </li>


                            <li>
                                <div class="single-contact background-transparent">
                                    <div class="icon">
                                        <i class="fa-solid fa-envelope-open-text"></i>
                                    </div>

                                    <div class="content">
                                        <span>E-mail</span>
                                        <a class="contact-here" href="#">info@uibundle.com</a>
                                    </div>

                                </div>
                            </li>

                            <li>
                                <div class="single-contact background-transparent">
                                    <div class="icon">
                                    <i class="fa-solid fa-location-dot"></i>                                    </div>
                                    <div class="content">
                                        <span>Address</span>
                                        <a class="contact-here" href="#">25/5 Double Street, Texas Houston USA</a>
                                    </div>
                                </div>
                            </li>

                        </ul>


                        <div class="tmp-tag-list tag-list-one">
                            <a class="tag-list" href="#">Facebook</a>
                            <a class="tag-list" href="#">Tiktok</a>
                            <a class="tag-list" href="#">Linkedin</a>
                            <a class="tag-list" href="#">Instagram</a>
                         </div>


                    </div>
                </div>
                <div class="my-20" data-sal-delay="250"  data-sal-duration="800">

                    <div class="contact-form ">
                        <div class="section-head section-head-one-side text-align-left">
                            <span class="subtitle">Maps</span>
                         </div>


                        <div style={{ height: '450px' }}> {/* Set a fixed height to match the iframe height */}
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126920.28228581439!2d106.74711698271757!3d-6.229569453029909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x5371bf0fdad786a2!2sJakarta%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sid!2sid!4v1727707393784!5m2!1sid!2sid"
                    width="100%"
                    height="100%"
                    style={{ border: '0' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map"
                  />
                </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Contact
