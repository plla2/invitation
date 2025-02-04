import { MoveDirection } from '@tsparticles/engine';

export const options = {
  background: {},
  particles: {
    number: {
      value: 30,
    },
    move: {
      direction: MoveDirection.bottom,
      enable: true,
      random: false,
      straight: false,
    },
    opacity: {
      value: { min: 0.1, max: 0.5 },
    },
    size: {
      value: { min: 1, max: 10 },
    },
    wobble: {
      distance: 20,
      enable: true,
      speed: {
        min: -5,
        max: 5,
      },
    },
  },
};
