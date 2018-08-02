import React from 'react';

import ProfilePic from './avatar.png'
import {rhythm} from '../utils/typography'


export default () => {
    return (
        <div style={{
            display: 'flex',
            marginBottom : rhythm(2.5)
        }}>
         <img src = {ProfilePic} alt ={'Saleem'} style={{
              marginRight: rhythm(1 / 2),
              marginBottom: 0,
              width : rhythm(2), height : rhythm(2)
         }}  />
         <p style={{marginBottom: rhythm(1)}}>Written by <strong>Saleem</strong>, application developer who lives in Chennai, India.
           Currently building and fixing things...</p>
        </div>
    );   
}