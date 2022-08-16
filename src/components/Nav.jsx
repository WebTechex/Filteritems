import React from 'react';

const Nav = ({Filter, Navbr}) => {
  return (
    <>
       <div className="nav">
                {Navbr.map((val, index) => { 
                    return <button className="nav-btn" key={index} onClick={() => {Filter(val)}}>{val}</button>
                })}
            </div>
    </>
  );
}

export default Nav;
