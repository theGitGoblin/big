"use client";
import React, { useState } from "react";
import { Box, Grid, Card, CardContent, Typography, MenuItem, Select, FormControl, InputLabel } from "@mui/material";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function RevenueDashboard() {
  const [chartType, setChartType] = useState("bar");
  const [data, setData] = useState({
    total_revenue: 40000,
    growth_rate: 12.5,
    profit_margin: 35,
    monthly_revenue: { Jan: 40000, Feb: 45000, Mar: 50000 },
    top_products: ["Product A", "Product B", "Product C"],
  });

  const handleChangeChart = (event) => {
    setChartType(event.target.value);
  };

  const revenueData = Object.entries(data.monthly_revenue).map(([month, revenue]) => ({ month, revenue }));

  return (
    <Box sx={{ flexGrow: 1, p: 3, backgroundColor: "#FFFFFF", color: "#1D3A6C" }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Card sx={{ backgroundColor: "#F4D25A", borderRadius: 2 }}>
            <CardContent>
              <Typography variant="h6" sx={{ fontFamily: "Work Sans", fontWeight: "bold" }}>Total Revenue</Typography>
              <Typography variant="h4" sx={{ fontFamily: "Work Sans", color: "#1D3A6C" }}>
                ${data.total_revenue.toLocaleString()}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card sx={{ backgroundColor: "#61B8C2", borderRadius: 2 }}>
            <CardContent>
              <Typography variant="h6" sx={{ fontFamily: "Work Sans", fontWeight: "bold" }}>Growth Rate</Typography>
              <Typography variant="h4" sx={{ fontFamily: "Work Sans", color: "#1D3A6C" }}>
                {data.growth_rate}%
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card sx={{ backgroundColor: "#B59525", borderRadius: 2 }}>
            <CardContent>
              <Typography variant="h6" sx={{ fontFamily: "Work Sans", fontWeight: "bold" }}>Profit Margin</Typography>
              <Typography variant="h4" sx={{ fontFamily: "Work Sans", color: "#1D3A6C" }}>
                {data.profit_margin}%
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card sx={{ backgroundColor: "#FFFFFF", borderRadius: 2 }}>
            <CardContent>
              <Typography variant="h6" sx={{ fontFamily: "Work Sans", fontWeight: "bold" }}>Monthly Revenue</Typography>
              <ResponsiveContainer width="100%" height={300}>
                {chartType === "bar" ? (
                  <BarChart data={revenueData}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="revenue" fill="#1976d2" />
                  </BarChart>
                ) : (
                  <LineChart data={revenueData}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="revenue" stroke="#1976d2" />
                  </LineChart>
                )}
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel>Chart Type</InputLabel>
            <Select value={chartType} label="Chart Type" onChange={handleChangeChart}>
              <MenuItem value="bar">Bar Chart</MenuItem>
              <MenuItem value="line">Line Chart</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  );
}
