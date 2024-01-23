import { Box, Grid, Typography } from "@mui/material";
import Button from '../../components/Button'
const AuthRoute = () => {
    return (
        <>
            <Grid container className="bg-blue-400 flex justify-around items-center h-3/4 py-8">
                <Grid item className="border border-teal-50 p-28">
                    <Typography variant="h4" className="text-white" sx={{ fontWeight: 600, fontSize: '30px' }}>Want to Become a Tutor?</Typography>
                    <Typography variant="h6" className="my-2 text-white">Signup now to become a part of leading tutors community</Typography>
                    <Box className=' bg-white p-2 px-4 rounded hover:bg-slate-300 hover:text-white shadow-md w-24 text-center my-2 cursor-pointer'>
                        <Button type='button' title='Join Now' />
                    </Box>
                </Grid>
                <Grid item className="border border-teal-50 p-28">
                    <Typography variant="h4" className="text-white" sx={{ fontWeight: 600, fontSize: '30px' }}>Want to Become a Student?</Typography>
                    <Typography variant="h6" className="my-2 text-white">Signup now to become a part of leading community</Typography>
                    <Box className=' bg-white p-2 px-4 rounded hover:bg-slate-300 hover:text-white shadow-md w-24 text-center my-2 cursor-pointer'>
                        <Button type='button' title='Join Now' />
                    </Box>
                </Grid>
            </Grid>
        </>
    );
};

export default AuthRoute;
