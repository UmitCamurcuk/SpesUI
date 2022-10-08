import React from 'react'
import DynamicTable from '../../Components/DynamicTable'
import 'rsuite/dist/rsuite.min.css'
import { Paper, Typography, Card, Grid } from '@mui/material'
import CardContent from '@mui/material/CardContent';
import { useLocation } from 'react-router-dom';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import PersonIcon from '@mui/icons-material/Person';
import CloudSyncIcon from '@mui/icons-material/CloudSync';
import InterestsIcon from '@mui/icons-material/Interests';
import AppsOutageIcon from '@mui/icons-material/AppsOutage';
import PeopleIcon from '@mui/icons-material/People';

function ItemsPage() {
  const locationURL = useLocation();
  //const controllerName = locationURL.pathname.split('/')[1]
  const itemtypneName = locationURL.pathname.split('/')[2]
  return (
    <div style={{ margin: '13px' }}>
      <br />
      <Paper
        elevation={2}
      >
        <DynamicTable />
      </Paper>
      <br />
      <Paper
        elevation={2}
        sx={{ backgroundColor: '#80cbc4' }}
      >
        <Typography
          gutterBottom
          variant='overline'
          ml={10}
          display="block"
          color='white'
          sx={{ fontSize: 21 }}
        >
          <strong> {itemtypneName} Type Info </strong>
        </Typography>
      </Paper>
      <br />
      <Grid container spacing={5}>
        <Grid item xs={12} xl={6} md={6} >
          <Card>
            <CardContent>
              <Typography
                sx={{ fontSize: 18 }}
              >
                DETAILS
              </Typography>
              <br />
              <Grid container spacing={2}>
                <Grid item xs={4} md={3} xl={3} >
                  <Card align={'center'}>
                    <PersonIcon sx={{fontSize:50}}/>
                    <CardContent>
                      <Typography
                        sx={{ fontSize: 16 }}
                      >
                        Created User
                      </Typography>
                      <Typography>
                        Ümit Çamurcuk
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={4} md={3} xl={3}>
                  <Card align={'center'}>
                    <SaveAsIcon sx={{fontSize:50}}/>
                    <CardContent>
                      <Typography
                        sx={{ fontSize: 16 }}
                      >
                        Created On
                      </Typography>
                      <Typography>
                        12/09/2022 13:05
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={4} md={3} xl={3} >
                  <Card align={'center'}>
                    <PersonIcon sx={{fontSize:50}}/>
                    <CardContent>
                      <Typography
                        sx={{ fontSize: 16 }}
                      >
                        Updated User
                      </Typography>
                      <Typography>
                        Ümit Çamurcuk
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={4} md={3} xl={3}>
                  <Card align={'center'}>
                    <CloudSyncIcon sx={{fontSize:50}}/>
                    <CardContent>
                      <Typography
                        sx={{ fontSize: 16 }}
                      >
                        Updated On
                      </Typography>
                      <Typography>
                        12/09/2022 13:05
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} xl={6} md={6}>
          <Card>
            <CardContent>
              <Typography
                sx={{ fontSize: 18 }}
              >
                {itemtypneName} ATTRIBUTES
              </Typography>
              <br />
              <Grid container spacing={2}>
                <Grid item xs={4} md={3} xl={3} >
                  <Card align={'center'}>
                    <InterestsIcon sx={{fontSize:50}}/>
                    <CardContent>
                      <Typography
                        sx={{ fontSize: 16 }}
                      >
                        Total Attributes
                      </Typography>
                      <Typography>
                        120
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={4} md={3} xl={3}>
                  <Card align={'center'}>
                    <AppsOutageIcon sx={{fontSize:50}}/>
                    <CardContent>
                      <Typography
                        sx={{ fontSize: 16 }}
                      >
                        Required Attributes
                      </Typography>
                      <Typography>
                        16
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={4} md={3} xl={3} >
                  <Card align={'center'}>
                    <SaveAsIcon sx={{fontSize:50}}/>
                    <CardContent>
                      <Typography
                        sx={{ fontSize: 16 }}
                      >
                        Created On
                      </Typography>
                      <Typography>
                        Ümit Çamurcuk
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={4} md={3} xl={3}>
                  <Card align={'center'}>
                    <CloudSyncIcon sx={{fontSize:50}} />
                    <CardContent>
                      <Typography
                        sx={{ fontSize: 16 }}
                      >
                        Updated On
                      </Typography>
                      <Typography>
                        12/09/2022 13:05
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} xl={6} md={6}>
          <Card>
            <CardContent>
              <Typography
                sx={{ fontSize: 18 }}
              >
                {itemtypneName} ASSOCIATIONS
              </Typography>
              <br/>
              <Grid container spacing={2}>
                <Grid item xs={6} xl={6} md={6}>
                  <Card align={'center'}>
                    <PeopleIcon sx={{fontSize:80}} />
                    <CardContent>
                      <Typography
                        sx={{ fontSize: 16 }}
                      >
                        Account 
                      </Typography>
                      <Typography>
                        12/09/2022 13:05
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={6} xl={6} md={6}>
                  <Card align={'center'}>
                    <CloudSyncIcon sx={{fontSize:80}} />
                    <CardContent>
                      <Typography
                        sx={{ fontSize: 16 }}
                      >
                        Updated On
                      </Typography>
                      <Typography>
                        12/09/2022 13:05
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} xl={6} md={6}>
          <Card>
            <CardContent>
              <Typography
                sx={{ fontSize: 18 }}
              >
                {itemtypneName} FAMILIES
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  )
}

export default ItemsPage