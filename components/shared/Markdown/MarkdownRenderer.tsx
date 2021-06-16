import React, { FunctionComponent } from 'react'
import Markdown from 'markdown-to-jsx';
import Paragraph from './../Text/Paragraph';
import Header from './../Text/HeaderOne';
import AnchorText from './../Text/AnchorText';

interface Props {
    content : string
}

const MarkdownRenderer : FunctionComponent<Props> = ({
    content
}) => {

    const CustomAnchor : FunctionComponent<{}> = ({children, ...props}) => <a style={{color : 'peachpuff'}} {...props}>{children}</a>

	const CustomElement : FunctionComponent<{}> = ({children, ...props}) =>{
		// @ts-ignore
		// gets string to extract custom component => console.log(children[0].props.children[0], props)
		return <div style={{fontWeight : 'bold', color : 'blueviolet'}}>This should be a custom element</div>
	}

    return (
        <Markdown options={{
            overrides : {
                h1 : {
                    component : Header,
                    props : {
                        type : 1
                    }
                },
                h2 : {
                    component : Header,
                    props : {
                        type : 2
                    }
                },
                a : {
                    component : AnchorText,
                    
                },
                p : {
                    component : Paragraph
                },
                blockquote : {
                    component : CustomElement
                }
            }
        }}>{content}</Markdown>
    )
}

export default MarkdownRenderer
