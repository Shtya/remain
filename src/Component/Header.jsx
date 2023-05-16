import React,{useEffect, useState} from 'react'
import axios from 'axios';
import Card from './Card';
import {Fade} from 'react-awesome-reveal'

const Header = ({val}) => {
const [data, setData] = useState([])
const [cate, setcate] = useState("")
let items = []
data.length ? items = [...new Set(data.map(e=> e.category)) , "الكل"] : items=[]

const getdata = ()=> axios.get("https://dummyjson.com/products").then(res => setData(res.data.products))
useEffect(_=>{
    getdata()
},[])

useEffect(_=>{
    if(cate.length&& cate != "الكل" ) setData(data.filter(e=> e.category == cate)) 
    else if(cate.length&& cate == "الكل" ) getdata()
},[ cate])

useEffect(_=>{
        if(val) setData(data.filter(e=> e.category == val)) 
        else getdata()
},[val ])

return (
    <div className="container">
        <div className="row head">
            <h3 className='col-12 d-flex justify-content-center '>متجر <span> حمد </span> التكاملي </h3>
        </div>
        <div className="row menu">
            <Fade>
            <ul className="col-12 d-flex justify-content-center">
                {
                    items.length >1 ? 
                    items.map((e,index)=>(
                         <li onClick={_=>setcate(e)} key={index}>{e}</li>))
                    : <h3>لا يوجد تصنيفات الان</h3>
                }

            </ul>
            </Fade>
        </div>
        <div className="row Card">
            <Card data ={data} val={val} cate={cate}/>
        </div>

    </div>
  )
}

export default Header

