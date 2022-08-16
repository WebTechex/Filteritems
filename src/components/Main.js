import React, {useState} from 'react';
import './src/style.css';
import Arr from './Arr';
import Card from './Card';
import Nav from './Nav';

const Main = () => {
    const [data, Setdata] = useState(Arr);

    const Filter = (categ) => {
        if(categ === 'all'){
            Setdata(Arr);
            return ;
        }
        const item = Arr.filter((val) => {
            return val.category === categ;
        })
        console.log(item);
        Setdata(item);
    }

    const Navbr = [... new Set(Arr.map((val) => {return val.category;})), "all"]
    console.log(Nav);

    return (
        <div className='main'>
            <h1 className='header'>Order Your Favourite Dish</h1>
            <hr />
           {/* navbar items */}
           <Nav Filter={Filter} Navbr={Navbr} />
           {/* list items */}
           <Card data={data} />
        </div>

    );
}

export default Main;
