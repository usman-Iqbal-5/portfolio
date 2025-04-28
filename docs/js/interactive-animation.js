tsParticles.load("tsparticles", {
  fullScreen: { enable: false },
  particles: {
    number: { value: 50, density: { enable: true, value_area: 700 } },
    color: { value: ["#2918e6", "#6b28d0"] },
    
    shape: { type: "circle" },
    opacity: { value: 0.5, random: true },  // Slight transparency for a soft look
    size: { value: 4, random: true },  
    move: {
      enable: true,
      speed: 0.8,  
      direction: "none",
      random: true,  
      straight: false,
      outModes: { default: "out" },
      attract: {
        enable: true,  // Particles will move towards the mouse cursor
        rotateX: 1500,
        rotateY: 1500
      }
    }
  },
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "repulse",
        reduceParticlesOnHover: true,
        repulse: { distance: 50, duration: 0.4 } 
      },
      onClick: {
        enable: true,
        mode: "push",
        push: { quantity: 2 }
      }
    },
    modes: {
      repulse: {
        distance: 100,  // Distance between particles and the mouse
        duration: 0.6  // Speed of repulsion
      },
      push: {
        quantity: 2  // Adds more particles when clicked
      }
    }
  },
  background: {
    color: "transparent"  // Keeps the background clear so the particles stand out
  },
});