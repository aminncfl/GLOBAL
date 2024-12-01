import axios from 'axios'
import React, { useEffect, useState } from 'react'

const WishList = () => {

    const [products,setProducts] = useState([])

    useEffect(() => {
        axios.get("http://localhost:5000/wishlist")
        .then(res => {
            setProducts(res.data)
            console.log("salam",products);
            
        })

}, [])
  return (
    <div>
        {products && products.map(item => {
            return <div>
                <img src={item.thumbnail} alt="" />
                <p>{item.title}</p>
                
            </div>
        }
        )}
    </div>
  )
}

export default WishList