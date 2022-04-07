import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --header-bg: #FFC145;
        --list-bg: #f3f3f7;
        --text-color: #1f1f1f;
        --purple: #5B5F97;
        --light-purple: #A7BBEC;
        --red: #FF6B6C;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }   

    html{  
        @media (max-width: 1080px) {
            font-size: 93.75%; // 15px
        }

        @media (max-width: 720px) {
            font-size: 87.5%; //14px
        }
      }

    
    body, input, button {
        font-family: 'Lato', sans-serif;;
    }

    button:hover {
        cursor: pointer;
    }
`;
