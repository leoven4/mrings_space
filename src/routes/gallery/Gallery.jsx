import GalleryItem from "../../components/gallery_item/gallery_item";
import Footer from "../footer/footer"
import "./gallery.scss"
import {gallery_content} from "./data_gallery"

const Gallery = () => {

  return (
    <div>
      <h1 className="gallery_header">martina anelli</h1>
      <div className="gallery_type">projects</div>

      <div className="gallery_wrapper">

        <GalleryItem item={gallery_content['casa_federico']} />

        <GalleryItem item={gallery_content['misa32']} />
        <GalleryItem item={gallery_content['torre']} />
        <GalleryItem item={gallery_content['water_and_roses']} />

        <GalleryItem item={gallery_content['guardia25']} />
        <GalleryItem item={gallery_content['terrazza_nancy']} />

      </div>
      <Footer></Footer>
      </div>

  );
};

export default Gallery;
