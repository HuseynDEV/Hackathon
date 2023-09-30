import React, { useState } from "react";
import { BsThreeDotsVertical, BsChevronUp } from "react-icons/bs";

const ViewList = () => {
  const [data, setData] = useState([1, 2, 3]);
  return (
    <div className="view_container">
        <h1>Satışlar</h1>
    <div className="view_main">

        <div className="view-box">
          <div className="head">
            <h3>Ümumi satış</h3>
            <div>
            <BsThreeDotsVertical />
            </div>
          </div>
          <div className="body">
            <h2>296</h2>
            <div>
              <BsChevronUp />
              74%
            </div>
          </div>
          <div className="footer">
            <a href="">Hamısı</a>
          </div>
        </div>
        
        <div className="view-box">
          <div className="head">
            <h3>Gəlir</h3>
           <div>
           <BsThreeDotsVertical />
           </div>
          </div>
          <div className="body">
            <h2>120</h2>
            <div>
              <BsChevronUp />
              43%
            </div>
          </div>
          <div className="footer">
            <a href="">Hamısı</a>
          </div>
        </div>
        
        <div className="view-box">
          <div className="head">
            <h3>Trafik</h3>
            <div>
            <BsThreeDotsVertical />
            </div>
          </div>
          <div className="body">
            <h2>50</h2>
            <div>
              <BsChevronUp />
              24%
            </div>
          </div>
          <div className="footer">
            <a href="">Hamısı</a>
          </div>
        </div>

    </div>
    </div>
  );
};

export default ViewList;
