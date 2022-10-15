import React from 'react'
import { Stack, Button, Typography } from '@mui/material'
import BodyPartImg from '../assets/images/body-part.png'
import TargetImg from '../assets/images/target.png'
import EquipmentImg from '../assets/images/equipment.png'
const Detail = ({exerciseDetail}) => {

    const {bodyPart, gifUrl, name, target, equipment}= exerciseDetail; 

    const extraDetail = [
        {
            icon:BodyPartImg,
            name:bodyPart
        },
        {
            icon:TargetImg,
            name:target
        },
        {
            icon:EquipmentImg,
            name:equipment
        }
    ]


  return (
    <Stack gap='60px'
    sx={{flexDirection:{lg:'row'}, p:'20px', alignItems:'center'}}
    >
        <img src={gifUrl} alt={name} loading='lazy' className='detail-image'></img>
        <Stack sx={{gap:{lg:'35px', xs:'20px'}}}>
            <Typography variant='h2' fontWeight='bold' textTransform='capitalize'>
                {name}
            </Typography>
            <Typography variant='h6'>
                This exercise will make your {target} stronger. {' '}
                {name} is one of the best exercise to do 
                if you want to have an aesthetic {target}. 
                It build strength in the {target}.
            </Typography>
            {extraDetail.map((item)=>(
                <Stack key={item.name} direction='row' gap='25px' alignItems='center'>
                    <Button sx={{background:'#fff2db', borderRadius:'50%', width:'100px', height:'100px'}}>
                        <img src={item.icon} alt={bodyPart} style={{width:'50px', height:'50px'}}/>
                    </Button>
                    <Typography textTransform='capitalize' variant='h5'>
                        {item.name}
                    </Typography>
                </Stack>
            ))}
            <Typography variant='h6'>
                Look out for more {target} exercises.
            </Typography>
        </Stack>
    </Stack>
  )
}

export default Detail