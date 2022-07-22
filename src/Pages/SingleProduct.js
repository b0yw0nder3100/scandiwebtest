import React, { Component } from 'react'
import styled from 'styled-components'
import { Link, useParams } from 'react-router-dom';
import withRouter from '../components/molecules/withRouter';

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
font-size: 16px;
font-weight: 400;
line-height: 18px;
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
    componentDidMount() {


    }
    render() {
        const Items = JSON.parse(localStorage.getItem('dataItems'))
        const { isActiveCurrency } = this.props
        console.log('Props:', this.props)
        const product = Items.products.find((x) => x.id === this.props.params.productname)
        console.log(product);
        return (
            <>
                <SingleProductContainer>

                    <Div>
                        {product.gallery.map((items, index) =>
                            <ProductCardImage width='79px' height='80px' src={items}></ProductCardImage>)}
                    </Div>

                    <div>
                        <ProductCardImage width='610px' height='511px' src={product.gallery}></ProductCardImage>
                    </div>

                    <div>
                        <Text fontSize='30px' lineHeight="27px" fontWeight="700">{product.brand}</Text>
                        <Text padding="16px 0 43px 0" fontSize='30px' lineHeight="27px" fontWeight="400">{product.name}</Text>
                        {product.attributes.map((product) =>
                            <div>

                                {product.id === 'Color' ? (<DivTwo>
                                    <Text padding="10px 0 10px 0" fontSize='18px' lineHeight="18px" fontWeight="700" textTransform='uppercase'>{product.id}:</Text>
                                    {product.items.map((items) =>
                                        <Span padding="10px 20px" bg={items.value}></Span>
                                    )}
                                </DivTwo>) : (<DivTwo>
                                    <Text padding="10px 0 10px 0" fontSize='18px' lineHeight="18px" fontWeight="700" textTransform='uppercase'>{product.id}:</Text>
                                    {product.items.map((items) =>
                                        <Span padding="10px 10px" width="63px" height="45px" bg={items.value}>{items.value}</Span>
                                    )}
                                </DivTwo>)}
                            </div>
                        )}

                        <Text padding="38px 0 10px 0" fontSize='18px' lineHeight="18px" fontWeight="700" textTransform='uppercase'>Price:</Text>


                        <Text padding="0 0 36px 0" fontSize='24px' lineHeight="18px" fontWeight="700" textTransform='uppercase'>{product.prices[isActiveCurrency].currency.symbol} {product.prices[isActiveCurrency].amount}</Text>

                        <AddToCartBtn>Add to Cart</AddToCartBtn>

                        <Text padding="56px 0 0 0" fontSize='16px' lineHeight="160%" fontWeight="400" dangerouslySetInnerHTML={{ __html: product.description }} />
                    </div>

                </SingleProductContainer>
            </>
        )
    }
}

export default withRouter(SingleProduct);
