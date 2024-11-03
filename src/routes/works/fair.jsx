import Work from "../../components/work/work.jsx";

const Fair = () => {

    const slides = [
    {
      src: 'https://drive.google.com/thumbnail?id=1u8npWML8UYsPz8OI6jeYX&sz=w1000',
      title: '',
      description: '',
    },
    {
      src: 'https://drive.google.com/thumbnail?id=1aNyfX8LY4xSzXDLHu4LUZZQtWZH&sz=w1000',
      title: '',
      description: '',
    },
    {
      src: 'https://drive.google.com/thumbnail?id=132awY5j50EM5OaZ91nmk0TFrl5fo6m0N&sz=w1000',
      title: '',
      description: '',
    },
    {
      src: 'https://drive.google.com/thumbnail?id=1okEM4gRMKM6DOwQJbcxAjxZ-kQdD8szU&sz=w1000',
      title: '',
      description: '',
    },
    {
      src: 'https://drive.google.com/thumbnail?id=10o0_UDdwNo21V9ZP1GYGC3sQwDuuEweS&sz=w1000',
      title: '',
      description: '',
    },
    {
      src: 'https://drive.google.com/thumbnail?id=16kJET9iVy5n4y7BBWIvDGyxgihOIyiqg&sz=w1000',
      title: '',
      description: '',
    },
    {
      src: 'https://drive.google.com/thumbnail?id=10uvIOwI2RYTQUgp2CjAjTQM2boow_4sd&sz=w1000',
      title: 'wardrobe',
      description: '',
    },
    {
      src: 'https://drive.google.com/thumbnail?id=1TmKCRTac8oYkOhhR8MxWnNpZ_UkNHuLz&sz=w1000',
      title: '',
      description: '',
    } ,
    {
      src: 'https://drive.google.com/thumbnail?id=1yXl0zbpYcLfYYjOu9sqL4hyxVgGvRtJ9&sz=w1000',
      title: '',
      description: '',
    },
    {
      src: 'https://drive.google.com/thumbnail?id=1f3uucFL3BNjygT31kG8iAw_tyIHA2-iN&sz=w1000',
      title: '',
      description: '',
    },
    {
      src: 'https://drive.google.com/thumbnail?id=1FvmMmTogsWCzHmLW-0hVKftTK5aX3p0f&sz=w1000',
      title: '',
      description: '',
    },
    {
      src: 'https://drive.google.com/thumbnail?id=1WMeQmMOzJNr6mquRBRXOMoSszglD4TO4&sz=w1000',
      title: '',
      description: '',
    },  
    {
      src: 'https://drive.google.com/thumbnail?id=1Ifc68rpTj-GCU6QYLoHqicIaATqTqEkJ&sz=w1000',
      title: '',
      description: '',
    },
    {
      src: 'https://drive.google.com/thumbnail?id=1_MaEwvf40wupQtUHxA1fm8lDX3xowltX&sz=w1000',
      title: '',
      description: '',
    },

    ]
    const work_item = {
        title : 'fair booth',
        brief : 'The following picture slideshow presents some of the projects realized for the company QBO Stand in Bologna. Some design projects have been approved and built in fairs in the Middle and North of Italy.',
        
        detail: [],
        info : [],

        content: [
            {
                subtitle : '',
                text : [],
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

export default Fair;
