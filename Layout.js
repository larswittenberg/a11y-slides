import React from "react";
import { Container } from 'theme-ui';

const Layout = ({ children }) => {
	return (
		<>
			<Container>{children}</Container>
		</>
	);
};

export default Layout;
