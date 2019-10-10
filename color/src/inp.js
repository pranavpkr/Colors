import React from "react";
import ControlledSlider from "./Slider/Slider";
import Input from "./Input";
import BadExample from "./BadExample/BadExample";
import "./styles.css";

// Constands for these for simplicity, would typically be props
const max = 50000;
const min = 5000;
const step = 5000;
const value = 25000;

class App extends React.Component {
  state = {
    // Set state values to reflect consts/props
    sum: value,
    sliderSum: value,
    step: step
  };

  onInputChange = value => {
    if (value) {
      const sum = parseInt(value, 10);
      this.setState({
        sum: sum
      });

      // Update slider with new value only if it’s within the sliders domain
      if (sum >= min && sum <= max) {
        this.setState({ sliderSum: sum });
      }
    } else {
      // Empty string is preferred when dealing with controlled components
      this.setState({ sum: "" });
    }
  };

  onSlideStart = value => {
    // Set the step value sent to the slider when the user starts dragging
    this.setState({ step: step });
  };

  onSliderChange = value => {
    const sum = parseInt(value, 10);

    // When the slider is changed, set both input and slider values to reflect new value
    this.setState({
      sum,
      sliderSum: sum
    });
  };

  render() {
    return (
      <div className="App">
        <label htmlFor="sliderinput">User friendly solution</label>
        <Input
          name={"sliderinput"}
          id={"sliderinput"}
          value={this.state.sum}
          onChange={e => this.onInputChange(e.target.value)}
          onFocus={() => this.setState({ step: 1 })} // When the input is focused, set step value to 1
        />
        <ControlledSlider
          min={min}
          max={max}
          step={this.state.step}
          defaultValue={this.state.sliderSum}
          onUpdate={value => this.onSliderChange(value)}
          onSlideStart={value => this.onSlideStart(value)}
        />
      </div>
    );
  }
}

export default App;
