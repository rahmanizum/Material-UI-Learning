import React from 'react'
import {Typography} from '@mui/material';

const MuiTypography = () => {
  return (
    <div>
      <Typography variant = 'h1'>h1 Heading</Typography>
      <Typography variant = 'h2'>h2 Heading</Typography>
      <Typography variant = 'h3'>h3 Heading</Typography>
      <Typography variant = 'h4' component= 'h1' gutterBottom>h4 Heading</Typography>
      <Typography variant = 'h5'>h5 Heading</Typography>
      <Typography variant = 'h6'>h6 Heading</Typography>

      <Typography variant = 'subtitle1'>h6 subtitle1</Typography>
      <Typography variant = 'subtitle2'>h6 subtitle2</Typography>

      <Typography variant = 'body1'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati quisquam, ullam eum ratione unde, tempora aliquid modi sunt at facere sit commodi fugiat mollitia ex sint et dolore. Nostrum, reprehenderit.</Typography>

      <Typography variant = 'body2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore fugiat nesciunt reprehenderit quibusdam quidem maxime vitae modi, porro voluptas dignissimos, voluptate soluta. Quis deleniti iure hic ducimus fugiat ratione reprehenderit maxime ipsa libero cupiditate non, veritatis facilis vitae unde. Consectetur!</Typography>

    </div>
  )
}

export default MuiTypography
