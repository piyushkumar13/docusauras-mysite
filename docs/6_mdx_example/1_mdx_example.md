# 1 Mdx Example

export const Tag = ({children, color}) => {

    const cssStyleObj = {
        backgroundColor: color,
        borderRadius: '4px',
        color: '#fff',
        padding: '0.2rem 0.5rem',
        fontWeight: 'bold'
    }

    return (
        <>
            <span style={cssStyleObj}> {children} </span>
        </>
    )

}

<Tag color="#FF5733">Important</Tag> This is example of mdx. This is an <Tag color="#3399FF">exciting</Tag> example.

I can still use **markdown in it.**

## References
More details on pages can be found [here](https://docusaurus.io/docs/markdown-features/react).