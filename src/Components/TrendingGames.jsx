import React, { Component } from 'react'
import Slider from 'react-slick'
import { TrendingImg1 } from '../img/trendingImg1.png'
import { TrendingImg2 } from '../img/trendingImg2.png'
import { TrendingImg3 } from '../img/trendingImg3.png'
import { TrendingImg4 } from '../img/trendingImg4.png'

export default class TrendingGames extends Component() {
  render() {
    const settings = {
      className: "center",
      infinite: true,
      dots: false,
      centerPadding: "60px",
      slidesToShow: 4,
      swipeToSlide: true,
      slidesToScroll: 4,
      initialSlide: 0,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,

      responsive: [
        {
          breakpoint: 1335,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 860,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 525,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ],
    };

  return (
    <section className='TrendingGameSection'>
      <div className="container">
        <div className='trendingContent'>
          <h2>Currently Trending Games</h2>
          <a href="#">SEE ALL</a>
        </div>

        <div className="trendingSlider">
          <center>
            <Slider {...settings}>
              <div className="trendingGamesInfo">
                <img src={TrendingImg1} alt="..." />
                <h3>40 Followers</h3>
              </div>
              <div className="trendingGamesInfo">
                <img src={TrendingImg2} alt="..." />
                <h3>40 Followers</h3>
              </div>
              <div className="trendingGamesInfo">
                <img src={TrendingImg3} alt="..." />
                <h3>40 Followers</h3>
              </div>
              <div className="trendingGamesInfo">
                <img src={TrendingImg4} alt="..." />
                <h3>40 Followers</h3>
              </div>
              <div className="trendingGamesInfo">
                <img src={TrendingImg1} alt="..." />
                <h3>40 Followers</h3>
              </div>
              <div className="trendingGamesInfo">
                <img src={TrendingImg2} alt="..." />
                <h3>40 Followers</h3>
              </div>
            </Slider>
          </center>
        </div>

        <p className='trendingGamesText'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </div>
    </section>
    )
  }
}
