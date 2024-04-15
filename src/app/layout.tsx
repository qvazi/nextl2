import Link from "next/link";
import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LootBoxes Statistics",
  description: "",
};

const links = [
  {
    label: "Items",
    to: "/items",
  },
  {
    label: "Boxes",
    to: "/boxes",
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <nav>
          <ul>
            {links.map(({ label, to }) => (
              <li key={to}>
                <Link
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  href={to}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {children}
      </body>
    </html>
  );
}
