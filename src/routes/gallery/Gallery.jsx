import GalleryItem from "../../components/gallery_item/gallery_item";
import "./gallery.scss"

const Gallery = () => {


  const item1 = {
    name: "GUARDIA25",
    imageUrl: "https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80",
    year: "2023",
    location: "Bologna, Italy",
    cat: "Interior design| Residential"

    
  }


  const item2 = {
    name: "MISA32",
    imageUrl: "https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80",
    year: '2023'
  }


  return (
    <div className="gallery_wrapper">
      <GalleryItem item={item1} />

      <GalleryItem item={item2} />

      <GalleryItem item={item1} />

      <GalleryItem item={item2} />

    </div>
  );
};

export default Gallery;
