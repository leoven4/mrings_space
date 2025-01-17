import Work from "../../components/work/work.jsx";

const CasaMartina = () => {

    const slides = [
    {
      src: 'https://drive.google.com/thumbnail?id=1eTMbTW--ZRSKfzVyMhuU6TUFWJmtdbeA&sz=w1000',
      title: '',
      description: '',
    },
    {
      src: 'https://drive.google.com/thumbnail?id=1IZkytQc7-8HKFgP1zi8-l9UBqWzxdBxW&sz=w1000',
      title: '',
      description: '',
    },
    {
      src: 'https://drive.google.com/thumbnail?id=19UipYEW5Ybc0tPxT4M4_bd_i2DNOoPVr&sz=w1000',
      title: '',
      description: '',
    },
    {
      src: 'https://drive.google.com/thumbnail?id=1HkpQ1PPtZNkQNkz6AywPFdz8MSFwk7nJ&sz=w1000',
      title: '',
      description: '',
    },
    {
      src: 'https://drive.google.com/thumbnail?id=1M1VcZTCHWQs1PE5j4oaEmlxyGkXugj22&sz=w1000',
      title: '',
      description: '',
    },
    {
      src: 'https://drive.google.com/thumbnail?id=1bulofC_DoTRaXtZabpC1gZvf8wrbLPS0&sz=w1000',
      title: '',
      description: '',
    },
    {
      src: 'https://drive.google.com/thumbnail?id=1VougSiOUIiEavtpDvMdf34kk4-N9b9Lb&sz=w1000',
      title: '',
      description: '',
    },
    {
      src: 'https://drive.google.com/thumbnail?id=1OsLdb4vZbsxCbBjQQ3Z41i9IVoFrmtpk&sz=w1000',
      title: '',
      description: '',
    },  
    {
      src: 'https://drive.google.com/thumbnail?id=1on8VAF0UU55J9j4lJ9FYRZqC-B0fmqRq&sz=w1000',
      title: '',
      description: '',
    },
    {
      src: 'https://drive.google.com/thumbnail?id=1nENVvszhVQCn4F5JYVeAFRrlQWrL7cn5&sz=w1000',
      title: '',
      description: '',
    },    
    {
      src: 'https://drive.google.com/thumbnail?id=1uDlkhoyxtsYaCiAhd8QX1DnPL6MmOTZd&sz=w1000',
      title: '',
      description: '',
    },
    {
      src: 'https://drive.google.com/thumbnail?id=1LLKZ82pDX6aMDezT8uwC1OH5xbrrGNFY&sz=w1000',
      title: '',
      description: '',
    },
    {
      src: 'https://drive.google.com/thumbnail?id=1DyR3NIO6nULnXzvodBBtlYq8r4QRlRhK&sz=w1000',
      title: '',
      description: '',
    },

    {
      src: 'https://drive.google.com/thumbnail?id=1o9w_bJmqWpnR8R4gVwa_sr3AjoIImtwh&sz=w1000',
      title: '',
      description: '',
    },
    {
      src: 'https://drive.google.com/thumbnail?id=1_pf4DGaVzEZfvVcZGrh1TPfQ4rpMouEU&sz=w1000',
      title: '',
      description: '',
    },
    ]
    
    const work_item = {
        title : 'casa martina',
        brief : 'Renovation and restyling of a residential flat.',
        
        
        detail: ['location','project year', 'status',  'category'],
        info : ['Bologna, Italy', '2024', 'Completed', 'Architecture and Interior Design | Residential'],

        slides : slides,

        content: [
            {
                subtitle : '',
                text : [
                  'Martina always pays attention to details and the combination of colors. She\'s a decisive but welcoming and sweet woman, so her house represents her in every detail. The color palette is straightforward, but combining materials and elements creates a unique and warm place to live.',
                  'At the apartment\'s entrance is a window with vertical glass panels framed in a thin and black structure. This architectural element filters the outside and the inside, creating a visual connection between the living room and kitchen. The black block of the kitchen is the signature of the owner; it is so strong but, at the same time, so elegant. All the rooms have black and white details,from fabrics to cabinet handles, from picture frames to lamps or a few radiators. Everywhere in the flat is a warm floor made with small wooden slats typical from the 70s, polished and renewed in some parts.',
                  'The bathroom has a retrò taste, with tiles that recall the old grit floors but with a modern interpretation that stands out from details and finishes. A few plants complete the flat with a pop of green color in all rooms.',
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

export default CasaMartina;
