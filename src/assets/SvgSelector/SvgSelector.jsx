import genderImage from "../svg/gender.svg"
import userIcon from "../svg/user.svg"
import walletIcon from "../svg/wallet.svg"
import avatarIcon from "../svg/avatar.svg"
import levelIcon from "../svg/level.svg"


const SvgSelector = ({name}) => {
    let iconPath;

    switch(name) {
        case "gender":
            iconPath = genderImage;
            break;
        case "user":
            iconPath = userIcon;
            break;
        case "level":
            iconPath = levelIcon;
            break;
        case "wallet":
            iconPath = walletIcon;
            break;
        case "avatar":
            iconPath = avatarIcon;
            break;
        default:
            iconPath = (<></>);
            break;
    }
    return (
        <img src = {iconPath} alt="image/icon" />
    );
};

export default SvgSelector;