import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const ProductsContainer = styled.section`
padding: 0px 101px 0px 117px;
`
const ProductWrapper = styled.div`
display: grid;
grid-gap:40px;
grid-template-columns: repeat(3, 1fr);
`
const ProductsHeader = styled.h1`
padding:80px 0 119px;
font-weight: 400;
font-size: 42px;
line-height: 160%;
text-transform: capitalize; 
`
const ProductCard = styled.div`
position: relative;
padding:16px;
opacity: ${props => props.opacity};
`

const ProductCardImage = styled.img`
width:354px;
height:330px;
object-fit: contain`

const ProductCardContent = styled.h1`
width:354px;
font-weight: 300;
font-size: 18px;
line-height: 160%;
color: var(--c-text);
`
const ProductCardContentTwo = styled.h1`
width:354px;
font-weight: 500;
font-size: 18px;
line-height: 160%;
color: var(--c-text);
`
const ProductCardOverlauy = styled.div`
position: absolute;
left:50%;
top:50%;
transform: translate(-50%, -50%);
`
const ProductInStock = styled.h1`
position: relative;
color: var(--c-text-two);
font-size: 24px;
font-weight: 400;
line-height: 160%;
`
export default class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        const Items = JSON.parse(localStorage.getItem('dataItems'))
        const { active, navItems, isActive, isActiveCurrency } = this.props
        return (
            <ProductsContainer>

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
