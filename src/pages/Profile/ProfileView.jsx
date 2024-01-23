import { useEffect, useState } from 'react';
import './ProfileView.css'
const ProfileView = () => {
    const [userProfileData, setUserProfileData] = useState(null);

    useEffect(() => {
        // Retrieve data from local storage
        const storedData = localStorage.getItem('userProfileData');

        if (storedData) {
            // Parse the JSON string to get the object
            const parsedData = JSON.parse(storedData);
            setUserProfileData(parsedData);
        }
    }, []);

    return (
        <div style={{height: '59.5vh'}}>
            <div className="profile-view-container" style={{ height: '50vh' }}>
                <h2>Your Profile</h2>
                {userProfileData ? (
                    <div className="profile-details">
                        {/* <img src={userProfileData.photo} alt="User Photo" className="profile-photo" /> */}
                        <p><strong>First Name:</strong> {userProfileData.firstName}</p>
                        <p><strong>Last Name:</strong> {userProfileData.lastName}</p>
                        <p><strong>Email:</strong> {userProfileData.email}</p>
                        <p><strong>Date of Birth:</strong> {userProfileData.dateOfBirth}</p>
                        <p><strong>Gender:</strong> {userProfileData.gender}</p>
                        <p><strong>City:</strong> {userProfileData.city}</p>
                        <p><strong>Qualification:</strong> {userProfileData.qualification}</p>
                    </div>
                ) : (
                    <p>No profile data available.</p>
                )}
            </div>
        </div>
    );
};

export default ProfileView;
