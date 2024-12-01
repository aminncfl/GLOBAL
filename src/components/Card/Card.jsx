import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Card = () => {

    const [products,setProducts] = useState([])

    useEffect(() => {
        axios.get("http://localhost:5000/products")
        .then(res => {
            setProducts(res.data)
        })
}, [])

const SebetAt = (item) => {
    axios.post("http://localhost:5000/basket",item)
}
const Favoriekle = (item) => {
    axios.post('http://localhost:5000/wishlist',item)
}

  return (
    <div>
        {products && products.map(item => {
            return <div>
                <img src={item.thumbnail} alt="" />
                <p>{item.title}</p>
                <button onClick={() => SebetAt(item)}>Sebet At</button>
                <button onClick={() => Favoriekle(item)}>Favori ekle</button>

            </div>
        }
        )}
    </div>
  )
}

export default Card