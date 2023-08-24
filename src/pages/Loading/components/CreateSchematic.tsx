import React from 'react'
import { Skeleton, Box, Avatar, Typography } from '@mui/material';

const CreateSchematic = () => {
  return (
    <Box sx={{ maxWidth: 345, display: 'flex', alignItems: 'center', borderRadius: '5px', boxShadow: '0px 0px 8px 2px rgba(0,0,0,0.29)' }}>
        <Box sx={{ margin: 2 }}>
            <Skeleton 
            width={50} 
            height={50} 
            variant='circular' 
            animation='wave'>
                <Avatar/>
            </Skeleton>
        </Box>
        <Box sx={{ width: '100%', marginRight: 1 }}>
            <>
                <Skeleton 
                animation="wave" 
                height={10} 
                style={{ marginBottom: 6 }} />
                
                <Skeleton 
                animation="wave" 
                height={10} 
                width="80%" />
            </>
        </Box>
    </Box>
  )
}

export default CreateSchematic;