import React, { Component } from 'react'
import styled from 'styled-components'


import Navbar from '../components/organisms/Navbar'
import ProductD from '../Assets/ProductD.png'

const ProductsContainer = styled.section`
padding: 0px 101px 0px 117px;
`

const ProductsHeader = styled.h1`
padding:80px 0 119px;
font-weight: 400;
font-size: 42px;
line-height: 160%;
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
width:354px;`

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
    render() {
        return (
            <ProductsContainer>
                <Navbar></Navbar>

                <div>
                    <ProductsHeader>Category Name</ProductsHeader>

                    <ProductWrapper>
                        <ProductCard>
                            <ProductCardImage src={ProductD}></ProductCardImage>

                            <ProductCardContent>
                                Apollo Running Short
                            </ProductCardContent>

                            <ProductCardContentTwo>
                                $ 50.00
                            </ProductCardContentTwo>

                        </ProductCard>

                    </ProductWrapper>
                </div>

            </ProductsContainer>
        )
    }
}
