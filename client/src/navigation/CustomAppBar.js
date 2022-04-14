/*
 * Copyright © 2021 Lexcelon LLC <info@lexcelon.com>
 * Licensed for non-distributable use
 */
import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  AppBar,
  Button,
  Drawer,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Hidden,
  List,
  ListItem,
  ListItemText
} from '@mui/material';

// Icons
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

/* --- Custom App Bar --- */
function CustomAppBar({ location, logo, logoDescription, links, backgroundColor, textColor, accentColor = null, drawer = false, children = null }) {
  const [linkMenuanchorEl, setLinkMenuAnchorEl] = useState(null);
  const [selectedLink, setSelectedLink] = useState(null);
  const [isSidePanelOpen, setSidePanelOpen] = useState(false);

  const handleLinkMenuClick = (event, link) => {
    setLinkMenuAnchorEl(event.currentTarget);
    setSelectedLink(link);
  };

  const handleLinkMenuClose = () => {
    setLinkMenuAnchorEl(null);
    setSelectedLink(null);
  };

  const toggleSideMenu = () => {
    setSidePanelOpen(!isSidePanelOpen);
  };

  return (
    <AppBar style={{ backgroundColor: backgroundColor }} position='static'>
      <Toolbar>

        {/* --- LOGO --- */}
        <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
          <Link to="/">
            <img
              width={150}
              height={50}
              src={logo}
              alt={logoDescription}
              title={logoDescription}
              style={{ objectFit: 'contain', cursor: 'pointer' }}
            />
          </Link>

          {children}
        </div>

        {/* --- MOBILE VIEW --- */}
        <Hidden lgUp implementation='css'>
          <div style={{ flex: 1, textAlign: 'right' }}>
            <IconButton
              aria-controls='nav-menu'
              aria-haspopup='true'
              onClick={toggleSideMenu}>
              <MenuIcon style={{ color: textColor }} />
            </IconButton>
          </div>
        </Hidden>

        {/* --- DRAWER MENU --- */}
        <Drawer anchor={'right'} open={isSidePanelOpen} onClose={toggleSideMenu}>
          <SideMenu
            location={location}
            toggle={toggleSideMenu}
            links={links}
            logo={logo}
            logoDescription={logoDescription}
            backgroundColor={backgroundColor}
            textColor={textColor}
            accentColor={accentColor}
          />
        </Drawer>

        {/* --- FULL SCREEN VIEW --- */}
        <Hidden mdDown implementation='css'>
          {drawer ?
            <div style={{ flex: 1, textAlign: 'right' }}>
              <IconButton
                aria-controls='nav-menu'
                aria-haspopup='true'
                onClick={toggleSideMenu}>
                <MenuIcon style={{ color: textColor }} />
              </IconButton>
            </div> :
            <div style={{ flex: 3, display: 'flex', justifyContent: 'flex-end' }}>
              {links.map((link, index) =>
                <div key={index}>
                  <Button
                    style={{
                      marginLeft: '10px',
                      textAlign: 'center',
                      fontSize: '14px',
                      color: !accentColor || isSelected(location.pathname, link.slug) ? textColor : accentColor,
                      textDecoration: !accentColor && isSelected(location.pathname, link.slug) ? 'underline' : null,
                      textUnderlineOffset: '3px'
                    }}
                    href={link.subLinks ? null : link.slug}
                    aria-haspopup={link.subLinks ? 'true' : 'false'}
                    onClick={link.subLinks ? (e) => handleLinkMenuClick(e, link) : null}
                    test={'thisisatest'}>
                    {link.text}
                    {link.subLinks && (linkMenuanchorEl && selectedLink?.slug === link.slug ? <ExpandLessIcon /> : <ExpandMoreIcon />)}
                  </Button>

                  {selectedLink?.subLinks &&
                    <Menu
                      id="simple-menu"
                      anchorEl={linkMenuanchorEl}
                      keepMounted
                      open={Boolean(linkMenuanchorEl)}
                      onClose={handleLinkMenuClose}
                      elevation={0}
                      getContentAnchorEl={null}
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                      }}
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                      }}
                    >
                      {selectedLink?.subLinks && selectedLink?.subLinks?.map((subLink, subLinkIndex) =>
                        <MenuItem key={subLinkIndex} component='button' onClick={handleLinkMenuClose} href={selectedLink?.slug + subLink.slug} style={{ fontSize: '14px' }}>
                          {subLink.text}
                        </MenuItem>
                      )}
                    </Menu>}
                </div>
              )}
            </div>}
        </Hidden>

      </Toolbar>
    </AppBar>
  );
}

