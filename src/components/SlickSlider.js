import React from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card} from "react-bootstrap";
import Slider from "react-slick";
import { SliderStyled } from "./styles/Slider.styled";

const SlickSlider =()=>{
    const settings = {
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
      };

    return(
       <SliderStyled>
         <div>
         <h1>React Slick Slider</h1>
        <Slider {...settings}>
          <div>
          <Card style={{ width: "15rem" }}>
            <Card.Img variant="top" src="https://picsum.photos/100/100" />
            <Card.Body>
              <Card.Title>The beautiful Senerio of nature</Card.Title>
              <Card.Text>
                Lorem, ipsum dolor sit amet consectetur adipisicing.
              </Card.Text>
            </Card.Body>
          </Card>
          </div>
          <div>
          <Card style={{ width: "15rem" }}>
            <Card.Img variant="top" src="https://picsum.photos/100/100/?blur=2" />
            <Card.Body>
              <Card.Title>The beautiful Senerio of nature</Card.Title>
              <Card.Text>
                Lorem, ipsum dolor sit amet consectetur adipisicing.
              </Card.Text>
            </Card.Body>
          </Card>
          </div>
          <div>
          <Card style={{ width: "15rem" }}>
            <Card.Img variant="top" src="https://picsum.photos/100" />
            <Card.Body>
              <Card.Title>The beautiful Senerio of nature</Card.Title>
              <Card.Text>
                Lorem, ipsum dolor sit amet consectetur adipisicing.
              </Card.Text>
            </Card.Body>
          </Card>
          </div>
          <div>
          <Card style={{ width: "15rem" }}>
            <Card.Img variant="top" src="https://picsum.photos/100/100" />
            <Card.Body>
              <Card.Title>The beautiful Senerio of nature</Card.Title>
              <Card.Text>
                Lorem, ipsum dolor sit amet consectetur adipisicing.
              </Card.Text>
            </Card.Body>
          </Card>
          </div>
          <div>
          <Card style={{ width: "15rem" }}>
            <Card.Img variant="top" src="https://picsum.photos/100/100" />
            <Card.Body>
              <Card.Title>The beautiful Senerio of nature</Card.Title>
              <Card.Text>
                Lorem, ipsum dolor sit amet consectetur adipisicing.
              </Card.Text>
            </Card.Body>
          </Card>
          </div>
          <div>
          <Card style={{ width: "15rem" }}>
            <Card.Img variant="top" src="https://picsum.photos/100/100/?blur=2" />
            <Card.Body>
              <Card.Title>The beautiful Senerio of nature</Card.Title>
              <Card.Text>
                Lorem, ipsum dolor sit amet consectetur adipisicing.
              </Card.Text>
            </Card.Body>
          </Card>
          </div>
        </Slider>
      </div>
       </SliderStyled> 
    )
}

export default SlickSlider;