import {
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Paper,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
const ShowDetails = () => {
  const { detailsId } = useParams();
  const [showDetails, setShowDetails] = useState({});
  const url = `https://api.tvmaze.com/shows/${detailsId}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setShowDetails(data));
  }, []);
  console.log(showDetails);
  const { name, summary, image } = showDetails;
  let strippedSummary;
  if (summary) {
    strippedSummary = summary.replace(/(<([^>]+)>)/gi, '');
    console.log(strippedSummary);
  } else {
    strippedSummary = 'Summary is not available';
    console.log('No Summary');
  }
  //strippedSummary = summary.replace(/(<([^>]+)>)/gi, "")
  return (
    <Container
      sx={{
        mt: 15,
      }}
    >
      <Card sx={{ minWidth: 275 }}>
        <Grid container spacing={2}>
          <Grid item md={6}>
            <Box
              component='img'
              sx={{
                width: 1 / 2,
                ml: 15,
              }}
              alt='The house from the offer.'
              src={image?.medium}
            />
          </Grid>
          <Grid item md={6}>
            <CardContent>
              <Typography variant='h3' component='h2'>
                {name}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                {strippedSummary}
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
        
      </Card>

      <Box
              
              sx={{
                mt:2,
                display:'flex',
               justifyContent:'center'
               
              }}
           
              
            > <Link style={{ textDecoration: 'none', justifyContent:"center" }} to='/home'>
            <Button variant='contained'>Back To Home</Button>
          </Link></Box>
     
    </Container>
  );
};

export default ShowDetails;
