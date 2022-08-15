import React, { Component } from 'react'

import {
    AddToCartBtn,
    Checkmark,
    CheckmarkWrapper,
    Container,
    Div,
    DivTwo,
    DivThree,
    Dive,
    Input,
    ProductCardImage,
    ProductCardOverlauy,
    ProductInStock,
    SingleProductContainer,
    Text,
} from "../Styles/SingleProductStyles";
import withRouter from '../components/molecules/withRouter';


export class SingleProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: JSON.parse(localStorage.getItem('dataItems')).products.find((x) => x.id === this.props.params.productname),
            active: false,
            isImage: false,
            selectedOption1: '',
            selectedOption2: '',
            selectedOption3: '',
            amount: 1,
            imageNumber: 0
        }
        this.handleChange = this.handleChange.bind(this);
        this.AddToCart = this.AddToCart.bind(this);
        this.activeImage = this.activeImage.bind(this);
    }

    handleChange = e => {
        this.setState({ selectedOption1: e.target.value, selectedOption2: e.target.value, selectedOption3: e.target.value });
    }
    AddToCart = e => {
        e.preventDefault();
    }
    componentDidMount() {

        if (this.state.product.attributes.length === 1) {
            this.setState({ selectedOption1: this.state.product.attributes.find((i, j) => j === 0 ? i : undefined).items.find((k, l) => l === 0 && k.id).value })
        } else if (this.state.product.attributes.length === 2) {
            this.setState({ selectedOption1: this.state.product.attributes.find((i, j) => j === 0 ? i : undefined).items.find((k, l) => l === 0 && k.id).value })
            this.setState({ selectedOption2: this.state.product.attributes.find((i, j) => j === 1 ? i : undefined).items.find((k, l) => l === 0 && k.id).value })
        } else if (this.state.product.attributes.length === 3) {
            this.setState({ selectedOption1: this.state.product.attributes.find((i, j) => j === 0 ? i : undefined).items.find((k, l) => l === 0 && k.id).value })
            this.setState({ selectedOption2: this.state.product.attributes.find((i, j) => j === 1 ? i : undefined).items.find((k, l) => l === 0 && k.id).value })
            this.setState({ selectedOption3: this.state.product.attributes.find((i, j) => j === 2 ? i : undefined).items.find((k, l) => l === 0 && k.id).value })
        }

        this.setState({ isImage: 0 })
    }
    activeImage = index => {
        if (this.state.isImage === index) {
            return this.setState({ isImage: index })
        }
        this.setState({ isImage: index })
    }
    render() {
        const Items = JSON.parse(localStorage.getItem('dataItems'))
        const { isActiveCurrency } = this.props
        // console.log('Props:', this.props)
        const product = Items.products.find((x) => x.id === this.props.params.productname)


        let today = new Date()
        return (
            <>
                <SingleProductContainer>

                    <Div>
                        {product.gallery.map((items, index) =>
                            <ProductCardImage width='79px' height='80px' onClick={() => this.activeImage(index)} src={items} key={index}></ProductCardImage>)}
                    </Div>

                    {
                        product.inStock === false ? (<DivTwo>
                            <ProductCardOverlauy>
                                <ProductInStock>
                                    OUT OF STOCK
                                </ProductInStock>
                            </ProductCardOverlauy>
                            <ProductCardImage width='610px' height='511px' src={product.gallery[this.state.isImage]} opacity="0.5"></ProductCardImage>

                        </DivTwo>) : (<DivTwo>
                            <ProductCardImage width='610px' height='511px' src={product.gallery[this.state.isImage]}></ProductCardImage>
                        </DivTwo>)
                    }

                    <DivThree>
                        <Text fontSize='30px' lineHeight="27px" fontWeight="700">{product.brand}</Text>
                        <Text padding="16px 0 43px 0" fontSize='30px' lineHeight="27px" fontWeight="400">{product.name}</Text>
                        {product.attributes.map((product, index) =>
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
                                                                    <Input type="radio" name={items.id} value={items.id} onChange={(e) => this.setState({ selectedOption1: e.target.value })} checked={this.state.selectedOption1 === items.value} />
                                                                    <CheckmarkWrapper bg={items.value}>
                                                                        <Checkmark className="checkmark" bg={items.value}></Checkmark>
                                                                    </CheckmarkWrapper>
                                                                </Container>
                                                            )) : (product.items.map((items, index) =>
                                                                <Container className="container" key={index}>
                                                                    <Input type="radio" name={items.id} value={items.value} onChange={(e) => this.setState({ selectedOption1: e.target.value })} checked={this.state.selectedOption1 === items.value} />
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
                                                                    <Input type="radio" name={items.id + index} value={items.id} onChange={(e) => this.setState({ selectedOption2: e.target.value })} checked={this.state.selectedOption2 === items.value} />
                                                                    <CheckmarkWrapper bg={items.value}>
                                                                        <Checkmark className="checkmark" bg={items.value}></Checkmark>
                                                                    </CheckmarkWrapper>
                                                                </Container>
                                                            )) : (product.items.map((items, index) =>
                                                                <Container className="container" key={index}>
                                                                    <Input type="radio" name={items.id} value={items.value} onChange={(e) => this.setState({ selectedOption2: e.target.value })} checked={this.state.selectedOption2 === items.value} />
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
                                                                    <Input type="radio" name={items.id + index} value={items.id} onChange={(e) => this.setState({ selectedOption3: e.target.value })} checked={this.state.selectedOption3 === items.value} />
                                                                    <CheckmarkWrapper bg={items.value}>
                                                                        <Checkmark className="checkmark" bg={items.value}></Checkmark>
                                                                    </CheckmarkWrapper>
                                                                </Container>
                                                            )) : (product.items.map((items, index) =>
                                                                <Container className="container" key={index}>
                                                                    <Input type="radio" name={index + items.id} value={items.value} onChange={(e) => this.setState({ selectedOption3: e.target.value })} checked={this.state.selectedOption3 === items.value} />
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
                        )}

                        <Text padding="38px 0 10px 0" fontSize='18px' lineHeight="18px" fontWeight="700" textTransform='uppercase'>Price:</Text>


                        <Text padding="0 0 36px 0" fontSize='24px' lineHeight="18px" fontWeight="700" textTransform='uppercase'>{product.prices[isActiveCurrency].currency.symbol} {product.prices[isActiveCurrency].amount}</Text>

                        {
                            product.inStock === false ? (<AddToCartBtn disabled opacity="0.5" >Add to Cart</AddToCartBtn>) :
                                (<AddToCartBtn cursor onClick={() => this.props.updateCart(today.getTime(), product.name, product.brand, product.gallery, product.prices, this.state.selectedOption1, this.state.selectedOption2, this.state.selectedOption3, product.attributes, this.state.amount, this.state.imageNumber)}>Add to Cart</AddToCartBtn>)
                        }

                        <Text padding="56px 0 0 0" fontSize='16px' lineHeight="160%" fontWeight="400" dangerouslySetInnerHTML={{ __html: product.description }} />
                    </DivThree>

                </SingleProductContainer>
            </>
        )
    }
}

export default withRouter(SingleProduct);
