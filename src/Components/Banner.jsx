import React from 'react';
import banner from '/assets/images/banner/banner.png'
const Banner = () => {
  return (
    <div>
      <div className="banner-area banner-style-two bg_image" style={{height : "120vh"}}>
        <div className="container">
          <div className="row align-items-center mt-[20rem]">
            <div className="col-lg-5 order-xl-1 order-lg-1 order-md-2 order-sm-2 order-2">
              <div className="banner-inner">
                <div className="sub-title" style={{ display: 'block' }} data-sal-delay="150"   data-sal-duration="800">
                  Paten Online  Indonesia
                </div>
                <h2 className="title split-collab text-[40px] font-bold">
                  PT.Paten Online <br/> Indonesia
                </h2>
                <p className="description text-black font-semibold" data-sal-delay="350"   data-sal-duration="800">
                  Ayo Jadikan Indonesia Lebih Kuat
                </p>
                <div className="banner-bottom" style={{ gap: '30px' }} data-sal-delay="450"   data-sal-duration="800">
                  <a href="contact.html" className="tmp-btn btn-secondary">Tentang Kami</a>

                  <div className="vedio-icone" data-tmp-cursor="lg" data-tmp-cursor-text="Play Video">
                    <a className="video-play-button play-video" href="#">
                      <span style={{ borderLeftColor: 'var(--color-secondary)' }}></span>
                      <p className="text" style={{ color: 'black' }}>
                        Video
                      </p>
                    </a>
                    <div className="video-overlay">
                      <a className="video-overlay-close">×</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-5 offset-lg-2 order-xl-2 order-lg-2 order-md-1 order-sm-1 order-1">
              <div className="banner-two-thumbnail">
                <div className="thumbnail">
                  <img src={banner} alt="Business_Corporate" data-sal-delay="250" style={{width: "800%"}}  data-sal-duration="800" />
                  {/* <div className="product-share product-share-style-two">
                    <div className="rating">
                      <div className="number">4.8</div>
                      <div className="stars-group">
                        <div className="star">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star-half-stroke"></i>
                        </div>
                      </div>
                    </div>
                    <div className="profile-share">
                      <a href="#" className="avatar" data-tooltip="Mark JOrdan" tabIndex="0"><img src="assets/images/about/4.png" alt="education" /></a>
                      <a href="#" className="avatar" data-tooltip="Mark JOrdan" tabIndex="0"><img src="assets/images/about/5.png" alt="education" /></a>
                      <a href="#" className="avatar" data-tooltip="Mark JOrdan" tabIndex="0"><img src="assets/images/about/6.png" alt="education" /></a>
                      <a href="#" className="avatar" data-tooltip="Mark JOrdan" tabIndex="0"><img src="assets/images/about/7.png" alt="education" /></a>
                    </div> 
                  </div>*/}

                  <div className="banner-tag">
                    <div className="inner">
                      <div className="icon bg-color-secondary radius-circle mr--20">
                      <i class="fa-solid fa-check"></i>                      </div>
                      <div className="content">
                        <h3 className="title">Patenkan Karyamu<br />Lindungi Merekmu!.</h3>
                       </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

  
 

        <div className="bg-blue-circle">
          <img src="assets/images/banner/blue-circle.png" alt="banner" />
        </div>
 
      </div>
    </div>
  );
};

export default Banner;
