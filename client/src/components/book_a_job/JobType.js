import React, { Component } from 'react';
import styled from 'styled-components'

const Center = styled.div`
    text-align: center;
    border: 1px solid black;
    width: 60vw;
`


class JobType extends Component {
    render() {
        return (
            <Center>
                Hello from Job Type component
                <form action="#"><input placeholder="  Housekeeping, Plumbing ..."></input></form>
            </Center>
        );
    }
}

export default JobType;