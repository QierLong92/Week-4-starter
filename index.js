import { registerRootComponent } from "expo";

import App from "./App";

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures Expo Go and native builds use the same environment.
// the environment is set up appropriately
registerRootComponent(App);
