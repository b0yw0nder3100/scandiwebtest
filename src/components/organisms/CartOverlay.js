import React, { Component } from 'react'
import styled from 'styled-components'

const CartOverlayWrapper = styled.div`
position: absolute;
background: rgba(57, 55, 72, 0.22);
width:100%;
z-index: 2;
`
const CartOverlayContainer = styled.div`
position: relative;
float:right;
margin-right:88px;
width:384px;
height: max-content;
padding:32px 16px;
z-index: 3;
background: var(--c-white);
`
const ProductCardImage = styled.img`
width: ${props => props.width};
height: ${props => props.height}; 
object-fit: contain;
`
const DivTwo = styled.div`
padding:0px 0 0px 0;
`
const Span = styled.div`
background: ${props => props.bg};
width: ${props => props.width};
height: ${props => props.height};
border:${props => props.noborder ? '0' : '2px solid var(--c-text)'};
margin-right: 8px;
text-align:center;
font-weight: 400;
font-size: 14px;
line-height: 160%;
padding: ${props => props.padding};
`
const Divr = styled.div`
display:flex;
flex-direction: row;
`
const Divs = styled.div`
width:352px;
height:max-content;
display:flex;
justify-content: space-between;
margin:40px 0;
`
const Divc = styled.div`
display:flex;
flex-direction: column;
justify-content: space-between;
text-align: center;
`
const Text = styled.p`
font-size: ${props => props.fontSize};
line-height: ${props => props.lineHeight};
font-weight: ${props => props.fontWeight};
padding: ${props => props.padding};
text-transform: ${props => props.textTransform};
color: var(-c--text);
`
export default class CartOverlay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1
        }
        this.Increase = this.Increase.bind(this)
        this.Decrease = this.Decrease.bind(this)
    }
    Increase = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    Decrease = () => {
        this.setState({
            count: this.state.count - 1
        })
    }
    active = index => {
        if (this.state.isActive === index) {
            return this.setState({ isActive: index })
        }
        this.setState({ isActive: index })
    }
    componentDidMount() {
    }
    render() {
        const cartItems = JSON.parse(localStorage.getItem('ScandiwebCart'))
        return (
            <CartOverlayWrapper>
                <CartOverlayContainer>
                    <Text> <b>My Bag</b>, {cartItems.length > 0 ? cartItems.length : 0} items</Text>
                    {
                        cartItems.map((item, index) =>
                            <Divs key={index}>
                                <div>
                                    <Text fontSize='16px' lineHeight="160%" fontWeight="300">{item.brand}</Text>
                                    <Text fontSize='16px' lineHeight="160%" fontWeight="300">{item.name}</Text>
                                    <Text fontSize='16px' lineHeight="160%" fontWeight="500">{item.currencySymbol} {item.price}</Text>
                                    {
                                        item.attributes.length === 0 ? (
                                            <div>
                                            </div>
                                        ) : (item.attributes.map((product) =>
                                            <div>

                                                {product.id === 'Color' ?
                                                    (
                                                        <DivTwo>
                                                            <Text padding="8px 0 8px 0" fontSize='14px' lineHeight="16px" fontWeight="400">{product.id}:</Text>
                                                            <Divr>
                                                                {product.items.map((items) =>
                                                                    <Span padding="12px 12px" weight="24px" height="24px" bg={items.value}></Span>
                                                                )}
                                                            </Divr>
                                                        </DivTwo>) :
                                                    (<DivTwo>
                                                        <Text padding="8px 0 8px 0" fontSize='14px' lineHeight="16px" fontWeight="400">{product.id}:</Text>
                                                        <Divr>
                                                            {product.items.map((items) =>
                                                                <Span width="max-content" padding="0px 6px" bg={items.value}>{items.value}</Span>
                                                            )}
                                                        </Divr>
                                                    </DivTwo>)
                                                }
                                            </div>
                                        ))
                                    }
                                </div>

                                <Divr>
                                    <Divc>
                                        <Span fontSize='14px' lineHeight="16px" width="24px" height="24px" onClick={this.Increase}>+</Span>
                                        <Span noborder>{this.state.count}</Span>
                                        <Span fontSize='14px' lineHeight="16px" width="24px" height="24px" onClick={this.Decrease}>-</Span>
                                    </Divc>

                                    <ProductCardImage width='121px' height='190px' src={item.image}></ProductCardImage>
                                </Divr>
                            </Divs>
                        )}


                </CartOverlayContainer>
            </CartOverlayWrapper>
        )
    }
}
