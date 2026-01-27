import React from 'react';

function Team() {
    return ( 
        <div className="container">
      <div className="row p-5 mt-5 mb-5 border-top">
        <h1 className="text-center ">
          People
        </h1>
      </div>
      <div className="row p-5 text-muted" style={{lineHeight:"1.8", fontSize:"1.0em"}}>
        <div className="col-6 p-5 text-center">
            <img src="media/myPic.png" style={{borderRadius:"100%", width:"65%"}}></img>
            <h3 className="mt-5">Kaustubh. K</h3>
            <h6>Founder, CEO, CTO</h6>
        </div>
        <div className="col-6 p-5">
            <p>
                Kaustubh. K founded TradeGuru to build technology-first trading platforms that remove complexity and bring institutional-grade systems to everyday traders.</p>
            <p>
                A Electronics Engineer and A Computer Scientist, Kaustubh combines deep backend and full-stack expertise with hands-on embedded systems experience. His work spans scalable web architectures, cloud deployments, and hardware-integrated systems—bridging software, data, and machines.</p>
            <p>
                He is the winner of GSEA – EO Nagpur 2025 and a multiple-time national-level champion across software, drone racing, and aircraft design competitions. Driven by a belief that strong infrastructure defines great products, Kaustubh continues to build TradeGuru with a long-term vision for India’s trading ecosystem.</p>
            <p>
                Connect on <a href="">Homepage</a> /<a href="">LinkedIn</a> /<a href="">Website</a>
            </p>
        </div>
      </div>
    </div>
     );
}

export default Team;