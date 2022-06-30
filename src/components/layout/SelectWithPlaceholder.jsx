import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function CustomSelect({ placeholder, menu = [] }) {
  const [visible, setVisible] = useState(true);

  return (
    <FormControl
      fullWidth
      sx={{ my: "1vmax" }}
      className={visible ? "select-menu" : ""}
    >
      <Select
        id={placeholder}
        defaultValue={placeholder}
        onChange={() => setVisible(false)}
        renderValue={(selected) => {
          if (visible) {
            return placeholder;
          }
          return selected;
        }}
      >
        {menu.map((m, i) => (
          <MenuItem value={m} key={i}>
            {m}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
