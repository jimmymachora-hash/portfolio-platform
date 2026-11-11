
import { Search } from "lucide-react";

function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className="search-container">
      <Search size={20} />

      <input
        type="text"
        placeholder="Search projects by name, category or technology..."
        value={searchTerm}
        onChange={(event) => onSearchChange(event.target.value)}
      />
    </div>
  );
}

export default SearchBar;
