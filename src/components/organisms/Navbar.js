// import React, { Component } from 'react'
// import styled from 'styled-components'
// import { Link } from 'react-router-dom';

// import shoppingLogo from '../../Assets/shopping-logo-cart-green.png'
// import shoppingCart from '../../Assets/interface/shopping-cart.png'
// import dropdown from '../../Assets/interface/dropdown.png'
// import {
//     Nav,
//     NavBarContainer,
//     Category,
//     List,
//     ListTwo,
//     Currenc,
//     Currency,
//     Div,
//     Img,
//     Option,
//     ProductsHeader,
//     Select,
//     SelectContainer
// } from '../../Styles/NavbarStyles';

// export default class Navbar extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             navItems: [],
//             currencyItems: [],
//             allItems: [],
//             currency: {
//                 'USD': ['$', ' USD'],
//                 'Eur': ['€', ' EUR'],
//                 'JPY': ['¥', ' JPY'],
//             },
//             isActive: false,
//             navs: 'clothes'

//         }
//         this.handleCurrency = this.handleCurrency.bind(this);
//         this.active = this.active.bind(this);
//         this.click = this.click.bind(this);
//     }
//     handleCurrency = () => {
//         this.setState({ activeCurrency: true })
//     }

//     click = (index) => {
//         this.active(index)
//     }

//     active = index => {
//         if (this.state.isActive === index) {
//             return this.setState({ isActive: index })
//         }
//         this.setState({ isActive: index })
//     }

//     componentDidMount() {
//         if (window.location.pathname.split('/')[2] === "clothes") {
//             this.setState({ isActive: 1 })
//         } else if (window.location.pathname.split('/')[2] === "tech") {
//             this.setState({ isActive: 2 })
//         } else
//             this.setState({ isActive: 0 })
//     }

//     render() {
//         return (
//             <Nav>
//                 <NavBarContainer>

//                     <Category>
//                         {this.props.navItems.map((item, index) =>
//                             <div key={index}>
//                                 {this.state.isActive === index ?
//                                     <Link to={`/ ${item.name.toLowerCase()} `}>
//                                         <ListTwo active onClick={() => this.click(index)}>{item.name}</ListTwo>
//                                     </Link> :
//                                     <Link to={`/ ${item.name.toLowerCase()} `}>
//                                         <List onClick={() => this.click(index)}>{item.name}</List>
//                                     </Link>
//                                 }
//                             </div>
//                         )}
//                     </Category>

//                     <div>
//                         <Img src={shoppingLogo} width="31px" height="29px" />
//                     </div>

//                     <Div>
//                         <SelectContainer>
//                             <Currenc onClick={this.handleCurrency}>
//                                 <Currency className='one'>{this.state.currency.USD[0]}</Currency>
//                                 <Img src={dropdown} width="9px" height='6px' active={this.state.activeCurrency} />
//                             </Currenc>

//                             <Select active={this.state.activeCurrency} onClick={() => this.setState({ activeCurrency: false })}>
//                                 <Option>{this.state.currency.USD}</Option>
//                                 <Option>{this.state.currency.Eur}</Option>
//                                 <Option>{this.state.currency.JPY}</Option>
//                             </Select>

//                         </SelectContainer>

//                         <div>
//                             <Img src={shoppingCart} width='20px' height='20px' alt='shopping cart' />
//                         </div>
//                     </Div>
//                 </NavBarContainer>


//                 {this.props.navItems.map((item, index) =>
//                     <div key={index}>
//                         {this.state.isActive === index && <ProductsHeader active onClick={() => this.active(index)}>{item.name}</ProductsHeader>}
//                     </div>
//                 )}


//             </Nav>
//         )
//     }
// }
