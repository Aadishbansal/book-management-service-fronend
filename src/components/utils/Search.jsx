import { useState, useEffect } from "react";
const Search = (props) => {
  const [filter, setFilter] = useState("");
  const handleSearch = (e) => {
    setFilter(e.target.value);
  };
  useEffect(() => {
    props.onFilter(filter);
  }, [filter, props]);
  return (
    <div className="d-flex my-3 col-10 col-lg-8 mx-auto" role="search">
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search"
        value={filter}
        onChange={handleSearch}
        aria-label="Search"
      />
    </div>
  );
};
export default Search;
