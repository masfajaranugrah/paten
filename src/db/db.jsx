import CryptoJS from "crypto-js";
import img1 from "/assets/images/services/service-icon-1.png";
import img2 from "/assets/images/services/service-icon-2.png";
import img3 from "/assets/images/services/service-icon-3.png";
import img4 from "/assets/images/services/service-icon-4.png";
import img5 from "/assets/images/services/service-icon-5.png";

// Define your encryption key
const encryptionKey = "your-secret-key"; // Change this to a secure key

 const dataLayanan = [
  {
    id: "3e9c5e49-c9f5-458d-8fad-9b3dae7ce381",
    img: img1,
    title: "pendaftaran merek",
    desc: "Merek adalah tanda yang dapat ditampilkan secara grafis berupa gambar, logo, nama, kata, huruf, angka, susunan warna, dalam bentuk 2 (dua) dimensi dan/atau 3 (tiga) dimensi"
  },
  {
    id: "c756addb-9340-4942-a58b-4a71c6fbb327",
    img: img2,
    title: "Pendaftaran Hak Cipta",
    desc: "Hak Cipta adalah hak eksklusif pencipta yang timbul secara otomatis berdasarkan prinsip deklaratif setelah suatu ciptaan diwujudkan dalam bentuk nyata tanpa mengurangi pembatasan sesuai dengan ketentuan peraturan perundang-undangan"
  },
  {
    id: "3",
    img: img3,
    title: "Pendaftaran Paten",
    desc: "Paten adalah hak eksklusif yang diberikan oleh negara kepada inventor atas hasil invensinya di bidang teknologi, yang untuk selama waktu tertentu melaksanakan sendiri invensinya tersebut kepada pihak lain untuk melaksanakannya."
  },
  {
    id: "4",
    img: img4,
    title: "Pendaftaran Desain Industri",
    desc: "Desain Industri adalah perlindungan hukum terhadap bentuk, pola, atau warna pada produk yang bersifat 2D atau 3D."
  },
  {
    id: "5",
    img: img5,
    title: "Pendaftaran Indikasi Geografis",
    desc: "Indikasi Geografis adalah suatu tanda yang menunjukkan daerah asal suatu barang dan/atau produk yang karena faktor lingkungan geografis termasuk faktor alam, faktor manusia atau kombinasi dari kedua faktor tersebut memberikan reputasi, kualitas, dan karakteristik tertentu pada barang dan/atau produk yang dihasilkan."
  }
];

 const dataAbout = [
  {
    id : '1',
    tag : "About",
    title : "Find out more about our business consulting",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget ornare quam. Sed sit amet sem sollicitudin, condimentum diam sed, consequat tellus. Quisque ac odio eget ligula gravida efficitur. Nunc facilisis sagittis magna, non venenatis mauris luctus quis. Nulla sapien purus feugiat vel dictum sit amet."
    
  }
]



// Encrypt the data
const encryptedData = dataLayanan.map(item => {
  const encryptedItem = {
    id: CryptoJS.AES.encrypt(item.id, encryptionKey).toString(),
    img: item.img,
    title: CryptoJS.AES.encrypt(item.title, encryptionKey).toString(),
    desc: CryptoJS.AES.encrypt(item.desc, encryptionKey).toString()
  };
  return encryptedItem;
});


// To use the encrypted data
export default encryptedData
