// import { Link } from "react-router-dom";
// import Cover from "../../Shared/Cover/Cover";
// import MenuItem from "../../Shared/MenuItem/MenuItem";

import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({items}) => {
  return (
    <div>
      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-10 mt-20">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="text-center my-10">
        <button className="btn btn-outline border-0 border-b-4 mt-4 uppercase">
          Order Your Favourite Food
        </button>
      </div>
    </div>
  );
};

export default MenuCategory;
