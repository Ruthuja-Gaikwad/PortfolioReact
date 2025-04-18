// src/components/AnimatedBackground.js
import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import '../assets/styles/particles.css';

const AnimatedBackground = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="particles"
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: {
          color: {
            value: "#ffffff00" // transparent
          }
        },
        particles: {
          number: {
            value: 60,
            density: {
              enable: true,
              area: 800
            }
          },
          color: {
            value: "#e63946"
          },
          shape: {
            type: "circle"
          },
          opacity: {
            value: 0.5,
            random: true
          },
          size: {
            value: 4,
            random: true
          },
          links: {
            enable: true,
            distance: 150,
            color: "#e63946",
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 2,
            random: true,
            outModes: {
              default: "bounce"
            }
          }
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab"
            },
            onClick: {
              enable: true,
              mode: "push"
            }
          },
          modes: {
            grab: {
              distance: 140,
              links: {
                opacity: 1
              }
            },
            push: {
              quantity: 4
            }
          }
        },
        detectRetina: true
      }}
    />
  );
};

export default AnimatedBackground;