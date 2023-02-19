import { resolve } from "path";
import { defineConfig } from "vitest/config";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "typelaunch-starter",
      fileName: "typelaunch-starter",
    },
  },
  test: {
    includeSource: ["src/**/*.{js,ts}"],
    coverage: { reporter: ["html-spa", "text"] },
  },
  define: {
    "import.meta.vitest": "undefined",
  },
  plugins: [dts()],
});
