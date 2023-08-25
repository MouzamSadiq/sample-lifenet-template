import React from 'react'
import { Skeleton, Box, Avatar,Divider, Typography } from '@mui/material';

const UpdateSchematic = () => {
  return (
    <Box sx={{ maxWidth: 345, marginTop: 2, borderRadius: '5px', boxShadow: '0px 0px 8px 2px rgba(0,0,0,0.29)' }}>
        <Box sx={{ padding: 1 }}>
            <Typography width={350}>
                <Skeleton 
                animation="wave"
                width="70%" 
                style={{ marginBottom: 3 }}/>
            </Typography>
        </Box>
        <Divider/>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ margin: "30px 15px 40px 15px" }}>
                <Skeleton 
                width={50} 
                height={50} 
                variant='circular' 
                animation='wave'>
                    <Avatar/>
                </Skeleton>
            </Box>
            <Box sx={{ width: '100%', marginRight: 2, display:'grid', gap: 1 }}>
                <>
                    <Skeleton 
                    animation="wave" 
                    height={10} 
                    />
                    
                    <Skeleton 
                    animation="wave" 
                    height={10} 
                    width="80%" />

                    <Skeleton 
                    animation="wave" 
                    height={10} 
                    width="80%" />
                </>
            </Box>
        </Box>
    </Box >
  )
}

export default UpdateSchematic;