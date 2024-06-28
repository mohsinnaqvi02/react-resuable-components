import { Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import MaterialSelect from "../../components/MaterialSelect";

export default function SelectBoxContainer({ type, children }) {
  return (
    <Stack
      sx={{
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      }}
      p={4}
      borderRadius={3}
      spacing={3}
      my={3}
      alignItems={"center"}
    >
      <Typography
        sx={{ fontSize: "18px", fontWeight: "600", color: "#0000008f" }}
      >
        {type}
      </Typography>

      {children}
    </Stack>
  );
}
