import Work from "../../components/work/work.jsx";


const Muba = () => {

    const slides = [
    {
      src: 'https://drive.google.com/thumbnail?id=1lbpG3b7A3ss-V65HkYUKo4or4v47Uc_Q&sz=w1000',
      title: '',
      description: '',
    },
    {
      src: 'https://drive.google.com/thumbnail?id=1jQ0nUD_MeUZuUZ0esXS_KD_QFAFM7e2P&sz=w1000',
      title: 'hall',
      description: '',
    },
    {
      src: 'https://drive.google.com/thumbnail?id=1M4D-5e_4F4on963eqLcJ_Rp3ZyM_1PhU&sz=w1000',
      title: 'living room',
      description: '',
    },
    {
      src: 'https://drive.google.com/thumbnail?id=1vkSx48COMBiZ0vhan9UaQbu_r1-RTxM9&sz=w1000',
      title: 'living room',
      description: '',
    },
    {
      src: 'https://drive.google.com/thumbnail?id=12MF6fWJoF2lfYNuaPkpcmkbG0cmQlPKm&sz=w1000',
      title: 'bedroom',
      description: '',
    },
    // {
    //   src: 'https://drive.google.com/thumbnail?id=1UksXgp5WW2d99zejRPogtzG7OzEFkCLR&sz=w1000',
    //   title: 'bedroom',
    //   description: '',
    // },
    {
      src: 'https://drive.google.com/thumbnail?id=14w5J13VNiWMdpO4VkRP24cQTgGUUU0Vs&sz=w1000',
      title: 'wardrobe',
      description: '',
    },
    {
      src: 'https://drive.google.com/thumbnail?id=18VoMObEuAU-VYigki70NLK23jDp714EM&sz=w1000',
      title: 'attic',
      description: '',
    },
    {
      src: 'https://drive.google.com/thumbnail?id=1vBa4O30hQ5giNkIvybe9qAlQwNJgv9wn&sz=w1000',
      title: 'bedroom',
      description: '',
    },
    {
      src: 'https://drive.google.com/thumbnail?id=1-6c9hsyLyJqtRL1wRdSWNERXEYwg5IUK&sz=w1000',
      title: 'bedroom',
      description: '',
    },
    // {
    //   src: 'https://drive.google.com/thumbnail?id=1veCfVStfoGeCFkIz0ahIC4JoPF3ZfUF1&sz=w1000',
    //   title: 'wardrobe',
    //   description: '',
    // }
    ]

    const work_item = {
        title : 'muba',
        brief : 'The municipality of Bologna and Bologna Welcome hold a national competition of ideas to select the best concept proposal for the new basketball museum at Paladozza, Bologna. The following project aims the second prize.',
       
        detail: ['location','project year', 'status',  'team', 'category'],
        info : ['Bologna, Italy', '2019', '2nd place | Design', 'Arch. Veronica Schiaroli, Ing. Daniele Mazza, Ing. Massimo Di Marco, Dott. Giuseppe Ciro De Gregorio', 'Competitions | Museum'],

        slides : slides,

        content: [
            {
                subtitle : '',
                text : [
                  'The following project is a restyling of a residential villa on the hills of Bologna city, recently acquired by a couple - he\'s a lawyer, and she\'s a tour guide. The owners are looking for a quiet place, far from the chaotic lifestyle of the city, where they could host their friends and family in a comfortable and relaxing spot.',
                  'The terraced house has two floors and one basement. The attic is addressed to the filing of the books\' owner and studying. The ground floor is the main subject of the restyling work. The project is focused on color analysis, wallpapers, graphics, and lighting design. For these reasons, a wooden boiserie system has been studied for the bedroom and the living room, combined with wallpapers that represent natural landscapes with a pictorial stroke. The defined colors are mid-blue and light blue, contrasting with coral red and light grey for some details and walls.',
                  'A sizeable wooden column has been created at the entrance around an existing structural column with a rectangular hole in the middle. This element is considered an architectural sign to realize a separate hall from the living room but with a strong connection with the rest of the space in terms of colors and style. Finally, for the lighting system, the choice has fallen on some lamps connected with colorful belts starting from the existing electrical socket. All belts and lamp shapes create a geometrical and decorative draw on the ceiling, and all the walls remain intact.'   
                
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

export default Muba;
