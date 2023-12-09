import Home from "../Pages/Home";
import Following from "../Pages/Following";
import Profile from "../Pages/Profile";
import Upload from "../Pages/Upload";
import Search from "../Pages/Search";
import { HeaderOnlyLayout } from "../Components/Layouts";
import { Fragment } from "react";
export const publicRoutes = [
	{
		path: "/",
		component: Home,
	},
	{
		path: "/following",
		component: Following,
	},
	{
		path: "/profile",
		component: Profile,
	},
	{
		path: "/upload",
		component: Upload,
		layout: HeaderOnlyLayout,
	},
	{
		path: "/search",
		component: Search,
		layout: Fragment,
	},
];

export const privateRoutes = [];
