import "./globals.css";

export const metadata = {
  title: {
    default: "Lumina Optical — Designer Eyewear & Digital Eye Exams",
    template: "%s · Lumina Optical",
  },
  description:
    "Independent optical boutique and precision eye clinic: 20-minute digital exams, handcrafted titanium and acetate frames, and same-day in-house lenses.",
};

export const viewport = {
  themeColor: "#f8faf9",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light" suppressHydrationWarning>
      <head>
        <meta name="color-scheme" content="light dark" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('theme');
                  if (stored === 'dark') {
                    document.documentElement.classList.add('dark');
                    document.documentElement.classList.remove('light');
                  } else {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.classList.add('light');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..700;1,9..144,300..700&family=Manrope:wght@300;400;500;600;700&family=Outfit:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[#f8faf9] text-[#0e1411] dark:bg-[#090b0a] dark:text-[#f4f6f5] selection:bg-emerald-500 selection:text-white dark:selection:text-[#090b0a] antialiased transition-colors duration-250">
        {children}
      </body>
    </html>
  );
}
