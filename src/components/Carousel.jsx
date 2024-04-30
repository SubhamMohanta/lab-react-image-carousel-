import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
// you can explore more - and check as how to use materiul ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// implement the class below
class Carousel extends Component {
  constructor(){
    super();
    //set an initial state
    this.state = {
        currentIndex: 0
    }
  }
  increase = () => {
    if(this.state.currentIndex >= images.length - 1){
        this.setState({
            currentIndex:0
        });
    }else{
        this.setState({
            currentIndex : this.state.currentIndex + 1
        })
    }

  }
  decrease = () =>{
    if(this.state.currentIndex <= 0){
        this.setState({
            currentIndex : 2
        });
    }else{
        this.setState({
            currentIndex : this.state.currentIndex - 1
        })
    }

  }
  render(){
    const forwardArrowStyle = {
        color: 'white'
      };
    return <>
        <h1>Carousel</h1>
        <div className="carousel-container">
            <div className="leftArrow arrowDiv flex" onClick={this.decrease}>
                <ArrowBackIosIcon style={forwardArrowStyle}/>
            </div>
            <h2 className="title">{images[this.state.currentIndex].title}</h2>
            <img src={images[this.state.currentIndex].img} alt=""/>
            <h4 className="caption">{images[this.state.currentIndex].subtitle}</h4>
            <div className="rightArrow arrowDiv flex" onClick={this.increase}>
                <ArrowForwardIosIcon style={forwardArrowStyle}/>
            </div>
        </div>
    </>
  }
}

export default Carousel;