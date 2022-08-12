import React from "react";
import Gallery from "../../components/Gallery";
import Themecard from "../../components/reusable/Themecard";
const Categories = () => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-10 p-10">
        <Themecard
          themeTitle="Lifestock in Mustang"
          themeImage="/images/bg1.jpg"
          themeDesc=" This is theme description. we include description here. dfkjdf fdfdf dsfsdsf dofosadfjsadf dsfa "
        />
        <Themecard
          themeTitle="Lifestock in Mustang"
          themeImage="/images/1.jpg"
          themeDesc=" This is theme description. we include description here. dfkjdf fdfdf dsfsdsf dofosadfjsadf dsfa "
        />
        <Themecard
          themeTitle="Lifestock in Mustang"
          themeImage="/images/2.jpg"
          themeDesc=" This is theme description. we include description here. dfkjdf fdfdf dsfsdsf dofosadfjsadf dsfa "
        />
        <Themecard
          themeTitle="Lifestock in Mustang"
          themeImage="/images/bg2.jpg"
          themeDesc=" This is theme description. we include description here. dfkjdf fdfdf dsfsdsf dofosadfjsadf dsfa "
        />
      </div>
      {/* <Gallery /> */}
    </div>
  );
};

export default Categories;
