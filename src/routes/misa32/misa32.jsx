import { useState } from "react";

import { slides } from "./data.jsx"
import Work from "../../components/work_item/work.jsx";
import Footer from "../footer/footer.jsx";
import Lightbox from "yet-another-react-lightbox";
import Images from "../../components/images/images.jsx"
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { Thumbnails, Zoom } from "yet-another-react-lightbox/plugins";

const Misa32 = () => {
    const [index, setIndex] = useState(-1);

    const work_item = {
        title : 'misa32',
        'brief' : 'Renovation of a terrace of 130 square meters at 9th floor af a residential building. Three preliminary projects and different moodboards.',
        'location' : 'Bologna, Italy',
        'year' : '2023',
        'mode' : 'Outdoor design | Terrace',
        'slides': slides,
        'description' : [
            'The project concerns the renovation of a terrace of 130 square meters at 9th floor of a residential building in Bologna, close to the city center. The space belongs to a residential and private attic on the top floor and this position offers a stunning view at 360-degree to the city and its hills.',
            'Half of the whole terrace is already renovated with a glass veranda and a plank floor. The aim of the project is to create a covered space for smart working activities thanks to the building of a bioclimatic pergola with adjustable slats and sliding curtains that can be open and close at will. In addition the client asks for an open air relaxation area with sofas and sun beds, with the possibility to create a cinema area with a big and removable screen. A small space should be addressed to the barbecue nearby the drainpipe. All around the space are provided plants vases with different shapes and finishes and different type of plants according to the moodboard, which irrigation is regulated by an automatic irrigation system that take the water to a water accumulation tank located on the terrace.',
            'In the following slideshow are presented three different projects with three different moodboards.'
        ]
    }

  return(
    <div>
        <Work work_item={work_item}/>
        <div className="image_gallery">
            <Images
                data={work_item['slides']}
                onClick={(currentIndex) => setIndex(currentIndex)}
            />
            <Lightbox 
                plugins={[Thumbnails, Zoom]}
                index={index}
                open={index >= 0}
                close={() => setIndex(-1)}                
                slides={work_item['slides']} >
            </Lightbox>
        </div>
        <Footer></Footer>
    </div>
    );
};

export default Misa32;
