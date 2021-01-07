import React from 'react';

import { Menu } from "@styled-icons/boxicons-regular/Menu";
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import { Fab, Action } from 'react-tiny-fab';
import 'react-tiny-fab/dist/styles.css';
import ListItemText from '@material-ui/core/ListItemText';

import Sidebar from './Sidebar'

import logo from '../../images/logo.png'
const useStyles = makeStyles({
  list: {

    width: 319,
    height: 896,
    backgroundColor: '#7C5B42',
    zIndex: 1,

  },
  fullList: {
    width: 'auto',
  },
});

export default function SwipeableTemporaryDrawer({ change }) {
  const classes = useStyles();
  const [state, setState] = React.useState({

    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
    change(state);
  };

  const list = (anchor) => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Sidebar></Sidebar>

    </div>
  );

  return (
    <Wrapper >
      <Header>
      <LogoImage />
      <BuggerImage style={{  width: "50px" }} onClick={toggleDrawer('right', true)}></BuggerImage>
      </Header>
      <SwipeableDrawer anchor={'right'} open={state['right']} onClose={toggleDrawer('right', false)}>
        {list('right')}
      </SwipeableDrawer>


    </Wrapper>
  );
}

const Header=styled.div`
display:flex;
position:absolute;
top:43px;
`

const LogoImage = styled.div`
background:url(${logo});
float:center;
background-repeat: no-repeat;
height: 48px;
width: 210px;
margin-left:102px;

border-radius: 0px;

`
const Wrapper = styled.div`


`

const BuggerImage = styled(Menu)`
height: 24px;
width: 24px;
margin-left:30px;


`;