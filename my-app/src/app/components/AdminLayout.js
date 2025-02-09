"use client";
import React from "react";
import { AppBar, Box, CssBaseline, Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material";
import { Home, Assessment, Settings } from "@mui/icons-material";
import Link from "next/link";
import { useRouter } from "next/navigation";

const drawerWidth = 240;

export default function AdminLayout() {
  const router = useRouter();

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <AppBar position="fixed" sx={{ zIndex: 1201 }}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Hillpointe OS
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <List>
          <Link href="/dashboard" passHref legacyBehavior>
            <ListItem button>
              <ListItemIcon><Home /></ListItemIcon>
              <ListItemText primary="Revenue Dashboard" />
            </ListItem>
          </Link>

          <Link href="/reports" passHref legacyBehavior>
            <ListItem button>
              <ListItemIcon><Assessment /></ListItemIcon>
              <ListItemText primary="Financial Reports" />
            </ListItem>
          </Link>

          <Link href="/settings" passHref legacyBehavior>
            <ListItem button>
              <ListItemIcon><Settings /></ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItem>
          </Link>
        </List>
      </Drawer>
      </Box>

  );
}
