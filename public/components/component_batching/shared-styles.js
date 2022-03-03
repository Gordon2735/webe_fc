const sharedStyles = {};
sharedStyles.trbl = `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;    
`;

sharedStyles.modal = `
    img {
        border-radius: 50%;
        width: 80px;
    }

    h1, p {
        margin: 10px;
        padding: 0;
        font-family: 'Roboto';
    }

    h1 {
        font-size: 1.4em;
        color: var(--primary);
    }

    

    hr {
        border: 0;
        margin: 8px 0;
        height: 1px;
        background-image: linear-gradient(to right, rgba(0, 0, 0, 0), 
        rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));
    }
`;

export { sharedStyles };
