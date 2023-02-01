import "./Card.css"

const Card = ({ imageUrl, title, subtitle }) => {
    return (
        <div className="card">
            <img src={imageUrl} />
            <h3>{title}</h3>
            <p>{subtitle}</p>
        </div>
    )
}

export default Card;