import React from "react";
import { Link } from 'react-router-dom';

const Header = ({setSelectedCategory}) => {
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
};

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Shopflix</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ color: 'yellow'}}>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link" to="/category/electronics" onClick={()=> handleCategoryClick('electronics')}>Electronics</Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link" to="/category/jewelery" onClick={() => handleCategoryClick(`women's clothing`)}>Women's Clothing</Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link" to="/category/mens-clothing" onClick={() => handleCategoryClick(`men's clothing`)}>Men's Clothing</Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link" to="/category/womens-clothing" onClick={() => handleCategoryClick('jewelery')}>jewelery</Link>
                            </li>
                           
                        </ul>
                        <li className="nav-item" style={{listStyleType: 'none'}}>
                                <Link className="nav-link" to="/cartPage"><span style={{backgroundColor: 'rgb(223 198 83)',fontSize:"2rem", color: "green"}}>Cart</span></Link>
                            </li>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;
