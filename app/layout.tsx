import "./globals.css";
import SamanthaNav from "@/components/navigation/SamanthaNav";

export const metadata = {
  title: "Samantha — Software Engineering Portfolio",
  description: "Samantha's software engineering portfolio.",
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="en"><body><SamanthaNav/>{children}</body></html>;
}
