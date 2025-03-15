# 2. Codeblock Theme Support
We can also change the theme of codeblocks by adding following properties :


```js
{ 
    //...
    themeConfig: {
        prism: {
            theme: prismThemes.github, // change here, you can select for example prismThemes.duotoneDark. This codeblock theme is used in case website light mode is selected.
            darkTheme: prismThemes.dracula //This codeblock theme is used in case website dark mode is selected.
        }
    },
    //...
}
```

## References
More details on pages can be found [here](https://docusaurus.io/docs/markdown-features/code-blocks).