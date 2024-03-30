import { useTheme } from "../Context";

const Footer = () => {
	const { theme } = useTheme();

	return (
		<footer className={theme}>
			<div className="container1">
				<p className="imgDH">Powered by</p>
				<img src="/images/DH.png" alt="DH-logo" />
			</div>
			<div className="container2">
				<img src="/public/images/ico-facebook.png" alt="facebook" />
				<img src="/public/images/ico-instagram.png" alt="instagram" />
				<img src="/public/images/ico-tiktok.png" alt="tiktok" />
				<img src="/public/images/ico-whatsapp.png" alt="whatsapp" />
			</div>
		</footer>
	);
};

export default Footer;
