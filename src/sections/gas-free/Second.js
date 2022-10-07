import { Link } from "react-router-dom";

const Second = () => {
  return (
    <div className="sEig">
      <div className="titleD">
        <p className="sTitle">Goodbye gas fees. Hello gas-free</p>
        <p>From creating, selling, and selling — it’s all gas-free, on Polygon.</p>
      </div>
      <div className="container inSeig">
        <div className="iframeVidBox">
          <div className="inIframeVidBox">
            <iframe
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen=""
            frameborder="0"
            height="315"
            className="mdndnd"
            sandbox="allow-same-origin allow-scripts allow-presentation"
            src="https://www.youtube.com/embed/rHPaG-cflBw?playlist=rHPaG-cflBw&autoplay=0&controls=1&loop=1&modestbranding=1&rel=0"
            title="Meet OpenSea"
            width="560"
          ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Second