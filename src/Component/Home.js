import React from 'react'
import '../css/home.css'
import HourBox from './StoreHour'
const Home = () => (
  <div className="vertical-line">
    <div className="col v1"></div>
    <div className="col message-container">
      <h1>Our Story!</h1>
      <p>Himalayan Grille brings the distinctive tastes from the foothills of the Himalayas to the Buckeye State. Our menu varies fresh vegetables and meats with the exotic spices of the Himalayas. Featuring dishes from the banks of the Indian Ocean to the peaks of the Himalayas; we focus on bringing you the Indian, Nepali and Tibetan cuisines we love.</p>
      <p>Our passion is serving you authentic Himalayan dishes made with quality ingredients and exotic herbs. Head chef is an expert at blending spices to tease your taste buds; and of course, your taste buds will certainly be satisfied before you leave our restaurant and leave you wanting more! </p>
    </div>
    <div id="hour-container-home">
      <HourBox />
    </div>
    <div className="col social-box">
      <h3>Follow us and give us your opinon on Facebook!</h3>    
      <iframe title="facebook-page" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FHimalayanGrille1%2F%3Frf%3D951843608217514&tabs=timeline&width=340&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId" className="facebook-plugin" ></iframe>
    </div>
    <div className="col v2"></div>
  </div>
)
export default Home
