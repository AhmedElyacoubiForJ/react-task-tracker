import PropTypes from 'prop-types'

const Header = ({title}) => { // props as object
  return (
    <header>
      <h1>{title}</h1>        {/* props.title*/}
    </header>
  )
}

Header.defaultProps = {
  title: 'Task Traker',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

// CCS in JS
// Example <h1 style={headingStyle}>{title}</h1>
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black'
// }

export default Header
