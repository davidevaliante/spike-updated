import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { appBlue } from '../../theme/styled-components'
import Header from '../shared/Text/Header'
import { appRed } from './../../theme/styled-components';

interface Props {
    listHeader? : string
    scrollbarColor? : string
}

const SlotList : FunctionComponent<Props> = ({
    listHeader,
    scrollbarColor = appRed,
    children
}) => {
    return (
        <div>
            {listHeader && <Header type={3} color={scrollbarColor}>{listHeader}</Header>}
            <ListContainer scrollbarColor={scrollbarColor}>
                {children}
            </ListContainer>
        </div>
    )
}

const ListContainer = styled.div`
    overflow-x : auto;
    white-space : nowrap;
    width : 100%;
    justify-content : center;
    cursor: grab;

    div{
        margin-right : 2rem;
    }

    div:last-child{
        margin-right : 0px;
    }

    ::-webkit-scrollbar {
        width: 0.1rem;
        height : 8px;
        margin : 3rem;
    }

    ::-webkit-scrollbar-track{
        background : white;
    }

    ::-webkit-scrollbar-thumb{
        background : ${(props : {scrollbarColor : string}) => props.scrollbarColor};
        border-radius : 46px;
    }
`

export default SlotList
