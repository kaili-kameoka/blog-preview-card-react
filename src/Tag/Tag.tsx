import './Tag.css';

interface TagProps {
	text: string;
}

function Tag ({ text  }: TagProps) {
	return <span className="tag">{text}</span>
}

export default Tag;