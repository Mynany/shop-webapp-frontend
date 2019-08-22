import React from 'react';
import './shop.style.scss';
import SHOP_DATA from './shop.data';
import PreviewCollection from '../../components/preview-component/preview-collection.component';

class ShopPage extends React.Component{
    constructor(){
        super();
        this.state = {
            collections: SHOP_DATA
        }
    }

    render(){
        const { collections } = this.state;
        console.log(collections)
        return(
            <div>
                {collections.map(({id, ...otherCollectionProps}) => (
                    <PreviewCollection key={id} {...otherCollectionProps}></PreviewCollection>
                ))}
            </div>
        )
    }
}
export default ShopPage;