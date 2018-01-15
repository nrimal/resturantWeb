import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import menuPage1 from '../images/menuPage1.jpg'
import menuPage2 from '../images/menuPage2.jpg'
import menuPage3 from '../images/menuPage3.jpg'
import menuPage4 from '../images/menuPage4.jpg'
import menuPage5 from '../images/menuPage5.jpg'
import '../css/carousel.min.css';
import '../css/menupage.css'

const imageSlide = [menuPage1, menuPage2, menuPage3, menuPage4, menuPage5];

class Menu extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="image-container">
                <Carousel showThumbs={false} showArrows={true} infiniteLoop={true}>
                    <div>
                        <img src={imageSlide[0]} alt="not found" />
                    </div>
                    <div>
                        <img src={imageSlide[1]} alt="not found" />
                    </div>
                    <div>
                        <img src={imageSlide[2]} alt="not found" />
                    </div>
                    <div>
                        <img src={imageSlide[3]} alt="not found" />
                    </div>
                    <div>
                        <img src={imageSlide[4]} alt="not found" />
                    </div>
                </Carousel>
            </div>
        );
    }
}

export default Menu