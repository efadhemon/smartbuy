import { AiOutlineBars, AiOutlineComment } from "react-icons/ai"

import { Button } from "antd"
import Link from "next/link";
import React from "react"

interface IFProps {
	pet: any
}

const SinglePetCard: React.FC<IFProps> = ({ pet }) => {
	return (
		<div className="pet">
			<img src={pet.image} alt="" />

			<div className="pet-into">
				<h1>{pet.name}</h1>
				<h6>{pet.status}</h6>
				<p>{pet.location}</p>

				<div className="action">
					<Button className="ask-btn" size="middle" type="primary">
						About Me
					</Button>

					<Link href="/pets/details">
						<Button className="details-btn" size="middle">Details</Button>
					</Link>

				</div>

				<div className="action-phone">
					<Button className="add-cart-btn" size="small" type="primary" shape="round">
						<AiOutlineComment />
					</Button>
					<Button className="details-btn" size="small" type="default" shape="round">
						<AiOutlineBars />
					</Button>
				</div>
			</div>
		</div>
	);
};

export default SinglePetCard;
