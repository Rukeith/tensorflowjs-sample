import * as tf from '@tensorflow/tfjs';

const model = tf.sequential()
model.add(tf.layers.dense({
  units: 1,
  inputShape: [1]
}))

model.compile({
  loss: 'meanSquaredError',
  optimizer: 'sgd'
})

const xs = tf.tensor2d([1, 2, 3, 4], [4, 1])
const ys = tf.tensor2d([1, 3, 5, 7], [4, 1])

async function train() {
  for (let index = 0; index < 30; index++) {
    await model.fit(xs, ys, {
      epochs: 10
    })
  }

  model.predict(tf.tensor2d([5], [1, 1])).print()
}

train()