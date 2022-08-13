import { React, useState } from "react";
import { Pagination, ButtonGroup, Button } from "@mui/material";

import Gallery from "../../components/Gallery";
import Themecard from "../../components/reusable/Themecard";
const Categories = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="flex items-center justify-center gap-16 mt-5">
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
        >
          <Button onClick={() => setIsOpen(false)}>Photos</Button>
          <Button onClick={() => setIsOpen(true)}>Videos</Button>
        </ButtonGroup>
      </div>
      {!isOpen ? (
        <div className="grid grid-cols-3 gap-10 p-10">
          <Themecard
            themeTitle="Lifestock in Mustang"
            themeImage="/images/bg1.jpg"
            themeDesc=" This is theme description. we include description here. dfkjdf fdfdf dsfsdsf dofosadfjsadf dsfa "
          />
          <Themecard
            themeTitle="Faith"
            themeImage="/images/1.jpg"
            themeDesc=" This is theme description. we include description here. dfkjdf fdfdf dsfsdsf dofosadfjsadf dsfa "
          />
          <Themecard
            themeTitle="Life in Gandaki"
            themeImage="/images/2.jpg"
            themeDesc=" This is theme description. we include description here. dfkjdf fdfdf dsfsdsf dofosadfjsadf dsfa "
          />
          <Themecard
            themeTitle="Subject in Nature "
            themeImage="/images/bg2.jpg"
            themeDesc=" This is theme description. we include description here. dfkjdf fdfdf dsfsdsf dofosadfjsadf dsfa "
          />
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-10 p-10">
          <Themecard
            themeTitle="Unexplored places on Nuwakot"
            themeImage="/images/5.jpg"
            themeDesc=" This is theme description. we include description here. dfkjdf fdfdf dsfsdsf dofosadfjsadf dsfa "
          />
          <Themecard
            themeTitle="Chitwan Minivlog"
            themeImage="/images/6.jpg"
            themeDesc=" This is theme description. we include description here. dfkjdf fdfdf dsfsdsf dofosadfjsadf dsfa "
          />
        </div>
      )}
      {}
      <div className="flex items-center justify-center py-10">
        <Pagination count={10} />
      </div>
      {/* <Gallery /> */}
    </div>
  );
};

export default Categories;
