import Work from "../../components/work/work.jsx";


const Nordstadt = () => {

    const slides = [
    {
      src: 'https://drive.google.com/thumbnail?id=1cPpT30-nK3EzwzHYA3RMIXJYmqGaOlsX&sz=w1000',
      title: '',
      description: '',
    },
    {
      src: 'https://drive.google.com/thumbnail?id=1jHqXeCRdMhrmZaymfcaXv5B1V8GtR7DK&sz=w1000',
      title: '',
      description: '',
    },
    {
      src: 'https://drive.google.com/thumbnail?id=1am9HFmd5okcj3lPOf_XeeroCNh6q2LL7&sz=w1000',
      title: '',
      description: '',
    },
    {
      src: 'https://drive.google.com/thumbnail?id=1HFkv-ev9-W7xs7P-4tZlzBggSRnoAA0P&sz=w1000',
      title: '',
      description: '',
    },
    {
      src: 'https://drive.google.com/thumbnail?id=1RRwmVKDyMp0J09CajyFYhufozZiCkJ3e&sz=w1000',
      title: '',
      description: '',
    },

    {
      src: 'https://drive.google.com/thumbnail?id=12GSmkTWTg53CBwybn_v1HwNOIfhe-EJ5&sz=w1000',
      title: '',
      description: '',
    },
  ]

    const work_item = {
        title : 'nordstadt',
        brief : 'LED arranges for an international workshop called Intensive Programme. In Kassel, in 2017, IP Participants are encouraged to engage directly with the urban landscape and with local communities of the “Nordstadt”, and to address locally specific landscape challenges. Participants refer to concepts of landscape, democracy and participation.',
        
        detail: ['location','project year',  'category'],
        info : ['Kassel, Germany', '2017', 'International workshop | Landscape education for democracy'],

        slides : slides,

        content: [
            {
                subtitle : '',
                text : [
                    'Landscape Education for Democracy, LED, is an interdisciplinary, international course unit training conceptual thinking, diversity management and intercultural communication for building leadership competence and awareness in the spatial planning professions. The Kassel IP main topic was Nordstadt Landscape & Power and town and landscape architecture students goals were to interview Nordstadt actors and stakeholders, and map evidence and symbols of power in the landscape. In a feedback process, the Kassel team shares results with Nordstadt communities. Different methods were used such as go-along, photo-voice, sharing knowledge with local people, visioning chair, story walk and many more.',
                    'Starting from landscape analysis and interviews to locals and stakeholders, the Landscape of the Nordstat figured out as a moving target in which the constant is exchange. A scientific approach was adopted to a such humanistic subject, using the Equation of Change to identify the main causes of dissatisfaction and resistance to change. Two main scenarios emerged: first affects the community and their miscommunication and misinterpretation for most of events, second has an impact on the spaces, that are seen as unpleasant and invisible from the inhabitants. Then, the team designed a detailed change process that could be host by the community and could involve them toachieve great results. A really bottom-up approach.',
                    'The whole change process is divided into three different steps. First step goal is to find out what people really needs and focus on what Nordstadt actually has. The short term takes 10 months and basically consists in engaging and listening all actors involved, such as different social class people and locals. Important institution to consider is university and its student, that could be involved to create more engagement and activities in the area. The active community can join this process by coloring fences, benches, shops facades, also thanks to graffiti march or competitions promoted. During Kassel IP the team selected few district areas were it’s possible to start the process and figured out their change. Second step takes 3 years, and Nordstadt people show their efforts to the local Municipality with which discuss their will for the future, through meetings. In the meanwhile the landscape upgrade will finish with implemented color furnitures. Finally, in the long term outsiders will change their impressions about Nordstadt and many more activities could be held, such as street closure for festivals. Medias play a fundamental role in the whole process which aims is to change the idea of Nordstadt outside the district and invite people to visit it.',
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

export default Nordstadt;
