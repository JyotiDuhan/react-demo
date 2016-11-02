import {get} from '$utils/requestHandler'

function getCandidates () {
  return get({
    url: '/candidates',
  })
}

export default getCandidates
