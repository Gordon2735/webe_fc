const sharedStyles = {};
sharedStyles.trbl = `

   
 `;

sharedStyles.main = `
        html {
            background: lightblue;
        }

        body {
            width: 100%;
            min-height: 100vh;
            background: lightblue;
            user-select: none;
        }

        .login-register {
            position: absolute;
            top: 20vh;
            left: 2vw;
        }

        
 `;

sharedStyles.login = `
        * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        }

        body {
            width: 100%;
            min-height: 100vh;
            background: lightblue;
            user-select: none;
        }

        .container {
            padding: 20px 50px;
            transition: 1s;
        }

        .container header {
            display: grid;
            grid: "figure h1-logo nav-menu login-buttons";
            grid-template-columns: 0.10fr 1.16fr 1fr 0.71fr;
            grid-gap: 0.2vw;
            padding: 0;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: auto;
            justify-content: center;
            align-items: center;
            background: #e1e6ec;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
        }   
        
        header .figure {
            grid-area: figure;
            width: 100%;
            height: auto;
            position: inline;
            cursor: pointer;
        }

        .figure .figure-img {
            width: 4.93vw;
            height: auto;
            position: inline;
            padding: 0.5vh -1vw 0 -4.5vw;
            aspect-ratio: 1 / 1;
            filter: drop-shadow(10px 14px 9px hsl(0, 0%, 65%));
        }

        .figure .figcaption-text {
            width: 100%;
            height: auto;
            position: absolute;
            bottom: 0;
            right:3vw;
            font-size: 1.5vw;
            font-weight: bold;
            color: hsl(32, 83%, 54%);
            visibility: hidden;
            z-index: 2;
        }
        
        .figure .figcaption-text:hover {
            visibility: visible;
            z-index: 2;
        }        

        header .logo {
            grid-area: h1-logo;
            width: 100%;
            height: auto;
            justify-content: center;
            align-items: left;
            position: inline;
        }

        .logo h1 {
            position: inline;
            font-size: 1.6rem;
            color: hsl(32, 83%, 54%);
            font-family: 'Chango', cursive;
            font-weight: bold;
            text-shadow: black 2px 1px 5px;
            letter-spacing: 0.55vw;
            padding: 1.5vw 1.5vw 1.5vw 0.9vw;
        }

        h1 .h1-tm {
            font-size: 0.7rem;
            font-weight: lighter;
            color: #000; 
            text-shadow: none;
            letter-spacing: -0.3vw;
        }

        h1 .h1-r {
            font-size: 0.7rem;
            font-weight: lighter;
            text-shadow: none;
            color: #000; 
            letter-spacing: -0.5vw;
        }

        header .menu ul {
            grid-area: nav-menu;
            min-width: 35%;
            height: auto;
            padding: 1rem;
            list-style-type: none;
            display: inline-block;
        }       
        
        header .menu ul li {
            display: inline;
            padding: 12px 18px;
            margin: 0 16px;
            list-style: none;
            font-family: 'Work Sans', sans-serif;
            font-size: 1rem;
            font-weight: 400;
            cursor: pointer;
            text-decoration: none;
        }              

        header .menu ul li:hover {
            border-radius: 0.5vw;
            font-style: extra-bold;
            font-weight: 700;
            background-color: hsl(195, 74%, 56%);
            text-shadow: hsl(77, 97%, 15%) 0.5px 2px 3px;            
            box-shadow: 3px 3px 10px 1px rgba(0, 0, 0, 0.2),
                -3px -3px 10px 1px rgba(255, 255, 255, 1);
        }

        .menu ul .li-menu .anchor {
            list-style: none;
            color: hsl(0, 0%, 0%);
            text-decoration: none;
        }             
        
        .menu ul .li-menu .anchor:hover {
            color: hsl(195, 74%, 96%);
        }             
        
        header .login ul {
            grid-area: login-buttons;
            list-style-type: none;
            display: inline ;
            padding: 12px 18px;

        }        

        header .login ul .li-buttons {
            margin: 0 16px;
            list-style: none;
            display: inline;
            font-family: 'Work Sans', sans-serif;
            font-size: 0.8rem;
            font-weight: 900;
            font-style: extra-bold;
            color: hsl(195, 72%, 48%);
            letter-spacing: 0.28vw;
            cursor: pointer;
            padding: 16px 22px;
            border-radius: 0.5vw;             
            background: hsl(213, 22%, 90%);          
            box-shadow: 3px 3px 10px 1px rgba(0, 0, 0, 0.2),
                -3px -3px 10px 1px rgba(255, 255, 255, 1);
        }

        header .login ul .li-buttons:hover {              
            color: hsl(195, 98%, 50%);
            text-shadow: hsl(77, 97%, 15%) 0.5px 4px 10px;
            
        }

        header .login ul .li-buttons:active {
            box-shadow: inset 3px 3px 10px 1px rgba(0, 0, 0, 0.2),
                inset -3px -3px 10px 1px rgba(255, 255, 255, 1);
            color: hsl(0, 0%, 0%);
        }

        

        .signup-form {
            position: relative;
            top: 20vh;
            left: 50%;
            width: 31.5vw;
            transform: translate(-50%, -50%);
            background: hsl(195, 53%, 88%);
            border-radius: 10px;
            box-shadow: 3px 3px 10px 1px rgba(0, 0, 0, 0.2);
            visibility: hidden;
            transition: 1s;
            opacity: 0;
            color: hsl(195, 72%, 48%);
            text-shadow: hsl(77, 97%, 15%) 0.5px 1.2px 3px;
        }

        .login-form {
            position: relative;
            top: 15vh;
            left: 80%;
            width: 20%;
            transform: translate(-50%, -50%);
            background: hsl(195, 53%, 88%);
            border-radius: 10px;
            box-shadow: 3px 3px 10px 1px rgba(0, 0, 0, 0.2);
            visibility: hidden;
            transition: 1s;
            opacity: 0;
            color: hsl(195, 72%, 48%);
            text-shadow: hsl(77, 97%, 15%) 0.5px 1.2px 3px;
        }

        .form {
            width: 500px;
            padding: 20px 50px;
        }

        .form .signup-close {
            padding: 0 0 0 24vw;
            text-align: center;
            font-size: 2.5rem;
            cursor: pointer;
        }

        .form .login-close {
            padding: 0 0 0 5.2vw;
            text-align: center;
            font-size: 2.5rem;
            cursor: pointer;
        }

        .form .text h1 {
            text-align: center;
            margin: 30px 10vw 30px 0;
        }

        .form form {
            display: inline-block;
            margin: auto;

        }
        
        .form .row {
            display: flex;
            justify-content: space-between;
        }

        .form .row input {
            margin-bottom: 0;
            background: hsl(196, 100%, 95%);
        }

        .input-name {
            space-between: -6vw;

        }

        .form .row input:first-child {
            margin-right: -5px;
        }

        .form .row input:last-child {
            margin-left: 10px;

        }

        .input-register {
            color: hsl(195, 72%, 48%);
        }

        .input-register:hover {
            background: hsl(195, 72%, 48%);
            color: hsl(195, 74%, 96%);
        }

        .input-login {
            color: hsl(195, 72%, 48%);
        }

        .input-login:hover {
            background: hsl(195, 72%, 48%);
            color: hsl(195, 74%, 96%);
        }

        .form form input {
            background: hsl(196, 100%, 95%);
            width: 13vw;
            display: flex-block;
            border: 1px solid #000;
            border-radius: 50px;
            padding: 20px 16px;
            margin: 20px auto;
            outline: none;
        }

        .signup-form.active {
            top: 40vh;
            transition: 1s;
            visibility: visible;
            opacity: 0.95;
            z-index: 5;
        }        

        .login-form.active {
            top: -4vh;
            transition: 1s;
            visibility: visible;
            opacity: 0.95;
            z-index: 5;
        }        

        .container:active {
            filter: blur(20px);
            transition: 1s;
        }

            /*  */

        
`;

