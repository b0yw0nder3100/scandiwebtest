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
            amount: 1
        }
    }
    componentDidMount() {
    }
    render() {
        const Items = JSON.parse(localStorage.getItem('dataItems'))
        const { active, navItems, isActive, isActiveCurrency, cartOverlay, allItems } = this.props
        return (

            <div>
                {
                    allItems.length === 0 ?
                        (<ProductsContainer>
                            NO ITEMS IN THE STORE
                        </ProductsContainer>)
                        :
                        (<ProductsContainer cartOverlay={cartOverlay} style={cartOverlay === true ? { position: 'fixed' } : {}} >

                            {navItems.map((item, index) =>
                                <div key={index}>
                                    {isActive === index && <ProductsHeader active onClick={() => active(index)}>{item.name}</ProductsHeader>}
                                </div>
                            )}

                            <ProductWrapper>
                                {
                                    isActive === 0 &&
                                    allItems.map((item) =>
                                        item.inStock === false ? (<Link to={`/${item.category}/${item.id}`} onClick={() => window.scrollTo(0, 0)} key={item.id}>
                                            <ProductCard opacity="0.5" className='one'>

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
                                        </Link>) : (<ProductCard key={item.id}>
                                            <Link to={`/${item.category}/${item.id}`} onClick={() => window.scrollTo(0, 0)}>
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
                                            {
                                                item.attributes.length === 0 && <CartAddOverlay>
                                                    <CartAdd src={CircletIcon} onClick={() => this.props.updateCart(item.name, item.brand, item.gallery[0], item.prices[isActiveCurrency].currency.symbol, item.prices[isActiveCurrency].amount, "", "", "", item.attributes, this.state.amount)} className="onHover"></CartAdd>
                                                </CartAddOverlay>
                                            }

                                            {
                                                item.attributes.length === 1 && <CartAddOverlay>
                                                    <CartAdd src={CircletIcon} onClick={() => this.props.updateCart(item.name, item.brand, item.gallery[0], item.prices, item.attributes.find((i, j) => j === 0 ? i : undefined).items.find((k, l) => l === 0 && k.id).value, "", "", item.attributes, this.state.amount)} className="onHover"></CartAdd>
                                                </CartAddOverlay>
                                            }
                                            {
                                                item.attributes.length === 2 && <CartAddOverlay>
                                                    <CartAdd src={CircletIcon} onClick={() => this.props.updateCart(item.name, item.brand, item.gallery[0], item.prices, item.attributes.find((i, j) => j === 0 ? i : undefined).items.find((k, l) => l === 0 && k.id).value, item.attributes.find((i, j) => j === 1 ? i : undefined).items.find((k, l) => l === 0 && k.id).id, "", item.attributes, this.state.amount)} className="onHover"></CartAdd>
                                                </CartAddOverlay>
                                            }
                                            {
                                                item.attributes.length === 3 && <CartAddOverlay>
                                                    <CartAdd src={CircletIcon} onClick={() => this.props.updateCart(item.name, item.brand, item.gallery[0], item.prices, item.attributes.find((i, j) => j === 0 ? i : undefined).items.find((k, l) => l === 0 && k.id).value, item.attributes.find((i, j) => j === 1 ? i : undefined).items.find((k, l) => l === 0 && k.id).id, item.attributes.find((i, j) => j === 2 ? i : undefined).items.find((k, l) => l === 0 && k.id).id, item.attributes, this.state.amount)} className="onHover"></CartAdd>
                                                </CartAddOverlay>
                                            }
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
                                            </Link>) : (<ProductCard key={item.id}>
                                                <Link to={`/${item.category}/${item.id}`} onClick={() => window.scrollTo(0, 0)}>
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
                                                {
                                                    item.attributes.length === 0 && <CartAddOverlay>
                                                        <CartAdd src={CircletIcon} onClick={() => this.props.updateCart(item.name, item.brand, item.gallery[0], item.prices, "", "", "", item.attributes, this.state.amount)} className="onHover"></CartAdd>
                                                    </CartAddOverlay>
                                                }
                                                {
                                                    item.attributes.length === 1 && <CartAddOverlay>
                                                        <CartAdd src={CircletIcon} onClick={() => this.props.updateCart(item.name, item.brand, item.gallery[0], item.prices, item.attributes.find((i, j) => j === 0 ? i : undefined).items.find((k, l) => l === 0 && k.id).value, "", "", item.attributes, this.state.amount)} className="onHover"></CartAdd>
                                                    </CartAddOverlay>
                                                }
                                                {
                                                    item.attributes.length === 2 && <CartAddOverlay>
                                                        <CartAdd src={CircletIcon} onClick={() => this.props.updateCart(item.name, item.brand, item.gallery[0], item.prices, item.attributes.find((i, j) => j === 0 ? i : undefined).items.find((k, l) => l === 0 && k.id).value, item.attributes.find((i, j) => j === 1 ? i : undefined).items.find((k, l) => l === 0 && k.id).id, "", item.attributes, this.state.amount)} className="onHover"></CartAdd>
                                                    </CartAddOverlay>
                                                }
                                                {
                                                    item.attributes.length === 3 && <CartAddOverlay>
                                                        <CartAdd src={CircletIcon} onClick={() => this.props.updateCart(item.name, item.brand, item.gallery[0], item.prices, item.attributes.find((i, j) => j === 0 ? i : undefined).items.find((k, l) => l === 0 && k.id).value, item.attributes.find((i, j) => j === 1 ? i : undefined).items.find((k, l) => l === 0 && k.id).id, item.attributes.find((i, j) => j === 2 ? i : undefined).items.find((k, l) => l === 0 && k.id).id, item.attributes, this.state.amount)} className="onHover"></CartAdd>
                                                    </CartAddOverlay>
                                                }
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
                                            </Link>) : (<ProductCard key={item.id}>
                                                <Link to={`/${item.category}/${item.id}`} onClick={() => window.scrollTo(0, 0)} >
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
                                                {
                                                    item.attributes.length === 0 && <CartAddOverlay>
                                                        <CartAdd src={CircletIcon} onClick={() => this.props.updateCart(item.name, item.brand, item.gallery[0], item.prices, "", "", "", item.attributes, this.state.amount)} className="onHover"></CartAdd>
                                                    </CartAddOverlay>
                                                }

                                                {
                                                    item.attributes.length === 1 && <CartAddOverlay>
                                                        <CartAdd src={CircletIcon} onClick={() => this.props.updateCart(item.name, item.brand, item.gallery[0], item.prices, item.attributes.find((i, j) => j === 0 ? i : undefined).items.find((k, l) => l === 0 && k.id).value, "", "", item.attributes, this.state.amount)} className="onHover"></CartAdd>
                                                    </CartAddOverlay>
                                                }
                                                {
                                                    item.attributes.length === 2 && <CartAddOverlay>
                                                        <CartAdd src={CircletIcon} onClick={() => this.props.updateCart(item.name, item.brand, item.gallery[0], item.prices, item.attributes.find((i, j) => j === 0 ? i : undefined).items.find((k, l) => l === 0 && k.id).value, item.attributes.find((i, j) => j === 1 ? i : undefined).items.find((k, l) => l === 0 && k.id).id, "", item.attributes, this.state.amount)} className="onHover"></CartAdd>
                                                    </CartAddOverlay>
                                                }
                                                {
                                                    item.attributes.length === 3 && <CartAddOverlay>
                                                        <CartAdd src={CircletIcon} onClick={() => this.props.updateCart(item.name, item.brand, item.gallery[0], item.prices, item.attributes.find((i, j) => j === 0 ? i : undefined).items.find((k, l) => l === 0 && k.id).value, item.attributes.find((i, j) => j === 1 ? i : undefined).items.find((k, l) => l === 0 && k.id).id, item.attributes.find((i, j) => j === 2 ? i : undefined).items.find((k, l) => l === 0 && k.id).id, item.attributes, this.state.amount)} className="onHover"></CartAdd>
                                                    </CartAddOverlay>
                                                }
                                            </ProductCard>)
                                        )
                                    }
                                </ProductWrapper>
                            }
                        </ProductsContainer >)
                }
            </div>
        )
    }
}
