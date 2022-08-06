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
        const { active, navItems, isActive, isActiveCurrency, cartOverlay, product, selectedOption1, selectedOption2, selectedOption3 } = this.props
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
                            </Link>) : (<ProductCard>
                                <Link to={`/${item.category}/${item.id}`} onClick={() => window.scrollTo(0, 0)} key={item.id}>
                                    <div>
                                        <ProductCardImage src={item.gallery[0]}></ProductCardImage>

                                        <ProductCardContent>
                                            {item.name}
                                        </ProductCardContent>

                                        <ProductCardContentTwo>
                                            {item.prices[isActiveCurrency].currency.symbol} {item.prices[isActiveCurrency].amount}
                                        </ProductCardContentTwo>



                                    </div>
                                </Link>

                                <CartAddOverlay>
                                    <CartAdd src={CircletIcon} onClick={() => this.props.updateCart(product.name, product.brand, product.gallery[0], product.prices[isActiveCurrency].currency.symbol, product.prices[isActiveCurrency].amount, this.state.selectedOption1, this.state.selectedOption2, this.state.selectedOption3, product.attributes)} className="onHover"></CartAdd>
                                </CartAddOverlay>
                            </ProductCard>)
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
                                </Link>) : (<ProductCard>
                                    <Link to={`/${item.category}/${item.id}`} onClick={() => window.scrollTo(0, 0)} key={item.id}>
                                        <div>
                                            <ProductCardImage src={item.gallery[0]}></ProductCardImage>

                                            <ProductCardContent>
                                                {item.name}
                                            </ProductCardContent>

                                            <ProductCardContentTwo>
                                                {item.prices[isActiveCurrency].currency.symbol} {item.prices[isActiveCurrency].amount}
                                            </ProductCardContentTwo>



                                        </div>
                                    </Link>

                                    <CartAddOverlay>
                                        <CartAdd src={CircletIcon} className="onHover"></CartAdd>
                                    </CartAddOverlay>
                                </ProductCard>)
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
                                </Link>) : (<ProductCard>
                                    <Link to={`/${item.category}/${item.id}`} onClick={() => window.scrollTo(0, 0)} key={item.id}>
                                        <div>
                                            <ProductCardImage src={item.gallery[0]}></ProductCardImage>

                                            <ProductCardContent>
                                                {item.name}
                                            </ProductCardContent>

                                            <ProductCardContentTwo>
                                                {item.prices[isActiveCurrency].currency.symbol} {item.prices[isActiveCurrency].amount}
                                            </ProductCardContentTwo>



                                        </div>
                                    </Link>

                                    <CartAddOverlay>
                                        <CartAdd src={CircletIcon} className="onHover"></CartAdd>
                                    </CartAddOverlay>
                                </ProductCard>)
                            )
                        }
                    </ProductWrapper>
                }
            </ProductsContainer >
        )
    }
}
