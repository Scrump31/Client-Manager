import PropTypes from 'prop-types'
import Client from './Client'

const ClientList = ({ clients }) => {
  const list = clients.map(client => <Client key={client.id} {...client} />)
  return <>{list}</>
}

ClientList.propTypes = {
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

export default ClientList
