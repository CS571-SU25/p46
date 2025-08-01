import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import newsData from "../../../news.json";

export default function Landing() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    setNews(newsData);
  }, []);

  return (
    <div>
      <h1
        style={{
          backgroundColor: "#ffe6f0",
          borderRadius: "12px",
          padding: "10px 20px",
          display: "inline-block",
          fontWeight: "bold",
        }}
      >
        Latest News in Badger VB
      </h1>
      {news.length === 0 && <p>No news available yet.</p>}
      {news.map(({ id, date, title, author, summary }) => (
        <article key={id}>
          <h2>{title}</h2>
          <h3>By: {author}</h3>
          <small>{new Date(date).toLocaleDateString()}</small>
          <p>{summary}</p>
        </article>
      ))}
    </div>
  );
};