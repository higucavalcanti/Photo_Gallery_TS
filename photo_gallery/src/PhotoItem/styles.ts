import styled from "styled-components";

export const Container = styled.div`
    background-color: #c21700;
    border-radius: 10px;
    padding: 10px;
    margin-top: 10px;

    .img {
        max-width: 100%;
        width: 120px;
        height: 111px;
        display: block;
        margin-bottom: 10px;
        border-radius: 10px;
    }

    button {
        background-color: #e9788e;
        border: 0;
        color: #FFF;
        padding: 8px 16px;
        font-size: 15px;
        border-radius: 10px;
        margin: 0 20px;
        cursor: pointer;

        &:hover {
            opacity: 0.9;
        }
    }
`;
