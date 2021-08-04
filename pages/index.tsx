// import Head from 'next/head'
// import Image from 'next/image'
import { useEffect } from 'react';
import { useState } from 'react'
// import styles from '../styles/Home.module.css'

export default function Home() {

  const [api,setApi] = useState<any[]>([]);

  const [refresh,setRefresh] = useState(0)

  useEffect(()=>{
    console.log('fetch')
    fetch(`${window.location.protocol.includes('https')?'https://':'http://'}
    opeadeyemi.pythonanywhere.com/api/get-parameters/`,{
      method:'get',
      headers:{
        "Content-Type":'application/json'
      }
    
    })
    .then(response=>{
      return response.json().then(res=>{
          return{status:response.status,data:res}
      })
    })
    .then(res=>{
      if (res.status===200) {
        setApi(res.data)        
      }
    
    })
  },[refresh])

  useEffect(()=>{
    setInterval(()=> setRefresh(Math.random() * 848584 * Math.random())  ,10 * 1000)
  },[])

  return (
      <div className='dummy'>

            <div className="flexC paddBoth head wyt">
              GREEN HOUSE TRACKER
            </div>

            <div className="section" style={{maxWidth:'60%',margin:'auto'}}>

              {     
                api.length?
                api.map((values:any,key:number)=>(
                  <div className="wytCard paddBoth" key={key}>
          
                    <div className='small thick' style={{fontSize:'90%'}}>Minna({values.time.slice(0,7)})</div>
                  
                    <div className="grid smallM">
                      <div>
                        <div className='small thick'>Temperature</div>
                        <div className="head flex">
                          {values.temperature} <div className='small'>C</div>
                        </div>

                      </div>

                      <div>
                        <div className='small thick'>Humidiy</div>
                        <div className="head">{values.humidity} </div>

                      </div>

                      <div>
                        <div className='small thick'>Moisture Content</div>
                        <div className="head"> {values.moisture_content} </div>

                      </div>
                    </div>
            
                  </div>
                )):null      
              }            
            </div>

        




      </div>
  )
}


