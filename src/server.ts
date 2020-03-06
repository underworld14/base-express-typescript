import App from "./index";
import { config as dotenv } from "dotenv";

dotenv();

const port = Number(process.env.PORT || 6000);
const app = new App(port);

app.listen();
