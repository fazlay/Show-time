import { Container, Grid, Paper } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import '../Home/Home.css';

const Home = () => {
  const [shows, setShows] = useState([]);
  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then((res) => res.json())
      .then((data) => setShows(data));
  }, []);

  return (
    <Container>
      <Grid container spacing={2}>
        {shows.map((show) => (
          <Grid item xs={4}>
            <Card show={show}></Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
