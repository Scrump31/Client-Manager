import Link from 'next/link'
import { useRouter } from 'next/router'
import { FaAddressCard } from 'react-icons/fa'

const Header = () => (
  <header>
    <ul className="bg-black text-white p-3 flex flex-row justify-between font-bold">
      <li className="text-4xl">
        <span
          style={{ height: '1.9rem', marginRight: '0.5em' }}
          className="inline-block"
        >
          <FaAddressCard />
        </span>
        {process.env.username}&apos;s Clients{' '}
      </li>
      <nav className="flex justify-between">
        {useRouter().pathname !== '/' && (
          <li className="self-center text-2xl hover:text-gray-500">
            <Link href="/">
              <a>Clients</a>
            </Link>
          </li>
        )}
        {useRouter().pathname !== '/add-client' && (
          <li className="self-center text-2xl hover:text-gray-500 ml-5">
            <Link href="/add-client">
              <a>Add Client</a>
            </Link>
          </li>
        )}
      </nav>
    </ul>
  </header>
)

export default Header
