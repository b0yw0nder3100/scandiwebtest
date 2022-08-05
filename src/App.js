import React, { Component } from 'react';
import { Routes, Route, Link } from "react-router-dom"

import Products from './Pages/Products';
import SingleProduct from './Pages/SingleProduct';
import shoppingLogo from './Assets/shopping-logo-cart-green.png'
import shoppingCart from './Assets/interface/shopping-cart.png'
import dropdown from './Assets/interface/dropdown.png'
import {
  Nav,
  NavBarContainer,
  Category,
  List,
  ListTwo,
  Currenc,
  Currency,
  Div,
  Img,
  Option,
  Select,
  SelectContainer,
  CartItems,
} from './Styles/NavbarStyles';
import CartOverlay from './components/organisms/CartOverlay';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navItems: [],
      currencyItems: [],
      allItems: [],
      isActive: false,
      isActiveCurrency: 0,
      activeCurrency: false,
      cart: JSON.parse(localStorage.getItem('ScandiwebCart')).length < 1 ? [] : JSON.parse(localStorage.getItem('ScandiwebCart')),
      cartOverlay: false,
    }
    this.handleCurrency = this.handleCurrency.bind(this);
    this.active = this.active.bind(this);
    this.activeCurrency = this.activeCurrency.bind(this);
    this.click = this.click.bind(this);
  }
  handleCurrency = (index) => {
    this.setState({ activeCurrency: true })
    this.activeCurrency(index)
  }

  click = (index) => {
    this.active(index)
  }

  active = index => {
    if (this.state.isActive === index) {
      return this.setState({ isActive: index })
    }
    this.setState({ isActive: index })
  }

  activeCurrency = index => {
    if (this.state.isActiveCurrency === index) {
      return this.setState({ isActiveCurrency: index })
    }
    this.setState({ isActiveCurrency: index })
  }

  componentDidMount() {
    if (window.location.pathname.split('/')[2] === "clothes") {
      this.setState({ isActive: 1 })
    } else if (window.location.pathname.split('/')[2] === "tech") {
      this.setState({ isActive: 2 })
    } else
      this.setState({ isActive: 0 })

    this.setState({ isActiveCurrency: 0 })


    fetch('http://localhost:4000/', {
      method: 'POST',
      body: JSON.stringify({
        query: `{
                        categories {
                            name
                        }
                        currencies {
                            label
                            symbol
                            }
                        category(input: { title: "all" }) {
                        products {
                            id
                            name
                            inStock
                            gallery
                          	category
                            prices {
                                currency {
                                label
                                symbol
                            }
                                amount
                            }
                          description
                          attributes{
                            id
                            name
                            type
                            items {
                              displayValue
                              value
                              id
                            }
                          }
                          brand
                        }
                      }
                }`
      }),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem('dataItems', JSON.stringify(data.data.category))
        return data
      })
      .then((data) => this.setState({ allItems: data.data.category.products, navItems: data.data.categories, currencyItems: data.data.currencies }))
  }
  componentDidUpdate() {
  }
  render() {
    const cartItems = JSON.parse(localStorage.getItem('ScandiwebCart'))

    localStorage.setItem('ScandiwebCart', JSON.stringify(this.state.cart))
    const updateCart = (name, brand, image, currencySymbol, price, color, attribute1, attribute2, attribute3, attributes) => {
      const cartItems = JSON.parse(localStorage.getItem('ScandiwebCart'))
      this.setState({ cart: ([...cartItems, { name, brand, image, currencySymbol, price, color, attribute1, attribute2, attribute3, attributes }]) })
      let newset = cartItems.filter((pep) => pep.name !== name)
      this.setState({ cart: ([...newset, { name, brand, image, currencySymbol, price, color, attribute1, attribute2, attribute3, attributes }]) })
      alert(`${name} has been added to your cart`)
      console.log(this.state.cart);
    }

    return (
      <div>
        <Nav>
          <NavBarContainer>
            <Category>
              {this.state.navItems.map((item, index) =>
                <div key={index}>
                  {this.state.isActive === index ?
                    <Link to={`/${item.name.toLowerCase()} `}>
                      <ListTwo active onClick={() => this.click(index)}>{item.name}</ListTwo>
                    </Link> :
                    <Link to={`/${item.name.toLowerCase()} `}>
                      <List onClick={() => this.click(index)}>{item.name}</List>
                    </Link>
                  }
                </div>
              )}
            </Category>

            <div>
              <Img src={shoppingLogo} width="31px" height="29px" />
            </div>

            <Div>
              <SelectContainer>
                {
                  this.state.currencyItems.map((item, index) => (
                    <div key={index}>
                      <Currenc onClick={() => this.handleCurrency(index)}>
                        {this.state.isActiveCurrency === index &&
                          <Currency className='one' >{item.symbol}</Currency>}
                      </Currenc>
                    </div>

                  ))}

                <Select active={this.state.activeCurrency} onClick={() => this.setState({ activeCurrency: false })}>
                  {
                    this.state.currencyItems.map((item, index) => (
                      <div key={index} >
                        <Option onClick={() => this.activeCurrency(index)}>{item.symbol} {item.label}</Option>
                      </div>
                    ))}
                </Select>


              </SelectContainer>

              <Img src={dropdown} width="9px" height='6px' marginLeft="-15px" marginRight="30px" active={this.state.activeCurrency} />

              <div onClick={() => this.setState({ cartOverlay: !this.state.cartOverlay })}>
                <Img src={shoppingCart} width='20px' height='20px' alt='shopping cart' />
                <CartItems>{cartItems.length > 0 ? cartItems.length : 0}</CartItems>
              </div>
            </Div>
          </NavBarContainer>

          {
            this.state.cartOverlay &&
            <CartOverlay />
          }

        </Nav>


        <Routes>
          <Route basename={'/'} path='/'
            element={<Products
              allItems={this.state.allItems}
              navItems={this.state.navItems}
              currencyItems={this.state.currencyItems}
              isActive={this.state.isActive}
              isActiveCurrency={this.state.isActiveCurrency}
              cartOverlay={this.state.cartOverlay}
            />}>

            <Route path='/:all' element={<Products />} />
            <Route path='/:tech' element={<Products />} />
            <Route path='/:clothes' element={<Products />} />
          </Route>


          <Route path='/:category/:productname' element={<SingleProduct cartOverlay={this.state.cartOverlay} isActiveCurrency={this.state.isActiveCurrency} updateCart={updateCart} />} />
        </Routes>
      </div>
    );
  }
}

export default App;
