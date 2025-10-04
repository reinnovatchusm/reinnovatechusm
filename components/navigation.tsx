"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 transition-transform group-hover:scale-110">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-10-04%20at%2011.00.04%20AM-U0q5nIK1Ta5CsHgDfAdTV9uY1cK4P7.jpeg"
                alt="RE-INNOVA Logo"
                fill
                className="object-contain"
                style={{ mixBlendMode: "multiply" }}
              />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              RE-INNOVA
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Inicio
            </Link>
            <Link
              href="/proyecto"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Proyecto
            </Link>
            <Link
              href="/objetivos"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Objetivos
            </Link>
            <Link
              href="/beneficios"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Beneficios
            </Link>
            <Link
              href="/equipo"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Equipo
            </Link>
            <Link href="/contacto">
              <Button size="sm" className="bg-primary hover:bg-primary/90">
                Contacto
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-foreground" aria-label="Toggle menu">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-border">
            <Link
              href="/"
              className="block text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Inicio
            </Link>
            <Link
              href="/proyecto"
              className="block text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Proyecto
            </Link>
            <Link
              href="/objetivos"
              className="block text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Objetivos
            </Link>
            <Link
              href="/beneficios"
              className="block text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Beneficios
            </Link>
            <Link
              href="/equipo"
              className="block text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Equipo
            </Link>
            <Link href="/contacto" onClick={() => setIsOpen(false)}>
              <Button size="sm" className="w-full bg-primary hover:bg-primary/90">
                Contacto
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
