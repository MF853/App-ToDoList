import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";

import App from "./assets/src/Containers/App";

AppRegistry.registerComponent(appName, () => App);