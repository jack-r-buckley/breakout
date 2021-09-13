let ball = {
  x: 200,
  y: 200,
  r: 10,
  xSpeed: 4,
  ySpeed: 4,
}

let paddle = {
  moveRight: false,
  moveLeft: false,
  w: 60,
  h: 20,
  x: 400,
  y: 450,
}

let bricks = {
  rows: 6,
  columns: 3,
}

function generateBricks(rows, cols) {
  let bricks = []
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      bricks.push({
        row: i,
        col: j,
        intact: true,
        w: 80,
        h: 20,
        x: i * 90 + 100,
        y: j * 30 + 30,
      })
    }
  }
  return bricks
}

function checkBrickCollision(circle, rect) {
  let distX = Math.abs(circle.x - rect.x - rect.w / 2)
  let distY = Math.abs(circle.y - rect.y - rect.h / 2)

  if (distX > rect.w / 2 + circle.r) {
    return {
      hit: false,
    }
  }

  if (distY > rect.h / 2 + circle.r) {
    return {
      hit: false,
    }
  }

  if (distX <= rect.w / 2) {
    return {
      hit: true,
      axis: "Y",
    }
  }

  if (distY <= rect.h / 2) {
    return {
      hit: true,
      axis: "X",
    }
  }

  // check corner collisions

  let dx = distX - rect.w / 2
  let dy = distY - rect.h / 2

  return {
    hit: dx * dx + dy * dy <= circle.r * circle.r,
    axis: "X",
  }
}

export default {
  ball: ball,
  paddle: paddle,
  bricks: bricks,
  generateBricks: generateBricks,
  checkBrickCollision: checkBrickCollision,
}