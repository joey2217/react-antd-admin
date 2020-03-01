import React, { useEffect } from "react";
import styled from "styled-components";
import Particles from "particlesjs";
import CoolBackground from '../../assets/img/cool-background.png'

// TODO 

const FixedBack = styled.canvas`
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  z-index: -1;
  background:url(${CoolBackground}) no-repeat center center;
  background-size:cover;
`;

const Background = () => {
  useEffect(() => {
    Particles.init({
      selector: ".background",
      color: ["#1abc9c", "#2ecc71", "#3498db", "#9b59b6", "#34495e"],
      connectParticles: true,
      maxParticles: 200,
      responsive: [
        {
          breakpoint: 768,
          options: {
            maxParticles: 100,
            connectParticles: true
          }
        },
        {
          breakpoint: 425,
          options: {
            maxParticles: 50,
            connectParticles: true
          }
        },
        {
          breakpoint: 320,
          options: {
            maxParticles: 20,
            connectParticles: true
          }
        }
      ]
    });
  }, []);
  return <FixedBack className="background"></FixedBack>;
};
export default Background;
