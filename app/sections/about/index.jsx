"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import { HeadingDivider } from "components";
import { TimeLine } from "./TimeLine";

export function AboutSection() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<LazyMotion features={domAnimation}>
			<section id="about" className="section">
				<HeadingDivider title="About me" />
				<div className="pt-10 pb-16 max-w-5xl flex flex-col gap-3">
					<div
						tabIndex="0"
						ref={ref}
						className="text-xl font-light leading-relaxed"
						style={{
							transform: isInView ? "none" : "translateX(-200px)",
							opacity: isInView ? 1 : 0,
							transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
						}}
					>
						<p>
							My name is Noé Alcantar. I successfully graduated as Software Engineer in Technological University of Leon, Mexico.
						</p>
						<p>
							During my university years, I developed a deep passion for web programming, and I
							consistently engaged in learning new concepts and techniques in this field.
						</p>

						<p className="my-3.5">
							As a passionate full-stack developer, I have honed my skills in both backend and
							frontend technologies, creating seamless and efficient applications. My journey
							has equipped me with expertise in Go and Clojure for backend development, while
							mastering React and Ember.js for crafting intuitive and responsive user interfaces.
							With a strong foundation in these technologies, I am adept at delivering robust
							and scalable solutions that meet diverse business needs.
						</p>
						<p>
							My experience extends beyond just coding; I am proficient in deploying applications
							using CI/CD pipelines on AWS services like Lambda, Beanstalk, ECS, SQS, SNS,
							IoT Core, and CloudFormation. Utilizing Serverless frameworks and GitHub Actions,
							I ensure smooth and automated deployments, minimizing downtime and enhancing
							productivity. My ability to integrate various AWS services and automate deployment
							processes has consistently resulted in reliable and high-performing applications.
						</p>
						<p className="my-3.5">
							In addition to technical prowess, I am a collaborative team player with a keen eye
							for detail and a dedication to continuous learning. I thrive in dynamic environments,
							always staying updated with the latest industry trends and best practices. My work
							reflects my commitment to excellence and my passion for turning complex challenges
							into innovative solutions. With a blend of creativity, technical expertise, and a
							relentless drive to excel in the ever-evolving field of software development, I am
							excited to continue building impactful applications and contributing to the success
							of forward-thinking teams.
						</p>
					</div>
				</div>

				<TimeLine />
			</section>
		</LazyMotion>
	);
}
