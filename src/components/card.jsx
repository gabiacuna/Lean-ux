import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions, ListItemText } from '@mui/material';
import minec from '../assets/test.png'
import minec2 from '../assets/test2.png'
import cyber from '../assets/cyber.jpg'
import FS from '../assets/FS.jpg'

import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';

import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Share
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>
        <ListItemIcon>
          <TwitterIcon fontSize="small" />
        </ListItemIcon>
        </MenuItem>
        <MenuItem onClick={handleClose}>
        <ListItemIcon>
          <InstagramIcon fontSize="small" />
        </ListItemIcon>
        </MenuItem>
        <MenuItem onClick={handleClose}>
        <ListItemIcon>
          <WhatsAppIcon fontSize="small" />
        </ListItemIcon>
        </MenuItem>
        <MenuItem onClick={handleClose}>
        <ListItemIcon>
          <LinkedInIcon fontSize="small" />
        </ListItemIcon>
        </MenuItem>
      </Menu>
    </div>
  );
}

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
          <Typography variant="h7" component="div">
            {props.date}
          </Typography>
          <Stack direction="row" spacing={1}>
            <Chip label={props.tag1} />
            <Chip label={props.tag2} variant="outlined" />
          </Stack>
          <Typography variant="body2" color="text.secondary">
            {props.texto}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* <Share/> */}
        <BasicMenu/>
      </CardActions>
    </Card>
  );
}

export const Gallery = () => {
  return (
    <section>
      <div className='rowC'>
        <MultiActionAreaCard imagefile={cyber} title="Ciberevento Informatica" date="7 de Diciembre" tag1="Ciberseguridad" tag2="Informatica" texto="Ven a aventurarte en el mundo del hackeo de base datos"/>
        <MultiActionAreaCard imagefile={FS} title="Fiesta Fin de Semestre" date="18 de Diciembre" tag1="Recreativo" tag2="Valparaiso" texto="Super fiesta en conjunto a profesores para cerrar el año"/>
        <MultiActionAreaCard imagefile={minec} title="Evento Minecraft 1" date="20 de Diciembre" tag1="Recreativo" tag2="Informatica" texto="Comienzo evento decimo vigesimo aniversario de los juegos del hambre"/>
        <MultiActionAreaCard imagefile={minec2} title="Evento Minecraft Final" date="21 de Diciembre" tag1="Recreativo" tag2="Informatica" texto="Final evento decimo vigesimo aniversario de los juegos del hambre"/>
      </div>
    </section>
  )
}

export default Gallery

