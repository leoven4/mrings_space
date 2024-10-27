import { useState } from "react";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { Thumbnails, Zoom } from "yet-another-react-lightbox/plugins";

import Work from "../../components/work_item/work.jsx";
import Footer from "../footer/footer.jsx";
import Lightbox from "yet-another-react-lightbox";
import Images from "../../components/images/images.jsx"

import { slides } from "./data_casa_federico.jsx"

const CasaFederico = () => {
    const [index, setIndex] = useState(-1);

    const work_item = {
        title : 'casa federico',
        brief : 'Restyling of a residential villa.',
        location : 'Bologna, Italy',
        year : '2024',
        mode : 'Interior design | Residential',
        status: 'completed',
        slides: slides,
        description : [
            'The following project is a restyling of a residential villa on the hills of Bologna city, recently acquired by a couple, he\'s a lawer and she\'s a tour guide. Owners are looking for a quiet place, far from the chaotic lifestyle of the city, where they could host their friends and family in a comfortable and relaxing spot.',
            'The terraced house has two floors and one basement. The attic is totally addressed to the filing  of the books\' owner and studying. The ground floor is the main subject of the restyling work. The project is focused on color analysis, wallpapers and their graphics and lightning design. For these reasons a wooden boiserie system has been studied for the bedroom and the living room, combined with wallpapers that represent natural landscapes with a pictorical stroke. The defined colours are mid-blue and light blue in contrast with coral red and light grey colours for some details and walls.',
            'At the entrance, a large wooden column has been created around an existing structural column with a rectangular hole in the middle. This element is thought as an architectural sign to realized a separated hall from the living room, but with a strong connection with the rest of the space in terms of colours and style. Finally for the lightning system the choice has fell on some lamps connected to each others with some colorful belts starting from the existing electrical socket. All belts and lamps\' shapes create a geometrical and decorative draw on the ceiling and all the walls remain intact.'    
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

export default CasaFederico;
