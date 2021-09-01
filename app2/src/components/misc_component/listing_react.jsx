import React from "react";

export default function Listing_react() {

 var array1 = [
    { name: "Education", val: 90 },
    { name: "Medical facility", val: 75 },
    { name: "Community", val: 87 },
    { name: "Children Welfare", val: 79 },
]



	return (
		<div>
			<div className="row custom-misc-2-con-chart">
				<div className="col-5">
					<h1>Where the money goes</h1>
					<h3>current oprations and program</h3>
					<ul style={{ color: "#ff6302" }}>
						{["Education", "Medical facility", "Community", "Children Welfare"].map((data)=><li>{data}</li>)}
					</ul>

					<button
						className="btn btn-primary"
						style={{ backgroundColor: "#ff6302", borderRadius: "30px" }}
					>
						DONATE NOW
					</button>
				</div>
				<div className="col-7">
					<div className="heignt-creator">
						{/* array of objects */}

						{array1.map((data) => {
							return (
								<div className="con-chart">
									<div className="bar-chart" style={{ height: `${data.val}%` }}>
										<div>{data.val}%</div>
										<p>{data.name}</p>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}