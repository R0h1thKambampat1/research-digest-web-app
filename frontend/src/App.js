import React, { useState } from "react";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");

  const handleSearch = async e => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/scrape", {
      method: "POST",
      body: new URLSearchParams({
        query: query
      })
    });

    const blob = await response.blob();
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = query + ".docx";
    link.click();
  };

  return (
    <div className="app-container">
      <div className="form-container">
        <header>
          <h1>ResearchDigest</h1>
        </header>
        <section>
          <p className="description">
            ResearchDigest is a tool designed to assist researchers by aggregating articles based on personal interests. The idea came from the need for an efficient way to gather relevant research in one place, with full abstracts available for quick evaluation. By providing links to the full articles, users can easily decide whether to explore further. The tool currently collects up to 100 results, which I believe is more than enough abstracts to sift through. To use it, simply input your research terms separated by spaces. Leveraging{" "}
            <a href="https://arxiv.org/" target="_blank" rel="noopener noreferrer">
              arXiv
            </a>
            's API made this solution feasible.{" "}
          </p>
          <p className="description">This project is not meant to replicate or claim others' research as my own, but rather to serve as a personal tool for curating articles of interest, enabling me to quickly assess whether I want to delve deeper. The goal is purely to improve my own efficiency in research.</p>
          <p className="description">At the moment, the tool gathers articles from arXiv, but I plan to expand it to other research sites that allow scraping to enhance the research process. If you have suggestions or ideas for additional features that could make this tool more useful, feel free to reach out to me via LinkedIn, which you’ll find in the footer. Until then, happy researching!</p>
        </section>
        <form onSubmit={handleSearch}>
          <input type="text" value={query} onChange={e => setQuery(e.target.value)} placeholder="Enter query" />
          <button type="submit">Search</button>
        </form>
        <footer className="footer">
          <p>
            Find me on{" "}
            <a href="https://www.linkedin.com/in/rohith-kambampati-787431149/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>{" "}
            or{" "}
            <a href="https://github.com/R0h1thKambampat1" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
