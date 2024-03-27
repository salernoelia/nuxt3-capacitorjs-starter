# Nuxt 3 w/ Capacitorjs Starter
For Mobile Development

## Install the Capacitor CLI locally

npm install -D @capacitor/cli

## Initialize Capacitor in your Nuxt project

npx cap init

## Install the required packages

npm install @capacitor/core @capacitor/ios @capacitor/android

## Add the native platforms

npx cap add ios
npx cap add android

## Run the app

npm run generate
npx cap sync

---

## Hot reload

Add the following:

```
// capacitor.config.ts
import { CapacitorConfig } from "@capacitor/cli";
const config: CapacitorConfig = {
  appId: "com.example.app",
  appName: "my-app",
  webDir: "dist",
  bundledWebRuntime: false,
  server: { url: "http://your.ip:3000/", cleartext: true },
};
export default config;
```

```
npm run generate
```

```
npx cap copy
```

and then use

```
npm run dev -- --host
```
