import React from 'react';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';

export default function UserCardModal() {
  return (
    <Box>
    <Box
    sx={{
        display: "flex",
        justifyContent: "space-between"
    }}
    >
    <Grid>
    <LocalMallOutlinedIcon />
    <Typography>Shopping Cart</Typography>
    <span></span>
    </Grid>
    <Grid>X</Grid>
    </Box>
    </Box>>
  )
}
