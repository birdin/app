import React from 'react'
import { FaUser } from 'react-icons/fa'

const ProfilePlaceholder = () => {
  return (
    <div className='profile-container profile-container--card'>
        <div className="profile-placeholder">
            <div className="profile-placeholder__avatar">
                <FaUser/>
            </div>
        </div>  
    </div>
  )
}

export default ProfilePlaceholder