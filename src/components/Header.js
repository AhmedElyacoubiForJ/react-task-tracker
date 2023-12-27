import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => { // props as object
  
  const onClick = () => {
    console.log('Click')
  }

  return (
    <header className='header'>
      <h1>{title}</h1>        {/* props.title*/}
      {/* reusable comp. w. diff. props value*/}
      <Button color='green' text='Add' onClick={onClick}/>
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
