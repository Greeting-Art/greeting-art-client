/* eslint-disable indent */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
//import Link from '@material-ui/core/Link';

import styles from './header.css';

function Header() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    // <div>
    //   {/* <Button
    //     aria-controls="simple-menu"
    //     aria-haspopup="true"
    //     onClick={handleMenuClick}
    //   >
    //     Open Menu
    //   </Button> */}
    //   <IconButton
    //     edge="start"
    //     color="inherit"
    //     aria-label="menu"
    //     aria-controls="simple-menu"
    //     aria-haspopup="true"
    //     onClick={handleMenuClick}
    //   >
    //     <MenuIcon fontSize="large" />
    //   </IconButton>
    //   <Menu
    //     id="simple-menu"
    //     anchorEl={anchorEl}
    //     keepMounted
    //     open={Boolean(anchorEl)}
    //     onClose={handleClose}
    //   >
    //     <MenuItem onClick={handleClose} component={Link} to="/">
    //       Home
    //     </MenuItem>
    //     <MenuItem onClick={handleClose} component={Link} to="/gallery">
    //       Gallery
    //     </MenuItem>
    //     <MenuItem onClick={handleClose} component={Link} to="/ecard">
    //       ECard
    //     </MenuItem>
    //     <MenuItem onClick={handleClose} component={Link} to="/aboutus">
    //       About Us
    //     </MenuItem>
    //   </Menu>
    // </div>

    <section className={styles.fullHeader}>
      <div className={styles.linkBar}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleMenuClick}
        >
          <MenuIcon fontSize="large" />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose} component={Link} to="/">
            Home
          </MenuItem>
          <MenuItem onClick={handleClose} component={Link} to="/gallery">
            Gallery
          </MenuItem>
          <MenuItem onClick={handleClose} component={Link} to="/ecard">
            ECard
          </MenuItem>
          <MenuItem onClick={handleClose} component={Link} to="/aboutus">
            About Us
          </MenuItem>
        </Menu>
      </div>
      <div className={styles.titleBar}>
        <p>Greeting Art</p>
      </div>
    </section>

    // <section className={styles.fullHeader}>
    //   <div className={styles.linkBar}>
    //     <Link to="/">
    //       <p>Home</p>
    //     </Link>
    //     <Link to="/ecard">
    //       <p>✉ ECard</p>
    //     </Link>
    //     <Link to="/gallery">
    //       <p>Gallery</p>
    //     </Link>
    //     <Link to="/aboutus">
    //       <p>About Us</p>
    //     </Link>
    //   </div>
    //   <div className={styles.titleBar}>
    //     <p>Greeting Art</p>
    //   </div>
    // </section>
  );
}

export default Header;
