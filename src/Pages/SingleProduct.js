import React, { Component } from 'react'
import styled from 'styled-components'
import { Link, useParams } from 'react-router-dom';

const SingleProductContainer = styled.nav`
padding: 72px 101px 0px 117px;
font-size: 26px;
display: flex;
justify-content: space-between;
`
const ProductCardImage = styled.img`
width: ${props => props.width};
height: ${props => props.height};
object-fit: contain`

const Div = styled.div`
display: flex;
flex-direction: column;`

const DivTwo = styled.div`
padding:20px 0 0 0;
`

const Span = styled.span`
background: ${props => props.bg};
width: ${props => props.width};
height: ${props => props.height};
border:2px solid var(--c-text);
margin-right: 10px;
padding: ${props => props.padding};
`
const Text = styled.p`
font-size: ${props => props.fontSize};
line-height: ${props => props.lineHeight};
font-weight: ${props => props.fontWeight};
padding: ${props => props.padding};
text-transform: ${props => props.textTransform};
`
const AddToCartBtn = styled.button`
background: var(--c-primary);
padding:16px 32px;
font-weight: 600;
font-size: 16px;
line-height: 120%;
border:none;
width:292px;
color: var(--c-white);
text-transform: uppercase;
`

export class SingleProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        const Items = JSON.parse(localStorage.getItem('dataItems'))
        const { isActiveCurrency } = this.props
        const { id } = this.props.params
        console.log(id);
        return (
            <>
                {
                    Items.products.map((item, index) =>
                        index === 2 &&
                        <SingleProductContainer key={index}>

                            <Div>
                                {item.gallery.map((items, index) =>
                                    <ProductCardImage width='79px' height='80px' src={items}></ProductCardImage>)}
                            </Div>

                            <div>
                                <ProductCardImage width='610px' height='511px' src={item.gallery}></ProductCardImage>
                            </div>

                            <div>
                                <Text fontSize='30px' lineHeight="27px" fontWeight="700">{item.brand}</Text>
                                <Text padding="16px 0 43px 0" fontSize='30px' lineHeight="27px" fontWeight="400">{item.name}</Text>
                                {item.attributes.map((item) =>
                                    <div>

                                        {item.id === 'Color' ? (<DivTwo>
                                            <Text padding="10px 0 10px 0" fontSize='18px' lineHeight="18px" fontWeight="700" textTransform='uppercase'>{item.id}:</Text>
                                            {item.items.map((items) =>
                                                <Span padding="1px 20px" bg={items.value}></Span>
                                            )}
                                        </DivTwo>) : (<DivTwo>
                                            <Text padding="25px 0 25px 0" fontSize='18px' lineHeight="18px" fontWeight="700" textTransform='uppercase'>{item.id}:</Text>
                                            {item.items.map((items) =>
                                                <Span padding="13px 20px" width="63px" height="45px" bg={items.value}>{items.value}</Span>
                                            )}
                                        </DivTwo>)}
                                    </div>
                                )}

                                <Text padding="38px 0 10px 0" fontSize='18px' lineHeight="18px" fontWeight="700" textTransform='uppercase'>Price:</Text>

                                <Text padding="0 0 36px 0" fontSize='24px' lineHeight="18px" fontWeight="700" textTransform='uppercase'>{item.prices[isActiveCurrency].currency.symbol} {item.prices[isActiveCurrency].amount}</Text>

                                <AddToCartBtn>Add to Cart</AddToCartBtn>

                                <Text padding="56px 0 0 0" fontSize='16px' lineHeight="160%" fontWeight="400" dangerouslySetInnerHTML={{ __html: item.description }} />
                            </div>

                        </SingleProductContainer>
                    )
                }
            </>
        )
    }
}

export default SingleProduct
