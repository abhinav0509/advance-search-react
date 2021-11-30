import React, { useState } from "react";

const Search = ({ BookData }) => {
  const [data, setData] = useState(BookData);

  const [searchKey, setSearchKey] = useState("");
  const [searchResult, setSearchResult] = useState(false);
  const handleChange = (e) => {
    const key = e.currentTarget.value;
    setSearchResult(true);
    setSearchKey(key);

    const filteredData = data.filter((book) =>
      book.title.toLowerCase().includes(key.toLowerCase())
    );
    if (key === "") {
      setSearchResult(false);
      setData(BookData);
    } else {
      setData(filteredData);
    }
  };
  //console.log(data);
  return (
    <div className="container">
      <div className="d-flex justify-content-center align-items-center mb-2">
        {
          /* <input
          type="text"
          value={searchKey}
          onChange={handleChange}
          style={{ width: "170px", height: "30px", fontSize: "18px" }}
        /> */
          <div className="input-group input-group-lg col-md-8">
            <span className="input-group-text">Search Books</span>
            <input
              className="form-control"
              aria-label="With textarea"
              value={searchKey}
              onChange={handleChange}
            ></input>
          </div>
        }
      </div>
      <div className="d-flex flex-row flex-wrap justify-content-center">
        {data.map((book) => {
          return (
            <div
              key={book.title + Math.random(1, 1000)}
              className="card m-2"
              style={{ width: "19rem" }}
            >
              <img src={book.imageLink} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{book.title}</h5>
                <h6 className="card-text text-muted">Author: {book.author}</h6>
                <p className="text-muted">Pages:{book.pages}</p>
                <h6 className="text-muted">Language:{book.language}</h6>
                <a href={book.link} target="_blank" className="btn btn-primary">
                  Know More
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Search;
