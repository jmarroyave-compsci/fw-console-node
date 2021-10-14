
const sleep = async(f) => new Promise( (aa, ab) => setTimeout( () => aa() , 500)); 

export default {
  sleep
}