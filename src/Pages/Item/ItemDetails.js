import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Typography
} from '@mui/material'
import { useState, useEffect } from 'react'
import { Placeholder } from 'rsuite'
import AttributesTab from '../../Components/ItemComponents/AttributesTab';
import DetailsTab from '../../Components/ItemComponents/DetailsTab';
import FunctionsTab from '../../Components/ItemComponents/FunctionsTab';
const exampleQR = require('../../Assets/SystemImages/QRExample.png')
const yellowIphone11 = require('../../Assets/SystemImages/yellowIphone11.png')

const CardLoader = () => {
  return (
    <Card>
      <CardContent>
        <Placeholder.Grid rows={5} columns={4} active />
      </CardContent>
    </Card>
  )
}

const ImageLoader = () => {
  return (
    <CardMedia>
      <Placeholder.Graph style={{ marginTop: 30 }} graph="image" />
    </CardMedia>
  )
}

const ImageMediaCard = () => {
  return (
    <CardMedia
      component='img'
      image={yellowIphone11}
      height='100%'
      alt='No Image Preview'
    >
    </CardMedia>
  )
}

const BarcodeMediaCard = () => {
  return (
    <CardMedia
      component='img'
      image={exampleQR}
      height='100%'
      alt='No Image Preview'
    >
    </CardMedia>
  )
}


function ItemDetails() {
  const [dummyloader, setDummyLoader] = useState(false);
  useEffect(() => {
    setInterval(() => {
      setDummyLoader(true);
    }, 10);
  }, []);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} xl={9} md={9}>
        {
          dummyloader === false ?
            <CardLoader />
            : <DetailsTab />
        }
        <br />
        {
          dummyloader === false ?
            <CardLoader />
            : <AttributesTab />
        }
      </Grid>
      <Grid item xs={12} xl={3} md={3}>
        <Card>
          <CardHeader>
            Item Image
          </CardHeader>
          <CardContent>
            <Typography variant='button'>
              Image
            </Typography>
            {
              dummyloader === false ?
                <ImageLoader />
                : <ImageMediaCard />
            }
          </CardContent>
        </Card>
        <br />
        <Card>
          <CardHeader>
            Item Barcode
          </CardHeader>
          <CardContent>
            <Typography variant='button'>
              Barcode
            </Typography>
            {
              dummyloader === false ?
                <ImageLoader />
                : <BarcodeMediaCard />
            }
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={12} xl={12}>
        {
          dummyloader === false ?
            <CardLoader />
            : <FunctionsTab />
        }
      </Grid>
    </Grid>
  )
}

export default ItemDetails