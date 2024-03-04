// impt
import PropTypes from 'prop-types'
import Button_T from './Button_T'
// rafce
const Header_T = ({ title, onAdd, showAdd }) => {
    return (
        <header className='header'>
            {/* <h1 style={headingStyle}>{title}</h1> */}
            <h1>{title}</h1>
            <Button_T
            color={showAdd ? 'red' : 'green'}
            text={showAdd ? 'Close' : 'Add'}
            onClick={onAdd} />
        </header>
    )
}

Header_T.defaultProps = {
    title: 'Task Tracker',
}

Header_T.propTypes = {
    title: PropTypes.string.isRequired,
}

// CSS in JS
/* const headingStyle = {
    color: 'red',
    backgroundColor: 'black'
} */

export default Header_T