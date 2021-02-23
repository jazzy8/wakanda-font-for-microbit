namespace Wakanda {

//% block
export function displayWakandaText (text: string) {
    let letters = <{[name: string]: Image}> {
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