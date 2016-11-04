/**
 * Creates Map from the Array of Objects for a particular value
 * @param  {String} propName  Name of the key
 * @param  {Array} data       Array Of Objects
 * @return {Object}          Map from Array
 */
export function mapMaker (propName, data) {
  const map = {}

  for (const dataUnit in data) {
    const current = data[dataUnit]
    const propValue = current[propName].toLowerCase()

    if (map[propValue]) {
      map[propValue].push(current.uid)
    } else {
      map[propValue] = [current.uid]
    }
  }

  return map
}
