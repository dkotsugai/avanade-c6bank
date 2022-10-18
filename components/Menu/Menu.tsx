import React from 'react'
import styled from '@emotion/styled';
import Link from 'next/link';

const MenuContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    width: 100%;
    background: #242424;
    color: #f8f8f8;
    ul{

        width: 100%;
        margin-top: 10px;
        margin-left: 10px;
        padding: 0;
        display: flex;
        flex-direction: column;
        li{
            font-weight: bold;
            font-size: 1.2rem;
            width: 100%;
            display: flex;
            list-style: none;
            line-height: 30px;
            border: solid 4px transparent;
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
            &:hover{
                background: #888;
                border-left-color: #fffb19;
            }
        }
    }
`

export default function Menu() {
  return (
   <MenuContainer>
         <ul>
            <li>
                <Link href="#">
                    {/* <Icon type="home"/> */}
                <a>
                Início
                </a>
                </Link>
            </li>
            <li>Extrato</li>
            <li>Transferências</li>
            <li>Pagamentos</li>
            <li>Cartões</li>
            <li>Crédito</li>
        </ul>
    </MenuContainer>
  )
}
