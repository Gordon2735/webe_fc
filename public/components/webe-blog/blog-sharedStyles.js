//hw :::::::: HooT Webelistics® :::::::: hw//
//)  :::::::: blog-sharedStyles ::::::::  )//

'use strict';

const sharedStylesBlog = {};
sharedStylesBlog.trbl = `
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

sharedStylesBlog.todos = `

        .document-body {
            margin: 0;
            padding: 0;
            width: 100%;
            height: auto;
            background-color: var(--bg-primary-clr);            
        }

        .document-body .todos-header {
            top: 0;
            left: 0;
            margin: 0;
            padding: 0;
            width: 100%;
            height: auto; 
            justify-content: center;
            align-items: center;
          
        }
        
        .todos-header .todos-h1 {
            margin: 2rem 0.8rem 0.5rem 0.8rem;
            padding: 0.25rem;
            color: var(--webe-HOOT-clr);
            font-family: var(--webe-poppins-fs);
            font-size: 2.5rem;
            font-weight: bold;
            text-align: center;
            text-shadow: var(--webe-fontOrange-text-shadow);
        }

        .todos-header .todos-h2 {
            margin: 1rem 0.8rem 3.5rem 0.8rem;
            padding: 0.25rem;
            color: var(--webe-font-clr-freak);
            font-family: var(--webe-poppins-fs);
            font-size: 1.3rem;
            font-style: italic;
            text-align: center;
            text-shadow: var(--webe-fontOrange-text-shadow);
        }

        .todos-main-container {            
            top: 25vh;
            left: 0;
            margin: 2rem 0.5rem 0.5rem 0.5rem;
            width: 100%;
            height: auto;
            justify-content: center;
            align-items: center;
        }

        .todos-main-container .section-first {
            margin-top:2rem;
        }

        .section-first .section-first-h3 {
            margin: 0;
            margin-top:2rem;
            color: var(--webe-HOOT-clr);
            font-family: var(--webe-poppins-fs);
            font-size: 1.5rem;
            font-weight: bold;
            text-align: center;
            text-shadow: var(--webe-fontOrange-text-shadow);
        }

        .section-first .section-first-p {
            margin: 0;
            padding: 0 0.25rem 0 0.25rem;
            color: var(--webe-HOOT-clr);
            font-family: var(--webe-poppins-fs);
            font-size: 0.7rem;
            font-style: italic;
            text-align: center;
       }

       .todos-main-container .section-second {
            margin-top:2rem;
       }

         .section-second .section-second-h3 {
            margin: 0;
            color: var(--webe-HOOT-clr);
            font-family: var(--webe-poppins-fs);
            font-size: 1.5rem;
            font-weight: bold;
            text-align: center;
            text-shadow: var(--webe-fontOrange-text-shadow);
        }

        .section-second .section-second-p {
            margin-bottom: 3rem;
            padding: 0rem 0.25rem 0rem 0.25rem;
            color: var(--webe-HOOT-clr);
            font-family: var(--webe-poppins-fs);
            font-size: 0.7rem;
            font-style: italic;
            text-align: center;
         }
`;

sharedStylesBlog.blog = `

        * {
            margin: 3rem 0;
            padding: 0;
            box-sizing: border-box;
            background-color: var(--bg-greyDark-clr); 
            width: 100%;
        }

        .document-body {
            margin: 2rem 0;
            width: 100%;
            height: 40vh;           
            
        }        
        
        .section-blog {
            margin: 0;
            padding: 2rem 0 0 0;
            width: 100%;
            height: 40vh;
        }

        .section-blog .blog-header {
            margin-top: 1rem;
            padding: 0;
            width: 100%;
            height: auto;
            justify-content: center;
            align-items: center;
        }

         .blog-header .blog-h1 {
            margin: 1rem 0 0 0;
            padding: 0;
            color: var(--webe-fontDarkAdj-clr);
            font-family: var(--webe-work-fs);
            font-size: 4rem;
            font-weight: bold;
            letter-spacing: 0.3rem;
            text-align: center;
            text-shadow: var(--webe-fontDark-text-shadow);
        }

        .section-blog .comments-container {
            margin: 5rem 0 0.2rem 0;
            width: 100%;
            height: auto;
            justify-content: center;
            align-items: center;
        }

        .comments-container .comments-h2 {
            margin: 0;
            padding: 0;
            color: var(--webe-fontDarkAdj-clr);
            font-family: var(--webe-work-fs);
            font-size: 1.5rem;
            font-weight: normal;
            letter-spacing: 0.2rem;
            text-align: center;
            text-shadow: var(--webe-fontDark-text-shadow);
        }

        .comments-container .comments-ul {
            margin: 1em 0 0 0;
            padding: 0;
            list-style: none;
        }

        .comments-ul .comments-ul-li {
            margin: 0;
            padding: 0em 5em 2em 5em;
            type-list-style: none;
            text-decoration: none;
            color: var(--webe-fontDarkAdj-clr);
            font-family: var(--webe-work-fs);
            font-size: 1.2rem;
            font-style: italic;
            text-align: center;
        }
`;

export { sharedStylesBlog };
