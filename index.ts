// import { EventsSDK } from "github.com/octarine-public/wrapper/index"
import { EventsSDK, RendererSDK } from "../octarine-public/wrapper/Imports";

EventsSDK.on("GameStarted", () => {
    console.log("Hello world!");
});

EventsSDK.on("Draw", () => {
    RendererSDK.Text("Hello world!");
});
