import React from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom'
import { AppBar, CssBaseline, Divider, Drawer, List, makeStyles, useTheme, Toolbar, Typography } from '@material-ui/core';
import { IconButton, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import FilterVintageRoundedIcon from '@material-ui/icons/FilterVintageRounded';
import CategoryIcon from '@material-ui/icons/Category';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PeopleIcon from '@material-ui/icons/People';
import logo from "../../images/igLogo4.png";

const drawerWidth = 170;

const useStyles = makeStyles((theme) => ({
  root: { display: 'flex' },
  appBar: { zIndex: theme.zIndex.drawer + 1, 
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 30,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        className={clsx(classes.appBar, {[classes.appBarShift]: open})}
        position="fixed"
      >
        <Toolbar className="styleBar" style={{ backgroundImage: "linear-gradient(30DEG, #017c74, #7cc9c3, #ef785a, #febdc3, #f5c24c, #fcea64)", height: "68px" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
          <img src={logo} alt="Island Guru logo" className={classes.logo} style={{ width: "100%",  marginTop: "50px" }}/>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
        style={{background: '#88c9a1'}}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {['Register', 'Home', 'Items', 'Flowers', 'Villagers', 'Logout'].map((text, index) => (
            <Link to={`/${text.toLowerCase()}`} style={{ color: '#017c74', textDecoration: 'none', fontWeight: "bold" }}>
              <ListItem button key={text} style={{ paddingLeft: "23px", paddingRight: "23px" }}>
  
                <ListItemIcon>
                {index === 0 && <AccountCircleIcon style={{color: '#017c74'}} />}
                {index === 1 && <HomeIcon style={{color: '#7cc9c3'}} />}
                {index === 2 && <CategoryIcon style={{color: '#ef785a'}} />}
                {index === 3 && <FilterVintageRoundedIcon style={{color: '#febdc3'}} />}
                {index === 4 && <PeopleIcon style={{color: '#f5c24c'}} />}
                {index === 5 && <ExitToAppIcon style={{color: '#786951'}} />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            </Link>
          ))}
        </List>

      </Drawer>

    </div>
  );
}
