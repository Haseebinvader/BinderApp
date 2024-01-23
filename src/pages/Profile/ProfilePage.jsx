import { useState } from 'react';
import Button from '../../components/Button';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        dateOfBirth: '',
        city: '',
        gender: '',
        qualification: '',
        password: '',
        photo: null,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };




    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('userProfileData', JSON.stringify(formData));
        console.log('Form submitted:', formData);
        navigate('/'); // Use navigate to navigate to the desired page
    };

    return (
        <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px', border: '1px solid #ddd', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
            <h1 style={{ marginBottom: 5, fontSize: '20px', fontWeight: 600 }}>Profile Page</h1>
            <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '5px' }}>
                <label>
                    First Name:
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} required style={{ width: '100%', padding: '8px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }} />
                </label>
                <br />
                <label>
                    Last Name:
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} required style={{ width: '100%', padding: '8px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }} />
                </label>
                <br />
                <label>
                    Email:
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} required style={{ width: '100%', padding: '8px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }} />
                </label>
                <br />
                <label>
                    Date of Birth:
                    <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleInputChange} required style={{ width: '100%', padding: '8px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }} />
                </label>
                <br />
                <label>
                    City:
                    <input type="text" name="city" value={formData.city} onChange={handleInputChange} required style={{ width: '100%', padding: '8px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }} />
                </label>
                <br />
                <label>
                    Gender:
                    <select name="gender" value={formData.gender} onChange={handleInputChange} required style={{ width: '100%', padding: '8px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }}>
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </label>
                <br />
                <label>
                    Qualification:
                    <input type="text" name="qualification" value={formData.qualification} onChange={handleInputChange} required style={{ width: '100%', padding: '8px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }} />
                </label>
                <br />

                <Box className="lg:flex justify-center hidden bg-white p-2 px-4 rounded hover:bg-slate-300 hover:text-white shadow-md cursor-pointer">
                    {/* <Link to='/'> */}
                    <Button type='submit' title='Submit' />
                    {/* </Link> */}
                </Box>

            </form>
        </div>
    );
};

export default ProfilePage;
