import React from 'react'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import PeopleIcon from '@mui/icons-material/PeopleOutlined';
import MoneyIcon from '@mui/icons-material/Money';
import InfoCards from '../Components/HomeComponents/InfoCards';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import InsertChartIcon from '@mui/icons-material/InsertChartOutlined';
import { Grid, LinearProgress,Box } from '@mui/material';


function HomePage() {
  return (
    
    <Grid container spacing={2}>
      <Grid item xs={6} xl={3} >
        <InfoCards
          bigIcon={<MoneyIcon />}
          bigIconColor="error.main"
          smallIcon={< ArrowDownwardIcon color="error" />}
          title="TOTAL BUDGET"
          text="$24k"
          percentColor="error"
          percent="12%"
          percentText=" Since last month"
        />
      </Grid>
      <Grid item xs={6} xl={3} >
        <InfoCards
          bigIcon={<PeopleIcon color="success.main" />}
          bigIconColor="success.main"
          smallIcon={< ArrowUpwardIcon color="success" />}
          title="TOTAL CUSTOMERS"
          text="1,6k"
          percentColor="body2"
          percent="16%"
          percentText=" Since last month"
        />
      </Grid>
      <Grid item xs={6} xl={3} >
        <InfoCards
          bigIcon={<AttachMoneyIcon />}
          bigIconColor="primary.main"
          title="TOTAL PROFIT"
          text="256$"
          percentColor=""
          percent=""
          percentText=""
        />
      </Grid>
      <Grid item xs={6} xl={3} >
        <InfoCards
          bigIcon={<InsertChartIcon />}
          bigIconColor="warning.main"
          title="TASKS PROGRESS"
          text="75.5%"
          percentColor=""
          percent=""
          percentText=""
          progressBar = {
            <Box sx={{ pt: 3 }}>
            <LinearProgress
              value={75.5}
              variant="determinate"
            />
          </Box>
          }
        />
      </Grid>

      <Grid item xs={12} xl={12}>
        <Grid item xs={12} xl={4}>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default HomePage