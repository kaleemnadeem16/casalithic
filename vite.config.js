import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { handleContactRequest } from "./server/contactApi.js";

function contactApi() {
  return {
    name: "casalithic-contact-api",
    configureServer(server) {
      server.middlewares.use("/api/contact", (request, response) => {
        handleContactRequest(request, response);
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), contactApi()],
});
