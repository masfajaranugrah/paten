import React from 'react';

const Counter = () => {
  return (
    <div>
      <div className="history-area history-style-one counter-history-bg-image bg_image tmp-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-head color-white style-two">
              <div class="scater-line">
                        <img src="assets/images/work/shape.png" alt=""/>
                    </div>
                <div className="section-sub-title color-white center-title">
                  <span>Visi & Misi</span>
                </div>
                <h2 className="title color-white split-collab">PT. Paten Online Indonesia</h2>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4">
            <div data-sal-delay="350" data-sal-duration="800">
              <div className="history-inner style-one">
                <div className="custom-icon">
                  <img src="assets/images/counter/03.png" alt=""/>
                </div>
                <div className="counter-wrapper">
                  <div className="single-counter">
                    <h2 className="number"><span className="counter">Visi</span></h2>
                    <ol>
                    <li className='text-white'>Menjadikan perusahaan Konsultan Kekayaan Intelektual yang terkemuka di Indonesia</li>
                    </ol> 
                  </div>
                </div>
              </div>
            </div>

            <div data-sal-delay="450" data-sal-duration="800">
              <div className="history-inner style-one">
                <div className="custom-icon">
                  <img src="assets/images/counter/04.png" alt=""/>
                </div>
                <div className="counter-wrapper">
                  <div className="single-counter">
                    <h2 className="number"><span className="counter">Misi</span></h2>
                    <ol>
                    <li className='text-white'>1. Membantu pendaftaran kekayaan intelektual secara cepat dan akurat.</li>
                    <li className='text-white'>2. Memberikan sosialisasi dan edukasi kepada masyarakat luas tentang pentingnya perlindungan dan penghargaan terhadap kekayaan intelektual.</li>
                    <li className='text-white'>3. Membangun kerja sama yang saling menguntungkan dengan stakeholder di bidang kekayaan intelektual.</li>
                    </ol>
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

export default Counter;
