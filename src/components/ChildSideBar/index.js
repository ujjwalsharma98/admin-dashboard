import React from "react";
import Styled from 'styled-components'

const Wrapper = Styled.div`
    Width: 96px;
    background-color: blue;
`

const ChildSidebar = props => {
    return(
        <Wrapper>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
        </Wrapper>
    )
}

export default ChildSidebar;