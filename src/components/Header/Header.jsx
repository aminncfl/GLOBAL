import React from 'react'
import styles from './Header.module.scss'
import { FaRegHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
const Header = () => {
    return (
        <div>
            {/* <nav className={styles.myNav}>

                <a href="/"><img src="https://preview.colorlib.com/theme/electro/img/logo.png" alt="" /></a>

                <div>
                    <input type="text" className={styles.myInput} placeholder='Search'/>
                    <button className={styles.btnSer}>Search</button>
                </div>
                <div className={styles.icons}>
                    <a href="/wishlist"><FaRegHeart />
                        <p>Your Wishlist</p></a>
                    <a href="/basket"><FaShoppingCart />
                        <p>Your Cart</p></a>
                </div>
            </nav> */}
            <nav className={styles.myNav}>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="">Portfolio</a></li>
                    <li><a href="">Resume</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
                <div className={styles.icons}>
                    <a href="/wishlist"><FaRegHeart />
                        <p>Your Wishlist</p></a>
                    <a href="/basket"><FaShoppingCart />
                        <p>Your Cart</p></a>
                </div>
            </nav>
        </div>
    )
}

export default Header