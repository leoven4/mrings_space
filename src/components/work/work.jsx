import { useState } from "react";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { Thumbnails, Zoom } from "yet-another-react-lightbox/plugins";

import Footer from "../../routes/footer/footer.jsx";
import Lightbox from "yet-another-react-lightbox";
import Images from "../images/images.jsx"


import "./work.scss"

const Work = ({ work_item }) => {

    const [index, setIndex] = useState(-1);


  return(
    
    <div className="work_item">
        
        <div className="work_header">{work_item['title']}</div>
        <div className="work_description">{work_item['brief']}</div>

        <div className="wrapper">

            <div className="work_detail_container">
                {work_item['detail'].map((detail, id) => (
                <div key={id}>{detail}</div>))}
            </div>
                
            <div className="work_info_container">
                {work_item['info'].map((info, id) => (
                <div key={id}>{info}</div>))}
            </div>
        
        </div>

        <div className="image_gallery">
            <div>
                {work_item['content'].map((content, id) => (
                    <div key={id}>
                        <p className="subtitle">{content.subtitle}</p>
                            {content.text.map((paragraph, id) => (
                                <p className="text" key={id}>{paragraph}</p>
                            ))}
                        <Images data={content.pics} onClick={(currentIndex) => setIndex(currentIndex)}/>
                    </div>))}
            </div>
            
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

export default Work;
