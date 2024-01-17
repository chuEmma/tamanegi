import './PrintTile.css';
import PropTypes from 'prop-types';
import inPrnt from "./inprnt.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function PrintTile({name, altName, link, purchased, shopList, conventions}) {

    const getImages = () => {
        // TODO: 
        // Could optimize such that on first run, we just save the images into a map 
        // so we don't have to run require.context every single time
        const images = require.context('./data', true, /\.png$/);
        const imageList = images.keys()
        .filter((imagePath) => altName ? imagePath.includes(altName) : imagePath.includes(name))
        .map(image => images(image));
    
        if (imageList.length === 0) {
            return (
            <div className="print-tile-image-placeholder">
                <FontAwesomeIcon className="print-tile-image-placeholder-icon" icon="fa-image"></FontAwesomeIcon>
            </div>);
        } else {
            return(
                imageList.map(image => {
                    let ratio = 150 / image.height; // By height
                    return <img className="print-tile-image" style={{width: image.width * ratio}} src={image} alt="some file"></img>   
            }));
        }
    }

    const createShopList = () => {
        let iconList = [];
        if (shopList) {
            for (const [key, link] of Object.entries(shopList)) {
                switch(key) {
                    case "shop":
                        iconList.push(
                            <a className="print-tile-store-container" href={link} target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon className="print-tile-store-icon" icon="fa-store"/>
                            </a>
                        );
                        break;
                    case "etsy":
                        iconList.push(
                            <a className="print-tile-store-container" href={link} target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon className="print-tile-store-icon" icon="fa-brands fa-etsy"/>
                            </a>
                        );
                        break;
                    case "inPrnt":
                        iconList.push(
                            <a className="print-tile-store-container" href={link} target="_blank" rel="noopener noreferrer">
                                <img className="print-tile-store-inprnt-icon" src={inPrnt} alt="some file"/>
                            </a>
                        );
                        break;
                    default:
                        break;
                }
            }
            return iconList;
        }
    }

    const getConventions = () => {
        if (conventions) {
            let iconList = [];
            conventions.forEach(convention => {
                switch(convention) {
                    case "AnimeExpo":
                        iconList.push(<div className='print-tile-convention-icon'>AX</div>);
                        break;
                    default:
                        break;
                }
            });
            return iconList;
        }
    }

    return (
    <div className="print-tile">
        <div className="print-tile-gallery">
            {getImages()}
        </div>
        <div className="print-tile-profile">
                <a className="print-tile-name" href={link} target="_blank" rel="noopener noreferrer">{name}</a>
                <div className="print-tile-shop">
                    {getConventions()}
                    {createShopList()}
                    {purchased && (<FontAwesomeIcon className="print-tile-purchased-icon" icon="fa-circle-check"/>)}
                </div>
        </div>
    </div>
);
}

PrintTile.propTypes = {
    name: PropTypes.string,
    altName: PropTypes.string,
    link: PropTypes.string,
    purchased: PropTypes.bool,
    shopList: PropTypes.shape(),
    conventions: PropTypes.array,
}

export default PrintTile;

