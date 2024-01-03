import { ReactNode } from "react";
import './Card.css'

interface CardProps {
	headerImgSrc: string;
	headerImgAlt: string;
	avatarName: string;
	avatarSrcImg: string;
	children: ReactNode;
}

function Card ({ headerImgSrc, headerImgAlt, avatarName, avatarSrcImg, children }: CardProps) {
	return (
		<main className="card">
			<img className={'card__image'} src={headerImgSrc} alt={headerImgAlt} />
			{children}
			<footer className="card__footer">
				<img src={avatarSrcImg} alt=""/>
				<p>
					{avatarName}
				</p>
			</footer>
		</main>
	)
}

export default Card;