import GalleryItem from "../../components/gallery_item/gallery_item";
import "./gallery.scss"

const Gallery = () => {


  const item1 = {
    name: "guardia25",
    imageUrl: "https://drive.google.com/thumbnail?id=1y8hkTteX1zzN_-EpZhqnedDbPe-h3yEj&sz=w1000",
    year: "2023",
    location: "Bologna, Italy",
    cat: "Interior design| Residential"
    
  }


  const item2 = {
    name: "misa32",
    imageUrl: "https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80",
    year: '2023'
  }


  return (
    <div>
      <div className="gallery_header">martina anelli</div>
      <div className="gallery_type">portfolio</div>
      {/* <div className="triangle_wrapper">
        <div className="triangle_down"></div>
      </div> */}
      <div className="gallery_wrapper">
        <GalleryItem item={item1} />

        <GalleryItem item={item2} />

        <GalleryItem item={item1} />

        <GalleryItem item={item2} />

      </div>
    </div>
  );
};

export default Gallery;
