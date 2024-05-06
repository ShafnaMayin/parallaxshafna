import img1 from './assets/img/7.png'
import img2 from './assets/img/6.png'
import img3 from './assets/img/5.png'
import img5 from './assets/img/3.png'
import moon from './assets/img/1.png'
import { useEffect } from 'react'
import React from 'react'


function App() {

  useEffect(() => {

    window.addEventListener("scroll", () => {
      let scrollY = window.scrollY;
      document.documentElement.style.setProperty("--scrollTop", `${scrollY}px`);
    });

  })

  return (
    <div className="App">

      <div className='wrapper'>
        <div className='content'>
          <header className='header-main'>
            <div className='layers'>
              <div className="img-layer bottomlayer scrolling-1" style={{backgroundImage: `url(${img1})`}}></div>
              <div className="img-layer bottomlayer scrolling-2 " style={{backgroundImage: `url(${img2})`}}></div> 
              <div className="img-layer bottomlayer scrolling-3 " style={{backgroundImage: `url(${img3})`}}></div> 
              <div className='layer-head'>
                <div className='title'>Lumos</div>
                <div className='subtitle'>Maxima</div>
              </div>
              <div className="img-layer toplayer scrolling-4 " style={{backgroundImage: `url(${img5})`}}></div> 
              <div className="img-layer scrolling-5" style={{backgroundImage: `url(${moon})`}}></div> 
            </div>
          </header>
          <article className='article-main'>
            <div className='m-article-content'>
              <h2 className='m-header'>Lorem ipsum dolor sit amet...</h2>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu finibus augue, eget bibendum mauris. Aenean rhoncus blandit neque eget vestibulum. Ut vitae enim imperdiet, viverra magna vitae, euismod est. Nunc finibus dolor sit amet felis pharetra, ut aliquam arcu mattis. Aliquam erat volutpat. Sed sed felis dapibus, fermentum nisi non, rhoncus risus. Maecenas tempus orci in metus interdum, in tristique augue placerat. Maecenas laoreet id velit id ultricies. Sed et augue laoreet, venenatis odio nec, imperdiet nisl. Praesent eu leo at augue finibus auctor. Nullam sit amet enim viverra, tempor nunc eu, tempor odio. Suspendisse condimentum eros ipsum, at lacinia nisl euismod eget. Aenean fermentum lacinia dolor.
              <br />
              <br />
              Donec augue urna, ultricies non ante suscipit, ullamcorper suscipit odio. Vivamus non nisi sed nisi consectetur lobortis. Etiam massa elit, iaculis non ex eu, luctus consectetur dui. Quisque viverra, urna in condimentum interdum, magna ex ornare lectus, at vehicula ligula dolor eu magna. Nam volutpat, nisl id luctus fermentum, tortor dui bibendum nibh, sit amet porttitor magna sem in mauris. Praesent porttitor suscipit fringilla. Ut eu neque felis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc fermentum fringilla porta.
              </p>
            </div>
          </article>
          <p className='footer'>Paralax Lumos site 2023</p>
        </div>
      </div>

    </div>
  );
}

export default App;