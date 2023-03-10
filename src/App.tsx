import React from 'react';
import { Container, Typography } from '@mui/material';
import { IO } from './components/IO';

function App () {
	return (
		<>
			<Container sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', alignItems: 'center'}}>
				<Typography variant='h3' sx={{ marginTop: 1, marginBottom: 0, color: 'rgb(244, 137, 72)'}}>HIGHFLEET FUEL CALCULATOR</Typography>
				<div style={{ justifyContent: 'center', alignItems: 'center', flex: '1 0 0%', display: 'flex' }}>
					<IO/>
				</div>
			</Container>
		</>
	);
}

export default App;
