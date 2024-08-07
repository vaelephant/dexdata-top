import Link from 'next/link'

import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'

export function Footer() {
  return (
    <footer className="bg-slate-50">
  <Container>
    <div className="py-16 flex justify-center">
      <Logo className="h-10 w-auto" />
    </div>
    <div className="flex flex-col items-center justify-center border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-between">
    <p className="text-sm text-slate-500 text-center">
        Copyright &copy; {new Date().getFullYear()} DexData. All rights reserved.
      </p>
    </div>
  </Container>
</footer>
  )
}
