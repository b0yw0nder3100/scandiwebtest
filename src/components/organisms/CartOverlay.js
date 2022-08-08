import React, { Component } from 'react'
import { Link } from 'react-router-dom'

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
    TotalWrapper
} from "../../Styles/CartOverlayStyles";
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
        const { removeOverlay, updateCart } = this.props
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
                                                                                <Container className="container" key={index}>
                                                                                    <Input type="radio" name={items.id + index} value={items.id} checked={item.attribute1 === items.value} readOnly />
                                                                                    <CheckmarkWrapper bg={items.value}>
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
                                                                                    <Input type="radio" name={items.id} value={items.id} checked={item.attribute2 === items.value} readOnly />
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
                                                                                    <Input type="radio" name={items.id} value={items.id} checked={item.attribute3 === items.value} readOnly />
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
                                        <Span fontSize='14px' lineHeight="16px" width="24px" height="24px" onClick={() => updateCart(item.name, item.brand, item.gallery, item.currencySymbol, item.price, item.attribute1, item.attribute2, item.attribute3, item.attributes, item.amount + 1)}>+</Span>
                                        <Span className="amount" noborder>{item.amount}</Span>
                                        <Span fontSize='14px' lineHeight="16px" width="24px" height="24px" onClick={() => updateCart(item.name, item.brand, item.gallery, item.currencySymbol, item.price, item.attribute1, item.attribute2, item.attribute3, item.attributes, item.amount - 1)}>-</Span>
                                    </Divc>

                                    <ProductCardImage width='101px' height='190px' src={item.image}></ProductCardImage>
                                </Divr>
                            </Divs>
                        )}

                    <TotalWrapper>
                        <Text fontSize='16px' lineHeight="18px" fontWeight="500" >Total</Text>
                        <Text fontSize='16px' lineHeight="18px" fontWeight="500" >{cartItems.map((i, j) => j == 0 && i.currencySymbol)} {(cartItems.reduce((a, c) => a + c.price * c.amount, 0).toFixed(2))}</Text>
                    </TotalWrapper>
                    <ButtonWrapper>
                        <Link to='/cartpage'>
                            <Button plain onClick={removeOverlay}>view bag</Button>
                        </Link>
                        <Button>check out</Button>
                    </ButtonWrapper>
                </CartOverlayContainer>
            </CartOverlayWrapper>
        )
    }
}
