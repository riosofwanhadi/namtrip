import useAppRoute from "./routes";

function App() {
	const { Routes } = useAppRoute();

	return <Routes />;
}

export default App;
