import { Routes, Route, Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import { publicRoutes } from "./Routes";
import { DefaultLayout } from "./Components/Layouts";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				{publicRoutes.map((route, index) => {
					const Layout = route.layout ?? DefaultLayout;
					return (
						<Route
							key={index}
							path={route.path}
							element={
								<Layout>
									<route.component></route.component>
								</Layout>
							}
						></Route>
					);
				})}
			</Routes>
		</BrowserRouter>
	);
}

export default App;
