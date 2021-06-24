import styled from "styled-components";


export const FullModalStyle = styled.div`
    z-index:2;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    position: fixed;
    width: 100%;
    max-width: 1600px;
    height: 80vh;
    overflow: auto;
    background: white;
    border: 2px solid black;

`
export const FullModalMask = styled.div`
    z-index: 1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background: black;
    opacity: 0.75;

`