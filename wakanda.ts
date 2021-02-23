namespace Wakanda {

//% block
export function displayWakandaText (text: string) {
    let letters = <{[name: string]: Image}> {
        " ": images.createImage(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `),
        "A": images.createImage(`
        # . . . # .
        # . # . # .
        # # # # # .
        . . # . . .
        . . # . . .
        `),
        "B": images.createImage(`
        # . # # .
        # . # . .
        # . # . .
        # . # . .
        # . # . .
        `),
        "C": images.createImage(`
        . . # . . .
        . . # . . .
        # # # # # .
        # . # . # .
        # . . . # .
        `),
        "D": images.createImage(`
        # # # # # .
        . . # . # .
        . . . # # .
        . . . . # .
        # # # # # .
        `),
        "E": images.createImage(`
        # # # # # .
        # . . . # .
        . # # # . .
        # . . . # .
        # # # # # .
        `),
        "F": images.createImage(`
        # # # # # .
        # . . . # .
        # . # . # .
        # . . . # .
        # # # # # .
        `),
        "G": images.createImage(`
        # # # # # .
        . . . . # .
        . . # # # .
        . . . . # .
        # # # # # .
        `),
        "H": images.createImage(`
        . # # # . .
        . # . # . .
        # # # # # .
        # . # . # .
        # # # # # .
        `),
        "I": images.createImage(`
        # . . . # .
        . # . # . .
        . . # . . .
        . # . # . .
        # . . . # .
        `),
        "J": images.createImage(`
        . . # . . .
        . . # . . .
        . # # # . .
        # . . . # .
        # . . . # .
        `),
        "K": images.createImage(`
        # . . .
        # # . .
        . # # .
        # # . .
        # . . .
        `),
        "L": images.createImage(`
        # # # # # # .
        # # # # . # .
        . . . # . # .
        # # # # . # .
        # # # # # # .
        `),
        "M": images.createImage(`
        # # . .
        # . # .
        # # . .
        # . # .
        # # . .
        `),
        "N": images.createImage(`
        . # . # . .
        # # . # # .
        . # . # . .
        . # . # . .
        . # . # . .
        `),
        "O": images.createImage(`
        # . . # .
        # # # # .
        . . . . .
        # # # # .
        # . . # .
        `),
        "P": images.createImage(`
        # # # # .
        # . . . .
        # . # . .
        # . . . .
        # . . . .
        `),
        "Q": images.createImage(`
        # . # . # .
        # . # . # .
        # # # # # .
        # . # . # .
        # . # . # .
        `),
        "R": images.createImage(`
        # . # . # .
        . # # # . .
        . . # . . .
        . . # . . .
        . . # . . .
        `),
        "S": images.createImage(`
        . # # # # .
        # . . . . .
        # . # # . .
        # . . . . .
        . # # # # .
        `),
        "T": images.createImage(`
        # # . # . . . .
        . . # . # . . .
        . # . . . # . .
        # . . . . . # .
        # . . . . . # .
        `),
        "U": images.createImage(`
        . # . # . .
        . . # . . .
        . # # # . .
        . # . # . .
        . # # # . .
        `),
        "V": images.createImage(`
        # # . # # .
        # # . # # .
        # # . # # .
        # # # # # .
        # # # # # .
        `),
        "W": images.createImage(`
        . # # # # # .
        # . # . . # .
        . . # . . # .
        . . # . . # .
        . . # . . # .
        `),
        "X": images.createImage(`
        # . . . .
        # . # # .
        # # . # .
        # . . # .
        # . . # .
        `),
        "Y": images.createImage(`
        . # . . . .
        . . # . . .
        # # # # # .
        . . # . . .
        . # . . . .
        `),
        "Z": images.createImage(`
        . . # . .
        # . # . .
        # # # . .
        # . # . .
        . . # . .
        `),
        "!": images.createImage(`
        # .
        # .
        # .
        . .
        # .
        `),
        "?": images.createImage(`
        . # # # . .
        # . . . # .
        . . # # # .
        . . . . . .
        . . # . . .
        `),
        ".": images.createImage(`
        . .
        . .
        . .
        . .
        # .
        `),
        "&": images.createImage(`
        . . # . . .
        . # # # . .
        # . # . . .
        # . . # # .
        . # # # . .
        `),
        "a": images.createImage(`
        # . . # .
        # . . # .
        # # # # .
        . . . # .
        . . . # .
        `),
        "b": images.createImage(`
        # . . . .
        # . . . .
        # . # # .
        # . # . .
        # . # . .
        `),
        "c": images.createImage(`
        # . . . .
        # . . . .
        # # # # .
        # . . # .
        # . . # .
        `),
        "d": images.createImage(`
        # # # .
        . . # .
        # . # .
        . . # .
        # # # .
        `),
        "e": images.createImage(`
        # . . . # .
        # . . . # .
        . # # # . .
        # . . . # .
        # # # # # .
        `),
        "f": images.createImage(`
        . # . .
        # # # .
        # . # .
        # # # .
        . # . .
        `),
        "g": images.createImage(`
        # # # # # .
        # . . . . .
        # # # . . .
        # . . . . .
        # # # . . .
        `),
        "h": images.createImage(`
        . # . .
        . # . .
        # # # .
        # # # .
        # # # .
        `),
        "i": images.createImage(`
        # . . . . .
        . # . . . .
        . . # . . .
        . # . # . .
        # . . . # .
        `),
        "j": images.createImage(`
        # . . .
        # . . .
        # . . .
        # # . .
        # . # .
        `),
        "k": images.createImage(`
        # . . .
        . # . .
        . . # .
        . # . .
        # . . .
        `),
        "l": images.createImage(`
        # # # # .
        # # # # .
        . . . # .
        # # # # .
        # # # # .
        `),
        "m": images.createImage(`
        . # # .
        # . # .
        . # # .
        # . # .
        . # # .
        `),
        "n": images.createImage(`
        . # . # . .
        . # . # . .
        . # . # . .
        # # . # # .
        . # . # . .
        `),
        "o": images.createImage(`
        # . . . . .
        # # # # # .
        . . . . . .
        # # # # # .
        . . . . # .
        `),
        "p": images.createImage(`
        # . . . .
        # . . . .
        # . # . .
        # . . . .
        # # # # .
        `),
        "q": images.createImage(`
        # . . . # .
        # . . . # .
        # # # # # .
        # . . . # .
        # . . . # .
        `),
        "r": images.createImage(`
        # . . . # .
        . # # # . .
        . . # . . .
        . . # . . .
        . . # . . .
        `),
        "s": images.createImage(`
        . # # # .
        # . . . .
        # . . . .
        # . . . .
        . # # # .
        `),
        "t": images.createImage(`
        . . . # . . . .
        . . # . # . . .
        . # . . . # . .
        # . . . . . # .
        # . . . . . # .
        `),
        "u": images.createImage(`
        . # . . . .
        . . # . . .
        . # # # . .
        . # . # . .
        . # # # . .
        `),
        "v": images.createImage(`
        # . # #
        # . # #
        # . # #
        # # # #
        # # # #
        `),
        "w": images.createImage(`
        . # . .
        # . . .
        # # # .
        # . # .
        # . # .
        `),
        "x": images.createImage(`
        # . . . .
        # . # # .
        # # . # .
        . . . # .
        . . . # .
        `),
        "y": images.createImage(`
        . # . . . .
        . . # . . .
        # # # # # .
        . . . . . .
        . # . . . .
        `),
        "z": images.createImage(`
        . . # . .
        # . # . .
        # . # . .
        # # # . .
        . . # . .
        `),
        "0": images.createImage(`
        # . . .
        . # . .
        . . # .
        . # . .
        . . # .
        `),
        "1": images.createImage(`
        # . .
        # . .
        # # .
        # . .
        # . .
        `),
        "2": images.createImage(`
        # . . . # .
        # . . . # .
        . # . # . .
        . # . # . .
        . . # . . .
        `),
        "3": images.createImage(`
        # . .
        # . .
        # # .
        # . .
        # # .
        `),
        "4": images.createImage(`
        # # . .
        . # . .
        . # . .
        . # . .
        . # # .
        `),
        "5": images.createImage(`
        . . # # .
        . # . . .
        # . . . .
        # . . . .
        # . . . .
        `),
        "6": images.createImage(`
        . . # # . . # .
        . # . # . . # .
        . # . . # . # .
        # . . . . # # .
        # . . . . # # .
        `),
        "7": images.createImage(`
        . . # . . .
        . # # # . .
        . # # # . .
        # . # . # .
        # . # . # .
        `),
        "8": images.createImage(`
        . # . . .
        # # # # #
        . . . . .
        # # # # #
        . # . . .
        `),
        "9": images.createImage(`
        . # . . .
        # # # # #
        . . . . .
        # # # # #
        . . . # .
        `)
    }
    let imgs = []
    for(let i = 0; i < text.length; i++) {
        imgs.push(
            letters[text.charAt(i)]
        )
    }
    for(let j = 0; j < imgs.length; j++) {
        imgs[j].scrollImage(1, 200)
    }
    images.createBigImage(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `).scrollImage(1, 200)
}

}