import React, { useContext, useEffect } from 'react'
import NewsCart from '../components/NewsCart'
import NewsContext from '../context/NewsContext'
import {getNews} from '../context/NewsActions'

function Home() {

    const {news , dispatch} = useContext(NewsContext)

    const getData = async() =>{
        const data = await getNews("India")
        dispatch({
            type : "GET_NEWS",
            payload : data
        })            
    }

    useEffect(()=>{
       getData()
    },[]) 
    return (
        <div className="container mt-5">
            <div className="row">
               {
                news.map((item , index)=>
                <NewsCart key={index} item={item}/>
                )
               }
            </div>
        </div>
    );
}

export default Home
