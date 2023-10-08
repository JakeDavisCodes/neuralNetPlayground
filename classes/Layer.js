const Neuron = require('./Neuron.js')

class Layer {
  constructor (size, prevLayerSize) {
    this.neurons = []

    for (let i = 0; i < size; i++) {
      const neuron = new Neuron();

      this.neurons.push(neuron);

      if (prevLayerSize) {
        for (let j = 0; j < prevLayerSize; j++) {
          neuron.weights.push(Math.random())
          neuron.inputs.push(0)
        }
      }
    }
  }
}

module.exports = Layer;