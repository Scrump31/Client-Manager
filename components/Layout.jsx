import PropTypes from 'prop-types'
import Header from './Header'
import Footer from './Footer'

const Layout = props => (
  <>
    <Header />
    <div className="py-10">{props.children}</div>
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node
}

export default Layout
