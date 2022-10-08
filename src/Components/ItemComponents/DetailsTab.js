import React from 'react'
import {
    Card,
    CardContent,
    Grid,
    Typography,
    Chip,
    Box,
    IconButton,
  } from '@mui/material'
  import { Input } from 'rsuite';
  import { SelectPicker } from 'rsuite';
  import SaveAsIcon from '@mui/icons-material/SaveAs';
  import RefreshIcon from '@mui/icons-material/Refresh';

  const SelectFamilydata = ['IPhone', 'MacBook', 'IPad', 'MAC', 'IMAC', 'MacMini', 'HeadSet', 'Other'].map(
    item => ({ label: item, value: item })
  );
  
  const SelectCategorydata = ['Phone', 'Laptop', 'HeadSet', 'Sound', 'Display', 'Accesories', 'Other'].map(
    item => ({ label: item, value: item })
  );

  const Class = {
    HeaderBoxStyle: {
      fontWeight: 'bold',
      fontSize: 20,
      border: '1px solid white',
      borderRadius: '20px',
      bgcolor: '#546e7a',
      color: 'white',
      textAlign: 'center',
      marginBottom: 2
    },
    DetailText: {
      fontWeight: 'bold'
    },
    DetailGridColumn: {
      textAlign: 'center',
      wordWrap: 'break-word',
      fontSize: 15
    }
  }

  
function DetailsTab() {
  return (
    <Card>
    <CardContent>
      <Grid container spacing={2} columns={20} >
        <Grid item xs={10} md={10} xl={10}>
          <Typography variant='button'>Details</Typography>
        </Grid>
        <Grid item xs={10} md={10} xl={10}>
          <Box justifyContent='flex-end' display='flex'>
            <IconButton>
              <RefreshIcon />
            </IconButton>
            <IconButton>
              <SaveAsIcon />
            </IconButton>
          </Box>
        </Grid>
        <Grid item xs={10} md={4} xl={4} sx={Class.DetailGridColumn}>
          <Box>
            <Box sx={Class.HeaderBoxStyle}>
              Name
            </Box>
            <Box sx={Class.DetailText}>
              Iphone 11 Yellow 64GB Storage 8GB RAM
            </Box>
          </Box>
        </Grid>
        <Grid item xs={10} md={4} xl={4} sx={Class.DetailGridColumn}>
          <Box>
            <Box sx={Class.HeaderBoxStyle}>
              Code
            </Box>
            <Box sx={Class.DetailText}>
              Iphone_11_Yellow_64GB_Storage_8GB_RAM
            </Box>
          </Box>
        </Grid>
        <Grid item xs={10} md={4} xl={4} sx={Class.DetailGridColumn}>
          <Box>
            <Box sx={Class.HeaderBoxStyle}>
              Family
            </Box>
            <Box>
              <SelectPicker data={SelectFamilydata} defaultValue={'IPhone'} searchable={false} style={{ width: 224 }} />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={10} md={4} xl={4} sx={Class.DetailGridColumn}>
          <Box>
            <Box sx={Class.HeaderBoxStyle}>
              Category
            </Box>
            <Box>
              <SelectPicker data={SelectCategorydata} defaultValue={'Phone'} searchable={false} style={{ width: 224 }} />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={10} md={4} xl={4} sx={Class.DetailGridColumn}>
          <Box>
            <Box sx={Class.HeaderBoxStyle}>
              Status
            </Box>
            <Box marginTop={1} marginLeft={-1}>
              <Chip
                sx={{ marginLeft: '5px' }}
                label='Disabled'
                size='small'
                color='error'
                aria-label='status'
              />
            </Box>
          </Box>
        </Grid>

        <Grid item xs={10} md={4} xl={4} sx={Class.DetailGridColumn}>
          <Box>
            <Box sx={Class.HeaderBoxStyle}>
              Description
            </Box>
            <Input as='textarea' value='The iPhone 11 has a 6.1-inch (15 cm) IPS LCD with a resolution is 1792 × 828 pixels (1.4 megapixels) at a pixel density of 326 PPI with a maximum brightness of 625 nits and a 1400:1 contrast ratio and it is equivalent to the iPhone XR. It supports Dolby Vision, HDR10, True-Tone, and a wide color gamut.' rows='2' placeholder='description' />
          </Box>
        </Grid>
        <Grid item xs={10} md={4} xl={4} sx={Class.DetailGridColumn}>
          <Box>
            <Box sx={Class.HeaderBoxStyle}>
              Created User
            </Box>
            <Box sx={Class.DetailText}>
              Umit Camurcuk
            </Box>
          </Box>
        </Grid>
        <Grid item xs={10} md={4} xl={4} sx={Class.DetailGridColumn}>
          <Box>
            <Box sx={Class.HeaderBoxStyle}>
              Created Time
            </Box>
            <Box sx={Class.DetailText}>
              21/09/2022 12:33
            </Box>
          </Box>
        </Grid>
        <Grid item xs={10} md={4} xl={4} sx={Class.DetailGridColumn}>
          <Box>
            <Box sx={Class.HeaderBoxStyle}>
              Updated User
            </Box>
            <Box sx={Class.DetailText}>
              Umit Camurcuk
            </Box>
          </Box>
        </Grid>
        <Grid item xs={10} md={4} xl={4} sx={Class.DetailGridColumn}>
          <Box>
            <Box sx={Class.HeaderBoxStyle}>
              Updated User
            </Box>
            <Box sx={Class.DetailText}>
              21/09/2022 12:33
            </Box>
          </Box>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
  )
}

export default DetailsTab