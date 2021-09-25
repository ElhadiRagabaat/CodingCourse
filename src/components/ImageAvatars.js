import * as React from 'react';
import Stack from '@mui/material/Stack';
import {Card } from '@mui/material';


export default function ImageAvatars() {
  return (
    

     <Card >
    <Stack direction="row" spacing={2} className="avatars">
        <div className="avatar-info" elevation={4} >
        <img className="staff-img" src="./images/graduation.jpg"/>
        <h6 className='avatar-name'>Elhadi</h6>
        <h6 className='avatar-phone'>0548726198</h6>
        <h6 className='avatar-email'>elhadiragabaat@gmail.com</h6>
        </div>
      
        <div className="avatar-info" >
        <img className="staff-img merghani" src="./images/marghni.jpg"/>
        <h6 className='avatar-name'>Merghani</h6>
        <h6 className='avatar-phone'>0549223225</h6>
        <h6 className='avatar-email'>elhadiragabaat@gmail.com</h6>
        </div>
        <div className="avatar-info" >
        <img className="staff-img" src="./images/me.jpg"/>
        <h6 className='avatar-name'>Krazai</h6>
        <h6 className='avatar-phone'>0549946520</h6>
        <h6 className='avatar-email'>elhadiragabaat@gmail.com</h6>
        </div>
        
      
    </Stack>
    </Card>
  );
}