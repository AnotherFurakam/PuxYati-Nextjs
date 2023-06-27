"use client"
import { IUserFull } from '@/interfaces/user.interface';
import axios from 'axios';
import { useState, type FC, useEffect } from 'react';
import { format } from "date-fns";

interface pageProps { }

const AdminUserPage: FC<pageProps> = ({ }) => {

  const [users, setUsers] = useState<IUserFull[] | null>(null)


  useEffect(() => {
    axios.get('/api/user')
      .then(({ data }) => setUsers(data))
  }, [])

  return (
    <main className='container py-5'>
      <h1 className='display-5'>Listado de usuarios</h1>
      <div className='table-responsive'>
        <table className='table mt-5 table-bordered text-center table-light table-hover'>
          <thead className='table-dark'>
            <tr >
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Email</th>
              <th>Plan</th>
              <th>Inicio</th>
              <th>Fin</th>
            </tr>
          </thead>
          <tbody>
            {
              users && users.map(user => {
                const dateFormat =  'dd/MM/yyyy - hh:mm:ss a'
                const startDate = user.userPlan[0]?.start_date
                const expiredDate = user.userPlan[0]?.expired_date
                const start = startDate ? format(new Date(startDate), dateFormat) : '-'
                const expired = startDate ? format(new Date(expiredDate), dateFormat) : '-'
                return (
                  <tr key={user.id} style={{cursor: 'default'}}>
                    <td>{user.name}</td>
                    <td>{user.lastname}</td>
                    <td>{user.email}</td>
                    <td>{user.userPlan[0]?.plan.name || 'Vencido'}</td>
                    <td>{start}</td>
                    <td>{expired}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </main>
  );
}
export default AdminUserPage;