import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import ControlledSlider from "./Slider/Slider";

const useStyles = makeStyles(theme => ({
  root: {
    // padding: '43%',
    width: 300,
    marginLeft:"10%",
    marginTop:"10%",
  },
  margin: {
    height: theme.spacing(3),
  },
}));

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

var color = ["7F","7F","7F"];

function handleChanger(e, value) {
  color[0] = value.toString(16).toUpperCase();
  console.log( circleStyle.backgroundColor );
  circleStyle={
    padding:20,
    margin:30,
    backgroundColor: "#"+color.join(""),
    display:"inline-block",
    borderRadius: "50%",
    width:200,
    height:200,
  };
}

function handleChangeg(e, value) {
  color[1] = value.toString(16).toUpperCase();
  console.log( circleStyle.backgroundColor );
  circleStyle={
    padding:20,
    margin:30,
    backgroundColor: "#"+color.join(""),
    display:"inline-block",
    borderRadius: "50%",
    width:200,
    height:200,
  };
}

function handleChangeb(e, value) {
  color[2] = value.toString(16).toUpperCase();
  console.log( circleStyle.backgroundColor );
  circleStyle={
    padding:20,
    margin:30,
    backgroundColor: "#"+color.join(""),
    display:"inline-block",
    borderRadius: "50%",
    width:200,
    height:200,
  };
}


var circleStyle = {
    padding:20,
    margin:30,
    backgroundColor: "#"+color.join(""),
    display:"inline-block",
    borderRadius: "50%",
    width:200,
    height:200,
  };

export default function DiscreteSlider() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
    {circleStyle.backgroundColor}
      <Typography id="discrete-slider" gutterBottom>
        Red
      </Typography>
      <Slider
        defaultValue={127}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-small-steps"
        step={1}
        min={0}
        max={255}
        onChange={handleChanger}
        marks={marks}
        valueLabelDisplay="auto"
      />
      <div className={classes.margin} />
      <Typography id="discrete-slider-small-steps" gutterBottom>
        Green
      </Typography>
      <Slider
        defaultValue={127}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-small-steps"
        step={1}
        min={0}
        max={255}
        onChange={handleChangeg}
        marks={marks}
        valueLabelDisplay="auto"
      />
      <div className={classes.margin} />
      <Typography id="discrete-slider-custom" gutterBottom>
        Blue
      </Typography>
      <Slider
        defaultValue={127}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-custom"
        step={1}
        min={0}
        max={255}
        onChange={handleChangeb}
        valueLabelDisplay="auto"
        marks={marks}
      />
      <div style={circleStyle}></div>
    </div>
  );
}