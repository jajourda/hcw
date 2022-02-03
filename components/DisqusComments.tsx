import * as React from 'react';
import { DiscussionEmbed } from "disqus-react"

export interface IDisqusCommentsProps {
    url: string;
    identifier: string;
    title: string;
}

export default function DisqusComments(props: IDisqusCommentsProps) {
    const disqusShortname = "how-church-works"
    const disqusConfig = {
        url: props.url,
        identifier: props.identifier, // Single post id
        title: props.title // Single post title
    }
    return (
        <div>
            <h3>Comments</h3>
            <DiscussionEmbed
                shortname={disqusShortname}
                config={disqusConfig}
            />
        </div>
    );
}
