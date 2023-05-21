enum Direction {
  Up,
  Down,
  Left,
  Right
}

function f1(direction: Direction) {
  console.log(direction)
}

f1(Direction.Left)
f1(Direction.Right)
f1(Direction.Up)
f1(Direction.Down)

// 数字可以玩得花一点
enum Enum01 {
  A = 100,
  B,
  C,
  D
}

enum Enum02 {
  A = 100,
  B = 200,
  C = 300,
  D = 400
}

// 字符串玩起来(这个就没有自增的作用了)
enum Dir {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT'
}