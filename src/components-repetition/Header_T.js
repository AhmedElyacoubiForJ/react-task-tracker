// impt
import PropTypes from 'prop-types'
import Button_T from './Button_T'
// rafce
const Header_T = ({ title }) => {
    const onClick = () => {
        console.log('Click');
    }
    return (
        <header className='header'>
            {/* <h1 style={headingStyle}>{title}</h1> */}
            <h1>{title}</h1>
            <Button_T
            color='green'
            text='Add'
            onClick={onClick} />
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