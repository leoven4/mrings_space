import GalleryItem from "../../components/gallery_item/gallery_item";
import Footer from "../footer/footer";
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
    imageUrl: "https://drive.google.com/drive-viewer/AKGpihZqkSeei6qaJprJiKLgKRBErWozspmo8EHzWP0zHdS0wAzEMJnIwCUpKkJTA2QxdctyLbN9KCnSUjTB4AHYUlcHdspubU_ecfI=s1600-rw-v1",
    year: '2023',
    location: "Bologna, Italy",
    cat: "Outdoor design| Terrace"
    
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

        <GalleryItem item={item1} />

      </div>
      <Footer></Footer>
    </div>
  );
};

export default Gallery;
