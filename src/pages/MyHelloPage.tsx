import React from 'react';
import Layout from "@theme/Layout";

/*This page by default will be available at http://localhost:3000/MyHelloPage.
* We can also add this page at the navbar - check docusaurus.config.js file.
* */
export default function MyHelloPage(){

    return(
        <Layout>
            <div>
                <h1>Hello Page</h1>
                <p>More details on pages can be found <a href="https://docusaurus.io/docs/creating-pages">here</a>. </p>
            </div>
        </Layout>
    )
}