"use client";

import { useState } from "react";
import { Box, Toolbar, Container } from "@mui/material";
import DashboardLayout from '../components/AdminLayout';  
import ApartmentList from "../components/RevenueDashboard";  

export default function Dashboard() {
  const [category, setCategory] = useState("all"); 

  return (
    <Box sx={{ display: "flex" }}>
      <DashboardLayout setCategory={setCategory} /> 
 
      <Box component="main" sx={{ flexGrow: 1, p: 3, marginLeft: "240px" }}>
        <Toolbar />
        <Container>
          <ApartmentList category={category} />
        </Container>
      </Box>
    </Box>
  );
}
