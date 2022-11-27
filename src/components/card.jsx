import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import minec from '../assets/test.png'
import minec2 from '../assets/test2.png'
import Share from './share'


export function MultiActionAreaCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          // image={props.imagefile}
          src={props.imagefile}
          alt="some image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Share/>
      </CardActions>
    </Card>
  );
}

export const Gallery = () => {
  return (
    <section>
      <h1>Eventos</h1>
      <div className='rowC'>
        <MultiActionAreaCard imagefile={minec} title="Minecraft" />
        <MultiActionAreaCard imagefile={minec2} title="Minecraft2" />
        <MultiActionAreaCard imagefile={minec} title="Minecraft3" />
      </div>
    </section>
  )
}

export default Gallery

