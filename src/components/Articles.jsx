import React from "react";
import articles from "../utils/articles";

export default function Articles() {
  return (
    <div className="articles">
      <div className="container">
        <div className="header">
          <h1>Latest Articles</h1>
        </div>

        <div className="article-wrapper">
          {articles.map((article) => (
            <SingleArticles key={article.alt} {...article} />
          ))}
        </div>
      </div>
    </div>
  );
}

const SingleArticles = ({ src, alt, author, content, title }) => (
  <div className="article">
    <div className="img-wrapper">
      <img src={src} alt={alt} />
    </div>
    <div className="content">
      <span>By {author} </span>

      <h2>{title} </h2>

      <p>{content} </p>
    </div>
  </div>
);
