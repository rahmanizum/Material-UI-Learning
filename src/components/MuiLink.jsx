import React from 'react'
import {Stack, Link, Typography} from '@mui/material'

const MuiLink = () => {
  return (
    <Stack spacing={2} direction='row' m={4}>
        <Link href="https:mufilrahman.com" >mufilrahman.com</Link>
        <Link href="https:google.com" color='secondary' >google.com</Link>
        <Link href="https:amazon.com" color='success' underline='hover' >amazon.com</Link>

        <Typography variant='h6'>
        <Link href="https:amazon.com" color='success' underline='hover' >amazon.com</Link> 
        </Typography>
    </Stack>
  )
}

export default MuiLink
