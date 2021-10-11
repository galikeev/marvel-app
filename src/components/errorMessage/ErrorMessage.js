import img from './error.gif';

const ErrorMessage = () => {
    const classNames = {
        display: 'block', 
        width: '250px', 
        height: '250px', 
        objectFit: 'contain', 
        margin: '0 auto'
    }
    return (
        <img style={classNames} src={img} alt="error"/>
    )
}

export default ErrorMessage;