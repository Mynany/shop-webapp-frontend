import React from 'react'
import './preview-collection.style.scss'
import CollectionItem from '../collection-item/collection-item.component'
const PreviewCollection = ({title, items}) => (
    <div className="collection-preview">
        <h1 className="title ">{title}</h1>
        <div className="preview">
            {   items.
                filter((item, idx) => idx < 4).
                map(({id, ...otherItemProps}) => (
                <CollectionItem key={id} {...otherItemProps} />
            ))}
        </div>
    </div>
) 

export default PreviewCollection;