import styled from "styled-components";

export const ProductsContainer = styled.section`
padding: 0px 101px 0px 117px;
`
export const ProductWrapper = styled.div`
display: grid;
grid-gap:40px;
grid-template-columns: repeat(3, 1fr);
`
export const ProductsHeader = styled.h1`
padding:80px 0 119px;
font-weight: 400;
font-size: 42px;
line-height: 160%;
text-transform: capitalize; 
`
export const ProductCard = styled.div`
position: relative;
padding:16px;
opacity: ${props => props.opacity};
&:hover {
    box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);

}
&:hover .onHover {
    opacity: 1;
}
`

export const ProductCardImage = styled.img`
width:354px;
height:330px;
object-fit: contain;`

export const ProductCardContent = styled.h1`
padding:24px 0 0 0;
width:354px;
font-weight: 300;
font-size: 18px;
line-height: 160%;
color: var(--c-text);
`
export const ProductCardContentTwo = styled.h1`
width:354px;
font-weight: 500;
font-size: 18px;
line-height: 160%;
color: var(--c-text);
`
export const ProductCardOverlauy = styled.div`
position: absolute;
left:50%;
top:50%;
transform: translate(-50%, -50%);
`
export const ProductInStock = styled.h1`
position: relative;
color: var(--c-text-two);
font-size: 24px;
font-weight: 400;
line-height: 160%;
`
export const CartAddOverlay = styled.div`
position: absolute;
bottom:72px;
right:31px;
`
export const CartAdd = styled.img`
opacity: 0;
`