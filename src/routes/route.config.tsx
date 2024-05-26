import { Homepage } from "../features/Desktop";
import { MainLayout } from "../layout";

const routeConfig = [
	{
		element: <MainLayout />,
		children: [
			{
				path: "/",
				element: <Homepage />,
			},
		],
	},
];

export default routeConfig;
