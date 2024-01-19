import './PrintsPage.css';
import PrintTile from './PrintTile';
import data from './data/printsInfo.json';
import onion from './onion_in_bucket.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function PrintsPage() {

    const purchased = data.prints.filter(print => print.purchased === true);
    const notPurchased = data.prints.filter(print => print.purchased === false);

    const createPrintTile = () => {
        const sortedPrintList = purchased.concat(notPurchased);
        return (
            sortedPrintList.map(print => 
            <PrintTile 
                name={print.name} 
                altName={print.altName} 
                link={print.link} 
                purchased={print.purchased} 
                shopList={print.shopLinks}
                conventions={print.conventions}
            ></PrintTile>
        ));
    }

    return (
        <div className="prints-page">
            <div className="prints-page-header">
                <div className="prints-page-onion-container">
                    <img className="prints-page-onion-icon" src={onion} alt="logo"/>
                </div>
                <span className="prints-page-title">a bucket list of artist prints</span>
                <div className="prints-page-stats">
                    <span className="prints-page-stats-acquired">{purchased.length} acquired</span>
                    <FontAwesomeIcon className="prints-page-stats-separator" icon="fa-circle"></FontAwesomeIcon>
                    <span className="prints-page-stats-inprogress">{notPurchased.length} in-progress</span>
                </div>
            </div>
            <div className="prints">
                <div className='prints-container'>
                    {createPrintTile()}
                </div>
            </div>
        </div>
    );
}

export default PrintsPage;