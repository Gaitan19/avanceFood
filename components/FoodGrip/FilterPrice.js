import Slider from '@mui/material/Slider';
import { useState } from 'react';
import Typography from '@mui/material/Typography';
import FoodLeftItem from './FoodLeftItem';

const FilterPrice = () => {
  const [valueSlider, setValueSlider] = useState([0, 200]);

  const minDistance = 200;

  const handleChange1 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValueSlider([
        Math.min(newValue[0], valueSlider[1] - minDistance),
        valueSlider[1],
      ]);
    } else {
      setValueSlider([
        valueSlider[0],
        Math.max(newValue[1], valueSlider[0] + minDistance),
      ]);
    }
  };

  const sliderLable = (value) => `$${value}`;

  return (
    <FoodLeftItem title="Filter by price">
      <Slider
        value={valueSlider}
        onChange={handleChange1}
        valueLabelDisplay="on"
        max={1000}
        min={0}
        step={50}
        disableSwap
        className="Food-slider"
        valueLabelFormat={sliderLable}
      />
    </FoodLeftItem>
  );
};

export default FilterPrice;
