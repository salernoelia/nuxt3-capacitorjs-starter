import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.example.app",
  appName: "my-app",
  webDir: "dist",
  server: {
    cleartext: true,
  },
};

export default config;
