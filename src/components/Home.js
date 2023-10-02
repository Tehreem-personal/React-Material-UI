import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import PhotoCameraBackIcon from '@mui/icons-material/PhotoCameraBack';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop:"30px",
    justifyContent:"center"
    
  },
  icons: {

    marginRight: '20px',
  },
  cardMedia: {
    paddingTop: '56.25%', 
  },
  buttons: {
    marginTop: '20px',
  },
  cardGrid: {
    padding: '20px 0',
  },
  card: {
    marginTop: '10px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardContent: {
    flexGrow: 1,
  },
  footer:{
    marginTop:"20px"
  }
}));

function Home() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCameraBackIcon className={classes.icons} />
          <Typography variant="h6">Photo Gallery Blog</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div>
          <Container maxWidth="sm" className={classes.container}>
            <Typography
              variant="h4"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Exploring the World of Photography
            </Typography>
            <Typography
              variant="body1"
              align="center"
              color="textSecondary"
              gutterBottom
            >
              Welcome to our photo gallery blog! We are excited to share some
              stunning photographs from around the world. In this blog post,
              we'll take you on a visual journey through different places,
              moments, and emotions captured by talented photographers.
              Sit back, relax, and enjoy the beauty of the world through
              these captivating images.
            </Typography>
            <div className={classes.buttons}>
              <Grid container justify="center">
                <Grid item>
                  
                  <Button variant="outlined" color="primary">
                    Discover More
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={`https://source.unsplash.com/random?sig=${card}`} // Random image URL with a unique signature
                    title="Image Title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5">
                      Stunning Landscape
                    </Typography>
                    <Typography variant="body2">
                      This breathtaking landscape photograph captures the
                      beauty of nature at its finest. The play of light and
                      shadow creates a mesmerizing scene that transports you
                      to another world.
                    </Typography>
                  </CardContent>
                  <ButtonGroup size="small" variant="contained" color="primary" fullWidth>
  <Button component={Link} to={`/image/${card}`}>View</Button>
</ButtonGroup>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <footer className={classes.footer} gutterBottom>
<Typography  variant="h6" align='center' gutterBottom>Contact Us</Typography>
<Typography variant="subtitle1" align='center' color="textSecondary" gutterBottom>
info@landscape.com
</Typography>
      </footer>
    </>
  );
}

export default Home;

