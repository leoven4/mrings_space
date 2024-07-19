import { useState } from "react";
import "./work.scss"
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Thumbnails, Zoom } from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Images from "../images/images.jsx";

const WorkPage = ({ work_item }) => {
    const [index, setIndex] = useState(-1);

  return(
    <div className="work_item">
        
        <div className="work_header">{work_item['title']}</div>
        <div className="work_description">{work_item['brief']}</div>

        <div className="wrapper">
            <div className="work_detail_container">
                <div>Location</div>
                <div>Project year</div>           
                <div>Category</div> 
            </div>
                
            <div className="work_info_container">
                <div>{work_item['location']}</div>
                <div>{work_item['year']}</div>           
                <div>{work_item['mode']}</div>
            </div>
        
        </div>

        <div>
            <p>{work_item['description'][0]}</p>
            <p>{work_item['description'][1]}</p>
            <p>{work_item['description'][2]}</p>
            <p>{work_item['description'][3]}</p>

        </div>

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
    </div>
    );
};

export default WorkPage;
