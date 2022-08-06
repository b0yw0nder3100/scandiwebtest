import React, { Component } from 'react'
import styled from 'styled-components'

const CartOverlayWrapper = styled.div`
position: absolute;
background: rgba(57, 55, 72, 0.22);
width:100%;
height:100vh;
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
const Dive = styled.div`
display: flex;
padding:5px 0 0 0;
`
const Container = styled.label`
  display: block;
  position: relative;
  margin-right: 10px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`
const Input = styled.input.attrs({ type: "radio", })`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`
const CheckmarkWrapper = styled.span`
cursor: pointer;
   ${Input}:checked + && {
    border: ${props => props.bg ? '2px solid var(--c-primary)' : 'none'};
    padding: ${props => props.bg ? '4px 2px 6px 2px' : 'none'};
  }

}`
const Checkmark = styled.span`
  position: relative;
  padding: ${props => props.border ? '5px 8px' : '4px 12px'};;
  top: 0;
  left: 0;
font-weight: 400;
font-size: 14px;
line-height: 160%;
  border: ${props => props.border ? '1px solid var(--c-text)' : '0.1px solid rgb(17, 17, 17)'};
  background: ${props => props.bg};


    ${Input}:checked + && {
    background-color: ${props => props.border ? 'black' : 'none'};
    color: ${props => props.border ? 'white' : 'none'};
  }
}`
const Button = styled.button`
font-weight: 600;
font-size: 14px;
line-height: 120%;
padding: 16px 32px;
text-transform:uppercase;
background: var(--c-primary);
border: none;
`
const ButtonWrapper = styled.div`
display:flex;
justify-content:space-between;
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
                                                                                <Container class="container">
                                                                                    <Input type="radio" name={items.id} value={items.id} checked={item.attribute1 === items.id} />
                                                                                    <CheckmarkWrapper bg={items.value} key={index}>
                                                                                        <Checkmark class="checkmark" bg={items.value}></Checkmark>
                                                                                    </CheckmarkWrapper>
                                                                                </Container>
                                                                            )) : (product.items.map((items, index) =>
                                                                                <Container class="container" key={index}>
                                                                                    <Input type="radio" name={items.id} value={items.value} checked={item.attribute1 === items.value} />
                                                                                    <Checkmark class="checkmark" border data={items.value}>{items.value}</Checkmark>
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
                                                                                <Container class="container" key={index}>
                                                                                    <Input type="radio" name={items.id} value={items.id} checked={item.attribute2 === items.id} />
                                                                                    <CheckmarkWrapper bg={items.value}>
                                                                                        <Checkmark class="checkmark" bg={items.value}></Checkmark>
                                                                                    </CheckmarkWrapper>
                                                                                </Container>
                                                                            )) : (product.items.map((items, index) =>
                                                                                <Container class="container" key={index}>
                                                                                    <Input type="radio" name={items.id} value={items.value} checked={item.attribute2 === items.value} />
                                                                                    <Checkmark class="checkmark" border data={items.value}>{items.value}</Checkmark>
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
                                                                                <Container class="container" key={index}>
                                                                                    <Input type="radio" name={items.id} value={items.id} checked={item.attribute3 === items.id} />
                                                                                    <CheckmarkWrapper bg={items.value}>
                                                                                        <Checkmark class="checkmark" bg={items.value}></Checkmark>
                                                                                    </CheckmarkWrapper>
                                                                                </Container>
                                                                            )) : (product.items.map((items, index) =>
                                                                                <Container class="container" key={index}>
                                                                                    <Input type="radio" name={items.id} value={items.value} checked={item.attribute3 === items.value} />
                                                                                    <Checkmark class="checkmark" border data={items.value}>{items.value}</Checkmark>
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
                                        <Span fontSize='14px' lineHeight="16px" width="24px" height="24px" onClick={this.Increase}>+</Span>
                                        <Span noborder>{this.state.count}</Span>
                                        <Span fontSize='14px' lineHeight="16px" width="24px" height="24px" onClick={this.Decrease}>-</Span>
                                    </Divc>

                                    <ProductCardImage width='121px' height='190px' src={item.image}></ProductCardImage>
                                </Divr>
                            </Divs>
                        )}


                    <ButtonWrapper>
                        <Button>view bag</Button>
                        <Button>check out</Button>
                    </ButtonWrapper>
                </CartOverlayContainer>
            </CartOverlayWrapper>
        )
    }
}
