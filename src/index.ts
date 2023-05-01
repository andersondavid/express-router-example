import App from "./app";
const PORT = 3000
const initApp = {
	port: PORT,
}

const app = new App(initApp)
app.listen();