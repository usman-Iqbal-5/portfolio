tsParticles.load("tsparticles", {
  fullScreen: { enable: false },
  particles: {
    number: { value: 120, density: { enable: true, value_area: 800 } },
    color: { value: ["#2918e6", "#6b28d0"] },
    
    shape: { type: "circle" },
    opacity: { value: 0.5, random: true },  // Slight transparency for a soft look
    size: { value: 5, random: true },  // Random size between 5 and 15px
    move: {
      enable: true,
      speed: 1,  // Normal speed
      direction: "none",
      random: true,  // Randomized direction for a more chaotic look
      straight: false,
      outModes: { default: "out" },
      attract: {
        enable: true,  // Particles will move towards the mouse cursor
        rotateX: 3000,
        rotateY: 3000
      }
    }
  },
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "repulse"  // Particles move away from the mouse
      },
      onClick: {
        enable: true,
        mode: "push"   // New particles are created when you click
      }
    },
    modes: {
      repulse: {
        distance: 100,  // Distance between particles and the mouse
        duration: 0.4  // Speed of repulsion
      },
      push: {
        quantity: 4  // Adds more particles when clicked
      }
    }
  },
  background: {
    color: "transparent"  // Keeps the background clear so the particles stand out
  },
});