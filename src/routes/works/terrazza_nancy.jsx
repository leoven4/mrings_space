import Work from "../../components/work/work.jsx";


const TerrazzaNancy = () => {

    const slides = [

    // Existing codition 
        {
          src: 'https://drive.google.com/thumbnail?id=1vD0Gaj3GqR8XeQbZs4cA72A2VPWBAtpa&sz=w1000',
          title: '',
          description: '',
        },
    
        {
          src: 'https://drive.google.com/thumbnail?id=1o6SSU7K66jV9PFFGnxv7FzlZxNAKEW83&sz=w1000',
          title: 'hall',
          description: '',
        },
        {
          src: 'https://drive.google.com/thumbnail?id=15E85hX3yxPgR-mgg0rJG1XxX0Kslsxzw&sz=w1000',
          title: 'living room',
          description: '',
        },
        {
          src: 'https://drive.google.com/thumbnail?id=1EgRvn8RL3_1neTlA9cpIBIrZO3ZPrya5&sz=w1000',
          title: 'living room',
          description: '',
        },
    
    // The green paradise    
        {
          src: 'https://drive.google.com/thumbnail?id=1GqzAB4V98719AvwDNJb1eA43h7ZHd2nn&sz=w1000',
          title: 'bedroom',
          description: '',
        },
        {
          src: 'https://drive.google.com/thumbnail?id=1762QzIZHGtYQDId8vs0pgpZtoPfILL6O&sz=w1000',
          title: 'bedroom',
          description: '',
        },
        {
          src: 'https://drive.google.com/thumbnail?id=1jVrsqPHvO3GSgZ7oAcIwGMuX5nl4vaMm&sz=w1000',
          title: 'wardrobe',
          description: '',
        },
        {
          src: 'https://drive.google.com/thumbnail?id=1ZPG9zyt02OgL7KVm0Uc7XystGLd-x7dr&sz=w1000',
          title: 'attic',
          description: '',
        },  
        {
          src: 'https://drive.google.com/thumbnail?id=1vXrkXdZf4mYQYnCGCRTP8wMttIy_-mw1&sz=w1000',
          title: 'bedroom',
          description: '',
        },
        {
          src: 'https://drive.google.com/thumbnail?id=1hrupoBFjL-OtxSh4yoIvnPuM8kKStt1n&sz=w1000',
          title: 'bedroom',
          description: '',
        },
    // Elegance on top 
        {
          src: 'https://drive.google.com/thumbnail?id=1-sk7RiN5uV6sB60QdsbIqsOESNZz7iDM&sz=w1000',
          title: 'wardrobe',
          description: '',
        },
        {
          src: 'https://drive.google.com/thumbnail?id=1q4zQjYtIqmDYZRLaslswXI0Ap42ZDGLB&sz=w1000',
          title: 'attic',
          description: '',
        },  
        {
          src: 'https://drive.google.com/thumbnail?id=1bwFKCT0IU9ZvmicezsF-r3wtWyxwhI8y&sz=w1000',
          title: 'bedroom',
          description: '',
        },
        {
          src: 'https://drive.google.com/thumbnail?id=14E2NNiJsUMKzzm8tpZyaWK0R6l54gAy9&sz=w1000',
          title: 'wardrobe',
          description: '',
        },
        {
          src: 'https://drive.google.com/thumbnail?id=1w5Dxk7kQCV7s4px59-zpH2ZnqWHKBUZh&sz=w1000',
          title: 'attic',
          description: '',
        },  
        {
          src: 'https://drive.google.com/thumbnail?id=1fYP6oaVbmPHEaNsWV18G524iFpR1UHld&sz=w1000',
          title: 'bedroom',
          description: '',
        },
    
        ]

    const work_item = {
        title : 'terrazza nancy',
        brief : 'Renovation of a terrace of 130 square meters at 9th floor af a residential building. Three preliminary projects and different moodboards.',
        
 
        detail: ['location','project year', 'status', 'category'],
        info : ['Bologna, Italy', '2023', 'design', 'Outdoor design | Terrace'],

        slides : slides,

        content: [
            {
                subtitle : '',
                text : [
                    'The project concerns the renovation of a terrace of 130 square meters at 9th floor of a residential building in Bologna, close to the city center. The space belongs to a residential and private attic on the top floor and this position offers a stunning view at 360-degree to the city and its hills.',
                    'Half of the whole terrace is already renovated with a glass veranda and a plank floor. The aim of the project is to create a covered space for smart working activities thanks to the building of a bioclimatic pergola with adjustable slats and sliding curtains that can be open and close at will. In addition the client asks for an open air relaxation area with sofas and sun beds, with the possibility to create a cinema area with a big and removable screen. A small space should be addressed to the barbecue nearby the drainpipe. All around the space are provided plants vases with different shapes and finishes and different type of plants according to the moodboard, which irrigation is regulated by an automatic irrigation system that take the water to a water accumulation tank located on the terrace.',
                    'In the following slideshow are presented two different projects with two different moodboards.',
                    'EXISTING CONDITION'],
                pics : slides.slice(0,3)
            },
            {
                subtitle : 'THE GREEN PARADISE',
                text : [
                    'This solution brings some green on the terrace. Thanks to different paths all the areas are connected to each other and a mix of grass, wood, stone and corten effects creates a green and natural oasis on the top of the building, far away from the chaotic city. The peculiarity of this project is the creation of an open air kitchen with an integrated barbecue and sink. The relaxed area become a cinema at will, but also some footstools are provided on the grass.',],
                pics : slides.slice(3,9)
            },
            {
                subtitle : 'ELEGANCE ON TOP',
                text : [
                    'This project is certainly the most elegant of the three. The boundaries of the terrace are defined by a light concrete floor of tiles and a thin line of white pebbles. All around there are plants vases with graminaceous plants and the cinema area is a proper space with footstools on a carpet of straw. A big freestanding barbecue is located in the north.',],
                pics : slides.slice(9,)
            }
        ],       
        
    }

  return(
    <div>
        <Work work_item={work_item}/>
    </div>
    );
};

export default TerrazzaNancy;
