import React from 'react';
import styled from 'styled-components';
import SlickSlider from 'react-slick';
import ReactSVG from 'react-svg';

import 'slick-carousel/slick/slick.css';


import sliderSVG from './../../../assets/custom-slider-paging.svg';
import chevronLeft from './../../../assets/chevron-left.svg';

const Carousel = ({ settings, children }) => {
  const { prevArrow, nextArrow, arrowStyle={}, ...otherSettings} = settings

  ////// Default Arrow ///////
  const ArrowContainer = styled.div`
    background-color: rgba(64,64,64, .8);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    border-radius: 0 50px 50px 0;
    padding-right: 15px;
    width: 20px;
    ${arrowStyle.container}
  `
  const ArrowSVG = styled(ReactSVG)`
    stroke: white;
    height: 40px;
    width: 40px;
    ${arrowStyle.svg}
  `
  const DefaultArrow = props =>(
    <ArrowContainer>
      <ArrowSVG path={chevronLeft} />
    </ArrowContainer>
  )
  ////////// END //////////

  const TheLeftArrow = ({className, onClick}) => (
    <div {...{className, onClick}}>
      { prevArrow || <DefaultArrow />}
    </div>
  )
  const TheRightArrow = nextArrow ?
    ({className, onClick}) => (
      <div {...{className, onClick}}>
        { nextArrow }
      </div>
    )
    :
    styled(TheLeftArrow)`
      & > div {
        transform: scaleX(-1);
        filter: FlipH;
      }
    `
  const slickSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 1000,

    lazyLoad: true,
    pauseOnHover: true,
    draggable: false,
    dots: true,
    arrows: false,
    prevArrow: <TheLeftArrow />,
    nextArrow: <TheRightArrow />,
    customPaging: () => (<a><ReactSVG path={ sliderSVG } /></a>),
    ...otherSettings
  }
  const Slider = styled(SlickSlider)`
    height: 100%;
    display: flex !important;
    align-items: center;


    & .slick-active circle {
      fill: white;
    }
    & .slick-list {

    }
    & .slick-dots {
      bottom: 0px;
      display: flex;
    }
    & .slick-dots li {
      width: 10px;
    }
    & .slick-prev, .slick-next {
      all: unset;
      cursor: pointer;
    }
    & .slick-prev:before, .slick-next:before {
      display: none;
    }
  `
  return (
    <SlickSlider {...slickSettings}>
        { children }
    </SlickSlider>
  )
}


export default Carousel;
