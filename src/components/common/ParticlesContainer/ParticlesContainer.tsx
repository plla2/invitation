import { Engine, tsParticles } from '@tsparticles/engine';
import { loadBasic } from '@tsparticles/basic';
import { loadWobbleUpdater } from '@tsparticles/updater-wobble';
import { options } from '@/components/common/ParticlesContainer/options';
import { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';

const ParticlesContainer = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine, refresh = true) => {
      await loadBasic(engine);
      await loadWobbleUpdater(engine, false);
      await engine.addPreset('snow', options, false);
      await engine.refresh(refresh);

      await tsParticles.load({
        id: 'tsparticles',
        options: {
          preset: 'snow',
        },
      });
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (init) {
    return <Particles id="tsparticles" options={options} />;
  }
};

export default ParticlesContainer;
