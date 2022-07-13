import React, { Component } from 'react'
import styled from 'styled-components'

import shoppingLogo from '../../Assets/shopping-logo-cart-green.png'
import shoppingCart from '../../Assets/interface/shopping-cart.png'
import dropdown from '../../Assets/interface/dropdown.png'

const NavBarContainer = styled.nav`
padding: 28px 0px 32px 0px;
display:flex;
justify-content:space-between;
align-items:center;
`
const Category = styled.ul` 
display:flex;
justify-content:space-between;
`
const List = styled.li`
list-style:none;
font-weight: 600;
cursor: pointer;
font-size: 16px;
text-transform:uppercase;
line-height: 120%;
color: ${(props) => props.active ? 'var(--c-primary)' : 'var(--c-text)'};
margin-right:32px;
transition: border-bottom 0.5s ease-in-out;
position:relative;
:hover {
color:var(--c-primary);
}
::after {
content: "";
width: 100%;
top:60px;
position:absolute;
height: 1px;
background: ${(props) => props.active ? 'var(--c-primary)' : 'none'};
display: block;
margin: auto;
-webkit - transition: 0.5s;
transition: 0.5s ease-in-out;
}`
const ListTwo = styled.li`
list-style:none;
font-weight: 600;
cursor: pointer;
font-size: 16px;
text-transform:uppercase;
line-height: 120%;
color: ${(props) => props.active ? 'var(--c-primary)' : 'var(--c-text)'};
margin-right:32px;
transition: border-bottom 0.5s ease-in-out;
position:relative;
:hover {
color:var(--c-primary);
}
::after {
content: "";
width: 100%;
top:60px;
position:absolute;
height: 1px;
background: ${(props) => props.active ? 'var(--c-primary)' : 'none'};
display: block;
margin: auto;
-webkit - transition: 0.5s;
transition: 0.5s ease-in-out;
}
`
const Img = styled.img`
width: ${(props) => props.width};
height: ${(props) => props.height};
transform: rotate(${(props) => props.active ? '180deg' : '0deg'});
`
const SelectContainer = styled.div`
position:relative;
justify-content:space-between;
align-items:center;
margin-right:22px;
cursor:pointer;
`
const Select = styled.ul`
position:absolute;
width:114px;
margin-top:12px;
top:${(props) => props.active ? '32px' : '-332px'};
left:-20px;
background: var(--c-white);
filter: drop-shadow(0px 4px 35px rgba(168, 172, 176, 0.19));
`
const Option = styled.li`
list-style:none;
padding:20px;
:hover{
    background: var(--c-bg)
}
`
const Currenc = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
`
const Currency = styled.h1`
font-weight: 500;
font-size: 18px;
line-height: 160%;
color: var(--c-text);
margin-right:10px;
`
const Div = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
`

const ProductsHeader = styled.h1`
padding:80px 0 119px;
font-weight: 400;
font-size: 42px;
line-height: 160%;
 text-transform: capitalize;
`



export default class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navItems: [],
            currencyItems: [],
            currency: {
                'USD': ['$', ' USD'],
                'Eur': ['€', ' EUR'],
                'JPY': ['¥', ' JPY'],
            },
            isActive: false

        }
        this.handleCurrency = this.handleCurrency.bind(this);
        this.active = this.active.bind(this);
    }
    handleCurrency = () => {
        this.setState({ activeCurrency: true })
    }

    active = index => {
        if (this.state.isActive === index) {
            return this.setState({ isActive: index })
        }
        this.setState({ isActive: index })
    }

    componentDidMount() {
        this.setState({ isActive: 0 })
    }
    render() {

        return (
            <nav>
                <NavBarContainer>

                    <Category>
                        {this.props.navItems.map((item, index) =>
                            <div key={index}>
                                {this.state.isActive === index ? <ListTwo active onClick={() => this.active(index)}>{item.name}</ListTwo> : <List onClick={() => this.active(index)}>{item.name}</List>}
                            </div>
                        )}
                    </Category>

                    <div>
                        <Img src={shoppingLogo} width="31px" height="29px" />
                    </div>

                    <Div>
                        <SelectContainer>
                            <Currenc onClick={this.handleCurrency}>
                                <Currency className='one'>{this.state.currency.USD[0]}</Currency>
                                <Img src={dropdown} width="9px" height='6px' active={this.state.activeCurrency} />
                            </Currenc>

                            <Select active={this.state.activeCurrency} onClick={() => this.setState({ activeCurrency: false })}>
                                <Option>{this.state.currency.USD}</Option>
                                <Option>{this.state.currency.Eur}</Option>
                                <Option>{this.state.currency.JPY}</Option>
                            </Select>

                        </SelectContainer>

                        <div>
                            <Img src={shoppingCart} width='20px' height='20px' alt='shopping cart' />
                        </div>
                    </Div>
                </NavBarContainer>


                {this.props.navItems.map((item, index) =>
                    <div key={index}>
                        {this.state.isActive === index && <ProductsHeader active onClick={() => this.active(index)}>{item.name}</ProductsHeader>}
                    </div>
                )}
            </nav>
        )
    }
}
