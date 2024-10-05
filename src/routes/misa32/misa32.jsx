import { useState } from "react";

import { slides } from "./data_misa32.jsx"
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
            <p>existing condition</p>
            <Images
                data={work_item['slides'].slice(0,3)}
                onClick={(currentIndex) => setIndex(currentIndex)}
            />

            <p>the green paradise</p>
            <p>Thanks to different paths all the areas are connected to each other and a mix of grass, wood, stone and corten effects creates a green and natural oasis on the top of the building, far away from the chaotic city. The peculiarity of this project is the creation of an open air kitchen with an integrated barbecue and sink. The relaxed area become a cinema at will, but also some footstools are provided on the grass.</p>
            <Images
                data={work_item['slides'].slice(4,11)}
                onClick={(currentIndex) => setIndex(currentIndex)}
            />

            <p>elegance on top</p>
            <p>This project is certainly the most elegant of the three. The boundaries of the terrace are defined by a light concrete floor of tiles and a thin line of white pebbles. All around there are plants vases with graminaceous plants and the cinema area is a proper space with footstools on a carpet of straw. A big freestanding barbecue is located in the north.</p>
            <Images
                data={work_item['slides'].slice(12,17)}
                onClick={(currentIndex) => setIndex(currentIndex)}
            />

            <p>the exotic venue</p>
            <p>The last proposal is the most easy to realize, but at the same time there is a particular attention to details. All the areas are defined by a sort of "carpet" of grit of shells tiles connected to each other by paths. This solution is more exotic, not only for the shells on the floor, but also for the choosen plants and textiles. The patterns are really eclectic and colourful and they should recall exotic countries and moods.</p>
            <Images
                data={work_item['slides'].slice(18,24)}
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
