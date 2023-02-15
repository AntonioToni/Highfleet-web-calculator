import React, { useState } from 'react';
import { MenuItem, Select, Stack, TextField, InputLabel, FormControl, Typography } from '@mui/material';
import shipList from '../ships.json';
import { getPrice, getTime, getTotalFuel, thousandsSeparator } from '../services/functions';

export function IO () {
	const [ship, setShip] = useState(6);
	const [distance, setDistance] = useState(0);
	const [methanePrice, setMethanePrice] = useState(1.078);
	return (
		<>
			<Stack spacing={0} alignItems='center' justifyContent='center'
				sx={{
					direction: 'row',
					textAlign: 'center',
					'@media (max-width:1000px)': {
						width: '90vw'
					}
				}}>
				<Typography variant='caption' sx={{margin : 2, fontWeight: 'bold'}}>I do not own Highfleet nor images used here. <br /> Check out the game on <a href="https://store.steampowered.com/app/1434950/HighFleet/">Steam</a>.</Typography>
				<Stack spacing={1.5} alignItems='center'>
					<FormControl size='small'>
						<InputLabel id='selectShip'>Ship</InputLabel>
						<Select
							sx={{ backgroundColor: 'rgba(40,40,40,0.8)', width: 200, textAlign: 'left' }}
							placeholder='Ship'
							id='selectShip'
							labelId='selectShip'
							label='Ship'
							defaultValue='6'
							onChange={event => { setShip(parseInt(event.target.value)); }}
						>
							<MenuItem value={0}>Archangel</MenuItem>
							<MenuItem value={1}>Fearsome</MenuItem>
							<MenuItem value={2}>Gepard</MenuItem>
							<MenuItem value={3}>Lightning</MenuItem>
							<MenuItem value={4}>Negev</MenuItem>
							<MenuItem value={5}>Nomad</MenuItem>
							<MenuItem value={6}>Sevastopol</MenuItem>
						</Select>
					</FormControl>
					<TextField
						id='outlined-number'
						label='Distance'
						type='number'
						size='small'
						onChange={event => { setDistance(parseFloat(event.target.value)); }}
						sx={{ backgroundColor: 'rgba(40,40,40,0.8)', width: 200 }}
					/>
					<TextField
						id='outlined-number'
						label='Methane price per litre'
						type='number'
						size='small'
						value={methanePrice}
						onChange={event => { setMethanePrice(parseFloat(event.target.value)); }}
						sx={{ backgroundColor: 'rgba(40,40,40,0.8)', width: 200 }}
					/>
					<Typography variant='h6'>
						<>
							{isNaN(distance) && setDistance(0)}
							It would take {thousandsSeparator(Math.round(getTotalFuel(distance, shipList[ship]?.consumption) * 100) / 100)} tonnes of methane, <br /> costing&nbsp;
							{thousandsSeparator(Math.round(getPrice(getTotalFuel(distance, shipList[ship]?.consumption), methanePrice) * 100) / 100) + '€'} <br /> to fly {thousandsSeparator(distance)}km<br />
							Flight time: {Math.round(getTime(distance, shipList[ship]?.cruiseSpeed) * 100) / 100}h
						</>
					</Typography>
				</Stack>
				<Stack spacing={2} sx={{
					'@media (max-width: 1200px)': {
						width: 'inherit'
					}
				}}>
					<img src={`/${shipList[ship].shipName}.png`} alt='' draggable='false' style={{ width: 'inherit' }}/>
				</Stack>
			</Stack>
		</>
	);
}
