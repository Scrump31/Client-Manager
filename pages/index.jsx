import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import PropTypes from 'prop-types'
import { MdPersonAdd } from 'react-icons/md'
import ClientList from '../components/ClientList'

const Home = ({ clients }) => (
  <>
    <table className="table-auto mx-auto sm:text-xs lg:text-lg ">
      <thead>
        <tr>
          <th className="px-4 py-2">Name</th>
          <th className="px-4 py-2">Email</th>
          <th className="px-4 py-2">Phone</th>
          <th className="px-4 py-2">Address</th>
          <th className="px-4 py-2">Company</th>
          <th className="px-4 py-2">Notes</th>
          <th className="px-4 py-2">Edit</th>
        </tr>
      </thead>
      <tbody>
        <ClientList clients={clients} />
      </tbody>
    </table>
    <div className="text-center p-5">
      <Link href="/add">
        <button className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded text-2xl">
          <a>
            Add{' '}
            <span className="inline-block" style={{ height: '0.85em' }}>
              <MdPersonAdd />
            </span>
          </a>
        </button>
      </Link>
    </div>
  </>
)

Home.getInitialProps = async function () {
  const res = await fetch('http://localhost:3000/api/clients')
  const data = await res.json()

  return {
    clients: data.users
  }
}

Home.propTypes = {
  clients: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      email: PropTypes.string,
      phone: PropTypes.number,
      address: PropTypes.string,
      company: PropTypes.string,
      notes: PropTypes.string
    })
  )
}

export default Home
