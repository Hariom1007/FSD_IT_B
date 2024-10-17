const map=new Map([
    ["key1","js"],
    [123,"java"],
    ["lan1","go"]

]);
console.log(map.get(123));
console.log(map.get("key1"));
map.set("key2","javscript");
console.log(map);