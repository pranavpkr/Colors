import React from "react";
import "./styles.css";
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
// import { createMuiTheme } from 'material-ui/styles';

// Constands for these for simplicity, would typically be props
const max = 255, min = 0, step = 1, initial = 127;

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
    step: step
  };


  onSlideStart = value => {
    // Set the step value sent to the slider when the user starts dragging
    this.setState({ step: step });
  };

  handleChanger(e,value) {
    this.setState({ sliderSumr: value });
  }

  handleChangeg(e,value) {
    this.setState({ sliderSumg: value });
  }

  handleChangeb(e,value) {
    this.setState({ sliderSumb: value });
  }

  render() {
    return (
      <div className="App">
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
        <div style={{
          padding:20,
          // marginLeft:"%",
          // backgroundColor: "#00a2",
          backgroundColor: "#"+
            String(this.state.sliderSumr.toString(16)).padStart(2, '0')+
            String(this.state.sliderSumg.toString(16)).padStart(2, '0')+
            String(this.state.sliderSumb.toString(16)).padStart(2, '0'),
          display:"inline-block",
          borderRadius: "50%",
          width:250,
          height:250,}} >
        </div>
        <label style = {{marginTop:"-45%"}}>
          {(String(this.state.sliderSumr.toString(16)).padStart(2, '0')+
            String(this.state.sliderSumg.toString(16)).padStart(2, '0')+
            String(this.state.sliderSumb.toString(16)).padStart(2, '0')).toUpperCase()}
        </label>
      </div>
    );
  }
}

export default App;
