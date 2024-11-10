import Work from "../../components/work/work.jsx";

const Torre = () => {

    const slides = [

    {
      src: 'https://drive.google.com/thumbnail?id=1MROD81vGUImDuP070f4tqhOdwLwvntsV&sz=w1000',
      title: '',
      description: '',
    },
    {
      src: 'https://drive.google.com/thumbnail?id=1aPj9ApBRLw0WOiECYGnNowmAsLscTUGs&sz=w1000',
      title: '',
      description: '',
    },
    // PICTURES FROM 1946
    {
      src: 'https://drive.google.com/thumbnail?id=1RjgAhqf_4dqzSxyzjHWofCtObz0Yomwi&sz=w1000',
      title: '',
      description: '',
    },
    // EXISTING CONDITION
    {
      src: 'https://drive.google.com/thumbnail?id=13KEmd4DSq7ktG8A7Pkau7Fxj139tF9SB&sz=w1000',
      title: '',
      description: '',
    },
    // OLD AND NEW LAYOUT COMPARED
      {
        src: 'https://drive.google.com/thumbnail?id=1kbT8QSD6AEe3xzzoxX9QM5IEkSybHPbK&sz=w1000',
        title: '',
        description: '',
      },
      // BUILDING N. 1 - reconstruction from the past/new project
      {
        src: 'https://drive.google.com/thumbnail?id=122HJvjVdG8S83YKH1ePMLmtCqF9CayYE&sz=w1000',
        title: '',
        description: '',
      },
  
      {
        src: 'https://drive.google.com/thumbnail?id=1TQ2PgWgB3Hv04eY7bIFViROQV8mGoPvy&sz=w1000',
        title: '',
        description: '',
      },
      // BUILDING N. 2 - existing condition/reconstruction from the past/new project
      {
        src: 'https://drive.google.com/thumbnail?id=13Si2pk0dhvNWCVTOuy39OfcAtgWJBRyo&sz=w1000',
        title: '',
        description: '',
      },
      {
        src: 'https://drive.google.com/thumbnail?id=1u8ii9lERFK3n4um-OlYtjJ6jP3hlHYDr&sz=w1000',
        title: '',
        description: '',
      },
      {
        src: 'https://drive.google.com/thumbnail?id=1InRtewPlaWxSQrXMGflZLvxuz9GkiSwQ&sz=w1000',
        title: '',
        description: '',
      },
      // BUILDING N. 5 - existing condition/reconstruction from the past/new project
      {
        src: 'https://drive.google.com/thumbnail?id=1kFlz-pV-HjyXZV9POvSuRUcVXA4x3YoN&sz=w1000',
        title: '',
        description: '',
      },
      {
        src: 'https://drive.google.com/thumbnail?id=1InRtewPlaWxSQrXMGflZLvxuz9GkiSwQ&sz=w1000',
        title: '',
        description: '',
      },
      {
        src: 'https://drive.google.com/thumbnail?id=11XgPkLaQDBovYH_k-9EnEHT3TuKr_61g&sz=w1000',
        title: '',
        description: '',
      },
      {
        src: 'https://drive.google.com/thumbnail?id=1jhvPAsgDGSMAaDG8tViD75bKMQ5xBSfy&sz=w1000',
        title: '',
        description: '',
      },
      {
        src: 'https://drive.google.com/thumbnail?id=1AlwOEggP8eZ8ERJghmYM6l9ucyvo9vSk&sz=w1000',
        title: '',
        description: '',
      },
      {
        src: 'https://drive.google.com/thumbnail?id=12hRIie5LBYKUs1L4WW1_Jwue0_lmMw-G&sz=w1000',
        title: '',
        description: '',
      },
      {
        src: 'https://drive.google.com/thumbnail?id=1G7AofEwzsTfdSNvRQ4L5Uc2VTAsSS9S1&sz=w1000',
        title: '',
        description: '',
      },
      {
        src: 'https://drive.google.com/thumbnail?id=1k1_Ie3pXAO00M6I5xiSO1Je20ksajUFm&sz=w1000',
        title: '',
        description: '',
      },
      {
        src: 'https://drive.google.com/thumbnail?id=1TQSZGXMeesOJFabQiTeWbOMh5jlnFiJq&sz=w1000',
        title: '',
        description: '',
      },
      {
        src: 'https://drive.google.com/thumbnail?id=1D-pa5uku1yvFzKFGSGO0uZ_vBzzpt44p&sz=w1000',
        title: '',
        description: '',
      },  
    ]

    const work_item = {
        title : 'la torre',
        brief : 'A design-based zoning recontruction of a small residential village with a common swimming pool in Badolo, on the hills closed to Bologna.',
        
        detail: ['location','project year', 'status', 'category',],
        info : ['Sasso Marconi (BO), Italy', '2022', 'Design', 'Design-based zoning reconstruction | Residential village'],

        slides : slides,
        
        content : [
            {subtitle : '',
                text : [
                    'The following project concerns a particular design-based zoning reconstruction of a small village called "La Torre" on the hills of Bologna, in Badolo. The first document that certificates the existence of these buildings it dates back to 1700 on the Napoleonic real estate registry. During the II World War the group of houses was bombed and almost completely destroyed.',
                    'For the importance and antiquity of this village each building is restricted by municipality regulations. Especially only three of the five buildings can be reconstructed because originally with a residential use and also the materials and the volume of them should be respected, according to the current laws. Right now just a few stones of some of these buildings remain. For this reason it has been hard to redesign the layout of the ancient village. Thanks to old maps and historical pictures from 1946 it has been possible to define the final plan.',
                    'As mentioned before only the building number 1 - 2 - 5 are designed with new and modern solutions, always respecting the ancient shape, materials, solid and voids. In building number 1, the biggest one, are realized two duplex flats, symmetric and identical, each one with a detached access to the garage and a storage. For building number 2 and 5 is realized only one duplex flat for each, always with detached access to the garage and storage.',
                    'All the constructions are connected to each others  with a pedestrian path, whereas the car paths are divided and along the borders of the property. Different floors with different materials are used to draw on the ground the ancient position of other buildings that are not reconstructed. Especially where the biggest one was located, the one at the corner that originally was a stall, a common swimming pool is realized, to service all the new village rebuilt.',
                ],
                pics : slides.slice(0,2)},    

            {subtitle : 'pictures from 1946',
                text : [],
                pics : slides.slice(2,3)},

            {subtitle : 'existing condition',
                text : [],
                pics : slides.slice(3,4)},

            {subtitle : 'old and new layout compared',
                text : [],
                pics : slides.slice(4,5)},
                
            {subtitle : 'building n.1 - reconstruction from the past/new project',
                text : [],
                pics : slides.slice(5,7)},

            {subtitle : 'BUILDING N. 2 - existing condition/reconstruction from the past/new project',
                text : [],
                pics : slides.slice(7,10)},
                
            {subtitle : 'BUILDING N. 5 - existing condition/reconstruction from the past/new project ',
                text : [],
                pics : slides.slice(10,)},
        ]
    }

  return(
    <div>
        <Work work_item={work_item}/>
    </div>
    );
};

export default Torre;