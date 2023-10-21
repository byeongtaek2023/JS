// falsy한 값, truthy한 값

if (0) {
    // main logic
    console.log ("hello")
}

if ("") {
    // main logic
    console.log ("hello")
}

if (null) {
    // main logic
    console.log ("hello")
}

if (undefined) {
    // main logic
    console.log ("hello")
}

console.log("---------------")
//여기만 truthy 위에 나머지 falsy
if (NaN) {
    // main logic
    console.log ("hello")
}
