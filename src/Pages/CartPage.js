import React, { Component } from 'react'
import {
    Button,
    ButtonWrapper,
    CartOverlayContainer,
    CartOverlayWrapper,
    Checkmark,
    CheckmarkWrapper,
    Container,
    Divc,
    Dive,
    Divr,
    Divs,
    Input,
    ProductCardImage,
    Span,
    Text,
    TotalContainer,
    TotalWrapper
} from "../Styles/CartPageStyles";

export default class CartPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        const cartItems = JSON.parse(localStorage.getItem('ScandiwebCart'))
        const { updateCart, isActiveCurrency } = this.props
        return (
            <CartOverlayWrapper>
                <CartOverlayContainer>
                    <Text fontSize='32px' lineHeight="40px" fontWeight="700" border=" 1px solid var(--c-text-three)" padding="0 0 55px" >CART</Text>
                    {
                        cartItems.map((item, index) =>
                            <Divs key={index}>
                                <div>
                                    <Text fontSize='16px' lineHeight="160%" fontWeight="700">{item.brand}</Text>
                                    <Text fontSize='16px' lineHeight="160%" fontWeight="300">{item.name}</Text>
                                    <Text fontSize='16px' lineHeight="160%" fontWeight="500">{item.prices[isActiveCurrency].currency.symbol} {item.prices[isActiveCurrency].amount}</Text>
                                    {
                                        item.attributes.length === 0 ? (
                                            <div>
                                            </div>
                                        ) : (item.attributes.map((product, index) =>
                                            <div key={index}>
                                                {

                                                    <div>
                                                        <div>
                                                            {
                                                                index === 0 &&
                                                                <div>
                                                                    <Text padding="10px 0 10px 0" fontSize='18px' lineHeight="18px" fontWeight="700" textTransform='uppercase'>{product.id}:</Text>
                                                                    <Dive>
                                                                        {
                                                                            product.id === "Color" ? (product.items.map((items, index) =>
                                                                                <Container className="container">
                                                                                    <Input type="radio" name={items.id + index} value={items.id} checked={item.attribute1 === items.value} readOnly />
                                                                                    <CheckmarkWrapper bg={items.value} key={index}>
                                                                                        <Checkmark className="checkmark" bg={items.value}></Checkmark>
                                                                                    </CheckmarkWrapper>
                                                                                </Container>
                                                                            )) : (product.items.map((items, index) =>
                                                                                <Container className="container" key={index}>
                                                                                    <Input type="radio" name={items.id + index} value={items.value} checked={item.attribute1 === items.value} readOnly />
                                                                                    <Checkmark className="checkmark" border data={items.value}>{items.value}</Checkmark>
                                                                                </Container>
                                                                            ))
                                                                        }
                                                                    </Dive>
                                                                </div>
                                                            }
                                                        </div>

                                                        <div>
                                                            {
                                                                index === 1 &&
                                                                <div>
                                                                    <Text padding="10px 0 10px 0" fontSize='18px' lineHeight="18px" fontWeight="700" textTransform='uppercase'>{product.id}:</Text>
                                                                    <Dive>
                                                                        {
                                                                            product.id === "Color" ? (product.items.map((items, index) =>
                                                                                <Container className="container" key={index}>
                                                                                    <Input type="radio" name={items.id + index} value={items.id} checked={item.attribute2 === items.value} readOnly />
                                                                                    <CheckmarkWrapper bg={items.value}>
                                                                                        <Checkmark className="checkmark" bg={items.value}></Checkmark>
                                                                                    </CheckmarkWrapper>
                                                                                </Container>
                                                                            )) : (product.items.map((items, index) =>
                                                                                <Container className="container" key={index}>
                                                                                    <Input type="radio" name={items.id + index} value={items.value} checked={item.attribute2 === items.value} readOnly />
                                                                                    <Checkmark className="checkmark" border data={items.value}>{items.value}</Checkmark>
                                                                                </Container>
                                                                            ))
                                                                        }
                                                                    </Dive>
                                                                </div>
                                                            }
                                                        </div>

                                                        <div>
                                                            {
                                                                index === 2 &&
                                                                <div>
                                                                    <Text padding="10px 0 10px 0" fontSize='18px' lineHeight="18px" fontWeight="700" textTransform='uppercase'>{product.id}:</Text>
                                                                    <Dive>
                                                                        {
                                                                            product.id === "Color" ? (product.items.map((items, index) =>
                                                                                <Container className="container" key={index}>
                                                                                    <Input type="radio" name={items.id + index} value={items.id} checked={item.attribute3 === items.value} readOnly />
                                                                                    <CheckmarkWrapper bg={items.value}>
                                                                                        <Checkmark className="checkmark" bg={items.value}></Checkmark>
                                                                                    </CheckmarkWrapper>
                                                                                </Container>
                                                                            )) : (product.items.map((items, index) =>
                                                                                <Container className="container" key={index}>
                                                                                    <Input type="radio" name={items.id} value={items.value} checked={item.attribute3 === items.value} readOnly />
                                                                                    <Checkmark className="checkmark" border data={items.value}>{items.value}</Checkmark>
                                                                                </Container>
                                                                            ))
                                                                        }
                                                                    </Dive>
                                                                </div>
                                                            }
                                                        </div>
                                                    </div>

                                                }
                                            </div>
                                        ))
                                    }
                                </div>

                                <Divr>
                                    <Divc>
                                        <Span fontSize='14px' lineHeight="16px" width="24px" height="24px" onClick={() => updateCart(item.name, item.brand, item.gallery, item.prices, item.attribute1, item.attribute2, item.attribute3, item.attributes, item.amount + 1)}>+</Span>
                                        <Span className="amount" noborder>{item.amount}</Span>
                                        <Span fontSize='14px' lineHeight="16px" width="24px" height="24px" onClick={() => updateCart(item.name, item.brand, item.gallery, item.prices, item.attribute1, item.attribute2, item.attribute3, item.attributes, item.amount - 1)}>-</Span>
                                    </Divc>

                                    <ProductCardImage width='200px' height='288px' src={item.image}></ProductCardImage>
                                </Divr>
                            </Divs>
                        )}

                    <TotalContainer>
                        <TotalWrapper>
                            <Text fontSize='24px' lineHeight="24px" fontWeight="500" >Tax 21%:</Text>
                            <Text fontSize='24px' lineHeight="24px" fontWeight="700" >{cartItems.map((symbol, index) => index === 0 && symbol.prices[isActiveCurrency].currency.symbol)} {((cartItems.reduce((a, c) => a + c.prices[isActiveCurrency].amount * c.amount, 0) * 0.21).toFixed(2))}</Text>
                        </TotalWrapper>
                        <TotalWrapper>
                            <Text fontSize='24px' lineHeight="24px" fontWeight="500" >Quantity:</Text>
                            <Text fontSize='24px' lineHeight="24px" fontWeight="700" >{cartItems.reduce((a, c) => a + c.amount, 0)}</Text>
                        </TotalWrapper>
                        <TotalWrapper>
                            <Text fontSize='24px' lineHeight="24px" fontWeight="500" >Total:</Text>
                            <Text fontSize='24px' lineHeight="24px" fontWeight="700" >{cartItems.map((symbol, index) => index === 0 && symbol.prices[isActiveCurrency].currency.symbol)} {(cartItems.reduce((a, c) => a + c.prices[isActiveCurrency].amount * c.amount, 0).toFixed(2))}</Text>
                        </TotalWrapper>
                    </TotalContainer>

                    <ButtonWrapper>
                        <Button>Order</Button>
                    </ButtonWrapper>
                </CartOverlayContainer>
            </CartOverlayWrapper>
        )
    }
}
