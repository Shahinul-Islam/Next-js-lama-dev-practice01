import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
	return (
		<div className="flex items-center justify-between mx-10 my-5">
			<div>
				<p className="text-sm">EarnNext, all rights reserved.</p>
			</div>
			<div className={styles.social}>
				<Image
					alt="earnnext"
					height={20}
					width={20}
					src="/images/social icons/fb.png"
					className="cursor-pointer"
				/>
				<Image
					alt="earnnext"
					height={20}
					width={20}
					src="/images/social icons/insta.png"
					className="cursor-pointer"
				/>
				<Image
					alt="earnnext"
					height={20}
					width={20}
					src="/images/social icons/linkedin.png"
					className="cursor-pointer"
				/>
				<Image
					alt="earnnext"
					height={30}
					width={30}
					src="/images/social icons/twitter.png"
					className="cursor-pointer"
				/>
			</div>
		</div>
	);
};

export default Footer;