CustomAppBar.propTypes = {
  location: PropTypes.object.isRequired,
  logo: PropTypes.string.isRequired,
  logoDescription: PropTypes.string.isRequired,
  links: PropTypes.array.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  accentColor: PropTypes.string,
  drawer: PropTypes.bool,
  children: PropTypes.any
};

/* --- Side Menu --- */
function SideMenu({ toggle, location, links, logo, logoDescription, backgroundColor, textColor, accentColor = null }) {
  const [linkMenuanchorEl, setLinkMenuAnchorEl] = useState(null);
  const [selectedLink, setSelectedLink] = useState(null);

  const handleLinkMenuClick = (event, link) => {
    setLinkMenuAnchorEl(event.currentTarget);
    setSelectedLink(link);
  };

  const handleLinkMenuClose = () => {
    setLinkMenuAnchorEl(null);
    setSelectedLink(null);
  };

  return (
    <div
      role='presentation'
      onKeyDown={toggle}
      style={{ width: '250px', height: '100%', backgroundColor: backgroundColor }}
    >
      <List>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <img
            width={150}
            height={150}
            style={{ objectFit: 'contain' }}
            src={logo}
            alt={logoDescription}
            title={logoDescription}
          />
        </div>
        {links.map((link, index) =>
          <div key={index}>
            <ListItem
              button
              component='button'
              href={link.subLinks ? null : link.slug}
              aria-haspopup={link.subLinks ? 'true' : 'false'}
              onClick={link.subLinks ? (e) => handleLinkMenuClick(e, link) : toggle}
              style={{
                marginRight: '40px',
                color: !accentColor || isSelected(location.pathname, link.slug) ? textColor : accentColor,
                textDecoration: !accentColor && isSelected(location.pathname, link.slug) ? 'underline' : null,
                textUnderlineOffset: '3px'
              }}>
              <ListItemText primary={link.text} />
              {link.subLinks && (linkMenuanchorEl && selectedLink?.slug === link.slug ? <ExpandLessIcon /> : <ExpandMoreIcon />)}
            </ListItem>

            {selectedLink?.subLinks &&
              <Menu
                id="simple-menu"
                anchorEl={linkMenuanchorEl}
                keepMounted
                open={Boolean(linkMenuanchorEl)}
                onClose={handleLinkMenuClose}
                elevation={0}
                getContentAnchorEl={null}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
              >
                {selectedLink?.subLinks && selectedLink?.subLinks.map((subLink, subLinkIndex) =>
                  <MenuItem key={subLinkIndex} component='button' onClick={handleLinkMenuClose} href={selectedLink?.slug + subLink.slug} style={{ fontSize: '14px' }}>
                    {subLink.text}
                  </MenuItem>
                )}
              </Menu>}
          </div>
        )}
      </List>
    </div>
  );
}
SideMenu.propTypes = {
  location: PropTypes.object.isRequired,
  toggle: PropTypes.func.isRequired,
  links: PropTypes.array.isRequired,
  logo: PropTypes.string.isRequired,
  logoDescription: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  accentColor: PropTypes.string
};

/* --- CustomAppBar Wrapper --- */
class CustomAppBarWrapper extends React.Component {
  render() {
    return (
      <CustomAppBar
        {...this.props}
      />
    );
  }
}
export default withRouter(CustomAppBarWrapper);

function isSelected(currentPathname, slug) {
  return currentPathname === '/' && slug === '/' ? true : currentPathname.includes(slug) && slug !== '/';
}
