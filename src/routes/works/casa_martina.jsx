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
        info : ['Bologna, Italy', '2024', 'completed', 'Architecture and interior design | Residential'],

        slides : slides,

        content: [
            {
                subtitle : '',
                text : [
                  'Martina is a person that always pay attention to details and combination of colours. She\'s a decisive woman, but at the same time a welcoming and sweet woman. That why her house reprensents her in every single detail. The colour palette is really simple but the combination of materials and elements contributes to create a unique and warm place to live.',
                  'At the entrance of the apartment there is a window with vertical glass panels framed in a thin and black structure. This architectural element is a filter between the outside and the inside and creates a visual connection with the living room and the kitchen. The black block of the kitchen is the signature of the owner, so strong but at the same time so elegant. All the rooms have some black and white details, from fabrics to cabinet handles, from picture frames to lamps or few radiators. Everywhere in the flat there is a warm floor made with small wooden slats typical from the 70\'s, polished and renewed in some parts.',
                  'The bathroom has a retrò taste with tiles that remember the old grit floors, but with a modern interpretation that stand out from details and finishes. Few plants complete the flat with a pop of green colour in all rooms.',
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
