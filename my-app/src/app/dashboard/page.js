"use client";

import { useState } from "react";
import { Box, Toolbar, Container } from "@mui/material";
import DashboardLayout from '../components/AdminLayout';  
import ApartmentList from "../components/RevenueDashboard";  

export default function Dashboard() {
  const [category, setCategory] = useState("all");

  const theme = {
    dataColors: ["#1D3A6C", "#8C8C8F", "#61B8C2", "#FF7840", "#D9B200", "#578747", "#1D3A6C", "#3664A8", "#3599B8", "#DFBFBF", "#4AC5BB", "#5F6B6D", "#FB8281", "#F4D25A", "#7F898A", "#A4DDEE", "#FDAB89", "#B687AC", "#28738A", "#A78F8F", "#168980", "#293537", "#BB4A4A", "#B59525", "#475052", "#6A9FB0", "#BD7150", "#7B4F71", "#1B4D5C", "#706060", "#0F5C55", "#1C2325"],
    background: "#FFFFFF",
    foreground: "#1D3A6C",
    tableAccent: "#1D3A6C",
    good: "#B1F299",
    neutral: "#E8E182",
    bad: "#E8AC87",
    minimum: "#A6BDDE",
    center: "#3664A8",
    maximum: "#1D3A6C",
    textClasses: {
      label: { fontFace: "Work Sans" },
      callout: { fontFace: "Work Sans" },
      title: { fontFace: "Work Sans" },
      header: { fontFace: "Work Sans" }
    }
  };

  return (
    <Box sx={{ display: "flex", backgroundColor: theme.background, color: theme.foreground }}>
      <DashboardLayout setCategory={setCategory} theme={theme} />
      
      <Box component="main" sx={{ flexGrow: 1, p: 3, marginLeft: "240px" }}>
        <Toolbar />
        <Container>
          <ApartmentList category={category} theme={theme} />
        </Container>
      </Box>
    </Box>
  );
}
