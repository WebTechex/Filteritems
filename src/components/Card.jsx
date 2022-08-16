import React from 'react';

const Card = ({data}) => {
  return (
    <>
       <div className="gallery">
            {data.map((val, index) => {
                return (
                    <div className='item' key={index}>
                    <div className="image">
                        <img src={val.image} alt="no image" />
                    </div>
                    <div className="description">
                        <h4>{val.name}</h4>
                        <p>{val.description}</p>
                        <div className="price">
                            <div className="price-info">Price : {val.price}</div>
                            <div className="price-info">
                                <button className="order">Order Now</button>
                            </div>
                        </div>
                        <p>*Price may vary on selected date.</p>
                    </div>
                </div>
                )
            })}

            </div>
    </>
  );
}

export default Card;
