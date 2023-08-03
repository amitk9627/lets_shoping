import React from 'react'
import { useUserAuth } from '../context/UserAuthContext'
import { useNavigate } from 'react-router-dom'
const Profile = () => {
    // displayName email
    const { user, logOut } = useUserAuth();
    const navigate = useNavigate();
    const handleLogOut = async (e) => {
        e.preventDefault();
     
            await logOut();
            navigate("/");
         

    }

    return (
        <div className='profile-wrapper'>
            <div className='profile-card'>
                <div className='profile-image'>
                    <img src={user?.photoURL} alt={user?.displayName} />
                    <p>{user?.displayName}</p>

                </div>
                <hr className='hrStyle' />
                <div className='profile-data'>
                    <div>
                        <p>Email : {user?.email}</p>
                    </div>
                    <div>
                        <p>Phone Number : {user?.phoneNumber ? user.phoneNumber : "************"}</p>
                    </div>



                </div>
                <div className='profile-Button'>
                    <button className='logout-Button' onClick={handleLogOut}>LogOut</button>
                </div>
            </div>

        </div>
    )
}

export default Profile
