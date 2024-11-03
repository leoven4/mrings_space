import { useState } from "react";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { Thumbnails, Zoom } from "yet-another-react-lightbox/plugins";

import Work from "../../components/work_item/work.jsx";
import Footer from "../footer/footer.jsx";
import Lightbox from "yet-another-react-lightbox";
import Images from "../../components/images/images.jsx"

import { slides } from "./data_skyclimber.jsx"

const Skyclimber = () => {
    const [index, setIndex] = useState(-1);

    const work_item = {
        title : 'skyclimber ticinum',
        brief : 'Terra Viva Competition "Hangar Ticinum": imaging a full recovery of the disused hydroplane base with the ambition of restoring the importance and centrality it once had - Pavia (Italy)',
        location : 'Pavia, Italy',
        year : '2022',
        mode : 'Competitions | Hangar',
        team : 'Ilaria Guidalotti, Giulio Gaddoni',
        status: 'Design',
        slides: slides,
        description : [
            'THE RUIN',
            'Besieged on several fronts by dense spontaneous arboreal vegetation, today the ldroscalo presents itself as a sort of enchanted ruin. ',
            'The massive concrete pillars that keep it anchored to the ground disappear devoured by the greenery, giving the clear impression that the building is literally levitating on the water. More than a hydroplanes\' station from the early 1900s, there is the perception that the hangar seems like a sort of strange alien spaceship that landed there by mistake, damaged and unable to leave.',
            'However, the scenic location on the river, the panoramic view of Bargo Ticino and the proximity to the historical centre, would suggest one of the liveliest and most popular places for the local community. Curiously this is not the case, and for reasons that are difficult to understand, over time the city has gradually turned its back on it, even forgetting its own existence. ',
            'Abandoned to itself, mutilated and orphan of the only walkway that once connected it to the mainland, the ldroscalo still stands fIrm in all its monumentality as a sort of ancestraI guardian of the river. Nevertheless, it is clear to everyone that its survival hangs by a thread. The deterioration of the facades and the roof are becoming more critical every year, and the point of no return seems ever closer.',],
        addiotional_content : [
            'THE SKYCLIMBER TICINUM',
            'Stemming from the original function of the existing building as a shelter for abandoned seaplanes, the SkyClimber Ticinum presents itself as a renewed space, architectural substance becoming means of connection between earth and sky, accessible and liveable all day long in all of its parts by any kind of user.',
            'The project is centered around a ramp running along the entire perimeter of the building, suggesting the concepts of verticality and climbing to the sky.',
            'The project aims to propose itself as a place of community connection, inviting each individual to live the conceptual and corporal experience of flight by presenting many levels of engagement, spread on four floors, each representing the different phases of flight.',
            'The Taxi Floor is the river level: here users can enjoy the basketball and beach volley courts or sitting at the bar while connecting with the place and the surrounding nature.',
            'Entering the building is the TakeOff Floor, a versatile and modular environment, furnished with modular cubes and staircases made of recycled materials, that can be used for many daily and night activities, thanks to the presence of a stage and climbing walls, which recall the concepts of movement and verticality.',
            'The Climbing Floor is identified by the ramp, accessible to all users, running through the space as an architectural walk designed to host exhibitions, and connecting directly to the roof - the Cruising Floor - joining an elliptical panoramic gallery suspended on the roof, in connection with the sky and the city of Pavia.',        ]
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

export default Skyclimber;
