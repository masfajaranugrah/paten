import React from 'react';
import CryptoJS from 'crypto-js';
import encryptedData  from '../db/db.jsx';

// Define your encryption key (ensure this matches the key used during encryption)
const encryptionKey = "your-secret-key"; // Change this to your actual key

const decryptData = (encryptedItem) => {
  const decryptedItem = {
    id: CryptoJS.AES.decrypt(encryptedItem.id, encryptionKey).toString(CryptoJS.enc.Utf8),
    img: encryptedItem.img,
    title: CryptoJS.AES.decrypt(encryptedItem.title, encryptionKey).toString(CryptoJS.enc.Utf8),
    desc: CryptoJS.AES.decrypt(encryptedItem.desc, encryptionKey).toString(CryptoJS.enc.Utf8),
  };
  return decryptedItem;
};

const Service = () => {
  return (
    <div>
      <div className="service-area tmp-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-head">
                <div className="section-sub-title color-secondary center-title">
                  <span>Layanan</span>
                </div>
                <h2 className="section-title split-collab">Kami menyediakan beberapa layanan untuk anda</h2>
              </div>
            </div>
          </div>
          <div className="row g-5">
            {encryptedData.map((item) => {
              const decryptedItem = decryptData(item);
              return (
                <div className="col-lg-4 col-md-6 col-sm-6 col-12" data-sal-delay="150" data-sal-duration="800" key={decryptedItem.id}>
                  <div className="service-inner financial-service-inner">
                    <div className="icon">
                      <img src={decryptedItem.img} alt={decryptedItem.title} />
                    </div>
                    <div className="content">
                      <h2 className="title">{decryptedItem.title}</h2>
                      <p className="description">{decryptedItem.desc}</p>
                    </div>
                    <a href="service-details.html" className="over_link"></a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
