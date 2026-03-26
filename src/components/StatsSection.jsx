import React from 'react';
import CountUp from 'react-countup';


const StatsSection = () => {

	const stats = [

		{
			id: 1,
			title: "Total Downloads",
			value: 29.6,
			suffix: "M",
			subtitle: "21% more than last month"
		},

		{
			id: 2,
			title: "Total Reviews",
			value: 906,
			suffix: "K",
			subtitle: "48% more than last month"
		},

		{
			id: 3,
			title: "Active Apps",
			value: 132,
			suffix: "+",
			subtitle: "31 new this month"
		}
	]





	return (
		<section className="w-full mx-auto px-0 mx-0 bg-gradient-to-r from-purple-600 to-indigo-500 text-white py-16">

			<div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">

				{
					stats.map(stat => (

						<div key={stat.id}>

							<p className="text-lg font-semibold opacity-80">
								{stat.title}
							</p>

							<h2 className="text-4xl font-bold my-2">

								<CountUp
									end={stat.value}
									duration={5}
									suffix={stat.suffix}
								/>

							</h2>

							<p className="text-sm opacity-70">
								{stat.subtitle}
							</p>

						</div>

					))
				}

			</div>

		</section>

	);
};

export default StatsSection;