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
object-fit: contain
`
const Div = styled.div`
display: flex;
flex-direction: column;
`
const Dive = styled.div`
display: flex;
padding:20px 0 0 0;
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
const Container = styled.label`
  display: block;
  position: relative;
  margin-bottom: 12px;
  margin-right: 12px;
  cursor: pointer;
  font-size: 16px;
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
const Checkmark = styled.span`
  position: relative;
  padding: 15px 25px;
  top: 0;
  left: 0;
  height: ${props => props.border ? '45px' : '36px'};
  width: ${props => props.border ? '63px' : '36px'};
  margin-right: 12px;
  border: ${props => props.border ? '1px solid var(--c-text)' : '0.1px solid rgb(17, 17, 17)'};
  background: ${props => props.bg};


    ${Input}:checked + && {
    background-color: ${props => props.border ? 'black' : 'none'};
    border: ${props => props.bg ? '2px solid var(--c-primary)' : 'none'};
    color: ${props => props.border ? 'white' : 'none'};
    padding: ${props => props.bg ? '12px 23px' : 'none'};
  }
  

}`

export class SingleProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            selectedOption1: '',
            selectedOption2: '',
            selectedOption3: '',
            color: '',
            test: {}
        }
        this.handleChange = this.handleChange.bind(this);
        // this.updateTest = this.updateTest.bind(this);
        this.AddToCart = this.AddToCart.bind(this);
    }
    // updateTest = (n, v) => {
    //     this.setState({test: prevState, {
    //         prevState[n]: v
    //     }})
    // }
    handleChange = e => {
        this.setState({ selectedOption1: e.target.value, selectedOption2: e.target.value, selectedOption3: e.target.value });
    }
    AddToCart = e => {
        e.preventDefault();
        console.log(this.state.color, this.state.selectedOption1, this.state.selectedOption2, this.state.selectedOption3);
    }
    componentDidMount() {
        this.setState({ isActiveCurrency: 0 })
    }
    render() {
        const Items = JSON.parse(localStorage.getItem('dataItems'))
        const { isActiveCurrency } = this.props
        console.log('Props:', this.props)
        const product = Items.products.find((x) => x.id === this.props.params.productname)
        return (
            <>
                <SingleProductContainer>

                    <Div>
                        {product.gallery.map((items, index) =>
                            <ProductCardImage width='79px' height='80px' src={items}></ProductCardImage>)}
                    </Div>

                    <div>
                        <ProductCardImage width='610px' height='511px' src={product.gallery[0]}></ProductCardImage>
                    </div>

                    <div>
                        <Text fontSize='30px' lineHeight="27px" fontWeight="700">{product.brand}</Text>
                        <Text padding="16px 0 43px 0" fontSize='30px' lineHeight="27px" fontWeight="400">{product.name}</Text>
                        {product.attributes.map((product, index) =>
                            <div>
                                {
                                    product.id === 'Color' ?
                                        (
                                            <div>
                                                <Text padding="10px 0 10px 0" fontSize='18px' lineHeight="18px" fontWeight="700" textTransform='uppercase'>{product.id}:</Text>
                                                <Dive>
                                                    {
                                                        product.items.map((items, index) =>
                                                            <Container class="container">
                                                                <Input type="radio" name={product.id} value={items.id} onChange={(e) => this.setState({ color: e.target.value })} checked={this.state.color === items.id} />
                                                                <Checkmark class="checkmark" bg={items.value}></Checkmark>
                                                            </Container>
                                                        )
                                                    }
                                                </Dive>
                                            </div>
                                        )
                                        :
                                        (
                                            <div>
                                                <div>
                                                    {
                                                        index === 0 &&
                                                        <div>
                                                            <Text padding="10px 0 10px 0" fontSize='18px' lineHeight="18px" fontWeight="700" textTransform='uppercase'>{product.id}:</Text>
                                                            <Dive>
                                                                {
                                                                    product.items.map((items, index) =>
                                                                        <Container class="container">
                                                                            <Input type="radio" name={product.id} value={items.value} onChange={(e) => this.setState({ selectedOption1: e.target.value })} />
                                                                            <Checkmark class="checkmark" border data={items.value}>{items.value}</Checkmark>
                                                                        </Container>
                                                                    )
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
                                                                    product.items.map((items, index) =>
                                                                        <Container class="container">
                                                                            <Input type="radio" name={product.id} value={items.value} onChange={(e) => this.setState({ selectedOption2: e.target.value })} />
                                                                            <Checkmark class="checkmark" border data={items.value}>{items.value}</Checkmark>
                                                                        </Container>
                                                                    )
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
                                                                    product.items.map((items, index) =>
                                                                        <Container class="container">
                                                                            <Input type="radio" name={product.id} value={items.value} onChange={(e) => this.setState({ selectedOption3: e.target.value })} />
                                                                            <Checkmark class="checkmark" border data={items.value}>{items.value}</Checkmark>
                                                                        </Container>
                                                                    )
                                                                }
                                                            </Dive>
                                                        </div>
                                                    }
                                                </div>
                                            </div>
                                        )
                                }
                            </div>
                        )}

                        <Text padding="38px 0 10px 0" fontSize='18px' lineHeight="18px" fontWeight="700" textTransform='uppercase'>Price:</Text>


                        <Text padding="0 0 36px 0" fontSize='24px' lineHeight="18px" fontWeight="700" textTransform='uppercase'>{product.prices[isActiveCurrency].currency.symbol} {product.prices[isActiveCurrency].amount}</Text>

                        <AddToCartBtn onClick={this.AddToCart}>Add to Cart</AddToCartBtn>

                        <Text padding="56px 0 0 0" fontSize='16px' lineHeight="160%" fontWeight="400" dangerouslySetInnerHTML={{ __html: product.description }} />
                    </div>

                </SingleProductContainer>
            </>
        )
    }
}

export default withRouter(SingleProduct);
