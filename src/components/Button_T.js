import PropTypes from 'prop-types'

const Button_T = ({ color, text, onClick }) => {
    return (
        <button
            onClick={onClick}
            style={{ backgroundColor: color }}
            className='btn'>
            {text}
        </button>
    )
}

Button_T.defaultProps = {
    color: 'steelblue',
    text: 'Add'
}
Button_T.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string,
    onClick: PropTypes.func
}
export default Button_T