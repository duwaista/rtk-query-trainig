import ReactDom from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";

import store from "./store";
import App from './App';

const container = document.getElementById('root');
const root = ReactDom.createRoot(container as HTMLElement);

root.render(
	<BrowserRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</BrowserRouter>
);
