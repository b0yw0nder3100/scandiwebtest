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
  ProductsHeader,
  Select,
  SelectContainer
} from './Styles/NavbarStyles';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navItems: [],
      currencyItems: [],
      allItems: [],
      isActive: false,
      activeCurrency: false
    }
    this.handleCurrency = this.handleCurrency.bind(this);
    this.active = this.active.bind(this);
    this.click = this.click.bind(this);
  }
  handleCurrency = () => {
    this.setState({ activeCurrency: true })
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
  componentDidMount() {
    if (window.location.pathname.split('/')[2] === "clothes") {
      this.setState({ isActive: 1 })
    } else if (window.location.pathname.split('/')[2] === "tech") {
      this.setState({ isActive: 2 })
    } else
      this.setState({ isActive: 0 })


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
                  this.state.currencyItems.map((item, index) =>
                    <div key={index}>
                      <Currenc onClick={this.handleCurrency}>
                        <Currency className='one'>{index === 0 && item.symbol}</Currency>
                      </Currenc>


                      <Select active={this.state.activeCurrency} onClick={() => this.setState({ activeCurrency: false })}>
                        <Option>{item.label} {item.symbol}</Option>
                        <Option>{item.label} {item.symbol}</Option>
                      </Select>
                    </div>
                  )}

              </SelectContainer>

              <Img src={dropdown} width="9px" height='6px' marginLeft="-15px" marginRight="30px" active={this.state.activeCurrency} />

              <div>
                <Img src={shoppingCart} width='20px' height='20px' alt='shopping cart' />
              </div>
            </Div>
          </NavBarContainer>


          {this.state.navItems.map((item, index) =>
            <div key={index}>
              {this.state.isActive === index && <ProductsHeader active onClick={() => this.active(index)}>{item.name}</ProductsHeader>}
            </div>
          )}
        </Nav>


        <Routes>
          <Route basename={'/'} path='/'
            element={<Products
              allItems={this.state.allItems}
              navItems={this.state.navItems}
              currencyItems={this.state.currencyItems}
              isActive={this.state.isActive}
            />}>

            <Route path='/:all' element={<Products isActive={this.state.isActive} />} />
            <Route path='/:tech' element={<Products isActive={this.state.isActive} />} />
            <Route path='/:clothes' element={<Products isActive={this.state.isActive} />} />
          </Route>
          <Route path='/product/:category/:id' element={<SingleProduct navItems={this.state.navItems} currencyItems={this.state.currencyItems} />} />
        </Routes>
      </div>
    );
  }
}

export default App;
