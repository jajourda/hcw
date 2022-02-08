// import * as React from 'react';
import { DiscussionEmbed } from "disqus-react"

export interface IDisqusCommentsProps {
    url: string;
    identifier: string;
    title: string;
}
//>this comment helped to set up disqus so that each public reading page got its own unique disqus comments section
//https://stackoverflow.com/questions/64021373/the-same-comments-under-different-posts
export default function DisqusComments(props: IDisqusCommentsProps) {
    const disqusShortname = "how-church-works"
    const disqusConfig = {
        url: `${props.url}/${props.identifier}`,
        identifier: `#${props.identifier}`, // Single post id
        title: props.title // Single post title
    }
    return (
        <div className="w-full flex flex-col items-center">
            <h3 className="w-10/12 md:w-6/12 item text-5xl">Comments</h3><br />

            <div className="w-10/12 md:w-6/12 item">
                <DiscussionEmbed
                    shortname={disqusShortname}
                    config={disqusConfig}
                />
            </div>

        </div>
    );
}
