const sharedStyles = {};
sharedStyles.trbl = `
    html {
        background: lightblue;
    }

    body {
        width: 100%;
        min-height: 100vh;
        background: lightblue;
        user-select: none;
    }
   
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
            grid-template-columns: 0.10fr 0.8fr 1.3fr 0.71fr;
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
        }
        
        .figure:hover {
            filter: hue-rotate(350deg) brightness(100%);
            cursor: pointer;
            transition: 3s;
            z-index: 2;
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
        
        h1:hover {
            filter: hue-rotate(350deg) brightness(100%);
            cursor: pointer;
            transition: 3s;
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

        header .menu  {
            grid-area: nav-menu;
            width: 100%;
            min-width: 55%;
            height: auto;
            padding: 1rem; 
            display: inline-block;
        }
        
        .menu .ul-menu {
            padding: 0;
        }
        
        .ul-menu .li-menu {
            display: inline;
            padding: 12px 18px;
            margin: 0 16px;
            list-style: none;            
            cursor: pointer;
        } 
        
        .ul-menu .li-menu:hover {
            background-color: hsl(195, 74%, 56%);
            border-radius: 0.7vh;
        }
        
        .li-menu .anchor {
            list-style: none;
            text-decoration: none;
            font-family: 'Work Sans', sans-serif;
            font-size: 0.8rem;            
            font-style: normal;
            font-weight: 400;
            color: hsl(195, 98%, 34%);
        }             
        
        .li-menu .anchor:hover {
            background-color: hsl(195, 74%, 56%);
            color: hsl(0, 0%, 100%);
            font-weight: 400;
        }             
        
        header .login .ul-login {
            grid-area: login-buttons;
            list-style-type: none;
            display: inline ;
            padding: 12px 18px;

        }        

        header .login .ul-login .li-buttons {
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
            border: 0.2px solid rgba(2, 129, 172, 0.1);
            border-style: inset;
            border-radius: 0.5vw;             
            background: hsl(213, 22%, 90%);          
            box-shadow: 3px 3px 10px 1px rgba(0, 0, 0, 0.2),
                -3px -3px 10px 1px rgba(255, 255, 255, 1);
        }

        header .login .ul-login .li-buttons:hover {              
            color: hsl(195, 98%, 50%);
            text-shadow: hsl(77, 97%, 15%) 0.5px 4px 10px;
            filter: hue-rotate(350deg) brightness(100%);
            cursor: pointer;
            transition: 0.75s;
            
        }

        header .login .ul-login .li-buttons:active {
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
            background: hsl(195, 98%, 34%);
            border-radius: 10px;
            box-shadow: 3px 3px 10px 1px rgba(0, 0, 0, 0.2);
            visibility: hidden;
            transition: 1s;
            opacity: 0;
            color: hsl(0, 0%, 100%);
            text-shadow: hsl(77, 97%, 15%) 0.5px 1.2px 3px;
        }

        .login-form {
            position: relative;
            top: 15vh;
            left: 80%;
            width: 20%;
            transform: translate(-50%, -50%);
            background: hsl(195, 98%, 34%);
            border-radius: 10px;
            box-shadow: 3px 3px 10px 1px rgba(0, 0, 0, 0.2);
            visibility: hidden;
            transition: 1s;
            opacity: 0;
            color: hsl(0, 0%, 100%);
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
            background: lightblue;
            font-style: bold;
            font-weight: 700;

            color: hsl(0, 0%, 0%);
        }

        .input-login {
            color: hsl(195, 72%, 48%);
        }

        .input-login:hover {
            background: lightblue;
            font-style: bold;
            font-weight: 700;
            color: hsl(0, 0%, 0%);
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
            filter: blur(10px);
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
            padding: 4vh;
            position: relative;
            top: 2vh;
            left: 1vw;
            width: 48vw; 
            height: auto;           
            background: hsl(195, 98%, 34%);
            border-radius: 0.5vw;
            box-shadow: 1px 5px 20px 1px rgba(0, 0, 0, 0.5),
                -3px -3px 12px 1px rgba(255, 255, 255, 1);
            color: hsl(0, 0%, 100%);
        }

        .main-register .header-register {
            grid-area: header;
            top: 0;
            left: 28vw;
            width: 100%;            
            border-radius: 0vw 0.3vw 0.3vw 0vw;
            background: hsl(195, 70%, 71%);
            box-shadow: 3px 3px 10px 1px rgba(0, 0, 0, 0.2);

        }

        .header-register .h1-header {
            padding: 0.3vh 0.3vw 0.3vh 3vw;
            font-family: 'Work Sans', sans-serif;
            font-size: 2.5rem;
            font-style: bold;
            letter-spacing: 0.3vw;
            color: hsl(0, 0%, 100%);
            text-shadow: hsl(77, 97%, 15%) 0.5px 1.2px 3px;
        }

        .main-register .aside-sidebar {
            grid-area: aside;
            position: relative;
            top: 0;
            left: 0;
            width: 9vw;
            height: 100%;
            background: hsl(195, 70%, 71%);
            border-radius: 0.3vw 0vw 0.3vw 0.3vw;

        }        
        
        .aside-sidebar .nav-sidebar {
            padding-top: 2vh;

        }

        .nav-sidebar .ul-nav-sidebar {
            padding: 0;
        }
        
        .ul-nav-sidebar .li-nav-sidebar {
            padding: 1vh 0.2vw 3vh 1.6vw;
            list-style-type: none;
        }
        .ul-nav-sidebar .li-nav-sidebar:active {
            padding: 1vh 0.2vw 3vh 0.6vw;
            list-style-type: none;
            filter: blur(20px);
            transition: 1s;
        }      

        .li-nav-sidebar .li-anchor {
            text-decoration: none;
            font-family: 'Work Sans', sans-serif;
            font-size: 0.9rem;
            font-style: bold;
            font-weight: 900;
            color: hsl(195, 96%, 22%);
        }
        
        .li-nav-sidebar .li-anchor:hover {
            font-size: 1rem;
            color: rgba(255, 255, 255, 9);
            transition: 0.3s;
        }

        .li-nav-sidebar .hr-sidebar {
            position: fixed;
            padding-right: 0.6vw;
            width: 5vw;
            border-top:  1px solid hsl(195, 98%, 34%);
            border-bottom:  1px solid rgba(153, 224, 248, 0.9);
            box-shadow: 0.5px 0.5px 4px  rgba(0, 0, 0, 0.4);
            border-radius: 0.3vw;
        }
        
        .main-register .artical-register {
            grid-area: main;
            top: 25vh;
            left: 20vw;
            width: 100%;
            justify-content: left;
            display: inline-flex;            
        }
        
        .article-register .ul-register {
            margin: 0;
            padding: 0;
            padding-top: 2.5vh;
            padding-left: 0.5vw;
        }

        .ul-register .li-register {
            list-style-type: none;
            padding: 1.5vh 0.5vw 1.5vh 1.5vw;   
            font-family: 'Work Sans', sans-serif;
            font-size: 1.5rem;
            font-style: normal;
            color: hsl(0, 0%, 100%);
        }

                /*  */
`;

sharedStyles.user = `
        
        

        /*  */

`;

export { sharedStyles };

// position: fixed;
// top: 0;
// left: 0;
// right: 0;
// bottom: 0;
