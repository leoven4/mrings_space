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
                    'The following project consists of renovating an area located in Pavilion 2 of Sant\'Orsola Hospital in Bologna. The client is Fondazione Sant\'Orsola, a non-profit organization that creates projects to improve hospitality and patient care. The construction has been funded thanks to the generosity of almost 1,000 donors.',
                    'This restyling aims to realize a wellness center wholly reserved for the patients of the Policlinico and a true oasis of serenity; in addition to renovating the showers and assisted bathing areas, an area has been dedicated to the barber and hairdresser service, which patients can use free of charge. This allows them to feel pampered as in a wellness center and alleviates a sometimes tough and challenging course of medical treatment. The project aims to make the patients feel at home. They need to be cured not only from the disease but also from their state of discomfort, therefore being welcomed in the best possible way in the best possible place.',
                    'The concept design turned around the choice of wallpapers from InkiostroBianco company, which was a significant donor. The chosen wallpapers recall natural leitmotivs to bring in the space a bit of the outside world, but not in a rowdy and excessively lush way, which would have clashed in a context such as a hospital one that is a complex and tiring experience for anyone who walks through it. The final choice was a welcoming "mother nature," a nest that could accommodate people in a place of well-being. The colors of the walls are chosen to match the wallpapers, and panels made of wood are used to recreate a natural and welcoming space.',
                    'Furthermore, the shapes of arches recall one of the city of Bologna\'s most iconic symbols: the porticoes. They are repurposed not only by drawings of some wallpapers but also by some furniture in the barber area or more decorative elements in the assisted bath, which open windows on nature.',
                    'FINAL LAYOUT',],
                pics : slides.slice(0,1)
            },

            {
                subtitle : 'HALL/COMMON SPACES',
                text : [],
                pics : slides.slice(1,2)
            },
            {
                subtitle : 'HAIRDRESSER/BEAUTICIAN',
                text : [],
                pics : slides.slice(2,3)
            },

            {
                subtitle : 'SHOWERS/ASSISTED BATH',
                text : [],
                pics : slides.slice(3,4)
            },

            {
                subtitle : 'BATHROOMS',
                text : [],
                pics : slides.slice(4,5)
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
