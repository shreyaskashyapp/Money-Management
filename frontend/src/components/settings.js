import react from 'react'
import NavbarSettings from "./navbar_settings"

export default function settings() {
  return (
    <div className='settings'>
      <div>
        <h3>Settings</h3>
        <NavbarSettings />
      </div>
      <div className="se">
        <p>Welcome to the settings page of our application :D</p>
        <p> Here, you can customize your experience by adjusting various settings!</p>
        <ul><li> You can change the theme from light mode to dark mode</li>
          <li> Adjust the font size</li>
          <li> Manage your account settings</li></ul>

      </div>
    </div>
  )
}