import { FormControl, MenuItem, Select, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import {SearchOutlined} from "@mui/icons-material"

const SearchBox = () => {
  return (
    <Box className="searchBoxContainer">
          <FormControl style={{width:"35%"}}>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
            defaultValue="All"
            style={{color:"grey"}}
            >
              <MenuItem value="All">All</MenuItem>
            </Select>
          </FormControl>
          <Box className="textFieldBox">

          <TextField type="text" placeholder="Search" fullWidth />
          <SearchOutlined style={{position:"absolute",right:"10px",color:"grey"}}/>
          </Box>
        </Box>
  )
}

export default SearchBox