let triangleFrame = function(letter) {
    let framedLetter = '';
    for (let i = 0; i < 4; i++) {
        let line = '';

        // Loop to start the line with 3 - i spaces
        for (let j = 0; j < 3 - i; j++) {
            line += ' ';
        }

        // The third line will contain the framed letter
        if (i === 2) {
            line += `* ${letter} *`;  // Fix the string interpolation
        } else {
            // The rest of the lines of the triangle would contain all stars
            // Create a loop to add 2i + 1 stars to the line
            for (let k = 0; k < 2 * i + 1; k++) {
                line += '*';
            }
        }

        framedLetter += line + '\n';
    }

    return framedLetter;
}
// Define the rectangleFrame function
let rectangleFrame = function(letter) {
    let framedLetter = '';
    let line = '';

    // Loop to add five stars to the line
    for (let i = 0; i < 5; i++) {
        line += '*';
    }

    // Set the framed letter to be of 3 lines (one line of stars, 
    // one line * Letter * and the last line of all stars)
    framedLetter = line + '\n' + `* ${letter} *` + '\n' + line + '\n';

    return framedLetter;
}

// Set the function definition for the generalFramer so that it would receive two arguments
// - the first argument is a callback function that creates the desired frame
// - the second argument is the letter to be framed.
// The return should be the string of the letter framed by the given framer.

let generalFramer = function(framerCallback, letter) {
    return framerCallback(letter);
}

// Test the generalFramer function with different framers and letters

console.log(generalFramer(triangleFrame, 'A'));
console.log(generalFramer(triangleFrame, 'B'));
console.log(generalFramer(triangleFrame, 'C'));

console.log(generalFramer(rectangleFrame, 'A'));
console.log(generalFramer(rectangleFrame, 'B'));
console.log(generalFramer(rectangleFrame, 'C'));