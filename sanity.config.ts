import { defineConfig, isDev } from "sanity";
import { structureTool } from "sanity/structure";
import schemas from "./sanity/schemas";
import { visionTool } from "@sanity/vision";

const config = defineConfig({
  name: 'default',
  title: 'Diven Khatri Portfolio',
  projectId: '1iu7ky3e',
  dataset: 'production',
  basePath: "/admin",
  plugins: [structureTool(), visionTool()],
  schema: { types: schemas },
});

export default config;
