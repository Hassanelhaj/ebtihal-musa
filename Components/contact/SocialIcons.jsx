import React from 'react'
import {BsFacebook, BsInstagram, BsLinkedin, BsTiktok} from 'react-icons/bs'

import {FaLinkedin} from 'react-icons/fa';
import {SiGmail} from 'react-icons/si'

    const SocialIcons = () => {
        return (
          <div className='flex justify-center items-center gap-2'>
             <a href='https://www.facebook.com/Ebtihalmosa1' target='_blank' className='text-3xl hover:opacity-70' >
              <BsFacebook/>
              </a> 
              <a href='https://www.linkedin.com/in/ebtehal-musa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' >
              <BsLinkedin/>
              </a>
              <a href='https://www.instagram.com/ebtihall_musa?igsh=MWEyYm1tOGJuODRoYQ==' >
              <BsInstagram/>
              </a>
          
             <a target='_blank' href='mailto:Ebtilhalmusa@gmail.com' className='text-3xl hover:opacity-70'>
              <SiGmail/>
              </a>
          </div>
        )
      }

export default SocialIcons