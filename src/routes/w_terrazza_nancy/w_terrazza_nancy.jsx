import { useState } from "react";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { Thumbnails, Zoom } from "yet-another-react-lightbox/plugins";

import Work from "../../components/work_item/work.jsx";
import Footer from "../footer/footer.jsx";
import Lightbox from "yet-another-react-lightbox";
import Images from "../../components/images/images.jsx"

import { slides } from "./data_terrazza_nancy.jsx"

const TerrazzaNancy = () => {
    const [index, setIndex] = useState(-1);

    const work_item = {
        title : 'terrazza nancy',
        brief : 'Restyling of a residential villa.',
        location : 'Bologna, Italy',
        year : '2023',
        mode : 'Outdoor design | Terrace',
        status: 'Design',
        slides: slides,
        description : [
            'The project concerns the renovation of a terrace of 130 square meters at 9th floor of a residential building in Bologna, close to the city center. The space belongs to a residential and private attic on the top floor and this position offers a stunning view at 360-degree to the city and its hills.',
            'Half of the whole terrace is already renovated with a glass veranda and a plank floor. The aim of the project is to create a covered space for smart working activities thanks to the building of a bioclimatic pergola with adjustable slats and sliding curtains that can be open and close at will. In addition the client asks for an open air relaxation area with sofas and sun beds, with the possibility to create a cinema area with a big and removable screen. A small space should be addressed to the barbecue nearby the drainpipe. All around the space are provided plants vases with different shapes and finishes and different type of plants according to the moodboard, which irrigation is regulated by an automatic irrigation system that take the water to a water accumulation tank located on the terrace.',
            'In the following slideshow are presented two different projects with two different moodboards.',
            'EXISTING CONDITION',
            'THE GREEN PARADISE',
            'This solution brings some green on the terrace. Thanks to different paths all the areas are connected to each other and a mix of grass, wood, stone and corten effects creates a green and natural oasis on the top of the building, far away from the chaotic city. The peculiarity of this project is the creation of an open air kitchen with an integrated barbecue and sink. The relaxed area become a cinema at will, but also some footstools are provided on the grass.',
            'ELEGANCE ON TOP',
            'This project is certainly the most elegant of the three. The boundaries of the terrace are defined by a light concrete floor of tiles and a thin line of white pebbles. All around there are plants vases with graminaceous plants and the cinema area is a proper space with footstools on a carpet of straw. A big freestanding barbecue is located in the north.',
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

export default TerrazzaNancy;
