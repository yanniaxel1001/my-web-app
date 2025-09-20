import './globals.css';
import Nav from '@/components/Nav'
export const metadata = {
  title: 'Proyecto seguridad informatica',
  description: 'Aplicacion con inicio sesion y registro de usuarios',
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {/* Layout UI */}
        {/* Place children where you want to render a page or nested layout */}
        <main>{children}</main>
      </body>
    </html>
  )
}