import {ReactElement} from "react";

export default function Tag({children, color}): ReactElement {

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

};