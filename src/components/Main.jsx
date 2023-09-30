import React from "react";
import { AiOutlineSearch } from 'react-icons/ai';
import { BsInstagram} from 'react-icons/bs';
import { BiCategoryAlt} from 'react-icons/bi';
import Box from "./Box";



const Main = () => {
  return (
    <div className="main">
     <div className="container">
     <div className="left">
        <h1>Yenilikçi ağıllar möcüzələr yaradır</h1>
        <p>
          Gələcəyi innovasiyalar vasitəsilə formalaşdırmaq cəsarət tələb edir
        </p>
     
      </div>
      <div className="right">
        
        <img src="https://socialpubli.com/images/home2019/hero_home-influ.png" alt="" />
      </div>
     </div>
       <div className="form">
            <div><AiOutlineSearch/> <input type="text" placeholder="Ad Soyad" /></div>
            <div><BsInstagram/> <input type="text" placeholder="Sosial şəbəkə" />  </div>
            <div><BiCategoryAlt/> <input type="text" placeholder="Kategoriya" />  </div>
        </div>
        <Box/>
    </div>
  );
};

export default Main;
