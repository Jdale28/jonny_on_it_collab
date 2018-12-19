import styled from 'styled-components'

export const FormStyled = styled.div`
    margin: 3em auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    .form-container {
        width: 40vw;
        p {
            font-size: 1.4em;
            margin: 0;
        }
        .span {
            color: rgba(19,212,171,1);
        }
        .right {
            color: rgba(19,212,171,1);
            float: right
        }
    }
    form input {
        border-radius: .2em;
        width: 100%;
        height: 2.5em;
        margin: 0 auto .4em auto;
    }
    .sub-form-container {
        display: flex;
        justify-content: space-around;
    }
    .text-area {
        display: flex;
        flex-direction: column;
        textarea {
            border-radius: .2em;
        }
    }
    .submit-button {
        margin: 1em 0;
        display: flex;
        justify-content: center;
    }
`
