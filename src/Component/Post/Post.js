import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';

const Post = (props) => {
    const {id, title, body}= props.post;

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    width: '90%',
    marginLeft:'50px',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

   const classes = useStyles();
   const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
            <h3>{title}</h3>
        </Typography>
        <Typography variant="body2" component="p">
         {body}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" variant="contained"><Link to={`/posts/${id}`}>Learn More</Link></Button>
      </CardActions>
    </Card>
  );
}


export default Post;