import React from 'react'
import '../css/home.css'
const Home = () => (
  <div className="vertical-line">
    <div className="col v1"></div>
    <div className="col message-container">
      <h1>Our Story!</h1>
      <p>Himalayan Grille brings the distinctive tastes from the foothills of the Himalayas to the Buckeye State. Our menu varies fresh vegetables and meats with the exotic spices of the Himalayas. Featuring dishes from the banks of the Indian Ocean to the peaks of the Himalayas; we focus on bringing you the Indian, Nepali and Tibetan cuisines we love.</p> 
      <p>Our passion is serving you authentic Himalayan dishes made with quality ingredients and exotic herbs. Head chef is an expert at blending spices to tease your taste buds; and of course, your taste buds will certainly be satisfied before you leave our restaurant and leave you wanting more! </p>
    </div>

    <div className="col" id="restaurant-hour-container">
      <label> Hours</label>
      <p>Lunch Buffet: 11:00 AM-2:30 PM(Wednesday-Sunday)</p>
      <p> No Buffet on Monday & Tuesday(Lunch is served on menu) </p>
      <p> Dinner: 5:00 PM to 9:30 PM</p>
    </div>
    <div className="col v2"></div>
  </div>
)
export default Home
