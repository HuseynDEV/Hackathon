import React from "react";
import { BsFillCalendarCheckFill, BsChevronDown } from "react-icons/bs";

const Pipeline = () => {
  const data = [1, 2, 3, 4, 5, 6];
  return (
    <div className="sales_pipline">
      <div className="sales_header">
        <h1>Satış həcmi</h1>
        <div className="logo">
         <div className="calendar">
         <BsFillCalendarCheckFill />
         </div>
          <p>Bu ay</p>
          {/* <BsChevronDown /> */}
        </div>
      </div>
     <div className="sales_container">
     
            <div className="scale_container">
                <div className="scale">
                    
                </div>
                <div className="month">
Yanvar-Fevral
                </div>
            </div>
            <div className="scale_container">
                <div className="scale">
                    
                </div>
                <div className="month">
Mart-Aprel
                </div>
            </div>
            <div className="scale_container">
                <div className="scale">
                    
                </div>
                <div className="month">
May-Iyun
                </div>
            </div>
            <div className="scale_container">
                <div className="scale">
                    
                </div>
                <div className="month">
Iyul-Avqust
                </div>
            </div>
            <div className="scale_container">
                <div className="scale">
                    
                </div>
                <div className="month">
Sentyabr-Oktyabr
                </div>
            </div>
            <div className="scale_container">
                <div className="scale">
                    
                </div>
                <div className="month">
                Noyabr-Dekabr
                </div>
            </div>
   
     </div>
    </div>
  );
};

export default Pipeline;
