var kittens = ["Milo", "Otis", "Garfield"];
var destructivelyAppendKitten = name =>{
  kittens.push(name);
  return kittens;
}
var destructivelyPrependKitten= name =>{
  kittens.unshift(name);
  return kittens;
}
var appendKitten = name =>{
  return (kittens=[...kittens, name]);
}
var prependKitten = name=>{
  return (kittens=[name,...kittens]);
}
