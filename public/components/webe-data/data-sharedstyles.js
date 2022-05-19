//hw :::::::: HooT Webelistics® :::::::: hw//
//)  :::::::: data-sharedStyles ::::::::  )//

'uses strict';

const dataSharedStyles = {};
dataSharedStyles.trbl = `
        html {
            background-color: lightblue;
        }

        body {
            width: 100%;
            min-height: 100vh;
            background-color: lightblue;
            user-select: none;
        }
`;

dataSharedStyles.main = `
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        html {
            background-color: var(--bg-webeLightBlue-clr);
        }

        body {
            background-color: var(--bg-webeLightBlue-clr);
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

        .collection .data-section {
            margin: 0;
            padding: 0;            
        }

        .data-section {
            margin: 20vh 10vw 0 13vw;
            display: grid;
            grid-template-areas: 
                "section-header-one" "section-header-image" "section-header-two"
                "data-section-image" "data-section-name" "data-section-data"
                "data-section-footer";
            width: 65vw;
            height: 60vh;
            background-color: var(--bg-greyDark-clr);
            border: 2px solid var(--bg-webeDarkBlue-clr);
            border-radius: 5px;
            box-shadow: 2px 2px 24px var(--bg-webeDarkBlue-clr);
        }

        .data-section .section-header-one {
            grid-area: section-header-one;            
            width: 100%;
            height: auto;
            display: inline-flex;
            position: relative;
            justify-content: center;
            align-items: center;
            border: 1px solid var(--bg-webeDarkBlue-clr);
        }

        .section-header-one .header-one-h2 {
            padding: 0.5vh 0.5vw 0.5vh 0.5vw;
            font-family: var(--webe-HOOT-fs);
            font-size: 1.5rem;
            font-weight: bold;
            color: var(--bg-webeDarkBlue-clr);
        }

        .section-header-image {
            grid-area: section-header-image;
            width: 100%;
            height: auto;
            display: inline-flex;
            position: relative;
            justify-content: center;
            align-items: center;
            border: 1px solid var(--bg-webeDarkBlue-clr);
        }

        .section-header-image .header-image {
            width: 5vw;
            height: auto;
            position: inline;
            padding: 0.5vh 0.5vw 0.5vh 0.5vw;
        }

        .section-header-two {
            grid-area: section-header-two;
            width: 100%;
            height: auto;
            display: inline-flex;
            position: relative;
            justify-content: center;
            align-items: center;
            border: 1px solid var(--bg-webeDarkBlue-clr);
        }

        .section-header-two .header-two-h2 {
            padding: 0.5vh 0.5vw 0.5vh 0.5vw;
            font-family: var(--webe-HOOT-fs);
            font-size: 1.5rem;
            font-weight: bold;
            color: var(--bg-webeDarkBlue-clr);
        }




`;

export { dataSharedStyles };

// "data-section-image data-section-name data-section-data";
//                 "data-section-footer";
