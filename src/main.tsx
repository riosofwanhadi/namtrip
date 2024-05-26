import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import { MantineProvider } from "@mantine/core";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import TranslateComponent from "./components/TranslateComponent/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<BrowserRouter>
			<RecoilRoot>
				<TranslateComponent>
					<MantineProvider>
						<App />
					</MantineProvider>
				</TranslateComponent>
			</RecoilRoot>
		</BrowserRouter>
	</React.StrictMode>
);
