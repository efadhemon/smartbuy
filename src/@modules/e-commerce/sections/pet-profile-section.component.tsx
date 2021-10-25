import SinglePetCard from "../pets/single-pet-card.components"
import { Tabs } from "antd"

const { TabPane } = Tabs;

const PetProfile = () => {
	const petsData = [
		{
			id: 1,
			name: "Scout",
			image: "http://yourdost-blog-images.s3-ap-southeast-1.amazonaws.com/wp-content/uploads/2016/01/03165939/Dogs.jpg",
			status: "Dog | Male | Adult",
			location: "Mirpur, Dhaka",
		},
		{
			id: 2,
			name: "Starlet",
			image: "http://yourdost-blog-images.s3-ap-southeast-1.amazonaws.com/wp-content/uploads/2016/01/03165939/Dogs.jpg",
			status: "Dog | Male | Adult",
			location: "Mirpur, Dhaka",
		},
		{
			id: 3,
			name: "Nicky",
			image: "http://yourdost-blog-images.s3-ap-southeast-1.amazonaws.com/wp-content/uploads/2016/01/03165939/Dogs.jpg",
			status: "Dog | Male | Adult",
			location: "Mirpur, Dhaka",
		},
		{
			id: 4,
			name: "Jack",
			image: "http://yourdost-blog-images.s3-ap-southeast-1.amazonaws.com/wp-content/uploads/2016/01/03165939/Dogs.jpg",
			status: "Dog | Male | Adult",
			location: "Mirpur, Dhaka",
		},
		{
			id: 5,
			name: "Jack",
			image: "http://yourdost-blog-images.s3-ap-southeast-1.amazonaws.com/wp-content/uploads/2016/01/03165939/Dogs.jpg",
			status: "Dog | Male | Adult",
			location: "Mirpur, Dhaka",
		},
	]

	return (
		<section id="pet-profiles" style={{backgroundColor: '#F4F2EF', padding: '100px 0'}}>
			<div className="container">
				<div className="section-intro">

					<div className="sec-title">
						<h1 className="title dot-animation">Get & Meet a Furry Friend</h1>
					</div>

					<div className="categories">
						<Tabs defaultActiveKey="1" centered>
							<TabPane tab="Adoption" key="1"></TabPane>
							<TabPane tab="Engage" key="2"></TabPane>
						</Tabs>
					</div>
				</div>

				<div className="pet-profile-container grid grid-cols-2 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid sm:grid-cols-3 gap-4">
					{petsData.map((pet) => (
						<SinglePetCard key={pet.id} pet={pet} />
					))}
				</div>
			</div>
		</section>
	)
}
export default PetProfile
