import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-3 text-center">
          We pioneered the discount broking model in India.
          <br/> 
          Now, we are breaking ground with our technology.
        </h1>
      </div>
      <div className="row p-5 mt-5 border-top text-muted fs-6" style={{lineHeight:"1.8", fontSize:"1.2em"}}>
        <div className="col-6 p-5">
            <p>
                We began our journey with a simple belief: trading and investing should be accessible, transparent, and empowering for everyone in India. TradeGuru was built to remove the traditional barriers of high costs, complex platforms, and limited support that hold traders back.
            </p>
            <p>
                Today, our customer-first pricing, robust technology, and intuitive platforms have positioned TradeGuru as a fast-growing force in the Indian trading ecosystem.
            </p>
            <p>
                Millions of traders and investors trust TradeGuru to execute orders seamlessly across markets every day, powered by a reliable, high-performance infrastructure designed for both beginners and professionals. Our platforms handle large-scale trading activity while maintaining speed, stability, and simplicity.
            </p>
        </div>
        <div className="col-6 p-5">
            <p>
                Beyond trading, we are deeply committed to investor education. Through open learning resources, community initiatives, and practical market insights, TradeGuru works to build a more informed and confident generation of market participants.
            </p>
            <p>
                We also actively support innovation in the financial ecosystem by collaborating with and backing emerging fintech ideas that aim to strengthen India’s capital markets.
            </p>
            <p>
                And we’re just getting started. We’re constantly building, refining, and rethinking how trading should work. Explore our blog for the latest updates, read what the media says about us, or dive deeper into the ideas and philosophies that drive TradeGuru.
            </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
