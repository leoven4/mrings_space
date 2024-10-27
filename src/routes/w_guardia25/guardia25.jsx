import { useState } from "react";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { Thumbnails, Zoom } from "yet-another-react-lightbox/plugins";

import Work from "../../components/work_item/work.jsx";
import Footer from "../footer/footer.jsx";
import Lightbox from "yet-another-react-lightbox";
import Images from "../../components/images/images.jsx"

import { slides } from "./data_guardia25.jsx"

const Guardia25 = () => {
    const [index, setIndex] = useState(-1);

    const work_item = {
        title : 'guardia25',
        brief : 'Renovation of a residential flat.',
        location : 'Bologna',
        year : '2023',
        mode : 'Interior design | Residential',
        slides: slides,
        description : [
            'The project consists in the renovation of a residential flat in the city of Bologna, Italy. The construction of the building is quite new, it dates back to 2009. The family wants to renew finishes and some furnishings and change the distribution of some spaces.',
            'One of the requests is to demolish the existing windowless bathroom and create a unique open space with kitchen and living room together. The change of position of the kitchen needs an accurate study of the hydraulic system and the way to bring exhaust fumes to the chimney flue. In addition the client wants to recreate a bathroom with washing machine and a shower. In the room where the kitchen was before it will be created a study with the view on the terrace, where the mother, that is a high school teacher, can work peacefully.',
            'From the architectural point of view, a false ceiling is created at the entrance of the flat with the aim to lower the ceiling and create a more intimate space that open and enlarge the view once inside the open space. This area is the crux of the whole project and also the entrance and the way out are marked by two important sliding doors with a relevant modern taste. Thanks to this expedient the whole space become open and close at will. Another device used to hide pipes of hydraulic and electrical system is the installation of plasterboard ribs along some walls on the top, that become at the same time a place where to hide some LED strips for lighting and roller shutter boxes.',
            'The construction site of the project has started in June 2023.'
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

export default Guardia25;
