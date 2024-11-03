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

        content: [
            {
                subtitle : '',
                text : [
                    'The project consists in the renovation of a residential flat in the city of Bologna, Italy. The construction of the building is quite new, it dates back to 2009. The family wants to renew finishes and some furnishings and change the distribution of some spaces. ',
                    'One of the requests is to demolish the existing windowless bathroom and create a unique open space with kitchen and living room together. The change of position of the kitchen needs an accurate study of the hydraulic system and the way to bring exhaust fumes to the chimney flue. In addition the client wants to recreate a bathroom with washing machine and a shower. In the room where the kitchen was before it will be created a study with the view on the terrace, where the mother, that is a high school teacher, can work peacefully.',
                    'From the architectural point of view, a false ceiling is created at the entrance of the flat with the aim to lower the ceiling and create a more intimate space that open and enlarge the view once inside the open space. This area is the crux of the whole project and also the entrance and the way out are marked by two important sliding doors with a relevant modern taste. Thanks to this expedient the whole space become open and close at will. Another device used to hide pipes of hydraulic and electrical system is the installation of plasterboard ribs along some walls on the top, that become at the same time a place where to hide some LED strips for lighting and roller shutter boxes.',
                    'The construction site of the project has started in June 2023.'
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
