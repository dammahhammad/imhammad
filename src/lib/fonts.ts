import { Doto, IBM_Plex_Mono as FontMono, } from "next/font/google";

export const fontDoto = Doto({
    weight: ["700"],
    display: "swap",
    subsets: ["latin"],
    variable: "--font-doto",
});

export const fontMono = FontMono({
    weight: ["400", "500", "600"],
    display: "swap",
    subsets: ["latin"],
    variable: "--font-mono",
});
