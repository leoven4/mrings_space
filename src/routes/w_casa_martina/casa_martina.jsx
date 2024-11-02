import { useState } from "react";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { Thumbnails, Zoom } from "yet-another-react-lightbox/plugins";

import Work from "../../components/work_item/work.jsx";
import Footer from "../footer/footer.jsx";
import Lightbox from "yet-another-react-lightbox";
import Images from "../../components/images/images.jsx"

import { slides } from "./data_casa_martina.jsx"

const CasaMartina = () => {
    const [index, setIndex] = useState(-1);

    const work_item = {
        title : 'casa martina',
        brief : 'Renovation and restyling of a residential flat.',
        location : 'Bologna, Italy',
        year : '2024',
        mode : 'Architecture and interior design | Residential ',
        status: 'completed',
        slides: slides,
        description : [

            'Martina is a person that always pay attention to details and combination of colours. She\'s a decisive woman, but at the same time a welcoming and sweet woman. That why her house reprensents her in every single detail. The colour palette is really simple but the combination of materials and elements contributes to create a unique and warm place to live.',
            'At the entrance of the apartment there is a window with vertical glass panels framed in a thin and black structure. This architectural element is a filter between the outside and the inside and creates a visual connection with the living room and the kitchen. The black block of the kitchen is the signature of the owner, so strong but at the same time so elegant. All the rooms have some black and white details, from fabrics to cabinet handles, from picture frames to lamps or few radiators. Everywhere in the flat there is a warm floor made with small wooden slats typical from the 70\'s, polished and renewed in some parts.',
            'The bathroom has a retrò taste with tiles that remember the old grit floors, but with a modern interpretation that stand out from details and finishes. Few plants complete the flat with a pop of green colour in all rooms.',
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

export default CasaMartina;
