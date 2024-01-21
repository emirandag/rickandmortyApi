import './Search.css'
import { FaMagnifyingGlass } from "react-icons/fa6";

const Search = ({ onChange }) => {
  return (
    <div className="search">
    <span className="search-lupa">
      <FaMagnifyingGlass />
    </span>
    <input
      className="search-input"
      placeholder="Search character"
      onChange={onChange}
    />
  </div>
  )
}

export default Search