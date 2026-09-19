import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

export const metadata = {
    title: "LearnHub — Learning Resource Organizer",
    description:
        "Organize tutorials, documentation, and notes with categories, tags, and a clean themed UI.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body>
                <ThemeProvider>{children}</ThemeProvider>
            </body>
        </html>
    );
}