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
        info : ['Kassel, Germany', '2017', 'International Workshop | Landscape Education for Democracy'],

        slides : slides,

        content: [
            {
                subtitle : '',
                text : [
                    'Landscape Education for Democracy, LED, is an interdisciplinary, international course unit training conceptual thinking, diversity management, and intercultural communication for building leadership competence and awareness in the spatial planning professions. The Kassel IP\'s main topic was Nordstadt Landscape & Power, and town and landscape architecture students\' goals were to interview Nordstadt actors and stakeholders and map evidence and symbols of power in the landscape. In a feedback process, the Kassel team shares results with Nordstadt communities. Different methods were used: go-along, photo-voice, sharing knowledge with local people, visioning chair, story walk, and many more.',
                    'Starting from landscape analysis and interviews with locals and stakeholders, Nordstat\'s landscape is a moving target in which constants are exchanged. A scientific approach was adopted to such a humanistic subject, using the Equation of Change to identify the leading causes of dissatisfaction and resistance to change. Two main scenarios emerged: first, it affected the community and their miscommunication and misinterpretation of most of the events, and second, it impacted the spaces seen as unpleasant and invisible by the inhabitants. Then, the team designed a detailed change process that could be hosted by the community and involve them in achieving excellent results - a bottom-up approach.',
                    'The whole change process is divided into three different steps. The first step is to find out what people need and focus on what Nordstadt has. The short term takes 10 months and consists of engaging and listening to all actors involved, such as people of different social classes and locals. A vital institution to consider is a university and its students, which could be involved in creating more engagement and activities in the area. The active community can join this process by coloring fences, benches, and shop facades, also thanks to graffiti marches or competitions promoted. During Kassel IP, the team selected a few district areas where it would be possible to start the process and figure out their change. The second step takes 3 years, and Nordstadt people show their efforts to the local Municipality, which discusses their will for the future through meetings. In the meantime, the landscape upgrade will be finished with implemented color furniture. Finally, in the long term, outsiders will change their impressions about Nordstadt, and many more activities could be held, such as street closure for festivals. Media play a fundamental role in the whole process, which aims to change the idea of Nordstadt outside the district and invite people to visit it.'
                ],
                pics : slides.slice(0,1)
              },
  
              {
                  subtitle : '',
                  text : [],
                  pics : slides.slice(1,2)
              },
              {
                  subtitle : '',
                  text : [],
                  pics : slides.slice(2,3)
              },
  
              {
                  subtitle : '',
                  text : [],
                  pics : slides.slice(3,4)
              },
  
              {
                  subtitle : '',
                  text : [],
                  pics : slides.slice(4,)
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
