// import React from 'react' // don't needed any more
// impt to import prop types
import PropTypes from 'prop-types'
import Button from './Button'

// rafce snippets
const Header = ({ title }) => { // props destructed to component property

  const onClick = () => {
    console.log('Click')
  }

  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button
        color='green'
        text='Add'
        onClick={onClick}
      />
    </header>
  )
}

// is a default, if we enbedded a Header
// in App without giving a title as prop or property & value
Header.defaultProps = {
  title: 'Task Traker',
}

// we will not have error if we don't give a proo title
// because that we have a default value.
// but if we gine a number as value an error will be generated.
// cause the type of title type is a string.
Header.propTypes = {
  title: PropTypes.string.isRequired,
}


// styling approaches
// first appoach
// <h1 style={{color: 'red', backgroundColor: 'black'}}>{title}</h1>

// OR

// second appoach
// CCS in JS
// Example <h1 style={headingStyle}>{title}</h1>
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black'
// }

// best one approach if
// we want to kepp it dynamic s. line 15

export default Header
