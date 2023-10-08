class Neuron {
  constructor() {
    this.inputs = []
    this.weights = []
    this.bias = Math.random()
  }

  activate() {
    let sum = 0;

    for (let i = 0; i < inputs.length; i++) {
      sum += this.inputs[i] * this.weights[i];
    }

    sum += this.bias

    return 1 / (1 + Math.exp(-sum))
  }
}

export default Neuron;
