import{useCallback} from 'react';
import type { Container, Engine } from 'tsparticles-engine';
import Particle from 'react-tsparticles';
import{loadSlim} from 'tsparticles-slim'
import { log } from 'console';

const Particle = () => {
    const particleInit = useCallback(async (engine: Engine) => {
        console.log(engine);
        
    })
  return (
    <div>Particle</div>
  )
}

export default Particle