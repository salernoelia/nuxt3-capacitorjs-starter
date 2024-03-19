import { CapacitorConfig } from "@capacitor/cli";
const config: CapacitorConfig = {
  appId: "com.example.app",
  appName: "my-app",
  webDir: "dist",
  bundledWebRuntime: false,
  server: { url: "http://10.128.136.220:3000/", cleartext: true },
};
export default config;
