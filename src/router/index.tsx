import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { ROUTES } from './routes';

const AppRoutes: React.FC = () => (
	<Routes>
		{ROUTES.map(item => (
			<Route key={item.id} {...item} />
		))}
	</Routes>
);

export default AppRoutes;
