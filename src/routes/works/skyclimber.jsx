import Work from "../../components/work/work.jsx";

const Skyclimber = () => {

    const slides = [
        {
          src: 'https://drive.google.com/thumbnail?id=1muMnrUlfUERQLDETsomIRCRqaf6zlnSM&sz=w1000',
          title: '',
          description: '',
        },
        {
          src: 'https://drive.google.com/thumbnail?id=1BTyJdIwEQBKG4f4Dw_Hc-xOUwYGZzktY&sz=w1000',
          title: 'hall',
          description: '',
        },
        {
          src: 'https://drive.google.com/thumbnail?id=1bXD6EHveJpYZnzpAuAMd-TqY_pm5tYbX&sz=w1000',
          title: 'living room',
          description: '',
        },
        {
          src: 'https://drive.google.com/thumbnail?id=1sx7Tf7Q70DPYJvIws9M2zZBw1xpO8yrZ&sz=w1000',
          title: 'living room',
          description: '',
        },
        {
          src: 'https://drive.google.com/thumbnail?id=137eI__Ul8dI_O9YSULLWlxMfTj_FX_pS&sz=w1000',
          title: 'bedroom',
          description: '',
        },
    
        {
          src: 'https://drive.google.com/thumbnail?id=1jEyWI_Bwac8EETSbNbS_iuXldGrjWi4h&sz=w1000',
          title: 'bedroom',
          description: '',
        },
    
        {
          src: 'https://drive.google.com/thumbnail?id=1xhZMBC0jN3_t1vyOBgMPL0s-RCjvzMxL&sz=w1000',
          title: 'wardrobe',
          description: '',
        },
        {
          src: 'https://drive.google.com/thumbnail?id=1K4hGfAR5MIyQRfHxWLa13v6Yg3yaLuqN&sz=w1000',
          title: 'attic',
          description: '',
        }  ]

    const work_item = {
        title : 'skyclimber ticinum',
        brief : 'Terra Viva Competition "Hangar Ticinum": imaging a full recovery of the disused hydroplane base with the ambition of restoring the importance and centrality it once had - Pavia (Italy)',

        detail: ['location','project year', 'category', 'team', 'status'],
        info : ['Pavia, Italy', '2022', 'Competitions | Hangar', 'Ilaria Guidalotti, Giulio Gaddoni', 'Design'],

        slides : slides,

        content : [
            {subtitle : 'THE RUIN',
                text : [
                    'Today, the ldroscalo presents itself as a sort of enchanted ruin, besieged on several fronts by dense spontaneous arboreal vegetation.',
                    'The massive concrete pillars anchored to the ground disappear, devoured by the greenery, giving the impression that the building is levitating on the water. More than a hydroplane station from the early 1900s, there is the perception that the hangar seems like a strange alien spaceship that landed there by mistake, damaged and unable to leave.',
                    'However, its scenic location on the river, panoramic view of Bargo Ticino, and proximity to the historical center suggest that it is one of the liveliest and most popular places for the local community. Curiously, this is not the case, and for reasons that are difficult to understand, the city has gradually turned its back on it, even forgetting its existence.',
                    'Abandoned to itself, mutilated, and orphan of the only walkway that once connected it to the mainland, the ldroscalo still stands firm in all its monumentality as a sort of ancestral guardian of the river. Nevertheless, it is clear to everyone that its survival hangs by a thread. The deterioration of the facades and the roof becomes more critical every year, and the point of no return seems ever closer.',
                  ],
                pics : slides.slice(0,5)},    

            {subtitle : 'THE SKYCLIMBER TICINUM',
                text : [
                    'Stemming from the original function of the existing building as a shelter for abandoned seaplanes, the SkyClimber Ticinum presents itself as a renewed space, architectural substance becoming a means of connection between earth and sky, accessible and liveable all day long in all of its parts by any user.',
                    'The project is centered around a ramp running along the entire perimeter of the building, suggesting the concepts of verticality and climbing to the sky.',
                    'The project aims to propose itself as a place of community connection, inviting each individual to live the conceptual and corporal experience of flight by presenting many levels of engagement spread over four floors, each representing the different phases of flight.',
                    'The Taxi Floor is at the river level. Here, users can enjoy the basketball and beach volleyball courts or sit at the bar while connecting with the place and the surrounding nature.',
                    'Entering the building is the TakeOff Floor, a versatile and modular environment furnished with modular cubes and staircases made of recycled materials. Thanks to the presence of a stage and climbing walls, which recall the concepts of movement and verticality, the floor can be used for many daily and night activities.',
                    'The ramp identifies the Climbing Floor and is accessible to all users. It runs through the space as an architectural walk designed to host exhibitions. It connects directly to the roof - the Cruising Floor - joining an elliptical panoramic gallery suspended on the roof in connection with the sky and the city of Pavia.',
                    ],
                pics : slides.slice(5,)},
            ],

    }

  return(
    <div>
        <Work work_item={work_item}/>
    </div>
    );
};

export default Skyclimber;
