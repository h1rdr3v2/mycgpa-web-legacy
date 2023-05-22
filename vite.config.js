import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { VitePWA } from "vite-plugin-pwa"

export default defineConfig({
	plugins: [
		react(),
		VitePWA({
			injectRegister: "auto",
			workbox: {
				globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
			},
			manifest: {
				name: "MyCgpa By Bleon",
				short_name: "MyCgpa",
				theme_color: "#001A64",
				background_color: "#001A64",
				icons: [
					{
						src: "./icon.png",
						sizes: "300x300",
						type: "image/png",
					},
				],
			},
		}),
	],
})
