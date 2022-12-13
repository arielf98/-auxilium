type StyleType = {
    center: {
        display: string,
        justifyContent: string,
        alignItems: string,
    },
    column: {
        flexDirection: 'column'
    }
}


export const globalStyle: StyleType = {
    center: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    column: {
        flexDirection: 'column',
    }
}