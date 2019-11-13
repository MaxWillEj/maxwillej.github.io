import React from "react"
export default props => <div style={{ flex: '1' }}>
<div>
            <h1>HR för det moderna företaget.</h1>
            <p>
              Samla all din HR-data på ett ställe. Automatisera administration.
              Anpassat för små- och mellanstora företag som jobbar digitalt.
            </p>
            
          </div>
          <div className="hero-illustration">
            <Image src={heroIllustration} />
          </div>
        </HeroInner>
        <Image
          width="500px"
          height="74px"
          src={arrowTab}
          className="arrow-tab"
          style={{
            position: 'absolute',
            bottom: '0',
            left: 'calc(50% - 250px)',
            cursor: 'pointer'
          }}
          
        /></div>