import {Button, Avatar} from '@mui/material'

const ImageAvatar = (props) => {
    const {img, size, onClick} = props;
    return (
        <Button
            sx={{
                borderRadius: '50%',
                minWidth: '10px',
                margin: '4px',
                width: size ? `${size}px` : '32px',
                height: size ? `${size}px` : '32px',
                backgroundImage: img ? `url(${img})` : `url("Planks037A_1K_Color.jpg")`
                // ":hover": {
                //     backgroundImage: img ?? "./Planks037A_1K_Color",
                // }
            }}
            onClick = {onClick}
        >
        </Button>
    )
} 

export default ImageAvatar;