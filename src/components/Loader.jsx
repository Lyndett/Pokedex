import 'ldrs/ring'

import { dotWave } from 'ldrs'

export const Loader = () => {
  dotWave.register()
  return (
    <div className="container-loader">
    <l-dot-wave
     size="150"
     speed="1" 
      color="Cyan" 
    ></l-dot-wave>
    </div>
  )
}
