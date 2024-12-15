import "./intro.scss"
import Footer from "../footer/footer";

const Intro = () => {

  return (
    <div>
      <h1 className="title">ABOUT ME</h1>
      
      <div className="portrait">
        <img alt="" src="https://drive.google.com/thumbnail?id=1kk1kWpfGPy0I7NOZMSV2T8JYJBao-OU6&sz=w1000"></img>
      </div>

      <div className="text">
        <p>I am Martina, an Italian architect from Bologna who specializes in residential and temporary architecture. I am enthusiastic about interiors, green building techniques, and retail design, but I am also fascinated by new materials and sustainable features, 3D modeling, and graphic design.        </p>
        <p>From the very beginning of my career, as a student first and as a professional then, I have always believed in the power that architecture has on the people who experience it. It influences their behavior, habits, sense of community, and feeling of safety in the places where they live every day. For these reasons, I always put people first in my work. To achieve this goal, combining empathy with clients and creativity in the composition process and technology, with specific attention to green solutions and techniques to create more comfortable and livable spaces, is essential.</p>
        <p>I have a double degree in Architecture and Building Engineering from the University of Bologna in Italy. During my academic years, I had the opportunity to study abroad and experience different approaches and methodologies, where I discovered and put into practice my passion for landscape, interior design, and sustainable architecture. Further, I joined a couple of international intensive programs, one in Bologna concerning urban regeneration and social housing and the other in Kassel, Germany, about Landscape Education for Democracy.</p>
        <p>After my studies, I worked in some architecture studios in my hometown, and I focused my design skills on residential buildings, new ones, and renovations of existing buildings or flats, as well as some offices, retail, and commercial spaces, at different scales and levels of design. Thanks to these works, I had the chance to explore new techniques and materials connected to green building architecture and sustainability.</p>
        <p>I am a passionate designer and a strong team player. I have really good organizational skills and am able to work under pressure and meet deadlines. I am a curious and enthusiastic person. I have an open attitude towards new ways of working and a huge will to learn new approaches in architecture and interior design. I am always looking for new challenges and a creative environment where my skills can improve and be put to the test.</p>
      </div>

      <Footer></Footer>

    </div>
    );

};

export default Intro;
