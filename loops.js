function forLoop(array) {
  for (let i = 1; i<=25; i++) {
    if (i === 1){
      array.push("I am 1 strange loop.")
    }
    else{
      array.push("I am ${i} strange loops.")
    }
  }
  return array
}

function whileLoop(int) {
  while (int > 0){
    console.log(int)
    int--
  } 
  return 'done'
}

function maybeTrue(){
  return Math.random() >= 0.5
}

function doWhile(array) {
  do{
    array.pop()
  } while (maybeTrue() && array != [])
}