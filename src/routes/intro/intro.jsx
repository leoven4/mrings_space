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
        <p>I am Martina, an Italian architect from Bologna specialized in residential and temporary architecture such as customized exhibition booths. Enthusiastic about interior, green building techniques and retail design, but also fascinated by new materials and sustainable features, 3D modelling and graphic design.</p>
        <p>From the very beginning of my career, as a student first and as professional then, I always believed in the power that architecture has on the people who experience it. It influences their behavior, their habits, their sense of community and their feel of safety in places that they live every day. For these reasons in my work I always put persons at the first place. To achieve this goal is important to combine empathy with clients and creativity, not only in terms of composition but also of process and technology, with a specific attention for green solutions and techniques to create more comfortable and livable spaces. </p>
        <p>I have a double degree in Architecture and Building Engineering from University of Bologna, in Italy. During my academic years I had the opportunity to study abroad and getting in contact with different approaches and methodologies where I discovered and take into practice my passion for landscape, interior design and sustainable architecture. Further, I joined a couple of international intensive programs, one in Bologna concerning urban regeneration and social housing, the other one in Kassel, Germany, about Landscape Education for Democracy. </p>
        <p>After my studies I worked in some architecture studios in my hometown and I focused my design skills on residential buildings, new one and renovating existing buildings or flats, but also some offices, retail and commercial spaces, at different scales and at different level of design. Thanks to these works I had the chance to explore new techniques and materials connected to green building architecture and sustainability.</p>
        <p>I am a passionate designer and a strong team player. I have really good organizational skills, able to work under pressure and meet deadlines. I am a curious and enthusiastic person, I have an open attitude towards new ways of working and with a huge will to learn new approaches in architecture and interior design.
        I am always looking for new challenges and a creative environment where my skills could improve and put themselves to the test.</p>
      </div>

      <Footer></Footer>

    </div>
    );

};

export default Intro;
