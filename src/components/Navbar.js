import React, { Component } from 'react'
import styled from 'styled-components'
import shoppingLogo from '../Assets/shopping-logo-cart-green.png'
import shoppingCart from '../Assets/interface/shopping-cart.png'
import dropdown from '../Assets/interface/dropdown.png'

const NavBarContainer = styled.nav`
padding: 28px 101px 32px 117px;
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
line-height: 120%;
color: ${(props) => props.active ? 'var(--c-primary)' : 'var(--c-text)'};
margin-left:32px;
transition: border-bottom 0.5s ease-in-out;
position:relative;
:nth-child(1) {
margin-left:0px;
}
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
export default class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeCategory: true,
            activeCategoryTwo: false,
            activeCategoryThree: false,
            activeCurrency: false,
            currency: {
                'USD': ['$', ' USD'],
                'Eur': ['€', ' EUR'],
                'JPY': ['¥', ' JPY'],
            }
        }
        this.handleCategory = this.handleCategory.bind(this);
        this.handleCurrency = this.handleCurrency.bind(this);
    }
    handleCategory = () => {
        this.setState({ activeCategory: true })
        this.setState({ activeCategoryTwo: false })
        this.setState({ activeCategoryThree: false })
    }
    handleCategoryTwo = () => {
        this.setState({ activeCategory: false })
        this.setState({ activeCategoryTwo: true })
        this.setState({ activeCategoryThree: false })
    }
    handleCategoryThree = () => {
        this.setState({ activeCategory: false })
        this.setState({ activeCategoryTwo: false })
        this.setState({ activeCategoryThree: true })
    }
    handleCurrency = () => {
        this.setState({ activeCurrency: true })
    }

    render() {
        return (
            <NavBarContainer>
                <Category>
                    <List active={this.state.activeCategory} onClick={this.handleCategory}>WOMEN</List>
                    <List active={this.state.activeCategoryTwo} onClick={this.handleCategoryTwo}>MEN</List>
                    <List active={this.state.activeCategoryThree} onClick={this.handleCategoryThree}>KIDS</List>
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
        )
    }
}
