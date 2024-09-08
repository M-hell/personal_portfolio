import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';



export default function SkillSlider(props) {
    let level=props.newvalue;
  return (
    <Box sx={{ width: 150 }}>
      <Slider
        aria-label="Temperature"
        defaultValue={level}
        color="secondary"
        step={null}
      />
    </Box>
  );
}
