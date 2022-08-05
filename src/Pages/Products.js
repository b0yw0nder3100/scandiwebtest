import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import {
    CartAdd,
    CartAddOverlay,
    ProductCard,
    ProductCardContent,
    ProductCardContentTwo,
    ProductCardImage,
    ProductCardOverlauy,
    ProductInStock,
    ProductWrapper,
    ProductsContainer,
    ProductsHeader,
} from "../Styles/ProductStyles";
import CircletIcon from '../Assets/interface/Circle-Icon.png'


export default class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        const Items = JSON.parse(localStorage.getItem('dataItems'))
        const { active, navItems, isActive, isActiveCurrency, cartOverlay } = this.props
        return (
            <ProductsContainer onClick={() => this.setState({ cartOverlay: false })} cartOverlay={cartOverlay}>

                {navItems.map((item, index) =>
                    <div key={index}>
                        {isActive === index && <ProductsHeader active onClick={() => active(index)}>{item.name}</ProductsHeader>}
                    </div>
                )}

                <ProductWrapper>
                    {
                        isActive === 0 &&
                        Items.products.map((item) =>
                            item.inStock === false ? (<Link to={`/${item.category}/${item.id}`} onClick={() => window.scrollTo(0, 0)} key={item.id}>
                                <ProductCard opacity="0.5">

                                    <ProductCardOverlauy>
                                        <ProductInStock>
                                            OUT OF STOCK
                                        </ProductInStock>
                                    </ProductCardOverlauy>

                                    <ProductCardImage src={item.gallery[0]}></ProductCardImage>

                                    <ProductCardContent>
                                        {item.name}
                                    </ProductCardContent>

                                    <ProductCardContentTwo>
                                        {item.prices[isActiveCurrency].currency.symbol} {item.prices[isActiveCurrency].amount}
                                    </ProductCardContentTwo>


                                </ProductCard>
                            </Link>) : (<Link to={`/${item.category}/${item.id}`} onClick={() => window.scrollTo(0, 0)} key={item.id}>
                                <ProductCard>
                                    <ProductCardImage src={item.gallery[0]}></ProductCardImage>

                                    <ProductCardContent>
                                        {item.name}
                                    </ProductCardContent>

                                    <ProductCardContentTwo>
                                        {item.prices[isActiveCurrency].currency.symbol} {item.prices[isActiveCurrency].amount}
                                    </ProductCardContentTwo>

                                    <CartAddOverlay>
                                        <CartAdd src={CircletIcon} className="onHover"></CartAdd>
                                    </CartAddOverlay>

                                </ProductCard>
                            </Link>)
                        )
                    }
                </ProductWrapper>

                {
                    isActive === 1 &&
                    <ProductWrapper>
                        {
                            Items.products.filter(x => x.category === 'clothes').map((item) =>
                                item.inStock === false ? (<Link to={`/${item.category}/${item.id}`} onClick={() => window.scrollTo(0, 0)} key={item.id}>
                                    <ProductCard opacity="0.5">

                                        <ProductCardOverlauy>
                                            <ProductInStock>
                                                OUT OF STOCK
                                            </ProductInStock>

                                        </ProductCardOverlauy>
                                        <ProductCardImage src={item.gallery[0]}></ProductCardImage>

                                        <ProductCardContent>
                                            {item.name}
                                        </ProductCardContent>

                                        <ProductCardContentTwo>
                                            {item.prices[isActiveCurrency].currency.symbol} {item.prices[isActiveCurrency].amount}
                                        </ProductCardContentTwo>

                                    </ProductCard>
                                </Link>) : (<Link to={`/${item.category}/${item.id}`} onClick={() => window.scrollTo(0, 0)} key={item.id}>
                                    <ProductCard>
                                        <ProductCardImage src={item.gallery[0]}></ProductCardImage>

                                        <ProductCardContent>
                                            {item.name}
                                        </ProductCardContent>

                                        <ProductCardContentTwo>
                                            {item.prices[isActiveCurrency].currency.symbol} {item.prices[isActiveCurrency].amount}
                                        </ProductCardContentTwo>

                                        <CartAddOverlay>
                                            <CartAdd src={CircletIcon} className="onHover"></CartAdd>
                                        </CartAddOverlay>

                                    </ProductCard>
                                </Link>)
                            )
                        }
                    </ProductWrapper>
                }
                {
                    isActive === 2 &&
                    <ProductWrapper>
                        {
                            Items.products.filter(x => x.category === 'tech').map((item) =>
                                item.inStock === false ? (<Link to={`/${item.category}/${item.id}`} onClick={() => window.scrollTo(0, 0)} key={item.id}>
                                    <ProductCard opacity="0.5">

                                        <ProductCardOverlauy>
                                            <ProductInStock>
                                                OUT OF STOCK
                                            </ProductInStock>
                                        </ProductCardOverlauy>

                                        <ProductCardImage src={item.gallery[0]}></ProductCardImage>

                                        <ProductCardContent>
                                            {item.name}
                                        </ProductCardContent>

                                        <ProductCardContentTwo>
                                            {item.prices[isActiveCurrency].currency.symbol} {item.prices[isActiveCurrency].amount}
                                        </ProductCardContentTwo>

                                    </ProductCard>
                                </Link>) : (<Link to={`/${item.category}/${item.id}`} onClick={() => window.scrollTo(0, 0)} key={item.id}>
                                    <ProductCard>
                                        <ProductCardImage src={item.gallery[0]}></ProductCardImage>

                                        <ProductCardContent>
                                            {item.name}
                                        </ProductCardContent>

                                        <ProductCardContentTwo>
                                            {item.prices[isActiveCurrency].currency.symbol} {item.prices[isActiveCurrency].amount}
                                        </ProductCardContentTwo>

                                        <CartAddOverlay>
                                            <CartAdd src={CircletIcon} className="onHover"></CartAdd>
                                        </CartAddOverlay>

                                    </ProductCard>
                                </Link>)
                            )
                        }
                    </ProductWrapper>
                }
            </ProductsContainer >
        )
    }
}
