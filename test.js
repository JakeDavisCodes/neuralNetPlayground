const Network = require('./classes/Network.js')

const network = new Network([3,9,3])
const data = [0.6,0.1,1]

const output = network.forward(data)

console.log(output)