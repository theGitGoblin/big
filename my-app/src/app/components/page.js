"use client";
import { useState } from "react";
import { Box, Toolbar, Container } from "@mui/material";
import AdminLayout from "../../components/AdminLayout";
import RevenueDashboard from "../../components/RevenueDashboard";

export default function DashboardPage() {
  const [page, setPage] = useState("dashboard");

  return (
    <Box sx={{ display: "flex" }}>
      <AdminLayout setPage={setPage} />
      <Box component="main" sx={{ flexGrow: 1, p: 3, marginLeft: "240px" }}>
        <Toolbar />
        <Container>
          {page === "dashboard" && <RevenueDashboard/>}
          {page === "reports" && <Typography variant="h4">Reports Page Coming Soon</Typography>}
          {page === "settings" && <Typography variant="h4">Settings Page Coming Soon</Typography>}
        </Container>
      </Box>
    </Box>
  );
}
