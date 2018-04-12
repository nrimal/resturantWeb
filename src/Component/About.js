import React from 'react'

import NepalImage from '../images/nepalImage.jpg'
import IndiaImage from '../images/indiaImage.jpg'
import TibetImage from '../images/tibetImage.jpg'
const About = () => (
  <div>

    <div className="col about-container">
      <h1>About our food!</h1>
    </div>

    <div className="col flex-container">

      <div className="col info-cont">
        <h3>Nepal</h3>
        <p>
          Nepal is the birthplace of Budhha; home to the highest peak in the world; and the country of natural beauty, bio-diversity, cultures & traditions, and art & architectures.
        </p>
        <p>
          Set against the backdrop of the Himalayas, the people of Nepal have diverse different backgrounds and ethnicities which is reflected within the country’s cuisine.
            Nepali cuisine, though influenced by its neighbors has its own gastronomic history serving foods that are rich not only rich with flavor but steeped in culture.
          </p>
      </div>

      <div className="col info-cont">
        <h3>India</h3>
        <p>
          "India is the cradle of the human race, the birthplace of human speech, the mother of history, the grandmother of legend, and the great grandmother of tradition”-Mark Twain
        </p>
        <p>
          Indian cuisine is described as spicy, rich, flavorful and diverse in variety and taste, as it is comprised of a wide array of regional cuisines throughout various parts of India.
          </p>
      </div>

      <div className="col info-cont">
        <h3>Tibet</h3>
        <p>
          “A place rich with all the strange beauty of your nighttime dreams. For me Tibet is a uniquely spiritual place. Those moments of peace, fleeting and precious, when everything seems to be in its proper place, just seem to come more frequently here” -Heinrich Harrer, a mountaineer and author of a book, “Seven Years in Tibet.”
        </p>
        <p>
          Just like Tibetan culture and people, Tibetan cuisine has a very distinct character. It reflects the local landscape of mountains and plateaus, and includes influences from neighboring countries including India and Nepal. Because of extreme climate, the Tibetan diet consists mostly of meat, milks and other high protein foods.
            </p>
        
      </div>

    </div>
    
    <div className="col flex-container2">
    <img src={NepalImage} className="img about-us-image" alt="not found "></img>
    <img src={IndiaImage} className="img about-us-image" alt="not found"></img>
    <img src={TibetImage} className="img about-us-image" alt="not found"></img>
    </div>


  </div>
)

export default About
