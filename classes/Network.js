const Layer = require('./Layer.js')

class Network {
  constructor (layers) {
    this.layers = []

    for (let i = 0; i < layers; i++) {
      const layer = new Layer(layers[i], layer[i - 1] ? layer[i - 1] : undefined)
    }
  }
}