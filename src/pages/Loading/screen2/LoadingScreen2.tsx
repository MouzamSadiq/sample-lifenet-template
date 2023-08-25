import React from 'react'
import { Box, Typography, Divider, Skeleton } from '@mui/material';

const LoadingScreen2 = () => {

    const schemes = [0, 1, 2, 3, 4, 5, 6,]
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, padding: "30px 80px", minHeight:"80vh" }}>
        <Typography width={350}>
            <Skeleton 
            animation="wave"/>
        </Typography>
        <Divider/>
        <Box sx={{ display: "grid", gridTemplateColumns : "repeat(3, minmax(0, 1fr))", gridGap:'25px', }}>
            <Box sx={{boxShadow: "1px 2px 10px -5px #000000", borderRadius:'5px'}}>
                <Box
                sx={{ padding: 2, display: 'flex', flexDirection: 'column', justifyContent:'center', gap: '20px'}}
                height={120}>
                    <Skeleton
                    width="100%"
                    animation="wave"
                    height={20}
                    variant="text"/>

                    <Skeleton
                    width="100%"
                    animation="wave"
                    height={20}
                    variant="text"/>
                </Box>
            </Box>

            <Box sx={{boxShadow: "1px 2px 10px -5px #000000", borderRadius:'5px'}}>
                <Box
                sx={{ padding: 2, display: 'flex', flexDirection: 'column', justifyContent:'center', gap: '20px'}}
                height={120}>
                    <Skeleton
                    width="100%"
                    animation="wave"
                    height={20}
                    variant="text"/>

                    <Skeleton
                    width="100%"
                    animation="wave"
                    height={20}
                    variant="text"/>
                </Box>
            </Box>

            <Box sx={{boxShadow: "1px 2px 10px -5px #000000", borderRadius:'5px'}}>
                <Box
                sx={{ padding: 2, display: 'flex', alignItems:'center', gap: '20px'}}
                height={120}>
                    <Skeleton
                    width="100%"
                    animation="wave"
                    height={40}
                    variant="rectangular"/>

                    <Skeleton
                    width="20%"
                    animation="wave"
                    height={20}
                    variant="text"/>

                    <Skeleton
                    width="100%"
                    animation="wave"
                    height={40}
                    variant="rectangular"/>
                </Box>
            </Box>

        </Box>

        <Box sx={{ flex: 1, display: "grid", gridTemplateColumns : "repeat(3, minmax(0, 1fr))", gridGap:'25px', boxShadow: "1px 2px 10px -5px #000000", padding: 2, }}>
            {schemes.map((item) => (
                <Box sx={{ display: "flex", justifyContent: 'space-between', gap: "15px", padding: 3, background: "#F9F9F9", borderRadius:'5px', border: '1px solid #c7c7c7'}}>
                    <Skeleton
                    width="100%"
                    animation="wave"
                    height={20}
                    variant="text"/>

                    <Skeleton
                    width={80}
                    height={40}
                    animation="wave"
                    variant='rectangular'/>
                </Box>
            ))}
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap:"20px"}}>
            <Box sx={{ display: 'flex', gap: "20px"}}>
                <Skeleton
                width={150}
                height={40}
                animation="wave"
                variant='rectangular'/>

                <Skeleton
                width={150}
                height={40}
                animation="wave"
                variant='rectangular'/>
            </Box>

            <Box sx={{ display: 'flex', gap: "20px"}}>
                <Skeleton
                width={150}
                height={40}
                animation="wave"
                variant='rectangular'/>

                <Skeleton
                width={150}
                height={40}
                animation="wave"
                variant='rectangular'/>
            </Box>
        </Box>
    </Box>
  )
}

export default LoadingScreen2;