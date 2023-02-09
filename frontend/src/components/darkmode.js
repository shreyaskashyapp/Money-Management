
import React, { useState } from 'react';
import NavbarSettings from "./navbar_settings";
import Toggle from './toggle';

export default function Darkmode() {
  
  return (
    <div className="dark">
      <div>
        <h3>Settings</h3>
        <NavbarSettings />
      </div>
      <div className='dark-ele'>
        <div className='dark-text'>
          Toggle between dark/light mode!
        </div>
        <div>
          <Toggle label={'Dark mode   '} />
        </div>
      </div>
    </div>
  )
}