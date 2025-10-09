import './CardSlider.scss'

const CardSlider = (props) => {
  const {
    icon,
    title,
    description,
  } = props
  return (
    <div className="card">
      <div className="card__icon">{icon}</div>
      <h2 className="h3">{title}</h2>
      <p>{description}</p>
    </div>
  )
}

export default CardSlider