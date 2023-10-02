import React from 'react';
import { useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
   
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent:"center"
  },
  card: {
    maxWidth: "60%",
    marginTop: "30px"
  },
  cardMedia: {
    height: 400,
  },
  cardContent: {
    flexGrow: 1,
  },
}));

const ImageDetail = () => {
  const classes = useStyles();
  const { id } = useParams();

 
  const imageDetails = {
    imageUrl: `https://source.unsplash.com/random?sig=${id}`,
    title: 'Image Title',
    description: 'This is a random text describing the image.',
  };

  return (
    <Container component="main" maxWidth="lg" className={classes.root}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          image={imageDetails.imageUrl}
          title={imageDetails.title}
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5">
            {imageDetails.title}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {imageDetails.description}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ImageDetail;
