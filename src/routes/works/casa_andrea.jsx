import Work from "../../components/work/work.jsx";

const CasaAndrea = () => {

    const slides = [
    {
      src: 'https://drive.google.com/thumbnail?id=1mueKfDvV8N9QihUhb7zI3pLPAlec76iY&sz=w1000',
      title: '',
      description: '',
    },
    {
      src: 'https://drive.google.com/thumbnail?id=157u1X6CAZzsfNFHHH_M2AO8ccREKSgPd&sz=w1000',
      title: 'hall',
      description: '',
    },
    {
      src: 'https://drive.google.com/thumbnail?id=1y4FcR_JPtcX6dVlD2NJUiDHzA5ue-HN8&sz=w1000',
      title: 'living room',
      description: '',
    },
    {
      src: 'https://drive.google.com/thumbnail?id=1plGehJqBLX00l9e8-QmN_qAScU_yqGl9&sz=w1000',
      title: 'living room',
      description: '',
    },
    {
      src: 'https://drive.google.com/thumbnail?id=1v4NqOrRBlQ_F-ePobs6OEzUMIgYCYRAZ&sz=w1000',
      title: 'bedroom',
      description: '',
    },
    {
      src: 'https://drive.google.com/thumbnail?id=11UK-mvDpb6Hl2fiYGSfspGJnZOaYwDOi&sz=w1000',
      title: 'bedroom',
      description: '',
    },
    {
      src: 'https://drive.google.com/thumbnail?id=16g8H_szevUjHA0feW60cnMrq7QiX5dCY&sz=w1000',
      title: 'wardrobe',
      description: '',
    },
    {
      src: 'https://drive.google.com/thumbnail?id=1ygMJDzAQ7VwffYkFVPCnOFsRh-2ekoKD&sz=w1000',
      title: 'attic',
      description: '',
    } ,
    {
      src: 'https://drive.google.com/thumbnail?id=11iHtO8xTTyrpWGp7EVw6lHPFXH9VXB2G&sz=w1000',
      title: 'attic',
      description: '',
    },
    {
      src: 'https://drive.google.com/thumbnail?id=15xnvrtL8kfI3nySu6agJ1IfWI1ejO49v&sz=w1000',
      title: 'attic',
      description: '',
    }  
    ]

    const work_item = {
        title : 'casa andrea',
        brief : 'Renovation of a residential flat.',

        detail: ['location','project year', 'status',  'team', 'category'],
        info : ['Bologna, Italy', '2023', 'completed', 'Arch. Cristina Marchi', 'Interior design | Residential'],

        slides : slides,

        content: [
            {
                subtitle : '',
                text : [

                    'The project consists of renovating a residential flat in Bologna, Italy. The building\'s construction dates back to 2009. The family wants to renew finishes and some furnishings and change the distribution of some spaces.',
                    'One of the requests is to demolish the existing windowless bathroom and create a unique open space with a kitchen and living room together. The change of position of the kitchen needs an accurate study of the hydraulic system and how to bring exhaust fumes to the chimney flue. In addition, the client wants to recreate a bathroom with a washing machine and a shower. The room where the kitchen was before will be created as a study room with a view of the terrace, where the mother, a high school teacher, can work peacefully.',
                    'From the architectural point of view, a false ceiling is created at the entrance of the flat. This design choice serves a dual purpose. It not only lowers the ceiling, creating a more intimate space, but also opens and enlarges the view once inside the open space. This area is the crux of the whole project, and two critical sliding doors mark the entrance and the way out with a relevant modern taste. This practical makes the entire space open and closed at will. Another device used to hide hydraulic and electrical systems\' pipes is the installation of plasterboard ribs along some walls on the top, which become a place where some LED strips for lighting and roller shutter boxes can be hidden.',
                    'The construction site of the project has started in June 2023.',
                      ],
                pics : slides
            }
        ],

    }

  return(
    <div>
        <Work work_item={work_item}/>
    </div>
    );
};

export default CasaAndrea;
