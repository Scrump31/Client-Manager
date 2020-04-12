import PropTypes from 'prop-types'
import Link from 'next/link'
import { FaRegEdit } from 'react-icons/fa'

const Client = ({ id, name, email, phone, address, company, notes }) => {
  return (
    <>
      <tr>
        <td className="border px-4 py-2">{name}</td>
        <td className="border px-4 py-2">{email}</td>
        <td className="border px-4 py-2">{phone}</td>
        <td className="border px-4 py-2">{address}</td>
        <td className="border px-4 py-2">{company}</td>
        <td className="border px-4 py-2">
          {notes ? `${notes.slice(0, 15)}...` : ''}
        </td>
        <td className="border px-4 py-2">
          <button
            aria-label={`edit ${name}`}
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
          >
            <Link href="/edit/[id]" as={`/edit/${id}`}>
              <a>
                <FaRegEdit />
              </a>
            </Link>
          </button>
        </td>
      </tr>
    </>
  )
}

Client.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.number,
  address: PropTypes.string,
  company: PropTypes.string,
  notes: PropTypes.string
}.isRequired

export default Client
