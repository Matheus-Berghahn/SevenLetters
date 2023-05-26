import Footer from './Footer';
import Header from './Header';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';

import Section5 from './Section5';
import Section6 from './Section6';


function ContentMain() {

  return (
    <>
    <div className='contentMain'> 
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
     
      <Section5 />
      <Section6 />
  
      <Footer/>
    </div>
    </>
  );
}

export default ContentMain;



