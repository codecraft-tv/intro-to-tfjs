// Variables & settings
let LOSS = 0;
let CURRENT_EPOCH = 0;
const MAX_EPOCHS = 300;

// This will store mouse x,y points that have been scaled from 0->1
let Xs = [];
let Ys = [];

// The equation of a line
let A = Math.random();
let C = Math.random();

// Create tensor variables to store the weights of `A` and `C` 
const a = tf.variable(tf.scalar(A));
const c = tf.variable(tf.scalar(C));

// Setup the optimizer
const learningRate = 0.5;
const optimizer = tf.train.sgd(learningRate);

async function train() {
  const actualXs = tf.tensor(Xs);
  const actualYs = tf.tensor(Ys);

  for (CURRENT_EPOCH = 0; CURRENT_EPOCH < MAX_EPOCHS; CURRENT_EPOCH++) {
    tf.tidy(() => {
      optimizer.minimize(() => {
        const predictedYs = a.mul(actualXs).add(c);
        let loss = predictedYs
          .sub(actualYs)
          .square()
          .mean();

        LOSS = loss.dataSync()[0];
        return loss;
      });
      A = a.dataSync()[0];
      C = c.dataSync()[0];
    })
    await tf.nextFrame();
  }

  actualXs.dispose();
  actualYs.dispose();
}