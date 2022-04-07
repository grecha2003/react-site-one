import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

import img1 from '../assets/img1.jpeg';
import img2 from '../assets/img2.jpeg';
import img3 from '../assets/img3.jpeg';

class CarouselBox extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            className='d-block w-100'
            style={{ height: "900px" }}
            src={img1}
            alt='images' />
          <Carousel.Caption>
            <h3>Images 1</h3>
            <p>Duis irure eiusmod ullamco velit minim ex velit. Officia ipsum ex dolor elit elit nulla dolore deserunt
              dolore cillum. Consectetur Lorem mollit velit incididunt et veniam quis cillum eiusmod cillum commodo ad
              pariatur.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            style={{ height: "900px" }}
            src={img2}
            alt='images' />
          <Carousel.Caption>
            <h3>Images 2</h3>
            <p>Duis irure eiusmod ullamco velit minim ex velit. Officia ipsum ex dolor elit elit nulla dolore deserunt
              dolore cillum. Consectetur Lorem mollit velit incididunt et veniam quis cillum eiusmod cillum commodo ad
              pariatur.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            style={{ height: "900px" }}
            src={img3}
            alt='images' />
          <Carousel.Caption>
            <h3>Images 3</h3>
            <p>Duis irure eiusmod ullamco velit minim ex velit. Officia ipsum ex dolor elit elit nulla dolore deserunt
              dolore cillum. Consectetur Lorem mollit velit incididunt et veniam quis cillum eiusmod cillum commodo ad
              pariatur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default CarouselBox;
