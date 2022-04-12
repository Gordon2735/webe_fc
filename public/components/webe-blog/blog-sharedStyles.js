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

sharedStylesBlog.root = `
        :root {
	        --bg-primary-clr: hsl(0, 0%, 13%);
	        --bg-greyLight-clr: hsl(0, 4%, 89%);
	        --bg-greyDark-clr: hsl(0, 0%, 71%);
            --webe-header-clr: hsl(32, 83%, 54%);
	        --webe-HOOT-clr: hsl(32, 83%, 54%);
	        --webe-fontBlack-clr: hsl(0, 0%, 0%);
            --webe-fontDark-clr: hsl(0, 0%, 13%);
            --webe-fontDarkAdj-clr: rgba(33, 33, 33, 0.8);
	        --webe-fontWhite-clr: hsl(0, 100%, 100%);
	        --webe-fontLight-clr: hsl(0, 3%, 85%);
            --webe-font-clr-freak: hsla(90, 100%, 50%, 0.9);
            --webe-HOOT-fs: 'Chango', cursive;
            --webe-title-fs: 'Days One', sans-serif;
	        --webe-poppins-fs: 'Poppins', sans-serif;
	        --webe-work-fs: 'Work Sans', sans-serif;
            --webe-fontOrange-text-shadow: hsl(32, 83%, 54%) 3px 1px 4px;
            --webe-fontDark-text-shadow: hsl(0, 0%, 13%) 3px 1px 5px;

        }
`;

sharedStylesBlog.blog = `
        @import url('https://fonts.googleapis.com/css2?family=Days+One&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Chango&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Work+Sans&display=swap');

        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        html {
	        background-color: var(--bg-greyLight-clr);
        }

        .main-container {
            margin: 0;
            padding: 0;
            width: 100vw;
            height: auto;
        }


`;
export { sharedStylesBlog };
