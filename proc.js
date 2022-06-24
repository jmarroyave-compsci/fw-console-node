
const sleep = async( ms ) => new Promise( (aa, ab) => setTimeout( () => aa() , ms)); 

export default {
  sleep
}