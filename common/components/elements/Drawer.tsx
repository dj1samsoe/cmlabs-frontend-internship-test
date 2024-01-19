"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Link from "next/link";
import CloseIcon from "@mui/icons-material/Close";

const drawerWidth = 300;

interface Props {
  window?: () => Window;
}

export default function ResponsiveDrawer(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <div className="flex flex-col space-y-3">
      <div className="flex justify-end pr-3">
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerClose}
          sx={{ display: { md: "flex" } }}
        >
          <CloseIcon className="text-right" />
        </IconButton>
      </div>
      <Divider />
      <List>
        <ListItem disablePadding={false}>
          <Link
            href="/"
            aria-label="Home"
            onClick={handleDrawerClose}
            className="w-full text-center rounded-md hover:bg-neutral-300 transition-all duration-200"
          >
            <ListItemText primary="Home" />
          </Link>
        </ListItem>
        <ListItem disablePadding={false}>
          <Link
            href="/foods"
            aria-label="Foods"
            onClick={handleDrawerClose}
            className="w-full text-center rounded-md hover:bg-neutral-300 transition-all duration-200"
          >
            <ListItemText primary="Foods" />
          </Link>
        </ListItem>
        <ListItem disablePadding={false}>
          <Link
            href="/ingredients"
            aria-label="Ingredients"
            onClick={handleDrawerClose}
            className="w-full text-center rounded-md hover:bg-neutral-300 transition-all duration-200"
          >
            <ListItemText primary="Ingredients" />
          </Link>
        </ListItem>
        <ListItem disablePadding={false}>
          <Link
            href="/local-culinary"
            aria-label="Local Culinary"
            onClick={handleDrawerClose}
            className="w-full text-center rounded-md hover:bg-neutral-300 transition-all duration-200"
          >
            <ListItemText primary="Local Culinary" />
          </Link>
        </ListItem>
      </List>
    </div>
  );

  return (
    <div className="text-end">
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={handleDrawerToggle}
        sx={{ display: { md: "block" } }}
      >
        <MenuIcon />
      </IconButton>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="navbar"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "block", md: "block", lg: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        {/* <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer> */}
      </Box>
    </div>
  );
}
