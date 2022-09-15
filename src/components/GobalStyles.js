import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body {
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
        font-family: "Josefin Sans", sans-serif;
        font-weight: 400;
        font-size: 18px;
        transition: all 0.15s linear;
    }

    input {
        width: 100%;
        height: 100%;
        padding-right: 20px;
        font-size: 16px;
        color: ${({ theme }) => theme.text};
        border: none;
        outline: none;
        background: transparent;

    }

    .app__form {
        width: 680px;
        height: 64px;
        position: relative;
        margin: auto;
        display: flex;
        align-items: center;
        background-color: ${({ theme }) => theme.backgroundColor};
        border-radius: 4px;
    }

    .app__circle {
        width: 9%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .app__circleInner {
        width: 22px;
        height: 22px;
        border: 2px solid ${({ theme }) => theme.borderColor};
        border-radius: 50%;
    }

    .app__body {
        width: 680px;
        position: relative;
        margin: auto;
        margin-top: 37px;
        background-color: ${({ theme }) => theme.backgroundColor};
        border-radius: 4px;
    }

    .app__todo {
        width: 100%;
        height: 64px;
        display: flex;
        align-items: center;
        border-bottom: 1px solid ${({ theme }) => theme.borderColor};
        transition: all 0.15s ease-in-out;
    }
    
    .app__todo:hover {
        cursor: grab;  
        color: ${({ theme }) => theme.hover};
    }

    .app__todo-left {
        position: relative;
        width: 9%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .app__todo-leftInner {
        position: relative;
        width: 22px;
        height: 22px;
        border: 2px solid ${({ theme }) => theme.borderColor};
        border-radius: 50%;
    }

    .app__todo-leftInner:hover {
        cursor: pointer;
    }

    .app__todo-leftInnerCompleted {
        position: relative;
        width: 22px;
        height: 22px;
        background: linear-gradient(135deg, hsl(192, 100%, 67%), hsl(280, 87%, 65%));
        background-repeat: no-repeat;
        background-position: center;
        border-radius: 50%;
    }

    .app__todo-check {
        position: absolute;
        width: 5px;
        height: 10px;
        border-right: 2px solid white;
        border-bottom: 2px solid white;
        transform: rotate(45deg);
        transition: all 0.2s ease-in-out;
    }

    .app__todo-check:hover {
        cursor: pointer;
    }

    .app__todo-leftInnerCompleted:hover {
        cursor: pointer;
    }

    .app__todo-leftInner{
        transition: all 0.2s ease-in-out; 
    }

    .app__todo-leftInner:hover {
        border: 2px solid hsl(280, 87%, 65%);
        cursor: pointer;
    }
    
    .app__todo-right {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-right: 25px;
    }

    .app__todo-text_underline {
        color: ${({ theme }) => theme.underlineColor};
        text-decoration: line-through;
    }

    .app__todo-del:hover {
        color: hsl(236, 33%, 92%);
        cursor: pointer;
    }

    .body-actions > p:hover {
        color: hsl(220, 98%, 61%);
        font-weight: 700;
        cursor: pointer;
    }

    .app__todo-total {
        user-select: none;
    }

    .app__todo-clear {
        transition: all 0.2s ease-in-out;
    }

    .app__todo-clear:hover {
        color: ${({ theme }) => theme.hover};
        cursor: pointer;
    }
`;
