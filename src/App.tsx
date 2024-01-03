import header from './assets/images/illustration-article.svg';
import avatar from './assets/images/image-avatar.webp';
import Card from "./Card/Card.tsx";
import Tag from "./Tag/Tag.tsx";

function App() {

	return (
		<Card headerImgSrc={header} headerImgAlt={'Header Image'} avatarName={'Greg Hooper'} avatarSrcImg={avatar} >
			<p>
				<Tag text={'Learning'} />
			</p>

			<p>
				Published 21 Dec 2023
			</p>

			<h3 className="card__title">
				HTML & CSS foundations
			</h3>

			<p>
				These languages are the backbone of every website, defining structure, content, and presentation.

			</p>
		</Card>
	)
}

export default App
