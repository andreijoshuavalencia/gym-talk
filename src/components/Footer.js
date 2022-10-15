import React from 'react'
import { Box,Stack, Typography } from '@mui/material'
import Logo from '../assets/images/logo.png'

const Footer = () => {
  return (
    <Box mt='80px' bgcolor='#fff3f4'> 
      <Stack gap='80px' alignItems='center' px='40px' pt='20px'>
        <Typography variant='h5' pb='20px' mt='20px'>Made with ♥ by Andrei Joshua Valencia</Typography>
      </Stack>
    </Box>
  )
}

export default Footer