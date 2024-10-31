import { useState } from "react";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { Thumbnails, Zoom } from "yet-another-react-lightbox/plugins";

import Work from "../../components/work_item/work.jsx";
import Footer from "../footer/footer.jsx";
import Lightbox from "yet-another-react-lightbox";
import Images from "../../components/images/images.jsx"

import { slides } from "./data_garden_ball.jsx"

const GardenBall = () => {
    const [index, setIndex] = useState(-1);

    const work_item = {
        title : 'garden ball',
        brief : 'The thesis project concerns the proposal for the new green district around the sport center Paladozza in Bologna. The regeneration of the area will improve tourism and the involvement of citizens in the area.',
        location : 'Bologna, Italy',
        year : '2020',
        mode : 'Master Thesis | Urban regeneration',
        status: 'Design',
        slides: slides,
        description : [
            'Starting from the analysis of the context, existing functions and activities, infrastructures, green areas and public institutions closed to PalaDozza, such as a kindergarten, a primary and a secondary school, the intervention focuses on rearrangement of this functions and inclusion of new ones. The main shape used is the circle, which takes up the PalaDozza plan and creates welcoming and more private environments, in addition to decorative elements of the pavement. Through the interplay of solids and voids, perforated, transparent and matte materials, ramp systems which configure the space at different altitudes, is possible to create different scenarios and suggestive views. Just like inside the museum, even in the garden the visitor experience will be immersive and entertaining. The user of the garden will be free to move in the new public space, even if ramps and the pattern on the floor invite him to follow particular directions. Particular interest is given to the material contrasts, corten, stone and green, implementation of trees and accessibility.',
            'The new basketball garden is dotted with different activities, from cultural to more active ones. A play area for kids, a new circular playground, a dog area with agility dog furnitures are reintegrated, but new functions are included. Among these, there is a new small library of sports literature with reading room, that have a green roof walkable, directly connected with an arena and its stage, which leans on the hill created from the building wall; a sports area with all facilities included; artistic areas with installations related to basketball and, finally, the tower. This important architectural landmark in the middle of the garden is used as belvedere, allowing the visitor to see the entire district from above and creating a visual connection with all the ancient and modern towers of which the city of Bologna is known all around the world.',
            'The new basketball district is now completed and is ready to become a new modern and entertaining attraction for the city.',
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

export default GardenBall;
