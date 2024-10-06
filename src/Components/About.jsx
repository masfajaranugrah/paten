import React from 'react';
 import dotsImage from '/assets/images/about/dots.png';
import scaterImage from '/assets/images/about/scater.png';
import banner from '/assets/images/banner/banner.png'
 

const About = () => {
  return (
    <div>
      <div className="about-area about-style-two tmp-section-gapBottom">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-6"
              data-sal-delay="150"
        
              data-sal-duration="800"
            >
              <div className="about-thumbnails about-style-two">
                <img
                  src={banner}
                  alt="Business Consulting about"
                  style={{width: "100%"}}
                />

                <div className="dots animated tada">
                  <img
                    className="tada"
                    src={dotsImage}
                    alt="Business Consulting dots"
                  />
                </div>
                <div className="scater">
                  <img
                    src={scaterImage}
                    alt="Business Consulting scater"
                  />
                </div>
                <div className="tmpk__circle v__1">
                  <svg className="spinner" viewBox="0 0 100 100">
                    <defs>
                      <path
                        id="circle"
                        d="M50,50 m-37,0a37,37 0 1,1 74,0a37,37 0 1,1 -74,0"
                      ></path>
                    </defs>
                    <text>
                      <textPath xlinkHref="#circle">
                        25+ Years Of Working Experience * Experience *
                      </textPath>
                    </text>
                  </svg>
                  <div className="tmpk__circle--icon">
                  <i class="fa-solid fa-arrow-right"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="inner">
                <div className="section-head section-head-one-side text-align-left">
                  <div className="section-sub-title color-secondary">
                    <span className="subtitle">Tentang kami</span>
                  </div>
                  <h2 className="title split-collab">
                    PT.Paten Online <br /> Indonesia
                  </h2>
                </div>

                <p className="description">
                  merupakan perusahaan nasional yang bergerak dalam bidang konsultasi kekayaan intelektual.
                </p>

                <div className="feature-counter my-5">
                  <div className="tmp-feature-wrapper">
                    <h3 className="title mb-2">Grow Your Business</h3>
                    <div className="tmp-feature">
                    <i class="text-[#7048e8] text-[20px] mt-2 fa-solid fa-circle-check"></i>
                      <div className="feature-content">
                        <h6 className="title">Flexible Classes</h6>
                      </div>
                    </div>

                    <div className="tmp-feature">
                    <i class="text-[#7048e8] text-[20px] mt-2 fa-solid fa-circle-check"></i>
                      <div className="feature-content">
                        <h6 className="title">Innovative Ideas</h6>
                      </div>
                    </div>

                    <div className="tmp-feature">
                    <i class="text-[#7048e8] text-[20px] mt-2 fa-solid fa-circle-check"></i>
                      <div className="feature-content">
                        <h6 className="title">Financial Consulting</h6>
                      </div>
                    </div>

                    <div className="tmp-feature">
                    <i class="text-[#7048e8] text-[20px] mt-2 fa-solid fa-circle-check"></i>                      
                     <div className="feature-content">
                        <h6 className="title">Risk Management</h6>
                      </div>
                    </div>
                  </div>
                  <div className="counter-wrapper counter-style-one">
                    <div className="counter-inner">
                      <h2 className="title">
                        <span className="counter">1538</span>+
                      </h2>
                      <p className="description">
                        yang berhasil mendaftarkan<br /> selema 5 tahun
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
