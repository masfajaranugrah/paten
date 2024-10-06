import React from 'react'

const Prortfolio = () => {
  return (
    <div>
        <div class="portfolio-area portfolio-style-two tmp-section-gap">
        <div class="container">
            <div class="row mb--30">
                <div class="col-lg-5 col-md-6">
                    <div class="inner">
                        <div class="section-head section-head-one-side text-align-left">
                            <div class="section-sub-title color-secondary">
                                <span class="subtitle">OUR PORTFOLIO</span>
                            </div>
                            <h2 class="title split-collab">Let's check our best <br/> recent work </h2>
                        </div>

                        <p class="description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget ornare quam. Sed sit amet sem sollicitudin, condimentum diam sed, consequat tellus. Quisque ac odio eget ligula gravida efficitur. Nunc facilisis sagittis magna, non venenatis mauris luctus quis.
                        </p>

                        <a href="project.html" class="tmp-btn btn-with-icon btn-secondary">Our All Works<i class="fa-light fa-arrow-right"></i></a>
                    </div>
                </div>
                <div class="col-lg-7 col-md-6 mt_md--80 mt_sm--50 " data-sal-delay="250" data-sal-duration="800">
                    <div class="portfolio-inner" data-tmp-cursor="lg" data-tmp-cursor-text="View Details">
                        <a href="projects-details.html" class="thumbnail">
                            <img src="assets/images/portfolio/portfolio-two-1.png" alt="corporate business"/>
                        </a>
                        <div class="portfolio-tag">
                            <div class="content">
                                <a href="projects-details.html">
                                    <h3 class="name">Janet Phillips</h3>
                                </a>
                                <div class="designation">Software Developer</div>
                            </div>
                            <a href="projects-details.html" class="icon angle-roted border-none bg-color-white">
                                <i class="fa-solid fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row g-5">
                <div class="col-lg-4 col-md-6" data-sal-delay="350" data-sal-duration="800">
                    <div class="portfolio-inner" data-tmp-cursor="lg" data-tmp-cursor-text="View Details">
                        <a href="projects-details.html" class="thumbnail">
                            <img src="assets/images/portfolio/portfolio-two-2.png" alt="corporate business"/>
                        </a>
                        <div class="portfolio-tag portfolio-md-tag">
                            <div class="content">
                                <a href="projects-details.html">
                                    <h3 class="name">Doris Sharp</h3>
                                </a>
                                <div class="designation">Chief Architect</div>
                            </div>
                            <a href="projects-details.html" class="icon icon--30 radius-circle border-none bg-color-white">
                                <i class="fa-solid fa-arrow-right transform-rotate-318"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6" data-sal-delay="450" data-sal="slide-up" data-sal-duration="800">
                    <div class="portfolio-inner" data-tmp-cursor="lg" data-tmp-cursor-text="View Details">
                        <a href="projects-details.html" class="thumbnail">
                            <img src="assets/images/portfolio/portfolio-two-3.png" alt="corporate business"/>
                        </a>
                        <div class="portfolio-tag portfolio-md-tag">
                            <div class="content">
                                <a href="projects-details.html">
                                    <h3 class="name">Sharon Willis</h3>
                                </a>
                                <div class="designation">Software Engineer</div>
                            </div>
                            <a href="projects-details.html" class="icon icon--30 radius-circle border-none bg-color-white">
                                <i class="fa-solid fa-arrow-right transform-rotate-318"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6" data-sal-delay="550" data-sal-duration="800">
                    <div class="portfolio-inner" data-tmp-cursor="lg" data-tmp-cursor-text="View Details">
                        <a href="projects-details.html" class="thumbnail">
                            <img src="assets/images/portfolio/portfolio-two-4.png" alt="corporate business"/>
                        </a>
                        <div class="portfolio-tag portfolio-md-tag">
                            <div class="content">
                                <a href="projects-details.html">
                                    <h3 class="name">Gina Larsen</h3>
                                </a>
                                <div class="designation">Product Manager</div>
                            </div>
                            <a href="projects-details.html" class="icon icon--30 radius-circle border-none bg-color-white">
                                <i class="fa-solid fa-arrow-right transform-rotate-318"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Prortfolio
