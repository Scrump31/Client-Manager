import Link from 'next/link'
import { MdCancel } from 'react-icons/md'

const CancelBtn = () => (
  <button
    type="button"
    className="bg-gray-400 hover:bg-gray-600 text-black font-bold py-2 px-4 rounded"
  >
    <Link href="/">
      <a>
        Cancel
        <span className="inline-block" style={{ height: '0.85em' }}>
          <MdCancel />
        </span>
      </a>
    </Link>
  </button>
)

export default CancelBtn
