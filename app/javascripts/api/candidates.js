import {get} from '$utils/requestHandler'

export function getCandidates () {
  return get({
    url: '/candidates',
  })
}
