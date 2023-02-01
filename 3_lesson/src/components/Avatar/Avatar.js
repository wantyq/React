import "./Avatar.css"

const Avatar = ({ backgroundColor, color, children}) => {
    return (
        <div className="avatar" style={{backgroundColor, color}}>{children}</div>
    )
}

export default Avatar;