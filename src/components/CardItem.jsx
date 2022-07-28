function CardItem({ title, image, price }) {
  return (
    <div className="card-item">
      <h3>{ title }</h3>
      <img src={ image } alt="" />
      <p>R$ { `${price}` }</p>
    </div>
  )
}

export default CardItem;
