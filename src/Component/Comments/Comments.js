import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
const Comments = (props) => {
    const {id, name, email, body} = props.comment;
        const useStyles = makeStyles((theme) => ({
        text: {
          padding: theme.spacing(2, 2, 0),
        },
        paper: {
          paddingBottom: 50,
          margin : '50px'
        },
        list: {
          marginBottom: theme.spacing(2),
        },
        subheader: {
          backgroundColor: theme.palette.background.paper,
        },
        appBar: {
          top: 'auto',
          bottom: 0,
        },
        grow: {
          flexGrow: 1,
        },
        fabButton: {
          position: 'absolute',
          zIndex: 1,
          top: -30,
          left: 0,
          right: 0,
          margin: '0 auto',
        },
      }));
      const classes = useStyles();
    return (
            <React.Fragment>
              <CssBaseline />
              <Paper square className={classes.paper}>
                    <React.Fragment>
                      <ListItem button>
                        <ListItemText primary={name} secondary={body} />
                        <p>Email:{email}</p>
                      </ListItem>
                    </React.Fragment>
              </Paper>
            </React.Fragment>
        
    );
};

export default Comments;