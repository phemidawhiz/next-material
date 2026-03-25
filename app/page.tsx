import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import axios from 'axios';

const SamplePage = () => {
    const fetchData = async () => {
        try {
            const response = await axios.get('https://api.example.com/data');
            console.log(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    React.useEffect(() => {
        fetchData();
    }, []);

    return (
        <Container>
            <Box mt={4} textAlign="center">
                <Typography variant="h4">Welcome to Material UI</Typography>
                <Button variant="contained" color="primary" onClick={fetchData}>
                    Fetch Data
                </Button>
            </Box>
        </Container>
    );
};

export default SamplePage;