import { useState } from "react";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

const Sidebar = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="border-r border-slate-500 p-4 flex flex-col">
      <SearchInput search={search} setSearch={setSearch} />
      <div className="divider px-3"></div>
      <Conversations search={search} />
      <LogoutButton />
    </div>
  );
};
export default Sidebar;
