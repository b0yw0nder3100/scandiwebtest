import React, { Component } from 'react';
import { Routes, Route } from "react-router-dom"

import Products from './Pages/Products';
import SingleProduct from './Pages/SingleProduct';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navItems: [],
      currencyItems: [],
      allItems: [],
      activeCategory: true,
      activeCategoryTwo: false,
      activeCategoryThree: false,
      activeCurrency: false,
      nav: 'all'
    }
  }
  componentDidMount() {
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
                        category(input: { title: "${this.state.nav}" }) {
                        products {
                            id
                            name
                            inStock
                            gallery
                            prices {
                                currency {
                                label
                                symbol
                            }
                                amount
                            }
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
        console.log(data.data.category.products)
        return data
      })
      .then((data) => this.setState({ allItems: data.data.category.products, navItems: data.data.categories, currencyItems: data.data.currencies }))
  }
  render() {

    return (
      <div>
        <Routes>
          <Route path='/' element={<Products
            allItems={this.state.allItems} navItems={this.state.navItems} currencyItems={this.state.currencyItems} />} />
          <Route path='/product/:category/:id' element={<SingleProduct navItems={this.state.navItems} currencyItems={this.state.currencyItems} />} />
        </Routes>
      </div>
    );
  }
}

export default App;
