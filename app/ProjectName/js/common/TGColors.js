const NAMED_COLORS = {
    // grayscale (light to dark)
    transparent: "rgba(0,0,0,0)",
    transparentWhite: "rgba(255,255,255,0.5)",
    white: "#FFFFFF",
    lightBlueGray: "#DFE3E6",
    semiBlack: "#212121",
    black: "#000000",
    transparentBlack: 'rgba(0,0,0,0.35)',

    // greens (light to dark)
    transparentLeafGreen: "rgba(40, 223, 153, 0.5)",
    leafGreen: "#28DF99",

    // yellows (light to dark)
    transparentYellowMustard: "rgba(255, 177, 0, 0.5)",
    yellowMustard: "#FFB100",

    // reds (light to dark)
    transparentRedOrange: "rgba(255, 51, 0, 0.5)",
    redOrange: "#FF3100"
}

const THEMED_COLORS = {
    ...NAMED_COLORS,

    darkText: NAMED_COLORS.semiBlack,
    primary: NAMED_COLORS.leafGreen,
    lightText: NAMED_COLORS.lightBlueGray,
    highRisk: NAMED_COLORS.redOrange,
    beCareful: NAMED_COLORS.yellowMustard,
    healthy: NAMED_COLORS.leafGreen,

    getByStatus: (status) => {
        switch (status) {
            case 1:
                return NAMED_COLORS.leafGreen
            case 2:
                return NAMED_COLORS.yellowMustard
            case 3:
                return NAMED_COLORS.redOrange
            default:
                return NAMED_COLORS.leafGreen
        }
    },
    getTransparentByStatus: (status) => {
        switch (status) {
            case 1:
                return NAMED_COLORS.transparentLeafGreen
            case 2:
                return NAMED_COLORS.transparentYellowMustard
            case 3:
                return NAMED_COLORS.transparentRedOrange
            default:
                return NAMED_COLORS.transparentLeafGreen
        }
    }
}

export default THEMED_COLORS