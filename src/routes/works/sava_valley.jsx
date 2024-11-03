import Work from "../../components/work/work.jsx";

const SavaValley = () => {

    const slides = [
    {
      src: 'https://drive.google.com/thumbnail?id=1BTCELvpMLXVgd83Bk6b5dlomdATtsX1M&sz=w1000',
      title: '',
      description: '',
    },
    {
      src: 'https://drive.google.com/thumbnail?id=1TlCezL_MyAdqSByltYd21MHRHfmGRpwlY&sz=w1000',
      title: 'hall',
      description: '',
    },
    {
      src: 'https://drive.google.com/thumbnail?id=1DReGH1YdEDf8gP6M6S0HKhE850nc-and&sz=w1000',
      title: 'living room',
      description: '',
    },
    {
      src: 'https://drive.google.com/thumbnail?id=1yPjffXsNAIHSjKMEY-2F5nHDlR2u2fni&sz=w1000',
      title: 'living room',
      description: '',
    },
    {
      src: 'https://drive.google.com/thumbnail?id=1xojHol816NSN_3FOoOI925FXDH44BZdF&sz=w1000',
      title: 'bedroom',
      description: '',
    },

    {
      src: 'https://drive.google.com/thumbnail?id=1-5fNBqbopfJWBamqylgrJqqTOV3Ce2si&sz=w1000',
      title: 'bedroom',
      description: '',
    },
  ]



    const work_item = {
        title : 'sava',
        brief : 'Project to restore landscape dignity to the village of Litja - Slovenia',
        
                
        detail: ['location', 'project year',  'category'],
        info : ['Litja, Slovenia', '2015', 'University course | Landscape architecture'],

        content: [
            {
                subtitle : '',
                text : [],
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

export default SavaValley;
