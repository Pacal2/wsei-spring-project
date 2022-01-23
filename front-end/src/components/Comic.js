import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Comic() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1},
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Comic book title" variant="outlined" />
      <TextField id="outlined-basic" label="Your rating" variant="outlined" />
    </Box>
  );
}
