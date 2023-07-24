import React, { useEffect, useState } from 'react'
import './Statewise.css';

const Statewise = () => {
    const [data, setData] =useState([]);

    const getCovidData = async () =>{
       const res = await fetch('https://api.covid19india.org/data.json');
       const actualData =  await res.json();
         console.log(actualData.Statewise);
         setData(actualData.Statewise);
    }



useEffect(() =>{
    getCovidData();
}, [] );




  return (
    <div>
    
    {/* <h1>Covid-19 Update Dashboard</h1>     */}

    <div className='container-fluid mt-5 backgroundColor-orange'>
        <div className='main-heading '>
        <h1 className='mb-5 text-center '> <span className='font-weight-bold'> India </span>Covid-19 Update Dashboard</h1>    
        </div>
         </div>
       
       <div className='table-responsive'>
        <table className='table table-hover'>
        <thead className='thead-dark'>
        <tr>
            <th>State</th>
            <th>Confirmed</th>
            <th>recovered</th>
            <th>deaths</th>
            <th>active</th>
            <th>updated</th>
        </tr>
        </thead>

        <tbody>
        {
            data.map((curElm, ind) =>{
               return(
                <tr key={ind}>
                <td>{curElm.state}</td>
                <td>{curElm.confirmed}</td>
                <td>{curElm.recovered}</td>
                <td>{curElm.deaths}</td>
                <td>{curElm.active}</td>
                <td>{curElm.updated}</td>

                </tr>

               )
            })
        }
            
        </tbody>

        </table>
       </div>
    </div>
  )
}

export default Statewise;