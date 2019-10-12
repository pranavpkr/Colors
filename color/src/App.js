import React from "react";
import "./styles.css";
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Helmet from 'react-helmet';

// Constands for these for simplicity, would typically be props
const max = 255, min = 0, step = 1, initial = 127,wht = "#ffffff",drk = "#000000";

const marks = [
  {
    value: 0,
    label: '0',
  },
  {
    value: 255,
    label: '255',
  },
];

function valuetext(value) {
  return `${value}`;
}

class App extends React.Component {
  state = {
    // Set state values to reflect consts/props
    sliderSumr: initial,
    sliderSumg: initial,
    sliderSumb: initial,
    intcolor : drk,
    step: step
  };


  onSlideStart = value => {
    // Set the step value sent to the slider when the user starts dragging
    this.setState({ step: step });
  };

  handleChanger(e,value) {
    this.setState({ sliderSumr: value });

    if (this.state.sliderSumr < 100 && 
        this.state.sliderSumg < 100 &&
        this.state.sliderSumb < 100){
        this.setState({ intcolor: wht });
    }else{
        this.setState({ intcolor: drk });
    }
  }

  handleChangeg(e,value) {
    this.setState({ sliderSumg: value });

    if (this.state.sliderSumr < 100 && 
        this.state.sliderSumg < 100 &&
        this.state.sliderSumb < 100){
        this.setState({ intcolor: wht });
    }else{
        this.setState({ intcolor: drk });
    }
  }

  handleChangeb(e,value) {
    this.setState({ sliderSumb: value });

    if (this.state.sliderSumr < 100 && 
        this.state.sliderSumg < 100 &&
        this.state.sliderSumb < 100){
        this.setState({ intcolor: wht });
    }else{
        this.setState({ intcolor: drk });
    }
  }

  render() {
    return (
      <div className="App">
        <Helmet>
          <style>{'body { background-color: #'+
            String(this.state.sliderSumr.toString(16)).padStart(2, '0')+
            String(this.state.sliderSumg.toString(16)).padStart(2, '0')+
            String(this.state.sliderSumb.toString(16)).padStart(2, '0')
          +'; }'}</style>
        </Helmet>

        <label style = {{marginTop:"0%",color:this.state.intcolor}}>
          {String(this.state.sliderSumr).padStart(3, '0')+" | "+
           String(this.state.sliderSumg).padStart(3, '0')+" | "+
           String(this.state.sliderSumb).padStart(3, '0')}
        </label>
        <Typography style={{marginLeft:"-92.5%"}} id="discrete-slider" gutterBottom>
          Red
        </Typography>
        <Slider
          defaultValue={initial}
          getAriaValueText={valuetext}
          aria-labelledby="discrete-slider-small-steps"
          step={step}
          min={min}
          max={max}
          marks={marks}
          onChange={(e,value) => this.handleChanger( e,value)}
          valueLabelDisplay="auto"
        />
        <Typography style={{marginLeft:"-88%"}} id="discrete-slider" gutterBottom>
          Green 
        </Typography>
        <Slider
          defaultValue={initial}
          getAriaValueText={valuetext}
          aria-labelledby="discrete-slider-small-steps"
          step={step}
          min={min}
          max={max}
          marks={marks}
          onChange={(e,value) => this.handleChangeg( e,value)}
          valueLabelDisplay="auto"
        />
        <Typography style={{marginLeft:"-92%"}} id="discrete-slider" gutterBottom>
          Blue
        </Typography>
        <Slider
          defaultValue={initial}
          getAriaValueText={valuetext}
          aria-labelledby="discrete-slider-small-steps"
          step={step}
          min={min}
          max={max}
          marks={marks}
          onChange={(e,value) => this.handleChangeb( e,value)}
          valueLabelDisplay="auto"
        />
        <label style = {{marginTop:"0%",color:this.state.intcolor}}>
          {('#'+String(this.state.sliderSumr.toString(16)).padStart(2, '0')+
            String(this.state.sliderSumg.toString(16)).padStart(2, '0')+
            String(this.state.sliderSumb.toString(16)).padStart(2, '0')).toUpperCase()}
        </label>
      </div>
    );
  }
}

export default App;
