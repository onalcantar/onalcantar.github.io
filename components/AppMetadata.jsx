const author = "Noé Alcantar";
const description =
	"My descriptionn here";
const url = "https://onalcantar.github.io/";
export const AppMetadata = {
	metadataBase: new URL("https://onalcantar.github.io/"),
	title: {
		default: `Portfolio | ${author}`,
		template: `%s | ${author}`
	},
	description: description,
	icons: {
		icon: "/favicon.png"
	},
	keywords: [
		"Noé Alcantar",
		"Noé Alcantar - Software developer",
		"Fullstack developer",
		"Portfolio website",
		"Frontend Developer Portfolio"
	],
	creator: author,
	authors: [{ name: author, url: url }],
	colorScheme: "dark",
	openGraph: {
		title: `${author} | Portfolio`,
		description: description,
		url: url,
		siteName: `${author} | Portfolio`,
		images: [
			{
				url: "https://onalcantar.github.io/screenshot.webp",
				width: 800,
				height: 600,
				alt: "My personal portfolio website"
			},
			{
				url: "https://onalcantar.github.io/screenshot.webp",
				width: 1800,
				height: 1600,
				alt: "My personal portfolio website"
			}
		],
		locale: "en-CA",
		type: "website"
	}
};
