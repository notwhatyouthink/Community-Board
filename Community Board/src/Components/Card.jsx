
const Card = (props) => {
  return (
    <div className={'card ' + props.category.toLowerCase()}>
      <span className="category">{props.category}</span>
      <h3>{props.title}</h3>
      <p className="date">📅 {props.date} at {props.time}</p>
      <p className="location">📍 {props.location}</p>
      <p className="description">{props.description}</p>
      {props.link && (
        <a href={props.link} target="_blank" rel="noopener noreferrer" className="card-button">
          Learn More →
        </a>
      )}
    </div>
  )
}

export default Card;