const Home = () => {
    return (
        <div style={{paddingLeft:'20px'}}>
            <h1>Home</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae itaque accusantium sint error possimus excepturi quidem fugiat tempore, minus fugit, beatae illum hic, delectus quia ad totam ea enim necessitatibus.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, voluptatum? Nam, labore quidem. Cupiditate ducimus accusantium libero veniam nihil ullam quidem corporis voluptates sunt sapiente, mollitia asperiores tenetur perspiciatis. Quibusdam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae itaque accusantium sint error possimus excepturi quidem fugiat tempore, minus fugit, beatae illum hic, delectus quia ad totam ea enim necessitatibus.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae itaque accusantium sint error possimus excepturi quidem fugiat tempore, minus fugit, beatae illum hic, delectus quia ad totam ea enim necessitatibus.</p>
            <p>lorem-ipsum is a JavaScript module for generating passages of lorem ipsum text. Lorem ipsum text is commonly used as placeholder text in publishing, graphic design, and web development.

                lorem-ipsum is compatible with the browser, Node.JS, and React Native.

                Important Notes
                THIS README IS FOR VERSION 2. SWITCH TO 1-STABLE BRANCH FOR THE VERSION 1 DOCUMENTATION.

                IF YOU NEED COMPATIBILITY WITH OLDER VERSIONS OF NODEJS, PLEASE USE V1.0.6 WHICH IS COMPATIBLE BACK TO NODE 0.4. npm i lorem-ipsum@1.0.6

                Installation
                npm i lorem-ipsum
                Using the Class
                The class is the recommended way to use lorem-ipsum since version 2. It makes it simpler to generate text using the same options.

                import from "lorem-ipsum";
                 const LoremIpsum = require"lorem-ipsum".LoremIpsum;

                const lorem = new LoremIpsum

                lorem.generateWords1;
                lorem.generateSentences5;
                lorem.generateParagraphs7;
                Using the Function
                lorem-ipsum version 2 exports a function that is backwards- compatible with the default function exported by lorem-ipsum version

                Users of version 1 should be able to upgrade to version 2 without any issue; they can just continue using this library as they did before.
                import  loremIpsum  from "lorem-ipsum";
                // const loremIpsum = require"lorem-ipsum".loremIpsum;

                loremIpsum; // generates one sentence
                Like before, you can pass in a number of options to customize the output. The example below shows the default options.

                import  loremIpsum  from "lorem-ipsum";
            </p>
        </div>
    )
}

export default Home;