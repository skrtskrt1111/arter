import React from "react";
import styled from 'styled-components'

const Wrap = styled.ul`
margin-top: 1em;
	padding-top: 2em;
	border-top: 1px solid #d7dadb;
	text-align: center;
width: 300px;
height: 41px;
left: 123px;
top: 1129px;
`;

const PagItem = styled.li`
list-style-type: none;
	display: inline-block;
	border-right: 1px solid #d7dadb;
    color: var(--colors-text);

	transform: scale(1) rotate(19deg) translateX(0px) translateY(0px) skewX(-10deg) skewY(-20deg);
&:hover {
    background-color: var(--colors-ui-base);
    border-right: 1px solid #fff;
}
    `;

    const PageLink = styled.a`
    padding: 1.1em 1.6em;
        display: inline-block;
        text-decoration: none;
        color: var(--colors-text);
    
        transform: scale(1) rotate(0deg) translateX(0px) translateY(0px) skewX(20deg) skewY(0deg);
    `;

export const Pagination = ({ paintingsPerPage, totalPaintigns, paginate }) => {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalPaintigns / paintingsPerPage); i++){
        pageNumbers.push(i)
    }

    return (
        <div>
            <Wrap>
                {
                    pageNumbers.map(number =>(
                        <PagItem key={number}>
                                <PageLink href ="!#" onClick={() => paginate(number)}>
                                    {number}
                                    </PageLink>
                            </PagItem>
                    ))
                }
                </Wrap>
        </div>
    )
}


