import React, { Component } from 'react';
import { Routes, Route, Link } from "react-router-dom"

import Products from './Pages/Products';
import SingleProduct from './Pages/SingleProduct';

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
  CartIcon,
} from './Styles/NavbarStyles';
import CartOverlay from './components/organisms/CartOverlay';
import withRouter from './components/molecules/withRouter';
import CartPage from './Pages/CartPage';
import Navbar from './components/organisms/Navbar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navItems: [],
      currencyItems: [],
      allItems: [],
      isActive: false,
      isActiveCurrency: 0,
      isCurrennt: JSON.parse(localStorage.getItem('currency')),
      activeCurrency: false,
      cart: JSON.parse(localStorage.getItem('ScandiwebCart')).length < 1 ? [] : JSON.parse(localStorage.getItem('ScandiwebCart')),
      cartOverlay: false,
    }
  }
  removeOverlay = () => {
    this.setState({ cartOverlay: false })
    window.scrollTo(0, 0)
  }
  handleCurrency = (index) => {
    this.setState({ activeCurrency: true })
    this.activeCurrency(index)
  }

  click = (index) => {
    this.active(index)
  }
  updateCart = (name, brand, image, currencySymbol, price, attribute1, attribute2, attribute3, attributes, amount) => {
    if (amount === 0) {
      const cartItems = JSON.parse(localStorage.getItem('ScandiwebCart'))
      this.setState({ cart: ([...cartItems, { name, brand, image, currencySymbol, price, attribute1, attribute2, attribute3, attributes, amount }]) })
      let newset = cartItems.filter((pep) => pep.name !== name)
      this.setState({ cart: ([...newset]) })
    } else {
      const cartItems = JSON.parse(localStorage.getItem('ScandiwebCart'))
      this.setState({ cart: ([...cartItems, { name, brand, image, currencySymbol, price, attribute1, attribute2, attribute3, attributes, amount }]) })
      let newset = cartItems.filter((pep) => pep.name !== name)
      this.setState({ cart: ([...newset, { name, brand, image, currencySymbol, price, attribute1, attribute2, attribute3, attributes, amount }]) })
    }
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
  currencyfunction = () => {
    this.setState({ activeCurrency: false })
  }
  toggleOverlay = () => {
    this.setState({ cartOverlay: !this.state.cartOverlay })
  }
  componentDidMount() {
    if (window.location.pathname.split('/')[2] === "clothes") {
      this.setState({ isActive: 1 })
    } else if (window.location.pathname.split('/')[2] === "tech") {
      this.setState({ isActive: 2 })
    } else
      this.setState({ isActive: 0 })

    if (JSON.parse(localStorage.getItem('currency')) === 0) {
      this.setState({ isActiveCurrency: 0 })
    } else if (JSON.parse(localStorage.getItem('currency')) === 1) {
      this.setState({ isActiveCurrency: 1 })
    } else if (JSON.parse(localStorage.getItem('currency')) === 2) {
      this.setState({ isActiveCurrency: 2 })
    } else if (JSON.parse(localStorage.getItem('currency')) === 3) {
      this.setState({ isActiveCurrency: 3 })
    } else if (JSON.parse(localStorage.getItem('currency')) === 4) {
      this.setState({ isActiveCurrency: 4 })
    }

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
  componentDidUpdate(prevProp, prevState, snapshot) {
    localStorage.setItem("currency", JSON.stringify(this.state.isActiveCurrency))
  }
  render() {
    localStorage.setItem('ScandiwebCart', JSON.stringify(this.state.cart))
    return (
      <div>
        <Navbar
          navItems={this.state.navItems}
          currencyItems={this.state.currencyItems}
          isActive={this.state.isActive}
          isActiveCurrency={this.state.isActiveCurrency}
          cartOverlay={this.state.cartOverlay}
          cart={this.state.cart}
          click={this.click}
          activeCurrency={this.state.activeCurrency}
          activeCurrencies={this.activeCurrency}
          handleCurrency={this.handleCurrency}
          toggleOverlay={this.toggleOverlay}
          currencyfunction={this.currencyfunction}></Navbar>


        {
          this.state.cartOverlay &&
          <CartOverlay removeOverlay={this.removeOverlay} updateCart={this.updateCart} />
        }
        <Routes>
          <Route basename={'/'} path='/'
            element={<Products
              allItems={this.state.allItems}
              navItems={this.state.navItems}
              currencyItems={this.state.currencyItems}
              isActive={this.state.isActive}
              isActiveCurrency={this.state.isActiveCurrency}
              cartOverlay={this.state.cartOverlay}
              updateCart={this.updateCart}
            />}>

            <Route path='/:all' element={<Products />} />
            <Route path='/:tech' element={<Products />} />
            <Route path='/:clothes' element={<Products />} />
          </Route>


          <Route path='/:category/:productname' element={<SingleProduct cartOverlay={this.state.cartOverlay} isActiveCurrency={this.state.isActiveCurrency} updateCart={this.updateCart} />} />
          <Route path='/cartpage' element={<CartPage cartOverlay={this.state.cartOverlay} isActiveCurrency={this.state.isActiveCurrency} updateCart={this.updateCart} />} />
        </Routes>
      </div>
    );
  }
}

export default withRouter(App);
