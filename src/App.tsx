import React from 'react';
import { SnackbarProvider } from 'notistack';
import { BrowserRouter as Router } from 'react-router-dom';
import { Container, GlobalStyles } from './styles';
import { PayoutContextProvider } from './context';
import AppRoutes from './router';

const App = () => (
	<Router>
		<SnackbarProvider>
			<PayoutContextProvider>
				<GlobalStyles />
				<Container>
					<AppRoutes />
				</Container>
			</PayoutContextProvider>
		</SnackbarProvider>
	</Router>
);

export default App;
