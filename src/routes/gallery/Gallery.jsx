import GalleryItem from "../../components/gallery_item/gallery_item";
import Footer from "../footer/footer";
import "./gallery.scss"

const Gallery = () => {


  const guardia25 = {
    name: "guardia25",
    imageUrl: "https://drive.google.com/thumbnail?id=1y8hkTteX1zzN_-EpZhqnedDbPe-h3yEj&sz=w1000",
    year: "2023",
    location: "Bologna, Italy",
    cat: "Interior design| Residential"
    
  }

  const misa32 = {
    name: "misa32",
    imageUrl: "https://drive.google.com/thumbnail?id=1R2qrX7EJooTv-PrjujpwsAF-zaqV8GLr&sz=w1000",
    year: '2023',
    location: "Bologna, Italy",
    cat: "Outdoor design| Terrace"
    
  }

  const torre = {
    name: "la torre",
    imageUrl: "https://drive.google.com/thumbnail?id=1TQSZGXMeesOJFabQiTeWbOMh5jlnFiJq&sz=w1000",
    year: '2022',
    location: "Sasso Marconi (BO), Italy",
    cat: "Design-based zoning reconstruction | Residential village"
    
  }
  return (
    <div>
      <h1 className="gallery_header">martina anelli</h1>
      <div className="gallery_type">projects</div>
      {/* <div className="triangle_wrapper">
        <div className="triangle_down"></div>
      </div> */}
      <div className="gallery_wrapper">
        <GalleryItem item={guardia25} />

        <GalleryItem item={misa32} />

        <GalleryItem item={torre} />

        <GalleryItem item={guardia25} />

      </div>
      <Footer></Footer>
    </div>
  );
};

export default Gallery;
