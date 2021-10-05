import { render } from '@testing-library/react'
import Footer from '../components/Footer'

it('renders expected layout', () => {
  jest.spyOn(Date.prototype, 'getFullYear').mockImplementation(() => '2021')

  const footer = render(<Footer />)

  expect(footer.container).toMatchInlineSnapshot(`
    <div>
      <footer
        class="jsx-1192529222 bg-black text-white text-2xl p-3 text-center font-bold fixed left-0 bottom-0 w-full"
      >
        Client Address Book Ⓒ
        2021
      </footer>
    </div>
  `)
})
