'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Nav() {
  const pathname = usePathname()

  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          AdoptaPerros
        </Link>
        
        <div className="flex space-x-4">
          <Link 
            href="/" 
            className="hover:text-blue-200"
          >
            Inicio
          </Link>
          <Link 
            href="/" 
            className="hover:text-blue-200"
          >
            Acerca de
          </Link>
          <Link 
            href="/" 
            className="hover:text-blue-200"
          >
            Contacto
          </Link>
          <Link 
            href="/login" 
            className="hover:text-blue-200"
          >
            Iniciar Sesion
          </Link>
          <Link 
            href="/registrar" 
            className="hover:text-blue-200"
          >
            Registrarse
          </Link>
        </div>
      </div>
    </nav>
  )
}