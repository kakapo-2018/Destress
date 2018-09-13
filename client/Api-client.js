
import request from 'superagent'



export function getKitten() {
 return request.get('/kitten')
}
