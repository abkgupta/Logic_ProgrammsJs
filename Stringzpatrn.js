
function prstrz(s) {
    let n = s.length;
    let sc = parseInt(n / 3);
    // console.log(sc + " "+ n)
    let c = 0;
    let up = ""
    for (let i = 0; i < sc; i++) {
        up = up + s.charAt(c)
        // console.log(s.charAt(c) + " ");
        c++;
    }
    console.log(up)
    // console.log("\n")
    let m = ""
    for (let i = 0; i < sc; i++) {
        for (let j = 0; j < sc; j++) {
            if (j == sc - i) {
                m = m + s.charAt(c)
                c++
            }
            else {
               
                 m = m + " "
                

            }
        }
        m= m + "\n"
    }
        console.log(m)
    // for (index = 1; index < sc - 1; index++) {
    // 	// Spaces for the diagonals
    // 	for (side_index = 0; side_index <2 * (sc - index - 1); side_index++)
    //  {
    //     m = m + " "
    //     // document.write("");

    //  }
    // //  console.log(m)
    // // Printing the diagonal values
    //     m = m+"\n"+s.charAt(c)
    // 	// document.write(s.charAt(c));
    // 	c++;

    // 	}
    console.log("\n")
    let d = ""
    for (let i = 0; i < sc; i++) {
        d = d + s.charAt(c)
        // console.log(s.charAt(c)+ " ");
        c++;
    }
    console.log(d)
    return 0
}

console.log(prstrz("dsvvmkvjrmkvjrfv"));