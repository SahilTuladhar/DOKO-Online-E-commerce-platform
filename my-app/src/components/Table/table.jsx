import React from "react";
import classes from "./table.module.css";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Typography,
} from "@mui/material";
import { useState } from "react";

export const MuiTable = (props) => {
  const categoryTotals = {};
  let totalSales = 0;

  props.analysis.forEach((row) => {
    const category = row.product.category;
    if (!categoryTotals[category]) {
      categoryTotals[category] = row.bidAmount;
    } else {
      categoryTotals[category] += row.bidAmount;
    }
    totalSales += row.bidAmount;
  });

  return (
    <>
      <TableContainer
        className={classes.tableContainer}
        component={Paper}
        sx={{
          maxHeight: "100%",
          maxWidth: "110%",
          transition: "1s box-shadow",
          width: "100%",
          padding: "5%",
          backgroundColor: "#eba28c4a",
          borderRadius: "20px",
        }}
      >
        <div className={classes.totalSales}>
          <Typography
            variant="h6"
            component="div"
            sx={{ fontWeight: "bold", padding: "8px" }}
          >
            Total Sales: {totalSales}
          </Typography>
        </div>

        <Table
          aria-label="Items Sold"
          stickyHeader
          // sx={{ border: "1px solid black" }}
        >
          <TableHead>
            <TableRow sx={{ position: "relative" }}>
              <TableCell
                className={classes.header}
                sx={{
                  backgroundColor: "#b5948c83",
                  transition: "1s width,1s border-radius",
                  position: "relative",
                  right: "1.5%",
                  width: "20%",
                }}
              >
                Name
              </TableCell>
              <TableCell
                className={classes.header}
                sx={{
                  backgroundColor: "#b5948c83",
                  transition: "1s width,1s border-radius",
                  position: "relative",
                  width: "20%",
                }}
              >
                Category
              </TableCell>
              <TableCell
                className={classes.header}
                sx={{
                  backgroundColor: "#b5948c83",
                  position: "relative",
                  transition: "1s width,1s border-radius",
                  left: "1.5%",
                  width: "20%",
                }}
              >
                Price
              </TableCell>
              <TableCell
                className={classes.header}
                sx={{
                  backgroundColor: "#b5948c83",
                  position: "relative",
                  transition: "1s width ,1s border-radius",
                  left: "3%",
                  width: "20%",
                }}
                align="center"
              >
                Sold
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{ position: "relative" }}>
            {props.analysis.map((row) => (
              <TableRow
                key={row.product.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell sx={{ position: "relative", right: "0%" }}>
                  {row.product.name}
                </TableCell>
                <TableCell>{row.product.category}</TableCell>
                <TableCell>{row.price}</TableCell>
                <TableCell align="center">{row.bidAmount}</TableCell>
              </TableRow>
            ))}
            {Object.entries(categoryTotals).map(([category, total]) => (
              <TableRow key={category}>
                <TableCell colSpan={3} align="right">
                  Total ({category}):
                </TableCell>
                <TableCell align="center">{total}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default MuiTable;
