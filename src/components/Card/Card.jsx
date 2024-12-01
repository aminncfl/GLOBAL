import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Card = () => {

    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get("http://localhost:5000/products")
            .then(res => {
                setProducts(res.data)
            })

    }, [])

    const SebetAt = (data) => {
        axios.get("http://localhost:5000/basket")
            .then(res => {
                const existingProduct = res.data.find(item => item.id === data.id)
                if (existingProduct) {
                    axios.put(`http://localhost:5000/basket/${data.id}`, { ...existingProduct, count: existingProduct.count + 1 })
                }
                else {
                    axios.post("http://localhost:5000/basket", { ...data, count: 1 })
                }

            })

    }


    const Favoriekle = (item) => {
        axios.post('http://localhost:5000/wishlist', item)
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