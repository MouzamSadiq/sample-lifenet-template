import React from 'react'
import CreateSchematic from './components/CreateSchematic'
import { Box, Typography, Divider, Skeleton } from '@mui/material'
import UpdateSchematic from './components/UpdateSchematic'

const LoadingScreen = () => {
    const schemes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    
  return (
    <Box sx={{padding: "20px 55px"}}>
        <Box>
            <Typography width={350}>
                <Skeleton 
                animation="wave" 
                style={{ marginBottom: 5 }}/>
            </Typography>
            <Divider />
            <Box sx={{ marginTop: 2, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(20rem, 1fr))', gridGap: '25px'}}>
            {schemes.map((item) => (
                <CreateSchematic/>
            ))}
            </Box>
        </Box>

        <Box sx={{ marginTop: 6 }}>
            <Typography width={350}>
                <Skeleton 
                animation="wave" 
                style={{ marginBottom: 4 }}/>
            </Typography>
            <Divider />
                
            <UpdateSchematic/>

        </Box>
    </Box>
  )
}

export default LoadingScreen;