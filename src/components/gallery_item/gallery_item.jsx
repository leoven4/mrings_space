import { Link } from "react-router-dom"; // must be nested in a BrowserRouter component
import Button from '../button/button';
import './gallery_item.scss';

const GalleryItem = ({ item }) => {
    const { name, imageUrl, year, id } = item;

    return (
        <Link className="gallery_item" to={`/${id}`}>
            <img src={imageUrl} alt={`${name}`} />
            <div className="footer">
                <span className="name">{name} - {year}</span>
            </div>
            <Button buttonType="inverted" >{name}</Button>
        </Link>
    );
};
export default GalleryItem;