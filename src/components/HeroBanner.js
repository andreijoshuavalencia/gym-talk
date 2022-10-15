import React from 'react'
import { Box,Stack, Typography, Button } from '@mui/material'

const HeroBanner = () => {
  return (
    <Box sx={{
      mt:{lg:'212px', xs:'70px'},
      ml:{sm:'50px'}
    }} position='relative' p='20px'>
      <Typography color='#d90429' fontWeight={800} fontSize='50px'>
        What is Fitness?
      </Typography>
      <Typography color='#2b2d42' fontWeight={500} sx={{fontSize:{lg:'44px', xs:'40px'}}} mb='23px' mt='30px'>
        it is a lifestyle. 
      </Typography>
      <Typography color='#2b2d42' fontSize='22px' lineHeight='35px' mb={5}>
        Check out our videos 
      </Typography>
      <Button variant='contained' color='secondary' href='#exercises' sx={{backgroundColor:'#d90429', padding:'10px'}}>Explore Exercises</Button>
      <Typography
        fontWeight={600}
        color="#2b2d42"
        sx={{
          opacity:0.1,
          display:{lg:'block', xs:'none'}
        }}
        fontSize='200px'
        >
        Exercise
      </Typography>
      <img src={require('../assets/images/hero-banner.jpg')} alt='banner' className='hero-banner-img' style={{borderRadius:'50px'}}></img>
    </Box>
  )
}

export default HeroBanner