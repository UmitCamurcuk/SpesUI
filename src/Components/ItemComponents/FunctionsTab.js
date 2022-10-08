import React from 'react'
import {
    Card,
    CardContent,
    Grid,
    Typography,
    CardHeader
  } from '@mui/material'

function FunctionsTab() {
    return (
        <Card>
            <CardHeader>
              Functions
            </CardHeader>
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={12} xl={12}>
                        <Typography variant='button'>Functions</Typography>
                    </Grid>
                    <Grid item xs={12} md={12} xl={12}>
                      sadf
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default FunctionsTab