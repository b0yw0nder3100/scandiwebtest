import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';


import shoppingLogo from '../../Assets/shopping-logo-cart-green.png'
import shoppingCart from '../../Assets/interface/shopping-cart.png'
import dropdown from '../../Assets/interface/dropdown.png'
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
} from '../../Styles/NavbarStyles';

export default class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        this.setState({ isActiveCurrency: 0 })
    }

    render() {
        const { navItems, isActive, click, currencyItems, isActiveCurrency, activeCurrency, activeCurrencies, cart, toggleOverlay, currencyfunction, handleCurrency } = this.props
        return (
            <Nav>
                <NavBarContainer>
                    <Category>
                        {navItems.map((item, index) =>
                            <div key={index}>
                                {isActive === index ?
                                    <Link to={`/${item.name.toLowerCase()} `}>
                                        <ListTwo active onClick={() => click(index)}>{item.name}</ListTwo>
                                    </Link> :
                                    <Link to={`/${item.name.toLowerCase()} `}>
                                        <List onClick={() => click(index)}>{item.name}</List>
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
                                currencyItems.map((item, index) => (
                                    <div key={index}>
                                        <Currenc onClick={() => handleCurrency(index)}>
                                            {isActiveCurrency === index &&
                                                <Currency className='one' >{item.symbol}</Currency>}
                                        </Currenc>
                                    </div>

                                ))}

                            <Select active={activeCurrency} onClick={currencyfunction}>
                                {
                                    currencyItems.map((item, index) => (
                                        <div key={index} >
                                            <Option onClick={() => activeCurrencies(index)}>{item.symbol} {item.label}</Option>
                                        </div>
                                    ))}
                            </Select>


                        </SelectContainer>

                        <Img src={dropdown} width="9px" height='6px' marginLeft="-15px" marginRight="30px" active={activeCurrency} />

                        <CartIcon onClick={toggleOverlay} >
                            <Img src={shoppingCart} width='20px' height='20px' alt='shopping cart' />
                            <CartItems>{cart.length > 0 ? cart.length : 0}</CartItems>
                        </CartIcon>
                    </Div>
                </NavBarContainer>
            </Nav>

        )
    }
}
