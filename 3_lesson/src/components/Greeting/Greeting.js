const Greeting = ({isLoggedIn}) => {
    return <p>{isLoggedIn ? 'Welcome back' : 'You need to log in first'}</p>
}

export default Greeting;