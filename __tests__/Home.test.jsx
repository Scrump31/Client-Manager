import { render, screen } from '@testing-library/react'
import Home, { getServerSideProps } from '../pages/index'

describe('Home Page', () => {
  it('renders a list of client data', async () => {
    const data = await (await getServerSideProps()).props.clients
    const home = render(<Home clients={data} />)

    expect(home.container).toMatchInlineSnapshot(`
    <div>
      <table
        class="table-auto mx-auto sm:text-xs lg:text-lg "
      >
        <thead>
          <tr>
            <th
              class="px-4 py-2"
            >
              Name
            </th>
            <th
              class="px-4 py-2"
            >
              Email
            </th>
            <th
              class="px-4 py-2"
            >
              Phone
            </th>
            <th
              class="px-4 py-2"
            >
              Address
            </th>
            <th
              class="px-4 py-2"
            >
              Company
            </th>
            <th
              class="px-4 py-2"
            >
              Notes
            </th>
            <th
              class="px-4 py-2"
            >
              Edit
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td
              class="border px-4 py-2"
            >
              John Doe
            </td>
            <td
              class="border px-4 py-2"
            >
              j.doe@mail.com
            </td>
            <td
              class="border px-4 py-2"
            >
              1234567890
            </td>
            <td
              class="border px-4 py-2"
            >
              123 JS Street
            </td>
            <td
              class="border px-4 py-2"
            >
              Programmers R Us
            </td>
            <td
              class="border px-4 py-2"
            >
              I love RTL...
            </td>
            <td
              class="border px-4 py-2"
            >
              <button
                class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
                name="edit John Doe"
              >
                <a
                  href="/edit/1"
                >
                  <svg
                    fill="currentColor"
                    height="1em"
                    stroke="currentColor"
                    stroke-width="0"
                    viewBox="0 0 576 512"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"
                    />
                  </svg>
                </a>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div
        class="text-center p-5"
      >
        <button
          class="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded text-2xl"
        >
          <a>
            Add
             
            <span
              class="inline-block"
              style="height: 0.85em;"
            >
              <svg
                fill="currentColor"
                height="1em"
                stroke="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                />
              </svg>
            </span>
          </a>
        </button>
      </div>
    </div>
  `)
  })

  it('renders message when no current clients', async () => {
    render(<Home clients={[]} />)

    expect(screen.getByText(/no current clients/i)).toBeInTheDocument()
  })
})
