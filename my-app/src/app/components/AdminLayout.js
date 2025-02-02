"use client";
import React, { useState } from "react";
import { AppBar, Box, CssBaseline, Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material";
import { Home, Assessment, Settings } from "@mui/icons-material";

const drawerWidth = 240;

export default function AdminLayout() {
  const [page, setPage] = useState("dashboard"); 
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
          <ListItem button onClick={() => setPage("dashboard")}>
            <ListItemIcon><Home /></ListItemIcon>
            <ListItemText primary="Revenue Dashboard" />
          </ListItem>
          <ListItem button onClick={() => setPage("reports")}>
            <ListItemIcon><Assessment /></ListItemIcon>
            <ListItemText primary="Financial Reports" />
          </ListItem>
          <ListItem button onClick={() => setPage("settings")}>
            <ListItemIcon><Settings /></ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
        </List>
      </Drawer>


      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "#F4F4F4",
          padding: "20px",
          marginLeft: `${drawerWidth}px`,
        }}
      >
        {page === "dashboard" && (
          <Typography variant="h4" gutterBottom>
            Revenue Dashboard
          </Typography>

        )}

        {page === "reports" && (
          <Typography variant="h4" gutterBottom>
            Financial Reports
          </Typography>

        )}

        {page === "settings" && (
          <Typography variant="h4" gutterBottom>
            Settings
          </Typography>

        )}
      </Box>
    </Box>
  );
}
