import React from 'react'
import { Stack, Typography } from '@mui/material'
import Icon from '../assets/images/gym_icon.png'

export const BodyPart = ({item, setBodyPart, bodyPart}) => {
  return (

        <Stack
        type='button' 
        alignItems='center' 
        justifyContent='center' 
        className='bodyPart-card'
        sx={{
            borderTop: bodyPart === item ? '4px solid #d90429' : '',
            backgroundColor:'#fff',
            borderBottomLeftRadius:'20px',
            width:'270px',
            height:'280px',
            cursor:'pointer',
            gap:'40px'
        }}
        onClick={() => { //not yet working
          setBodyPart(item);
          window.scrollTo({top:1800, left: 100, behavior:'smooth'});
        }}
        >
        <img src={Icon} alt='gym' style={{width:'80px', height:'80px'}}></img>
        <Typography fontSize='24px' fontWeight='bold' color='#3A1212' textTransform='capitalize'>
          {item}
        </Typography>
        </Stack>

  )
}
