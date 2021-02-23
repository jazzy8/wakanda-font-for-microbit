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
        . # . # . .
        . # . # . .
        # # . # # .
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
        # . . . . .
        # . # # . .
        # # . # . .
        # . . # . .
        # . . # . .
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