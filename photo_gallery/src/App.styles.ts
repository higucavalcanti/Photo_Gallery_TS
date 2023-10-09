import styled from "styled-components";

export const Container = styled.div`
    background-color: #800f00;
    color: #FFF;
    min-height: 100vh;
`;

export const Area = styled.div`
    margin: auto;
    max-width: 980px;
    padding: 30px 0;
`;

export const Header = styled.h1`
    margin: 0;
    padding: 0;
    text-align: center;
    margin-botton: 30px;
`;

export const ScreenWarning =styled.div`
    text-align: center;

    .emoji {
        font-size: 50px;
        margin-botton: 20px;
    }
`;

export const PhotoList = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
`;

export const UploadForm = styled.form`
    background-color: #c21700;
    padding: 15px;
    border-radius: 10px;
    margin-botton: 30px;

    input[type="submit"] {
        background-color: #e9788e;
        border: 0;
        color: #FFF;
        padding: 8px 16px;
        font-size: 15px;
        border-radius: 10px;
        margin: 0 20px;
        cursor: pointer;

        &:hover {
            opacity: .9;
        }
    }
`;