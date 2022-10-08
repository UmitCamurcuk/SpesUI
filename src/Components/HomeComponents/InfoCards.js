import React from 'react'
import { Avatar, Box, Card, CardContent, Grid, Typography } from '@mui/material';

function InfoCards(props) {
    return (
        <Card
            sx={{ height: '100%' }}
        >
            <CardContent>
                <Grid
                    container
                    spacing={3}
                    sx={{ justifyContent: 'space-between' }}
                >
                    <Grid item>
                        <Typography
                            color="textSecondary"
                            gutterBottom
                            variant="overline"
                        >
                            {props.title}
                        </Typography>
                        <Typography
                            color="textPrimary"
                            variant="h4"
                        >
                           {props.text}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Avatar
                            sx={{
                                backgroundColor: props.bigIconColor,
                                height: 56,
                                width: 56
                            }}
                        >
                            {props.bigIcon}
                        </Avatar>
                    </Grid>
                </Grid>
                <Box
                    sx={{
                        pt: 2,
                        display: 'flex',
                        alignItems: 'center'
                    }}
                >
                    {props.smallIcon}
                    <Typography
                        color={props.percentColor}
                        sx={{
                            mr: 1
                        }}
                        variant="body2"
                    >
                        {props.percent}
                    </Typography>
                    <Typography
                        color="textSecondary"
                        variant="caption"
                    >
                       {props.percentText}
                    </Typography>
                </Box>
                {props.progressBar}
            </CardContent>
        </Card>
    )
}

export default InfoCards