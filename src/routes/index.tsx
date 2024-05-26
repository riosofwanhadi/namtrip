import {
	useLocation,
	useNavigate,
	useParams,
	useRoutes,
} from "react-router-dom";
import routeConfig from "./route.config";

function useAppRoute() {
	const element = useRoutes(routeConfig);
	const navigate = useNavigate();
	const params = useParams();
	const location = useLocation();

	function Routes() {
		return element;
	}

	function go(path: string, option?: { state: any }): void {
		navigate(path, option);
	}

	function back(): void {
		navigate(-1);
	}

	function replace(path: string): void {
		navigate(path, { replace: true });
	}

	return { Routes, go, back, replace, params, location };
}

export default useAppRoute;
