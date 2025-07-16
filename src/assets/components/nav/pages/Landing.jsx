import { useEffect, useState } from "react";
import newsData from "../../../news.json";

export default function Landing() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    setNews(newsData);
  }, []);

  return (
    <div>
      <h2>Latest News</h2>
      {news.length === 0 && <p>No news available yet.</p>}
      {news.map(({ id, date, title, summary }) => (
        <article key={id}>
          <h3>{title}</h3>
          <small>{new Date(date).toLocaleDateString()}</small>
          <p>{summary}</p>
        </article>
      ))}
    </div>
  );
};