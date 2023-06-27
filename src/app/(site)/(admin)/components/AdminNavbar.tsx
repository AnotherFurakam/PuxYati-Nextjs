"use client"
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { FC } from 'react';

interface AdminNavbarProps { }

const AdminNavbar: FC<AdminNavbarProps> = ({ }) => {

  const pathname = usePathname()
  const { status } = useSession()

  return (
    <header className='bg-dark'>
      <nav className='container navbar navbar-dark'>
        <h1 className='text-white'>PukYati Admin</h1>
        <ul className='navbar-nav flex-row gap-3'>
          {
            status === 'authenticated' ?
              <>
                <li className='nav-item'><Link href="/admin/user" className={`nav-link ${pathname === '/admin/user' && 'active'}`}>User</Link></li>
                <li className='nav-item'><Link href="/admin/plan" className={`nav-link ${pathname === '/admin/plan' && 'active'}`}>Plan</Link></li>
                <li className='nav-item'><button className='btn btn-danger' onClick={() => signOut()}>Cerrar Sesión</button></li>
              </>
              : null
          }
        </ul>
      </nav>
    </header>
  );
}
export default AdminNavbar;