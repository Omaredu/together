function stringToNumberStatus(status) {
    if (typeof status == typeof "") {
        switch(status) {
            case "sick":
                return 0
            case "no_vaccinated":
                return 1
            case "half_vaccinated":
                return 2
            case "vaccinated":
                return 3
            default:
                return 0
        }
    } else {
        return status
    }
}

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
    redOrange: "#FF3100",
    
    // blues (light to dark)
    transparentBlue: "rgba(7, 121, 228, 0.8)",
    blue: "#0779E4",

}

const THEMED_COLORS = {
    ...NAMED_COLORS,

    darkText: NAMED_COLORS.semiBlack,
    primary: NAMED_COLORS.leafGreen,
    lightText: NAMED_COLORS.lightBlueGray,
    highRisk: NAMED_COLORS.redOrange,
    beCareful: NAMED_COLORS.yellowMustard,
    healthy: NAMED_COLORS.leafGreen,
    vaccinated: NAMED_COLORS.blue,

    getByStatus: (status) => {
        let numStatus = stringToNumberStatus(status)

        switch (numStatus) {
            case 0: 
                return NAMED_COLORS.redOrange
            case 1:
                return NAMED_COLORS.yellowMustard
            case 2:
                return NAMED_COLORS.leafGreen
            case 3:
                return NAMED_COLORS.blue
            default:
                return NAMED_COLORS.leafGreen
        }
    },
    getTransparentByStatus: (status) => {
        let numStatus = stringToNumberStatus(status)

        switch (numStatus) {
            case 0:
                return NAMED_COLORS.transparentRedOrange
            case 1:
                return NAMED_COLORS.transparentYellowMustard
            case 2:
                return NAMED_COLORS.transparentLeafGreen
            case 3:
                return NAMED_COLORS.transparentBlue
            default:
                return NAMED_COLORS.transparentRedOrange
        }
    },
    stringToNumberStatus
}

export default THEMED_COLORS