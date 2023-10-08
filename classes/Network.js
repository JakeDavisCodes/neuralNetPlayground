const Layer = require('./Layer.js')

class Network {
  constructor (layers) {
    this.layers = []

    for (let i = 0; i < layers; i++) {
      const layer = new Layer(layers[i], layer[i - 1] ? layer[i - 1] : undefined)
    }
  }

  forward (inputs) {
    if (inputData.length !== this.inputLayer.neurons.length) {
      throw new Error("Input data size does not match input layer size.");
    }

    // Set input layer
    for (let i = 0; i < inputData.length; i++) {
      this.layers[0].neurons[i].inputs[0] = inputData[i]
    }

    // Cycle through all hidden layer's neurons
    for (let i = 1; i < layers.length - 1; i++) {
      for (let j = 0; j < this.layers[i].neurons.length; j++) {
        const neuron = this.layers.neurons[j]

        neuron.inputs[0] = 0

        // Cycle through all previous layer neurons
        for (let k = 0; k < this.layers[i - 1].length; k++) {
          neuron.inputs[0] += this.layers[i - 1].neurons[k].activate() * neuron.weights[k]
        }

        neuron.activate();
      }
    }

    const output = [];

    // Calculate output layer
    for (let i = 0; i < this.layers[this.layers.length - 1].length; i++) {
      const neuron = this.layers[this.layers.length - 1].neurons[i]
      neuron.inputs[0] = 0

      for (let j = 0; j < this.layers[this.layers.length - 2].neurons.length; j++) {
        neuron.inputs[0] += this.layers[this.layers.length - 2].neurons[j].activate() * neuron.weights[j];
      }

      output.push(neuron.activate())
    }

    return output;
  }
}