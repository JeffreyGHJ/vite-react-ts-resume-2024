import ParticleOptions from '@/lib/constants/ParticleOptions'
import { loadAll } from '@tsparticles/all'
import { Container } from '@tsparticles/engine'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { useEffect, useState } from 'react'

const ParticleCanvas = () => {
  const [init, setInit] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadAll(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container)
  }

  return (
    <>
      {init === true && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={ParticleOptions}
          className="absolute w-full h-full"
        />
      )}
    </>
  )
}

export default ParticleCanvas
