import {Button} from '@mui/material'

const ColorAvatar = (props) => {
    const {color, size, onClick} = props;
    return (
        <Button
            sx={{
                borderRadius: '50%',
                backgroundColor: color ?? 'red',
                minWidth: '10px',
                width: size ? `${size}px` : '32px',
                height: size ? `${size}px` : '32px',
                margin: '4px',
                ":hover": {
                    backgroundColor: color ?? 'red',
                }
                // size: size ?? '16px'
            }}
            onClick = {onClick}
        >

        </Button>
    )
} 

export default ColorAvatar;