const sharedStyles = {};
sharedStyles.trbl = `

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
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

        
 `;

sharedStyles.login = `
        * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        }
    
        html {
            background: lightblue;
        }        

        body {
            width: 100%;
            min-height: 100vh;
            background: lightblue;
            user-select: none;
        }

        .container {
            padding: 50px 100px;
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

        .signup-form,
        .login-form {
            position: relative;
            top: 55%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: #fff;
            border-radius: 10px;
            box-shadow: 3px 3px 10px 1px rgba(0, 0, 0, 0.2);
            visibility: hidden;
            transition: 1s;
            opacity: 0;
            color: hsl(195, 72%, 48%);

        }

        .form {
            width: 500px;
            padding: 20px 50px;
        }

        .form .close {
            text-align: right;
            cursor: pointer;
        }

        .form .text h1 {
            text-align: center;
            margin: 30px 0;
        }

        .form form {
            display: block;
            margin: auto;
        }
        
        .form .row {
            display: flex;
            justify-content: space-between;
        }

        .form .row input {
            margin-bottom: 0;
        }

        .form .row input:first-child {
            margin-right: 10px;
        }

        .form .row input:last-child {
            margin-left: 10px;
        }

        .form form input {
            width: 100%;
            display: block;
            border: 1px solid #000;
            border-radius: 50px;
            padding: 20px 16px;
            margin: 20px auto;
            outline: none;
        }

        .signup-form:active,
        .login-form:active {
            top: 50%;
            transition: 1s;
            visibility: visible;
            opacity: 1;
        }

        .container:active {
            filter: blur(20px);
            transition: 1s;
        }

            /*  */

        

        .blink {
            animation: blink 1s steps(1, end) infinite;
          }
          
          @keyframes blink {
            0% {
              opacity: 1;
            }
            50% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }

          .fade-in {
            animation: fadeIn ease 10s;
            -webkit-animation: fadeIn ease 10s;
            -moz-animation: fadeIn ease 10s;
            -o-animation: fadeIn ease 10s;
            -ms-animation: fadeIn ease 10s;
          }
            @keyframes fadeIn {
                0% {
                opacity:0;
                }
                100% {
               opacity:1;
                }
            }    
`;

sharedStyles.modal = `

`;

export { sharedStyles };

//  background: #e1e6ec;
//  background: hsl(213, 22%, 90%);
// background: hsl(32, 83%, 99%);
// hsl(32, 83%, 54%);
// background: hsl(213, 22%, 90%);
// color: hsl(0, 0%, 0%);

// .material-button {
//     position: absolute;
//     top: 30vh;
//     left: 10vw;
//     width: 100px;
//     height: auto;
//     z-index: 9;
//     background: #808080;
// }
