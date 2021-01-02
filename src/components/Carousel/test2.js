import React from "react"
import ReactDOM from 'react-dom';
import Slider from "react-slick";
import "./test.css"
import "./slick.css";
import "./slick-theme.css";
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import {RightArrow} from '@styled-icons/boxicons-solid/RightArrow';
import {LeftArrow} from '@styled-icons/boxicons-solid/LeftArrow';
 
const useStyles = makeStyles((theme) => ({
  root: {
  maxWidth: 400,
  flexGrow: 1,
},
positionStatic: {
  display: 'flex',
  alignItems: 'center',
  height: 50,
  paddingLeft: theme.spacing(4),
  backgroundColor: theme.palette.background.default,
},
img: {
  height: 255,
  maxWidth: 400,
  overflow: 'hidden',
  display: 'block',
  width: '100%',
},
test:{
    height:255,
    width: '100%',
}
}));

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block",  }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }


const Steps=[
{},

]



export default function SimpleSlider() {
 // const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps =6;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <div className="container">
    <Slider {...settings}>
      <div>
          <img src="https://dummyimage.com/304.52x473"/>
          <h3>1</h3>      
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
    <MobileStepper
   
   steps={maxSteps}
   position="static"
   variant="dots"
   activeStep={activeStep}
   nextButton={
     <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
 
       {theme.direction === 'rtl' ? <LeftArrow size="24px" /> : <RightArrow />}
     </Button>
   }
   backButton={
     <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
       {theme.direction === 'rtl' ? <RightArrow /> : <LeftArrow size="24px"/>}
 
     </Button>
   }
 />
    </div>
  );
}

/*
const { red, blue, green } = require('@material-ui/core/colors');
const Button = require('@material-ui/core/Button').default;

export default function Carousel({}){
    return(
    
    <div style={{ position: 'relative', width: '100%', height: 500 }}>
  <Button onClick={() => setState({ open: true })}>Open carousel</Button>
  <AutoRotatingCarousel
    label='Get started'
    open={state.open}
    onClose={() => setState({ open: false })}
    onStart={() => setState({ open: false })}
    style={{ position: 'absolute' }}
  >
    <Slide
      media={<img src='http://www.icons101.com/icon_png/size_256/id_79394/youtube.png' />}
      mediaBackgroundStyle={{ backgroundColor: red[400] }}
      style={{ backgroundColor: red[600] }}
      title='This is a very cool feature'
      subtitle='Just using this will blow your mind.'
    />
    <Slide
      media={<img src='http://www.icons101.com/icon_png/size_256/id_80975/GoogleInbox.png' />}
      mediaBackgroundStyle={{ backgroundColor: blue[400] }}
      style={{ backgroundColor: blue[600] }}
      title='Ever wanted to be popular?'
      subtitle='Well just mix two colors and your are good to go!'
    />
    <Slide
      media={<img src='http://www.icons101.com/icon_png/size_256/id_76704/Google_Settings.png' />}
      mediaBackgroundStyle={{ backgroundColor: green[400] }}
      style={{ backgroundColor: green[600] }}
      title='May the force be with you'
     
    />
  </AutoRotatingCarousel>
</div>

    
    
    );
}

const slide=({media)=>{
    
}
*/