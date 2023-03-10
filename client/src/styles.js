import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
    appBar: {
        borderRadius: 15,
        background: 'rgba(255,255,255)',
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        color: 'rgba(255,0,0)',
    },
    image: {
        marginLeft: '15px',
    },
}));