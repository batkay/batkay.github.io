import React, { useState } from "react";
import "./Projects.css";

const projects = [
  {
    title: "Zephyr APDS9960 Driver",
    details: "I updated the Zephyr driver for an APDS9960 proximity and gesture sensor to be able to function without interrupts and instead check an I2C register for events. Contribution was eventually merged into the codebase, and more work will be done to add support for gesture sensing.",
    link: "https://github.com/zephyrproject-rtos/zephyr/pull/88624",
    date: "April 2025",
    thumbnail: "./zephyrPR.png",
    images: []
  },
  {
    title: "Capstone",
    date: "April 2025",
    details: "My senior capstone PCB uses an nRF52840 MCU to control various servos and an LED strip while taking sensor inputs over I2C. The board is powered off a 3.7V LiPo, which can also be charged from an integrated USB C charging circuit. Unfortunately, due to poor grounding of the MCU and a ground plane behind the trace antenna, the BLE functionality of this board did not work.",
    link: "https://github.com/batkay/CapstonePCB.git",
    thumbnail: "./capstonepcb.png",
    images: [
      "./capstonesch.png"
    ]
  },
  {
    title: "Yoyo dragon",
    date: "January 2025",
    details: "I created a PCB to house a Seeed Studio Xiao and allow it to power a Neopixel LED strip. Using the Xiao's built in IMU, the colors could change according to rotational input, or from BLE data. Xiao was programmed using Zephyr.",
    link: "https://github.com/batkay/YoyoLights.git",
    thumbnail: "./yoyopcb.png",
    images: [
      "./yoyosch.png"
    ]
  },
  {
    title: "Racing PCBs",
    date: "December 2024",
    details: "For the FSAE ICE competition, I updated our power distribution board to be able to power components like fans, while also being able to read the current going to each element and send the information over CAN.",
    thumbnail: "./racingpcb.png",
    images: [
      "./racingsch.png"
    ]
  },
  {
    title: "Robotics PCBs",
    date: "November 2024",
    details: "I lead developments on custom boards to distribute power to thrusters and control them with a PWM signal from a STM32 on an underwater submarine robot. Links to talk to a NVIDIA Jetson over SPI were also included. The STM32 was programmed using CubeIDE to send PWM and SPI signals.",
    thumbnail: "./roboticspcb.png",
    images: [
      "./roboticssch.png"
    ]
  },
  {
    title: "ADAPT Satellite FPGA work",
    date: "August 2023",
    details: "I created an interface for data being collected by scintillators connected by an FPGA to be sent to a separate data processing pipeline with an AXI Stream. Inputs and outputs were sent to BRAM, which could be accessed with a Pynq Board's Jupyter Notebook interface.",
    thumbnail: "./pynq.jpg",
    link: "https://adapt.physics.wustl.edu/publications/CF2024_hls_taking_flight.pdf",
    images: []
  },
];

function Projects() {
  const [expanded, setExpanded] = useState(null);

  const handleExpand = (idx) => {
    setExpanded(expanded === idx ? null : idx);
  };

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects">
        {projects.map((project, idx) => (
          <div
            className={`project-card${expanded === idx ? " expanded" : ""}`}
            key={project.title}
            onClick={() => handleExpand(idx)}
            style={{ cursor: "pointer" }}
          >
            <span className="project-date">{project.date}</span>

            <img
              src={project.thumbnail}
              alt={`${project.title} thumbnail`}
              className="project-thumbnail"
            />
            <h3>
              {project.title}
              <span className="expand-arrow" aria-hidden="true">
                ▼
              </span>
            </h3>
            <div className={`project-details-animated${expanded === idx ? " expanded" : ""}`}>
                <>
                    <p>{project.details}</p>
                    <div className="project-images">
                    {project.images.map((img, i) => (
                        <img
                        key={i}
                        src={img}
                        alt={`${project.title} screenshot ${i + 1}`}
                        className="project-image"
                        />
                    ))}
                    </div>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Project
                      </a>
                    )}
                </>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;