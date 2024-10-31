import { useState } from "react";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { Thumbnails, Zoom } from "yet-another-react-lightbox/plugins";

import Work from "../../components/work_item/work.jsx";
import Footer from "../footer/footer.jsx";
import Lightbox from "yet-another-react-lightbox";
import Images from "../../components/images/images.jsx"

import { slides } from "./data_fair.jsx"

const Fair = () => {
    const [index, setIndex] = useState(-1);

    const work_item = {
        title : 'fair booth',
        brief : 'The following picture slideshow presents some of the projects realized for the company QBO Stand in Bologna. Some design projects have been approved and built in fairs in the Middle and North of Italy.',
        location : '',
        year : '',
        mode : '',
        status: '',
        slides: slides,
        description : [
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

export default Fair;
