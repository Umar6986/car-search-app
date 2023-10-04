import { useState } from "react";
const Header = () => {
  const [search, setSearch] = useState("");
  return (
    <header>
      <div className="input">
        <input
          type="text"
          placeholder="   Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </header>
  );
};

export default Header;
