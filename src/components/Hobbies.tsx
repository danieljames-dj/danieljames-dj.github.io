import React from 'react';

const Hobbies: React.FC = () => {
  return (
    <section id="hobbies" className="section hobbies-section" style={{ backgroundColor: '#f9f9f9', padding: '100px 0' }}>
      <div className="row section-intro">
        <div className="col-twelve">
          <h5>Hobbies</h5>
          <h1>Things I do in my free time.</h1>
          <p className="lead">When I'm not coding, I enjoy engaging in activities that challenge my mind and allow me to explore the world.</p>
        </div>
      </div>

      <div className="row hobbies-content">
        <div className="col-four tab-full">
          <div className="hobby-item" style={{ textAlign: 'center', padding: '30px', background: '#fff', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', marginBottom: '30px' }}>
            <div className="icon-part" style={{ marginBottom: '20px' }}>
              <i className="cubing-icon event-333" style={{ fontSize: '50px', color: '#4169E1' }}></i>
            </div>
            <h3 style={{ marginBottom: '15px' }}>Cubing</h3>
            <p>I am a competitive speedcuber. I love solving various twisty puzzles and being part of the global cubing community.</p>
            <div className="hobby-links" style={{ marginTop: '15px' }}>
              <a href="https://www.worldcubeassociation.org/persons/2012JAME04" target="_blank" rel="noopener noreferrer" style={{ color: '#4169E1', marginRight: '15px', fontWeight: 'bold' }}>
                <i className="fas fa-external-link-alt" style={{ marginRight: '5px', fontSize: '14px' }}></i> WCA Profile
              </a>
              <a href="https://www.youtube.com/playlist?list=PLCOiVaVzYExGudfvy0aoVluUFgo6mfDFR" target="_blank" rel="noopener noreferrer" style={{ color: '#4169E1', fontWeight: 'bold' }}>
                <i className="fab fa-youtube" style={{ marginRight: '5px', fontSize: '14px' }}></i> YouTube Playlist
              </a>
            </div>
          </div>
        </div>

        <div className="col-four tab-full">
          <div className="hobby-item" style={{ textAlign: 'center', padding: '30px', background: '#fff', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', marginBottom: '30px' }}>
            <div className="icon-part" style={{ marginBottom: '20px' }}>
              <i className="fas fa-chess" style={{ fontSize: '50px', color: '#4169E1' }}></i>
            </div>
            <h3 style={{ marginBottom: '15px' }}>Chess</h3>
            <p>I enjoy the strategic depth of chess. It's a game of endless possibilities that constantly challenges my tactical thinking.</p>
          </div>
        </div>

        <div className="col-four tab-full">
          <div className="hobby-item" style={{ textAlign: 'center', padding: '30px', background: '#fff', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', marginBottom: '30px' }}>
            <div className="icon-part" style={{ marginBottom: '20px' }}>
              <i className="fas fa-plane-departure" style={{ fontSize: '50px', color: '#4169E1' }}></i>
            </div>
            <h3 style={{ marginBottom: '15px' }}>Traveling</h3>
            <p>I love exploring new places and cultures. Documenting my travels and experiencing different landscapes is a passion of mine.</p>
          </div>
        </div>
      </div>

      <style>{`
        .hobby-item {
          transition: all 0.3s ease-in-out;
        }
        .hobby-item:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1) !important;
        }
        .hobby-item i {
          transition: all 0.3s ease-in-out;
        }
        .hobby-item:hover i {
          transform: scale(1.1);
        }
        .hobby-links a {
          transition: all 0.2s ease;
          display: inline-block;
        }
        .hobby-links a:hover {
          opacity: 0.8;
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
};

export default Hobbies;
