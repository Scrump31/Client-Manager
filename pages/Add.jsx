import { useState } from 'react'
import fetch from 'isomorphic-unfetch'
import { MdPersonAdd } from 'react-icons/md'
import notifyMessage from '../utils/notify-message'
import CancelBtn from '../components/CancelBtn'

const Add = () => {
  const emptyForm = {
    name: '',
    email: '',
    phone: '',
    address: '',
    company: '',
    notes: ''
  }
  const [newClient, setNewClient] = useState(emptyForm)

  const handleChange = () => {
    setNewClient(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value
    }))
  }

  const handleSubmit = async () => {
    event.preventDefault()
    const res = await fetch('http://localhost:3000/api/add-client', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newClient)
    })

    if (res.status === 200) {
      const resData = await res.json()
      const message = JSON.stringify(resData.message)
      notifyMessage(message, 'success', 'Success!')
      setNewClient(emptyForm)
    } else if (res.status === 409) {
      const resData = await res.json()
      const message = JSON.stringify(resData.message)
      notifyMessage(message, 'danger', 'Error')
    }
  }

  return (
    <>
      <main className="container mx-auto text-2xl">
        <header className="text-6xl text-green-700 font-bold mb-5">
          <MdPersonAdd />
        </header>
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="flex flex-wrap -mx-3 mb-6">
            <label
              className="block uppercase tracking-wide text-gray-700 font-bold mb-2 sm:w-full md:w-1/2 pr-5"
              htmlFor="name"
            >
              <span className="text-gray-700">
                Name <span className="text-red-600 text-xs">(required)</span>
              </span>
              <input
                type="text"
                className="form-input mt-1 block w-full"
                id="name"
                name="name"
                value={newClient.name}
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
                value={newClient.email}
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
                value={newClient.phone}
                onChange={handleChange}
                required={true}
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
                value={newClient.address}
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
                value={newClient.company}
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
                value={newClient.notes}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="flex pt-2 pb-5 justify-between">
            <CancelBtn />
            <button
              type="submit"
              className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded"
              name="add-client"
            >
              Add{' '}
              <span style={{ display: 'inline-block', height: '0.85em' }}>
                <MdPersonAdd />
              </span>
            </button>
          </div>
        </form>
      </main>
    </>
  )
}

export default Add
