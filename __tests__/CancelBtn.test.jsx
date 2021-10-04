import { render } from '@testing-library/react'
import CancelBtn from '../components/CancelBtn'

it('renders cancel button', () => {
  const cancelBtn = render(<CancelBtn />)

  expect(cancelBtn.container).toMatchInlineSnapshot(`
    <div>
      <button
        class="bg-gray-400 hover:bg-gray-600 text-black font-bold py-2 px-4 rounded"
        type="button"
      >
        <a
          href="/"
        >
          Cancel
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
                d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
              />
            </svg>
          </span>
        </a>
      </button>
    </div>
  `)
})
