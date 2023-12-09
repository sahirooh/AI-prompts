import Nav from "@/components/Nav";
import "./globals.css";
import Provider from "@/components/Provider";

export const metadata = {
  title: "AI Prompt",
  description: "Discover and share AI generated prompts.",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
