const sharedStyles = {};
sharedStyles.trbl = `
        html {
            background: lightblue;
        }
`;

sharedStyles.active = `
    <style>
        :host([active]) .container header nav .login ul li:active {
                    box-shadow: inset 3px 3px 10px 1px rgba(0, 0, 0, 0.2),
                    inset -3px -3px 10px 1px rgba(255, 255, 255, 1);
                }
                
        :host([] [active]) .signup-form.active,
                .login-form.active {
                    top: 50%;
                    transition: 1s;
                    visibility: visible;
                    opacity: 1;
                }
                
        :host([active]) .container.active {
                    filter: blur(20px);
                    transition: 1s;
                    pointer-events: none;
                }

        :host([hidden] [active]) .container.active {
                    filter: blur(0px);
                    transition: 1s;
                    pointer-events: none;
                }

        :host([hover]) .container header nav .menu ul li:hover {
            background: #000;
            color: #fff;
                } 

        :host ([active]) .container header nav .login ul li:active {
            box-shadow: inset 3px 3px 10px 1px rgba(0, 0, 0, 0.2),
                inset -3px -3px 10px 1px rgba(255, 255, 255, 1);
        }
        
        :host([visibility] [hidden]) 
                                    .signup-form,
                                    .login-form {
                                        position: absolute;
                                        top: 45%;
                                        left: 50%;
                                        transform: translate(-50%, -50%);
                                        background: #fff;
                                        border-radius: 10px;
                                        box-shadow: 3px 3px 10px 1px rgba(0, 0, 0, 0.2);
                                        visibility: hidden;
                                        transition: 1s;
                                        opacity: 0;
                                    }
        
        :host([visibility] [visible]) .signup-form.active,
                                    .login-form.active {
                                            top: 50%;
                                            transition: 1s;
                                            visibility: visible;
                                            opacity: 1;
                                    }
       
    </style>

`;

sharedStyles.modal = `
    <style>

        :host {
                @import url('https://fonts.googleapis.com/css2?family=Days+One&display=swap');
                @import url('https://fonts.googleapis.com/css2?family=Chango&display=swap');
                @import url('https://fonts.googleapis.com/css2?family=Work+Sans&display=swap');
                
                :root {
                    --webe-bg-clr: hsl(0, 0%, 13%);
                    --webe-bg-clr-2: hsl(0, 0%, 71%);
                    --text-primary: hsl(32, 83%, 54%);
                    --text-secondary: #ececec;
                    --webe-shadow-clr: hsl(31, 86%, 94%);
                    --webe-header-trim_1: hsl(30, 4%, 11%);
                    --webe-header-trim_2: hsl(32, 83%, 54%);
                    --webe-clr_after: hsl(90, 100%, 50%);
                    --webe-HOOT-ff: 'Chango', cursive;
                    --webe-title-ff: 'Days One', sans-serif;
                    --webe-menu-ff: 'Work Sans', sans-serif;
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
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: auto;
                    padding: 40px 50px;
                    background: #e1e6ec;
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
                }

                .container header nav {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .container header nav .logo h1 {
                    font-size: 1.6rem;
                    color: #000;
                    text-transform: uppercase;
                    font-family: 'Chango', cursive;
                    font-weight: bold;
                }

                .container header nav .menu ul,
                .container header nav .login ul {
                    list-style: none;
                }

                .container header nav .menu ul li,
                .container header nav .login ul li {
                    display: inline;
                    padding: 12px 18px;
                    margin: 0 16px;
                    list-style: none;
                    font-family: 'Work Sans', sans-serif;
                    font-size: 1.5rem;
                    font-weight: 400;
                    cursor: pointer;
                }

                .container header nav .login ul li {
                    padding: 16px 22px;
                    border-radius: 50px;
                    list-style: none;
                    background: #e1e6ec;
                    box-shadow: 3px 3px 10px 1px rgba(0, 0, 0, 0.2),
                        -3px -3px 10px 1px rgba(255, 255, 255, 1);
                }

                .container header nav .menu ul li:hover {
                    background: #000;
                    color: #fff;
                }

                .container header nav .login ul li:active {
                    box-shadow: inset 3px 3px 10px 1px rgba(0, 0, 0, 0.2),
                        inset -3px -3px 10px 1px rgba(255, 255, 255, 1);
                }

                .signup-form,
                .login-form {
                    position: absolute;
                    top: 45%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    background: #fff;
                    border-radius: 10px;
                    box-shadow: 3px 3px 10px 1px rgba(0, 0, 0, 0.2);
                    visibility: hidden;
                    transition: 1s;
                    opacity: 0;
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

                .signup-form.active,
                .login-form.active {
                    top: 50%;
                    transition: 1s;
                    visibility: visible;
                    opacity: 1;
                }

                .container.active {
                    filter: blur(20px);
                    transition: 1s;
                    pointer-events: none;
                }

                /*  */

                .h1-logo .h1-tm {
                    font-size: 0.7rem;
                    font-weight: lighter;
                    text-shadow: none;
                    /* color: var(--webe-shadow-clr); */
                    /* text-shadow: black 2px 1px 5px; */
                }

                .h1-logo .h1-r {
                    font-size: 0.7rem;
                    font-weight: lighter;
                    text-shadow: none;
                    /* color: var(--webe-shadow-clr); */
                    /* text-shadow: black 2px 1px 5px; */
                }
        }
    </style>

`;

export { sharedStyles };
