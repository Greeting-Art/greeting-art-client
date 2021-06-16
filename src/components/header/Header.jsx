/* eslint-disable max-len */
/* eslint-disable indent */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';
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
    <section className={styles.fullHeader}>
      <div className={styles.linkBar}>
        <IconButton
          // edge="start"
          color="inherit"
          aria-label="menu"
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleMenuClick}
          className="iconButtonMUI"
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
      <Link to={'/'}>
        <div className={styles.titleBar}>
          <figure>
            <img src="src\assets\3D13-greeting-art-transparent.png" width="640" />
          </figure>
        </div>
      </Link>
      <div className={styles.rightHelpBar}></div>
    </section>
  );
}

export default Header;
