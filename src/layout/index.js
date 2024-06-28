import { Box, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import SelectBoxContainer from "../containers/SelectBoxContainer";
import MaterialSelect from "../components/MaterialSelect";

export default function Layout() {
  const [age, setAge] = useState();
  const [year, setYear] = useState(null);
  const [groupItem, setGroupItem] = useState("");
  const [multiYears, setMultiYears] = useState([]);
  const [checkMultiYears, setCheckMultiYears] = useState([]);
  const ages = [
    { label: "18", value: 18 },
    { label: "20", value: 20 },
    { label: "25", value: 25 },
    { label: "30", value: 30 },
  ];
  const years = [
    { label: "2019", value: 2019, description: "Pass out year" },
    { label: "2020", value: 2020 },
    { label: "2021", value: 2021 },
    { label: "2022", value: 2022 },
  ];
  const optionGroups = [
    {
      title: "Group 1",
      options: [{ label: "Mohsin", value: "Mohsin" }],
    },
    {
      title: "Group 2",
      options: [{ label: "Abhishek", value: "Abhishek" }],
    },
    {
      title: "Group 3",
      options: [{ label: "Prem", value: "Prem" }],
    },
  ];
  return (
    <Box
      sx={{
        background: "#c4c4c4",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack
        width="auto"
        py={4}
        px={5}
        sx={{
          background: "#ffffff",
        }}
      >
        <Typography
          textAlign={"center"}
          sx={{
            fontWeight: 800,
            fontSize: "1.5rem",
            letterSpacing: "0.09em",
          }}
        >
          Reusable Components in React: MUI Select
        </Typography>
        <SelectBoxContainer type={"Simple Select Box Type 1"}>
          <MaterialSelect value={age} setState={setAge} options={ages} />
        </SelectBoxContainer>

        <SelectBoxContainer type={"Simple Select Box Type 2"}>
          <MaterialSelect
            placeholder={"Year"}
            value={year}
            setState={setYear}
            options={years}
          />
        </SelectBoxContainer>

        <SelectBoxContainer type={"Group Select Box"}>
          <MaterialSelect
            placeholder={"Group"}
            value={groupItem}
            setState={setGroupItem}
            options={optionGroups}
            isGroup={true}
          />
        </SelectBoxContainer>
        <SelectBoxContainer type={"Multiple Select Box"}>
          <MaterialSelect
            placeholder={"Year"}
            value={multiYears}
            setState={setMultiYears}
            options={years}
            isMultiSelect={true}
          />
        </SelectBoxContainer>
        <SelectBoxContainer type={"CheckBox & Multiple Select Box"}>
          <MaterialSelect
            placeholder={"Group"}
            value={checkMultiYears}
            setState={setCheckMultiYears}
            options={years}
            isCheckBox={true}
            isMultiSelect={true}
          />
        </SelectBoxContainer>
      </Stack>
    </Box>
  );
}
