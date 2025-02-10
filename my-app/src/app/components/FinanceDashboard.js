"use client";
import React, { useState, useEffect } from "react";
import { Box, Grid, Card, CardContent, Typography } from "@mui/material";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

export default function RevenueDashboard() {
  const [revenueData, setRevenueData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/revenue");
        const data = await response.json();
        const formattedData = data.map((entry) => ({
          month: entry.time_period,
          revenue: entry.total_revenue,
        }));

        setRevenueData(formattedData);
      } catch (error) {
        console.error("Error fetching revenue data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <Box sx={{ flexGrow: 1, p: 3, backgroundColor: "#FFFFFF", color: "#1D3A6C" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Card sx={{ backgroundColor: "#F4D25A", color: "#1D3A6C" }}>
            <CardContent>
              <Typography variant="h6" sx={{ fontFamily: "Work Sans", fontWeight: "bold" }}>
                Total Revenue
              </Typography>
              <Typography variant="h4" sx={{ fontFamily: "Work Sans" }}>
                ${revenueData.reduce((sum, entry) => sum + entry.revenue, 0).toLocaleString()}
              </Typography>
            </CardContent>
          </Card>
        </Grid>


        <Grid item xs={12} sm={4}>
          <Card sx={{ backgroundColor: "#61B8C2", color: "#1D3A6C" }}>
            <CardContent>
              <Typography variant="h6" sx={{ fontFamily: "Work Sans", fontWeight: "bold" }}>
                Occupancy Rate
              </Typography>
              <Typography variant="h4" sx={{ fontFamily: "Work Sans" }}>92%</Typography>
            </CardContent>
          </Card>
        </Grid>


        <Grid item xs={12} sm={4}>
          <Card sx={{ backgroundColor: "#B59525", color: "#1D3A6C" }}>
            <CardContent>
              <Typography variant="h6" sx={{ fontFamily: "Work Sans", fontWeight: "bold" }}>
                Outstanding Balances
              </Typography>
              <Typography variant="h4" sx={{ fontFamily: "Work Sans" }}>$18,500</Typography>
            </CardContent>
          </Card>
        </Grid>


        <Grid item xs={12}>
          <Card sx={{ backgroundColor: "#FFFFFF" }}>
            <CardContent>
              <Typography variant="h6" sx={{ fontFamily: "Work Sans", fontWeight: "bold", mb: 2 }}>
                Monthly Revenue
              </Typography>
              <ResponsiveContainer width="100%" height={350}>
                <BarChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="revenue" fill="#1D3A6C" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
n