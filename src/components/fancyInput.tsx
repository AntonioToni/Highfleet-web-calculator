import { Divider, Select, InputBase, Paper, MenuItem, type SelectChangeEvent } from '@mui/material';
import { useState } from 'react';

// under construction, don't like how it looks atm
function FancyInput () {
	const [system, setSystem] = useState('km');

	const handleChange = (event: SelectChangeEvent) => {
		setSystem(event.target.value);
	};
	return (
		<Paper
			sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 250 }}
			component="form"
		>
			<InputBase
				sx={{ ml: 1, flex: 1 }}
				placeholder="Distance"
			/>
			<Divider
				sx={{ height: 28, m: 0.5 }}
				orientation="vertical"
			/>
			<Select
				sx={{ width: 100 }}
				onChange={handleChange}
			>
				<MenuItem value={'km'}>km</MenuItem>
				<MenuItem value={'miles'}>miles</MenuItem>
			</Select>
		</Paper>
	);
}
