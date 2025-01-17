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
    {
      src: 'https://drive.google.com/thumbnail?id=1UksXgp5WW2d99zejRPogtzG7OzEFkCLR&sz=w1000',
      title: 'bedroom',
      description: '',
    },
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
                  'The city of Bologna is also known as Basket City. Since the very beginning of the 20th century the passion for basketball started to increase significantly in the city. In 1956 the mayor Giuseppe Dozza inaugurated the current indoor sporting arena named from its name PalaDozza. The iconic building is also nicknamed The Little Madison, after Madison Square Garden in New York City.',
                  'Thanks to the effect that this sport has for the city, Bologna Welcome and the Municipality holds the competition to redevelop an area of the building, actually disused, for creating the first national basketball museum of the country: it will be a modern, interactive and playful place. ',
                  'The exhibition space is formally divided into different thematic sectors, following the main rules of the basketball game. It means that there are 4 areas as quarters of the match, timeout and overtime sections, besides the reception, Walk of Fame and shop areas. Most of these rooms are open spaces, divided by mobile, light and perforated elements to allow for tailor the space according to need. Particular attention and analysis is given to multimedia and interactive technologies, which leads the visitor all over the exhibition tour and even outside. A mobile application, multimedia tables, interactive screenings, sound design devices are thought to make the experience unique and immersive. Even games and entertainment are essential, not only for kids, but also for adults. Being designed as a loop path, the return way is thought as a Walk of Fame furnished with mirrors on which are glued famous basketball stars life - size where visitors can make pictures and selfies.'
                ],
                pics : slides.slice(1,-2)
            },
            {
              subtitle : '',
              text : [],
              pics : slides.slice(-1)
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
