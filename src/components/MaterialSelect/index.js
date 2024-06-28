import React, { useEffect, useState } from "react";
import {
  Checkbox,
  FormControl,
  ListItemText,
  ListSubheader,
  MenuItem,
  Select,
  Stack,
  Typography,
  styled,
} from "@mui/material";
const CustomFormControl = styled(FormControl)({
  maxWidth: "300px",
  width: "-webkit-fill-available",
});
export default function MaterialSelect({
  value,
  options,
  setState,
  error,
  placeholder = "",
  isJson = true,
  isMultiSelect = false,
  isGroup = false,
  isCheckBox = false,
  label = "",
  ...props
}) {
  const [menuOptions, setMenuOptions] = useState([]);
  useEffect(() => {
    if (!isJson) {
      let op = options.map((opt) => {
        return {
          label: opt,
          value: opt,
        };
      });
      setMenuOptions(op);
    } else {
      setMenuOptions(options);
    }
  }, [options, isJson]);
  const onChange = (event) => {
    console.log("event", event);
    const { value } = event.target;
    if (isMultiSelect) {
      setState(typeof value === "string" ? value.split(",") : value);
    } else {
      setState(value);
    }
  };

  return (
    <>
      <CustomFormControl
        sx={{
          ".MuiFormControl-root": {
            width: "300px",
          },
        }}
      >
        <Select
          value={value}
          onChange={onChange}
          inputProps={{ "aria-label": "Without label" }}
          renderValue={
            value && !isMultiSelect
              ? undefined
              : () => <Typography>{placeholder}</Typography>
          }
          multiple={isMultiSelect}
          sx={{
            "&:focus .MuiOutlinedInput-notchedOutline": {
              border: "1px solid black",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              border: "1px solid black",
            },
          }}
          {...props}
        >
          {isGroup
            ? menuOptions?.reduce((acc, p) => {
                acc.push(
                  <ListSubheader key={p.title}>{p.title}</ListSubheader>
                );
                acc.push(
                  ...p.options.map((pl, i) => (
                    <MenuItem key={i} value={pl.value}>
                      {pl.label}
                    </MenuItem>
                  ))
                );
                return acc;
              }, [])
            : isCheckBox
            ? menuOptions.map((opt, i) => {
                return (
                  <MenuItem key={i} value={opt.value}>
                    <Checkbox checked={value.indexOf(opt.value) > -1} />
                    <Stack>
                      <ListItemText primary={opt.label} />

                      <Typography>{opt?.description}</Typography>
                    </Stack>
                  </MenuItem>
                );
              })
            : menuOptions.map((opt, i) => (
                <MenuItem key={i} value={opt.value}>
                  <Typography>{opt.label}</Typography>
                </MenuItem>
              ))}
        </Select>
      </CustomFormControl>
      <Stack
        sx={{
          maxHeight: "12rem",
          width: "50%",
          whiteSpace: "nowrap",
          overflowY: "auto",
          textAlign: "center",
        }}
      >
        {isMultiSelect &&
          value.map((val, i) => {
            return (
              <Stack key={i} sx={{ p: 1, m: 1, background: "#e0e0e0" }}>
                {val}
              </Stack>
            );
          })}
      </Stack>
    </>
  );
}
