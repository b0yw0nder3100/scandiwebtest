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
const ProductCard = styled.div`
padding:16px;
width:3px;
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
export default class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allItems: [],
            navs: [],
            isActive: this.props.isActive,
        }
    }
    render() {
        const Items = JSON.parse(localStorage.getItem('dataItems'))
        return (
            <ProductsContainer>

                <ProductWrapper>
                    {
                        this.props.isActive === 0 &&
                        Items.products.map((item) =>
                            <div to={`#`} onClick={() => window.scrollTo(0, 0)} key={item.id}>
                                <ProductCard key={item.id}>
                                    <ProductCardImage src={item.gallery[0]}></ProductCardImage>

                                    <ProductCardContent>
                                        {item.name}
                                    </ProductCardContent>

                                    <ProductCardContentTwo>
                                        $ 50.00
                                    </ProductCardContentTwo>

                                </ProductCard>
                            </div>
                        )
                    }
                </ProductWrapper>

                {
                    this.props.isActive === 1 &&
                    <ProductWrapper>
                        {
                            Items.products.filter(x => x.category === 'clothes').map((item) =>
                                <div to={`#`} onClick={() => window.scrollTo(0, 0)}>
                                    <ProductCard key={item.id}>
                                        <ProductCardImage src={item.gallery[0]}></ProductCardImage>

                                        <ProductCardContent>
                                            {item.name}
                                        </ProductCardContent>

                                        <ProductCardContentTwo>
                                            $ 50.00
                                        </ProductCardContentTwo>

                                    </ProductCard>
                                </div>
                            )
                        }
                    </ProductWrapper>
                }
                {
                    this.props.isActive === 2 &&
                    <ProductWrapper>
                        {
                            Items.products.filter(x => x.category === 'tech').map((item) =>
                                <div to={`#`} onClick={() => window.scrollTo(0, 0)}>
                                    <ProductCard key={item.id}>
                                        <ProductCardImage src={item.gallery[0]}></ProductCardImage>

                                        <ProductCardContent>
                                            {item.name}
                                        </ProductCardContent>

                                        <ProductCardContentTwo>
                                            $ 50.00
                                        </ProductCardContentTwo>

                                    </ProductCard>
                                </div>
                            )
                        }
                    </ProductWrapper>
                }
            </ProductsContainer >
        )
    }
}
