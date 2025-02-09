"use client";
import React from "react";
import { Box, Grid, Card, CardContent, Typography } from "@mui/material";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const revenueData = [
  { month: "Jan", revenue: 50000 },
  { month: "Feb", revenue: 65000 },
  { month: "Mar", revenue: 72000 },
  { month: "Apr", revenue: 48000 },
];

export default function RevenueDashboard() {
  return (
    <Box sx={{ flexGrow: 1, p: 3, backgroundColor: "#FFFFFF", color: "#1D3A6C" }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Card sx={{ backgroundColor: "#F4D25A" }}>
            <CardContent>
              <Typography variant="h6" sx={{ fontFamily: "Work Sans", fontWeight: "bold" }}>Total Revenue</Typography>
              <Typography variant="h4" sx={{ fontFamily: "Work Sans", color: "#1D3A6C" }}>$235,000</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card sx={{ backgroundColor: "#61B8C2" }}>
            <CardContent>
              <Typography variant="h6" sx={{ fontFamily: "Work Sans", fontWeight: "bold" }}>Occupancy Rate</Typography>
              <Typography variant="h4" sx={{ fontFamily: "Work Sans", color: "#1D3A6C" }}>92%</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card sx={{ backgroundColor: "#B59525" }}>
            <CardContent>
              <Typography variant="h6" sx={{ fontFamily: "Work Sans", fontWeight: "bold" }}>Outstanding Balances</Typography>
              <Typography variant="h4" sx={{ fontFamily: "Work Sans", color: "#1D3A6C" }}>$18,500</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card sx={{ backgroundColor: "#FFFFFF" }}>
            <CardContent>
              <Typography variant="h6" sx={{ fontFamily: "Work Sans", fontWeight: "bold" }}>Monthly Revenue</Typography>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={revenueData}>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="revenue" fill="#1976d2" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

