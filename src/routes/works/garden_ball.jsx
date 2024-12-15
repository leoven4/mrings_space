import Work from "../../components/work/work.jsx";

const GardenBall = () => {

    const slides = [
    {
      src: 'https://drive.google.com/thumbnail?id=1FLb1ybZqHDXdOYUOl3OZGoqNztYlwYQQ&sz=w1000',
      title: '',
      description: '',
    },
    {
      src: 'https://drive.google.com/thumbnail?id=11Gp_c2knK1Enf9ZX_4vzTHjOYV49Dnfk&sz=w1000',
      title: 'hall',
      description: '',
    },
    {
      src: 'https://drive.google.com/thumbnail?id=1UT-y9DP66K7AsHXJUZ1FGCSOk60Cn8zV&sz=w1000',
      title: 'living room',
      description: '',
    },
    {
      src: 'https://drive.google.com/thumbnail?id=1Wo-orOsUH3iHbEyQBYRycF8GOIJsE9aE&sz=w1000',
      title: 'living room',
      description: '',
    },
    {
      src: 'https://drive.google.com/thumbnail?id=1fVwoN0nWESAFdmMYuKI_UyLZgfK6P6GL&sz=w1000',
      title: 'bedroom',
      description: '',
    },
    {
      src: 'https://drive.google.com/thumbnail?id=11pVvSPRnQlawXh0TwjJXtDE0G_T0OEmQ&sz=w1000',
      title: 'bedroom',
      description: '',
    },
    {
      src: 'https://drive.google.com/thumbnail?id=1hrh-XmKic-l-lPYVtA4iNF2-kyw-VnVC&sz=w1000',
      title: 'wardrobe',
      description: '',
    },
    {
      src: 'https://drive.google.com/thumbnail?id=18DMxKBcizJ4irYmNR60sMFMuT_cXSCtb&sz=w1000',
      title: 'attic',
      description: '',
    },
    {
      src: 'https://drive.google.com/thumbnail?id=10bnDeywvwX6E2DQs6uP-7ibCiEfo4KFx&sz=w1000',
      title: 'bedroom',
      description: '',
    },
    {
      src: 'https://drive.google.com/thumbnail?id=10bnDeywvwX6E2DQs6uP-7ibCiEfo4KFx&sz=w1000',
      title: 'wardrobe',
      description: '',
    },
    {
      src: 'https://drive.google.com/thumbnail?id=1qM7BEJWcVmL1kyhl1Ybrttmt9_QBSygV&sz=w1000',
      title: 'bedroom',
      description: '',
    },
    {
      src: 'https://drive.google.com/thumbnail?id=1cUf8NuM2sC-kbhR0N_ipxg5E-cUUC9Bw&sz=w1000',
      title: 'bedroom',
      description: '',
    },
    {
      src: 'https://drive.google.com/thumbnail?id=1sfM1gKCIttMH_fIsbV6vskHSOhoAw9-v&sz=w1000',
      title: 'wardrobe',
      description: '',
    },
    {
      src: 'https://drive.google.com/thumbnail?id=1pOVjElExuwarX3Rnn3W5170Tf1VOPuRE&sz=w1000',
      title: 'attic',
      description: '',
    }
    ]

    const work_item = {
        title : 'garden ball',
        brief : 'The thesis project concerns the proposal for the new green district around the sport center Paladozza in Bologna. The regeneration of the area will improve tourism and the involvement of citizens in the area.',
        
                
        detail: ['location','project year', 'status',  'category'],
        info : ['Bologna, Italy', '2020', 'design', 'Master Thesis | Urban regeneration'],

        slides : slides,

        content: [
            {
                subtitle : '',
                text : [
                    'Starting from the analysis of the context, existing functions and activities, infrastructures, green areas, and public institutions close to PalaDozza, such as a kindergarten, a primary, and a secondary school, the intervention focuses on the rearrangement of these functions and the inclusion of new ones. The main shape used is the circle, which takes up the PalaDozza plan and creates welcoming and more private environments, in addition to decorative elements of the pavement. Through the interplay of solids and voids, perforated, transparent, and matte materials, and ramp systems that configure the space at different altitudes, it is possible to create various scenarios and suggestive views. Just like inside the museum, the visitor experience will be immersive and entertaining, even in the garden. The garden user will be free to move into the new public space, even if ramps and the pattern on the floor invite him to follow particular directions. Particular interest is given to the material contrasts, corten, stone and green, implementation of trees, and accessibility.',
                    'The new basketball garden is dotted with different cultural and more active activities. A play area for kids, a new circular playground, and a dog area with agility dog furniture are reintegrated, but new functions are included. Among these, there is a new small library of sports literature with a reading room, that has a green roof walkable, directly connected with an arena and its stage, which leans on the hill created from the building wall; a sports area with all facilities included; artistic areas with installations related to basketball and, finally, the tower. This significant architectural landmark in the middle of the garden is used as a belvedere, allowing the visitor to see the entire district from above and creating a visual connection with all the ancient and modern towers of which the city of Bologna is known worldwide.',
                    'The new basketball district has been completed and is ready to become a modern and entertaining attraction for the city.',
                    ],
                pics : slides
            }
        ]
        
    }

  return(
    <div>
        <Work work_item={work_item}/>
    </div>
    );
};

export default GardenBall;
