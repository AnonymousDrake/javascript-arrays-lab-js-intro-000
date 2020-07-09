var kittens = ["Milo", "Otis", "Garfield"];
var destructivelyAppendKitten = (kittens,name) =>{
  kittens.push(name);
  return kittens;
}
var destructivelyPrependKitten=(kittens,name) =>{
  kittens.unshift(name);
  return kittens;
}
var appendKitten = (kittens,name) =>{
  return kittens=[...kittens, name];
} 
var prependKitten = (kittens,name)=>{
  return (kittens=[name,...kittens];)
}