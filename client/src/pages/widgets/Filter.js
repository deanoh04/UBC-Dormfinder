import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUsers, setConnections, setPreferences } from "state";
import PostWidget from "./Post";
import Wrapper from "shared/Wrapper";
import ConnectionWidget from "./Connection";
import { Link, Navigate } from "react-router-dom";
import { Typography, InputBase, MenuItem, Box, useTheme, FormControl, Select, Button} from "@mui/material";

import React from 'react'

const FilterWidget = () => {
    const dispatch = useDispatch();
    const currUser = useSelector((state) => state.user)
    const users = useSelector((state) => state.allUsers);
    const filler = 'dfd'
    const preferences = useSelector((state) => state.user.preferences)
    const token = useSelector((state) => state.token);
    const theme = useTheme()
    const { palette } = useTheme();
    const neutralLight = theme.palette.neutral.light;
    const filterByCrit = (crit, value) => {
      const filteredUsers = users.filter((user) => {
        const prefs = user.preferences[0].split(',')
        if (crit == 'sleep') {
          return prefs[0] == value
        } else if (crit == 'smoke') {
          return prefs[1] == value
        } else {
          return prefs[2] == value
        }
      })
      dispatch(setUsers({allUsers: filteredUsers}))
    }

    const filterByMyPrefs = () => {
      const filteredUsers = users.filter((user) => {
        const prefs = user.preferences[0].split(',')
        const currPrefs = currUser.preferences[0].split(',')
          return prefs[0] == currPrefs[0] && prefs[1] == currPrefs[1] && prefs[2] == currPrefs[2]
      })
      dispatch(setUsers({allUsers: filteredUsers}))
    }

    const getUsers = async () => {
      const response = await fetch("https://ubc-dormfinder-api-qfaf.onrender.com/users", {
        mode: 'cors',
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();
      dispatch(setUsers({ allUsers: data }));
  };



  return (
    <Wrapper>
      <Typography
        color='black'
        variant="h5"
        fontWeight="500"
        sx={{ mb: "1.5rem" }}
      >
        Filter By
      </Typography>
      <Box display="flex" flexDirection="column" gap="1.5rem">
      <FormControl variant="standard" value={filler}>
    <Select
      value={filler}
      sx={{
        backgroundColor: "rgb(255, 243, 238)",
        width: "150px",
        borderRadius: "0.25rem",
        p: "0.25rem 1rem",
        "& .MuiSvgIcon-root": {
          pr: "0.25rem",
          width: "3rem",
        },
        "& .MuiSelect-select:focus": {
          backgroundColor: "rgb(255, 243, 238)",
        },
      }}
      input={<InputBase />}
    >
      <MenuItem value={filler} >
        <Typography>
        Sleep
        </Typography>
        
      </MenuItem>
      <MenuItem  onClick={() => {filterByCrit('sleep', 'early')}}>
        <Typography>early sleepers</Typography>
      </MenuItem>
      <MenuItem  onClick={() => {filterByCrit('sleep', 'medium')}}>
        <Typography>flexible sleepers</Typography>
      </MenuItem>
      <MenuItem onClick={() => {filterByCrit('sleep', 'late')}}>
        late sleepers
      </MenuItem>
    </Select>
  </FormControl>

  <FormControl variant="standard" value={filler}>
    <Select
      value={filler}
      sx={{
        backgroundColor: "rgb(255, 243, 238)",
        width: "150px",
        borderRadius: "0.25rem",
        p: "0.25rem 1rem",
        "& .MuiSvgIcon-root": {
          pr: "0.25rem",
          width: "3rem",
        },
        "& .MuiSelect-select:focus": {
          backgroundColor: "rgb(255, 243, 238)",
        },
      }}
      input={<InputBase />}
    >
      <MenuItem value={filler} >
        <Typography>
        Smoking
        </Typography>
        
      </MenuItem>
      <MenuItem  onClick={() => {filterByCrit('smoke', 'smoke')}}>
        <Typography>smokers</Typography>
      </MenuItem>
      <MenuItem  onClick={() => {filterByCrit('smoke', 'noSmoke')}}>
        <Typography>non-smokers</Typography>
      </MenuItem>
    </Select>
  </FormControl>

  <FormControl variant="standard" value={filler}>
    <Select
      value={filler}
      sx={{
        backgroundColor: "rgb(255, 243, 238)",
        width: "150px",
        borderRadius: "0.25rem",
        p: "0.25rem 1rem",
        "& .MuiSvgIcon-root": {
          pr: "0.25rem",
          width: "3rem",
        },
        "& .MuiSelect-select:focus": {
          backgroundColor: "rgb(255, 243, 238)",
        },
      }}
      input={<InputBase />}
    >
      <MenuItem value={filler} >
        <Typography>
        Drinking
        </Typography>
        
      </MenuItem>
      <MenuItem  onClick={() => {filterByCrit('drink' , 'drink')}}>
        <Typography>people who drink</Typography>
      </MenuItem>
      <MenuItem  onClick={() => {filterByCrit('drink' ,'noDrink')}}>
        <Typography>people who don't drink</Typography>
      </MenuItem>
    </Select>
  </FormControl>
  <Button onClick={filterByMyPrefs} sx={{
    backgroundColor: "rgb(242, 138, 86)",
    color: "white"
  }} >Filter By My Preferences</Button>
  <Button onClick={getUsers} sx={{
    backgroundColor: "rgb(242, 138, 86)",
    color: "white"
  }}>Reset Filters</Button>
      </Box>
    </Wrapper>
    
  )
}

export default FilterWidget