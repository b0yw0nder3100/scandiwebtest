import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

import Navbar from '../components/organisms/Navbar'
import ProductD from '../Assets/ProductD.png'

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
            nav: 'all'
        }
    }
    render() {
        return (
            <ProductsContainer>
                <Navbar navItems={this.props.navItems} currencyItems={this.props.currencyItems}></Navbar>

                <ProductWrapper>
                    {
                        this.props.allItems.map((item) =>
                            <Link to={`#`} onClick={() => window.scrollTo(0, 0)}>
                                <ProductCard key={item.id}>
                                    <ProductCardImage src={item.gallery[0]}></ProductCardImage>

                                    <ProductCardContent>
                                        {item.name}
                                    </ProductCardContent>

                                    <ProductCardContentTwo>
                                        $ 50.00
                                    </ProductCardContentTwo>

                                </ProductCard>
                            </Link>
                        )
                    }
                </ProductWrapper>
            </ProductsContainer>
        )
    }
}
