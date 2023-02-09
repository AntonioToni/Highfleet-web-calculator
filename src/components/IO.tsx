import { MenuItem, Select, SelectChangeEvent, Stack, TextField, InputLabel, FormControl } from "@mui/material"
import { useState } from "react"
import Sevastopol from "../assets/Sevastopol.png";
import Negev from "../assets/Negev.png";

export function IO() {
  const [ship, setShip] = useState('');
  const [distance, setDistance] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setShip(event.target.value as string);
  };

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
              >
              <MenuItem value={'Sevastopol'}>Sevastopol</MenuItem>
              <MenuItem value={'Negev'}>Negev</MenuItem>
              <MenuItem value={'Nomad'}>Nomad</MenuItem>
              <MenuItem value={'Lightning'}>Lightning</MenuItem>
            </Select>
          </FormControl>
          <TextField
            id="outlined-number"
            label="Distance"
            type="number"
            sx={{backgroundColor: 'rgba(40,40,40,0.8)', width: 200}}
          />
        </Stack>
        <Stack spacing={2}>
          <img src={Sevastopol} alt="" />
        </Stack>
      </Stack>
    </>
  )
}