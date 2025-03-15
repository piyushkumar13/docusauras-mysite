# 1. Code Blocks & Theme

## Language Support
By default, Docusaurus comes with a subset of [commonly used languages](https://github.com/FormidableLabs/prism-react-renderer/blob/master/packages/generate-prism-languages/index.ts#L9-L23).

:::warning

Some popular languages like Java, C#, or PHP are not enabled by default.
To enable them, we need to add following codeblock in `docusaurus.config.js` file.

```js
{ 
    //...
    themeConfig: {
        prism: {
            additionalLanguages: ['java']
        }
    },
    //...
}
```
:::

## Codeblocks
```java
class Example {
    public static void main(String[] args) {
        System.out.println("This is Java code block");
    }
}
```

```jsx title="/src/somepath/to/file/example.jsx"

function example(){
    console.log("This is JSX example.");
}

```

## References
More details on pages can be found [here](https://docusaurus.io/docs/markdown-features/code-blocks).