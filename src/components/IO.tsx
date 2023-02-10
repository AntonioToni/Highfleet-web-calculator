import { MenuItem, Select, SelectChangeEvent, Stack, TextField, InputLabel, FormControl } from "@mui/material"
import { useState } from "react"
import Sevastopol from "../assets/Sevastopol.png";
import Negev from "../assets/Negev.png";
import Nomad from "../assets/Nomad.png";
import Lightning from "../assets/Lightning.png";
import "../ships.json";

export function IO() {
  const [ship, setShip] = useState(0);
  const [distance, setDistance] = useState(0);

  return(
    <>
      <Stack direction='row' spacing={4} alignItems='center'>
        <Stack spacing={2}>
          <FormControl>
            <InputLabel id="selectShip">Ship</InputLabel>
            <Select 
              sx={{backgroundColor: 'rgba(40,40,40,0.8)', width: 200}}
              placeholder='Ship'
              id="selectShip"
              labelId="selectShip"
              label="Ship"
              defaultValue="0"
              onChange={event => setShip(parseInt(event.target.value))}
            >
              <MenuItem value={"0"}>Sevastopol</MenuItem>
              <MenuItem value={"1"}>Negev</MenuItem>
              <MenuItem value={"2"}>Nomad</MenuItem>
              <MenuItem value={"3"}>Lightning</MenuItem>
            </Select>
          </FormControl>
          <TextField
            id="outlined-number"
            label="Distance"
            type="number"
            onChange={event => setDistance(parseInt(event.target.value))}
            sx={{backgroundColor: 'rgba(40,40,40,0.8)', width: 200}}
          />
        </Stack>
        <Stack spacing={2}>
          <img src={
            ship === 0 ? Sevastopol : 
            ship === 1 ? Negev :
            ship === 2 ? Nomad : Lightning
          } alt="" />
        </Stack>
      </Stack>
    </>
  )
}