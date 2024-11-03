import Work from "../../components/work/work.jsx";

const WaterAndRoses = () => {

    const slides = [

    {
      src: 'https://drive.google.com/thumbnail?id=1yCa2EclHWhtlbIXe8CgItaujOJgO5POS&sz=w1000',
      title: '',
      description: '',
    },
    {
      src: 'https://drive.google.com/thumbnail?id=1QEyhq_HRp1dEagloFCnrZpFfeddcTQM5&sz=w1000',
      title: 'hall',
      description: '',
    },
    {
      src: 'https://drive.google.com/thumbnail?id=1t1h8o40R186UdMJv6Wzs_DXr4DIRs3jd&sz=w1000',
      title: 'living room',
      description: '',
    },
    {
      src: 'https://drive.google.com/thumbnail?id=1cCLf33ga3IrUTEgUiogW2qzk-j7CcZSc&sz=w1000',
      title: 'living room',
      description: '',
    },
    {
      src: 'https://drive.google.com/thumbnail?id=1NHgsVwGWMRR72ZPe70nX77qJTLnbin0X&sz=w1000',
      title: 'bedroom',
      description: '',
    }
  
    ]

    const work_item = {
        title : 'Water and roses',
        brief : 'Renovation project of the “L’acqua e le rose” wellness centre inside Pavilion 2 of Sant’Orsola Hospital in Bologna. Job partly accomplished.',
                 
        detail: ['location','project year', 'status', 'team', 'category'],
        info : ['Bologna, Italy', '2021', 'Partially completed', 'Progetto Heimat', 'Interior design | Wellness center, hospital'],

        slides : slides,

        content: [
            {
                subtitle : '',
                text : [
                    'The following project consists in the renovation of an area located in Pavilion 2 of  Sant\'Orsola Hospital in Bologna. The client is Fondazione Sant\'Orsola, a non-profit organization with the aim of creating projects to improve the hospitality and the care of the patients. The construction has been  funded thanks to the generosity of almost 1000 donors.',
                    'The aim of this restyling is to realize a wellness center completely reserved for the patients of the Policlinico and a true oasis of serenity. In addition to the renovation of the showers and assisted bathing areas, an area has been dedicated to the barber and hairdresser service, which patients can use free of charge. This allows them to feel pampered as in a wellness center and alleviate a sometimes very difficult and challenging course of medical treatment. The aim of the project is making the patients feel at home. They need to be cured not only from the disease, but also from their state of discomfort, therefore being welcomed in the best possible way in the best possible place.',
                    'The concept design turned around the choice of wallpapers from InkiostroBianco company, that was an important donor. The chosen wallpapers recall natural leitmotivs to bring in the space a bit of the outside world, but not in a rowdy and excessively lush way, which would have clashed in a context such as the hospital one that is a difficult and tiring experience for anyone who walks through it. The final choice was a sort of welcoming "mother nature", a nest that could accommodate people in a place of well-being. The colors of the walls are chosen to match with the wallpapers and also panels made of wood are used to recreate a natural and welcoming space.',
                    'Furthermore, the shapes of arches recall one of the most iconic symbols of the city of Bologna: the porticoes. They are repurposed not only by  drawings of some wallpapers, but also by some furniture in the barber area, or more decorative elements in the assisted bath, which open windows on nature.'
                ],
                pics : slides
            },

            {
                subtitle : 'FINAL LAYOUT',
                text : [],
                pics : slides
            },

            {
                subtitle : 'HALL/COMMON SPACES',
                text : [],
                pics : slides
            },
            {
                subtitle : 'HAIRDRESSER/BEAUTICIAN',
                text : [],
                pics : slides
            },

            {
                subtitle : 'SHOWERS/ASSISTED BATH',
                text : [],
                pics : slides
            },

            {
                subtitle : 'BATHROOMS',
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

export default WaterAndRoses;