sharedStyles.register = `
        .main-register {
            display: grid;
            grid-template-areas: 
            "aside header"
            "aside main"
            "aside footer";            
            padding: 0.5vh 0.5vw;
            position: relative;
            top: 2vh;
            left: 1vw;
            width: 45vw; 
            height: auto;           
            background: hsl(195, 53%, 88%);
            border: 1.5px solid #000;
            border-radius: 10px;
            box-shadow: 3px 3px 10px 1px rgba(0, 0, 0, 0.2);
            color: hsl(195, 72%, 48%);
        }

        .main-register .header-register {
            grid-area: header;
            top: 0;
            left: 28vw;
            width: 100%;
            border: 1.5px solid #000;
            background: orange;
        }

        .header-register .h1-header {
            padding: 0.3vh 0.3vw 0.3vh 2vw;
            font-family: 'Work Sans', sans-serif;
            font-size: 1.9rem;
            font-style: bold;
            letter-spacing: 0.3vw;
            color: hsl(195, 72%, 48%);
            text-shadow: hsl(77, 97%, 15%) 0.5px 1.2px 3px;
        }

        .main-register .aside-sidebar {
            grid-area: aside;
            display: flex;            
            position: relative;
            top: 0;
            left: 0;
            width: 6vw;
            height: 100%;
            border: 1.5px solid #000;
            background: pink;
        }
        
        .aside-sidebar .nav-sidebar {
            border: 1.5px solid #000;
        }

        .nav-sidebar .ul-nav-sidebar {
            padding: 0;
            background: green;
        }
        
        .ul-nav-sidebar .li-nav-sidebar {
            padding: 1vh 0.2vw 1vh 0.6vw;
            list-style-type: none;
            text-decoration: none;
            font-size: 0.9rem;
            color: hsl(195, 72%, 48%);
        }
        
        .main-register .ul-register {
            grid-area: main;
            top: 25vh;
            left: 20vw;
            width: 100%;
            justify-content: left;
            display: inline-flex;            
            border: 1.5px solid #000;
            background: hsl(195, 53%, 88%);
            background: yellow;
        }

        .ul-register .li-register {
            list-style-type: none;
            font-family: 'Work Sans', sans-serif;
            font-size: 1.1rem;
            font-style: normal;
            color: hsl(195, 72%, 48%);
        }

        .main-register .footer {
            grid-area: footer;
            margin: 0 4vw;
            bottom: 0;
            left: 20vw;
            display: inline-flex;            
            width: 100%;
            list-style: none;
            border: 1.5px solid #000;
            background: blue;
        }

        .footer .nav-footer {
            margin: 0;
            padding: 0;
        }

        .nav-footer .ul-nav-footer {
            margin: 0;
            padding: 0;
        }

        .ul-nav-footer .li-nav-footer {
            list-style-type: none;
            text-decoration: none;
            font-family: 'Work Sans', sans-serif;
            font-size: 0.8rem;
            font-style: italic;
            color: hsl(195, 72%, 48%);
        }
        
        


                /*  */



`;

sharedStyles.loginLogin = `
        

`;

export { sharedStyles };

// position: fixed;
// top: 0;
// left: 0;
// right: 0;
// bottom: 0;
