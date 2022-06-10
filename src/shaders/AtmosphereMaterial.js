import Material from 'component-material'

const AtmosphereMaterial = (props) => {
  return (
    <Material
      {...props}
      uniforms={{
        r: { value: 0.3, type: 'float' },
        g: { value: 0.5, type: 'float' },
        b: { value: 1.0, type: 'float' },
      }}
      varyings={{ normalVertex: { type: 'vec3' } }}
      transparent
    >
      <Material.Vert.Body
        children={`
            normalVertex = normalize(normalMatrix * normal);
            gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 0.9 );
        `}
      />
      <Material.Frag.Body
        children={`
            float strength = pow(0.70 - dot(normalVertex, vec3(0, 0, 1.0)), 2.0);
            gl_FragColor = vec4(r, g, b, 1.0) * strength;
        `}
      />
    </Material>
  )
}

export default AtmosphereMaterial
