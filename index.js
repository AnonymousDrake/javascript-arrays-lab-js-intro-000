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
  return (var kittens1=[...kittens, name]);
}
var prependKitten = name=>{
  return (var kittens1=[name,...kittens]);
}
