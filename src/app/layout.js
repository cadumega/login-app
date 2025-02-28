export const metadata = {
    title: 'Login Application',
    description: 'A simple login application created with Next.js',
  }
  
  export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body>
          <main>{children}</main>
        </body>
      </html>
    )
  }