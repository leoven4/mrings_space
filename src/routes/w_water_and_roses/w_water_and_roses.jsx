import { useState } from "react";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { Thumbnails, Zoom } from "yet-another-react-lightbox/plugins";

import Work from "../../components/work_item/work.jsx";
import Footer from "../footer/footer.jsx";
import Lightbox from "yet-another-react-lightbox";
import Images from "../../components/images/images.jsx"

import { slides } from "././data_water_and_roses.jsx"

const WaterAndRoses = () => {
    const [index, setIndex] = useState(-1);

    const work_item = {
        title : 'Water and roses',
        brief : 'Renovation project of the “L’acqua e le rose” wellness centre inside Pavilion 2 of Sant’Orsola Hospital in Bologna. Job partly accomplished.',
        location : 'Bologna, Italy',
        year : '2021',
        mode : 'Interior design | Wellness center, hospital',
        team : 'Progetto Heimat',
        status: 'Partially completed',
        slides: slides,
        description : [
            'The following project consists in the renovation of an area located in Pavilion 2 of  Sant\'Orsola Hospital in Bologna. The client is Fondazione Sant\'Orsola, a non-profit organization with the aim of creating projects to improve the hospitality and the care of the patients. The construction has been  funded thanks to the generosity of almost 1000 donors.',
            'The aim of this restyling is to realize a wellness center completely reserved for the patients of the Policlinico and a true oasis of serenity. In addition to the renovation of the showers and assisted bathing areas, an area has been dedicated to the barber and hairdresser service, which patients can use free of charge. This allows them to feel pampered as in a wellness center and alleviate a sometimes very difficult and challenging course of medical treatment. The aim of the project is making the patients feel at home. They need to be cured not only from the disease, but also from their state of discomfort, therefore being welcomed in the best possible way in the best possible place.',
            'The concept design turned around the choice of wallpapers from InkiostroBianco company, that was an important donor. The chosen wallpapers recall natural leitmotivs to bring in the space a bit of the outside world, but not in a rowdy and excessively lush way, which would have clashed in a context such as the hospital one that is a difficult and tiring experience for anyone who walks through it. The final choice was a sort of welcoming "mother nature", a nest that could accommodate people in a place of well-being. The colors of the walls are chosen to match with the wallpapers and also panels made of wood are used to recreate a natural and welcoming space.',
            'Furthermore, the shapes of arches recall one of the most iconic symbols of the city of Bologna: the porticoes. They are repurposed not only by  drawings of some wallpapers, but also by some furniture in the barber area, or more decorative elements in the assisted bath, which open windows on nature.',
            'FINAL LAYOUT'],
        additional_content : [
            'HALL/COMMON SPACES',
            'HAIRDRESSER/BEAUTICIAN',
            'SHOWERS/ASSISTED BATH',
            'BATHROOMS'
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

export default WaterAndRoses;
