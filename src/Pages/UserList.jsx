import React from 'react'
import { Layout } from '../Components/Layouts/Layout'

export const UserList = () => {
  return <Layout title='Usuarios'>
    <div className="flex justify-center">
      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Column 1</th>
            <th className="px-4 py-2">Column 2</th>
            <th className="px-4 py-2">Column 3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">Data 1</td>
            <td className="border px-4 py-2">Data 2</td>
            <td className="border px-4 py-2">Data 3</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Data 4</td>
            <td className="border px-4 py-2">Data 5</td>
            <td className="border px-4 py-2">Data 6</td>
          </tr>
        </tbody>
      </table>
    </div>
  </Layout>
}
