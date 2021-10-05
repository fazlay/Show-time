import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Rating } from '@mui/material';
import { Link } from 'react-router-dom';

export default function ImgMediaCard(props) {
  const { genres, image, name, language, rating, id } = props.show.show;
  console.log(props.show.show);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component='img'
        alt='green iguana'
        height='600'
        image={image.medium}
      />

      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {name}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          Language :{language}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          Gener : {genres[0]}
        </Typography>
        {rating.average && (
          <Rating
            name='customized-10'
            defaultValue={rating.average}
            max={10}
            readOnly
          />
        )}
      </CardContent>
      <CardActions>
        <Link to={`/show/${id}`} style={{ textDecoration: 'none'}}>
        <Button variant="contained">Learn More</Button>
        </Link>
      </CardActions>
    </Card>
  );
}
