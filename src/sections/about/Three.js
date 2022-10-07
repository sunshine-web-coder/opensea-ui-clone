import { useState, useEffect } from "react";
import abImg from "../../assets/about/founders.webp";
import { AboutModalOne, AboutModalTwo } from "../../components/modal/Modal";

const Three = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpen2, setModalOpen2] = useState(false);

  useEffect(() => {
    if (modalOpen || modalOpen2 ) {
      document.body.style.overflow = "hidden";
    } else{
      document.body.style.overflow = "visible";
    }
  }, [modalOpen, modalOpen2]);

  return (
    <div className="thgF">
      <div className="thgFTitle">
        <h2>Our story</h2>
        <p>Navigating the uncharted waters of non-fungible tokens</p>
      </div>

      <div className="inthgF">
        <div className="left">
          <img src={abImg} alt="" />
        </div>
        <div className="right">
          <p>
            In 2017 the world witnessed the birth of CryptoKitties. For the
            first time, the world experienced a decentralized application built
            on blockchains but targetted towards a mainstream audience.
          </p>
          <p>
            While CryptoKitties felt like a toy to many, it represented a
            dramatic shift in how we interact with items in the digital world.
            While previous digital items lived on company servers,
            blockchain-native items lived on shared, public blockchains owned by
            no single party. They could be viewed anywhere, exchanged openly,
            and truly owned in a way that was never before possible in the
            digital world.
          </p>
          <p>
            Fascinated by the movement that was forming,
            <span onClick={() => setModalOpen(!modalOpen)}>
              {" "}
              Devin Finzer
            </span>{" "}
            and <span onClick={() => setModalOpen2(!modalOpen2)}> Alex Atallah</span> joined early adopter communities in
            Discord and started talking to users. With the OpenSea beta launch
            in December 2017, the first open marketplace for any non-fungible
            token on the Ethereum blockchain was born.
          </p>
          <p>
            Today,&nbsp;
            <strong>
              we’re proud to remain the largest general marketplace for
              user-owned digital items,
            </strong>
            &nbsp; supporting multiple blockchains, with the broadest set of
            categories and the best prices for new emerging digital item
            classes.
          </p>
          <p>
            As a company, we’re thrilled to be at the center of this growing
            industry, and will continue to invest in our core infrastructure as
            we build the most accessible marketplace for buyers, sellers, and
            creators.
          </p>
        </div>
      </div>
      {modalOpen && 
      <AboutModalOne setModalOpen={setModalOpen} />
      }
      {modalOpen2 && 
      <AboutModalTwo setModalOpen={setModalOpen2} />
      }
    </div>
  );
};

export default Three;
