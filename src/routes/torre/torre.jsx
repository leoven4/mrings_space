import { useState } from "react";

import { slides } from "./data_torre.jsx"
import Work from "../../components/work_item/work.jsx";
import Footer from "../footer/footer.jsx";
import Lightbox from "yet-another-react-lightbox";
import Images from "../../components/images/images.jsx"
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { Thumbnails, Zoom } from "yet-another-react-lightbox/plugins";

import "./torre.scss"
const Torre = () => {
    const [index, setIndex] = useState(-1);

    const work_item = {
        title : 'la torre',
        brief : 'A design-based zoning recontruction of a small residential village with a common swimming pool in Badolo, on the hills closed to Bologna.',
        location : 'Sasso Marconi (BO), Italy',
        year : '2022',
        mode : 'Design-based zoning reconstruction | Residential village',
        slides: slides,
        description : [
            'The following project concerns a particular design-based zoning reconstruction of a small village called "La Torre" on the hills of Bologna, in Badolo. The first document that certificates the existence of these buildings it dates back to 1700 on the Napoleonic real estate registry. During the II World War the group of houses was bombed and almost completely destroyed.',
            'For the importance and antiquity of this village each building is restricted by municipality regulations. Especially only three of the five buildings can be reconstructed because originally with a residential use and also the materials and the volume of them should be respected, according to the current laws. Right now just a few stones of some of these buildings remain. For this reason it has been hard to redesign the layout of the ancient village. Thanks to old maps and historical pictures from 1946 it has been possible to define the final plan.',
            'As mentioned before only the building number 1 - 2 - 5 are designed with new and modern solutions, always respecting the ancient shape, materials, solid and voids. In building number 1, the biggest one, are realized two duplex flats, symmetric and identical, each one with a detached access to the garage and a storage. For building number 2 and 5 is realized only one duplex flat for each, always with detached access to the garage and storage.',
            'All the constructions are connected to each others  with a pedestrian path, whereas the car paths are divided and along the borders of the property. Different floors with different materials are used to draw on the ground the ancient position of other buildings that are not reconstructed. Especially where the biggest one was located, the one at the corner that originally was a stall, a common swimming pool is realized, to service all the new village rebuilt.',
        ]
    }

  return(
    <div>
        <Work work_item={work_item}/>
        <div className="image_gallery">
            <Images
                data={work_item['slides'].slice(0,2)}
                onClick={(currentIndex) => setIndex(currentIndex)}
            />

            <p className="subtitle">pictures from 1946</p>
            <Images
                data={work_item['slides'].slice(2,3)}
                onClick={(currentIndex) => setIndex(currentIndex)}
            />

            <p className="subtitle">existing condition</p>
            <Images
                data={work_item['slides'].slice(3,4)}
                onClick={(currentIndex) => setIndex(currentIndex)}
            />

            <p className="subtitle">old and new layout compared</p>
            <Images
                data={work_item['slides'].slice(4,5)}
                onClick={(currentIndex) => setIndex(currentIndex)}
            />

            <p className="subtitle">building n.1 - reconstruction from the past/new project</p>
            <Images
                data={work_item['slides'].slice(5,7)}
                onClick={(currentIndex) => setIndex(currentIndex)}
            />

            <p className="subtitle">BUILDING N. 2 - existing condition/reconstruction from the past/new project</p>
            <Images
                data={work_item['slides'].slice(7,10)}
                onClick={(currentIndex) => setIndex(currentIndex)}
            />

            <p className="subtitle">BUILDING N. 5 - existing condition/reconstruction from the past/new project </p>
            <Images
                data={work_item['slides'].slice(10,)}
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

export default Torre;
