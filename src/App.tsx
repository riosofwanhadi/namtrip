import useAppRoute from "./routes";

function App() {
	const { Routes, replace } = useAppRoute();

	return <Routes />;
}

export default App;
