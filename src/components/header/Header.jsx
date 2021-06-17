/* eslint-disable indent */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import HelpModal from './HelpModal';
import Logo3D from '../../assets/3D13-greeting-art-transparent.png';
import styles from './header.css';

function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [show, setShow] = useState(false);

  const handleModalClick = () => {
    setShow(true);
  };

  const handleModalClose = () => {
    setShow(false);
  };

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
            🖌  Home
          </MenuItem>
          <MenuItem onClick={handleClose} component={Link} to="/gallery">
            🖼  Gallery
          </MenuItem>
          <MenuItem onClick={handleClose} component={Link} to="/ecard">
            ✉  E-Card
          </MenuItem>
          <MenuItem onClick={handleClose} component={Link} to="/aboutus">
            🖰  About
          </MenuItem>
        </Menu>
      </div>
      <Link to={'/'}>
        <div className={styles.titleBar}>
          <figure>
            <img src={Logo3D} width="640" />
          </figure>
        </div>
      </Link>

      <div className={styles.rightHelpBar}>
        <IconButton
          id="helpButton"
          color="inherit"
          aria-label="help"
          aria-controls="help-menu"
          aria-haspopup="true"
          onClick={handleModalClick}
          className="iconButtonMUI"
        >
          <EmojiObjectsIcon fontSize="large" />
        </IconButton>
        <HelpModal show={show} onClose={handleModalClose} />
      </div>
    </section>
  );
}

export default Header;
