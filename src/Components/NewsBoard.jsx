import { useEffect, useState } from "react"
import NewsItem from "./NewsItem";

export const NewsBoard = ({category}) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
  fetch(`/api/proxy?category=${category}`)
    .then(response => response.json())
    .then(data => setArticles(data.articles || []));
  }, [category]);

  return (
    <div>
      <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
    <div className="d-flex flex-wrap justify-content-center">
     
     {articles.map((news, index)=>{
      return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
     })}
    </div>
    </div>
  )
}

export default NewsBoard