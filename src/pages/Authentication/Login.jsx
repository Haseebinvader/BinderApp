import { useState } from 'react';
import { Box } from "@mui/material";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === 'test@gmail.com' && password === 'dummy@123') {
            alert('Login Success, Now Complete your profile first')
            navigate('/profile');
        } else {
            alert('Credentials are incorrect');
        }
    };

    return (
        <>
            <Box sx={{ height: '83vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ width: '100%', maxWidth: '600px', padding: '20px', border: '1px solid #ddd', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
                    <h1 style={{ marginBottom: 5, fontSize: '20px', fontWeight: 600 }}>Login Page</h1>
                    <form onSubmit={handleSubmit}>
                        <label>
                            Email:
                            <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required style={{ width: '100%', marginBottom: '10px', padding: '8px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }} />
                        </label>
                        <label>
                            Password:
                            <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required style={{ width: '100%', marginBottom: '10px', padding: '8px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }} />
                        </label>
                        <Button type='submit' title='Submit' />
                    </form>
                </div>
            </Box>
        </>
    );
};

export default Login;
