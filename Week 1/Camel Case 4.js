function processData(input) {
    const MyArr = input.split('\r\n');
    for (let i = 0; i < MyArr.length; i++) {
        console.log(convertornasu(MyArr[i]));
    }

}

function convertornasu(str) {
    const mainArr = str.split(";")

    let mainstr = mainArr[2];
    let firstOp = mainArr[0];
    let secondOp = mainArr[1];
    let finalstr = "";

    switch (firstOp) {
        case "S":
            for (let i = 0; i < mainstr.length; i++) {
                const currentChar = mainstr.charAt(i);
                const prevChar = mainstr.charAt(i - 1);

                if (/[A-Z]/.test(currentChar) && /[a-z]/.test(prevChar)) {
                    finalstr += " " + currentChar.toLowerCase();
                } else {
                    finalstr += currentChar.toLowerCase();
                }
            }

            switch (secondOp) {
                case "M":
                    finalstr = finalstr.slice(0,finalstr.length-2);
                    break;
                case "C":
                    let mainstart = finalstr.charAt(0)
                    finalstr = finalstr.replace(mainstart, mainstart);
                    break;
                case "V":
                    finalstr = finalstr.toLowerCase();
                    break;
            }

            break;
        case "C":
            for (let i = 0; i < mainstr.length; i++) {
                const currentChar = mainstr.charAt(i);
                const forwardChar = mainstr.charAt(i + 1);

                if (/ /.test(currentChar) && /[a-z]/.test(forwardChar)) {
                    finalstr += forwardChar.toUpperCase();
                    i += 1
                } else {
                    finalstr += currentChar;
                }
            }

            switch (secondOp) {
                case "M":
                    finalstr += "()";
                    break;
                case "C":
                    let mainstart = finalstr.charAt(0)
                    finalstr = finalstr.replace(mainstart, mainstart.toUpperCase());
                    break;
                case "V":
                    finalstr = finalstr;
                    break;
            }
            break;
    }


    return finalstr

}