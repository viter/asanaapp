export function Navbar(props) {
  return (
    <>
    <nav className="bg-white shadow-lg">
		<div className="max-w-6xl mx-auto px-4">
			<div className="flex justify-between">
				<div className="flex space-x-12">
					<div>
						<a href="#" className="flex items-center py-4 px-2">
							<img src="https://d3ki9tyy5l5ruj.cloudfront.net/obj/6c76122a923c696febd26d2a843aa6daf960a3df/logo.png" alt="Logo" className="h-8  mr-2" />
							
						</a>
					</div>
					<div className="hidden md:flex items-center space-x-1">
						<a
							href="#"
							className="py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold "
							>Home</a
						>
						<a
							href="#"
							className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
							>Services</a
						>
						<a
							href="#"
							className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
							>About</a
						>
						<a
							href="#"
							className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
							>Contact Us</a
						>
					</div>
				</div>
			</div>
		</div>
	</nav>
  </>
);
}