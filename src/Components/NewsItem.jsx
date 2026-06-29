export const NewsItem = ({title, description, src, url}) => {
  return (
    <div className="shadow card bg-body-tertiary text-dark my-2 mx-2 mb-2 px-2 py-2" style={{maxWidth: "345px"}}>
    <img src={src} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{description}</p>
      <a href={url} className="btn btn-primary">Read more</a>
    </div>
    </div>
  )
}

export default NewsItem