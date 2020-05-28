import * as sapper from "@sapper/app";
import { ga } from "./utils/ga.utils";

sapper.start({
  target: document.querySelector("#sapper"),
});

if (process.env.GA_TRACKING_ID && process.env.NODE_ENV === "production")
  ga(process.env.GA_TRACKING_ID);
