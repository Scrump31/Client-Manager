import fetch from 'isomorphic-unfetch'
import Router from 'next/router'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { FaRegEdit } from 'react-icons/fa'
import { MdDeleteForever, MdUpdate } from 'react-icons/md'
import CancelBtn from '../../components/CancelBtn'
import notifyMessage from '../../utils/notify-message'

const Edit = ({ data }) => {
  const [client, setClient] = useState()

  useEffect(() => {
    setClient(data)
  }, [])

  const handleChange = e => {
    setClient(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const res = await fetch('http://localhost:3000/api/update-client', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(client)
    })

    if (res.status === 201) {
      const resData = await res.json()
      const message = JSON.stringify(resData.message)
      notifyMessage(message, 'success', 'Success!')
      Router.push('/')
    }
  }

  const handleDelete = async e => {
    e.preventDefault()
    const res = await fetch('http://localhost:3000/api/delete-client', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: client.id, name: client.name })
    })

    if (res.status === 200) {
      const resData = await res.json()
      const message = JSON.stringify(resData.message)
      notifyMessage(message, 'success', 'Success!')

      Router.push('/')
    }
  }

  return (
    <>
      {client && (
        <main className="container mx-auto text-2xl">
          <div className="text-4xl text-green-700 font-bold mb-5">
            <span className="inline-block" style={{ height: '0.85em' }}>
              <FaRegEdit />
            </span>{' '}
            {client.name}
          </div>
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <div className="flex flex-wrap -mx-3 mb-6">
              <label
                className="block uppercase tracking-wide text-gray-700 font-bold mb-2 sm:w-full md:w-1/2 pr-5"
                htmlFor="client-name"
              >
                <span className="text-gray-700">
                  Name <span className="text-red-600 text-xs">(required)</span>
                </span>
                <input
                  type="text"
                  className="form-input mt-1 block w-full"
                  id="name"
                  name="name"
                  value={client.name}
                  onChange={handleChange}
                  required={true}
                />
              </label>

              <label
                className="block uppercase tracking-wide text-gray-700 font-bold mb-2 sm:w-full md:w-1/2"
                htmlFor="email"
              >
                <span className="text-gray-700">
                  Email <span className="text-red-600 text-xs">(required)</span>
                </span>
                <input
                  type="email"
                  className="form-input mt-1 block w-full"
                  id="email"
                  name="email"
                  value={client.email}
                  onChange={handleChange}
                  required={true}
                />
              </label>

              <label
                className="block uppercase tracking-wide text-gray-700 font-bold mb-2 sm:w-full md:w-1/2 pr-5"
                htmlFor="phone"
              >
                <span className="text-gray-700">
                  Phone <span className="text-red-600 text-xs">(required)</span>
                </span>
                <input
                  type="phone"
                  className="form-input mt-1 block w-full"
                  id="client-phone"
                  name="phone"
                  value={client.phone}
                  onChange={handleChange}
                />
              </label>

              <label
                className="block uppercase tracking-wide text-gray-700 font-bold mb-2 sm:w-full md:w-1/2"
                htmlFor="address"
              >
                <span className="text-gray-700">Address</span>
                <input
                  type="text"
                  className="form-input mt-1 block w-full"
                  id="address"
                  name="address"
                  value={client.address}
                  onChange={handleChange}
                />
              </label>

              <label
                className="block uppercase tracking-wide text-gray-700 font-bold mb-2 sm:w-full md:w-1/2 pr-5"
                htmlFor="company"
              >
                <span className="text-gray-700">Company</span>
                <input
                  type="text"
                  className="form-input mt-1 block w-full"
                  id="company"
                  name="company"
                  value={client.company}
                  onChange={handleChange}
                />
              </label>

              <label
                className="block uppercase tracking-wide text-gray-700 font-bold mb-2 sm:w-full md:w-1/2"
                htmlFor="notes"
              >
                <span className="text-gray-700">Notes</span>
                <textarea
                  type="text"
                  className="form-textarea mt-1 block w-full"
                  id="notes"
                  name="notes"
                  value={client.notes}
                  onChange={handleChange}
                />
              </label>
            </div>

            <div className="flex flex-wrap pt-2 pb-5 justify-between">
              <button
                href="/clients"
                type="button"
                className="w-full sm:w-1/3 md:w-1/4 lg:w-1/6 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleDelete}
              >
                Delete{' '}
                <span className="inline-block" style={{ height: '0.85em' }}>
                  <MdDeleteForever />
                </span>
              </button>

              <div className="mt-5 sm:mt-0">
                <CancelBtn />

                <button
                  type="submit"
                  className="ml-5 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                  name="add-client"
                >
                  Update{' '}
                  <span className="inline-block" style={{ height: '0.85em' }}>
                    <MdUpdate />
                  </span>
                </button>
              </div>
            </div>
          </form>
        </main>
      )}
    </>
  )
}

Edit.getInitialProps = async function (context) {
  const { id } = context.query
  const res = await fetch(`http://localhost:3000/api/get-client?id=${id}`)
  const data = await res.json()

  return { data: data.user }
}

Edit.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.number,
    address: PropTypes.string,
    company: PropTypes.string,
    notes: PropTypes.string
  })
}

export default Edit
