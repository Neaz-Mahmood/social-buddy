import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import Comments from '../Comments/Comments';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const Comment = () => {
    const {postId} =useParams();
    const [comment, setComment]=useState([]);
    const [post, setPost] = useState([]);
    const {title, body} = post;
    const commentUrl = `https://jsonplaceholder.typicode.com/posts/${postId}/comments`;
    const postUrl = `https://jsonplaceholder.typicode.com/posts/${postId}`;
    useEffect(()=>{
        fetch(commentUrl)
        .then(res=> res.json())
        .then(data=>setComment(data))
    }, [])
    useEffect(()=>{
        fetch(postUrl)
        .then(res=> res.json())
        .then(data=>setPost(data))
    }, [])

    const useStyles = makeStyles({
      card: {backgroundColor: 'queenBlue'},
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
    return (
        <div>
        <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
            <h3>{title}</h3>
        </Typography>
        <Typography variant="body2" component="p">
         {body}
        </Typography>
      </CardContent>
    </Card>
            {
                comment.map(comment=><Comments comment={comment}></Comments>)
            }
        </div>
    );
};

export default Comment;