import React from "react";

export default function page() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-black text-4xl font-bold mb-4">
          Otofast Project Program
        </h1>
        <p className="text-black mb-8">
          Our programmes are rigorous and push individuals to their full
          potential. By the time they graduate, our learners can safely rely on
          the technical skills they have acquired.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white rounded shadow p-4">
            <h2 className="text-black text-2xl font-bold mb-4">
              Software Engineering
            </h2>
            <p className="text-black">
              Certainly! A software engineering program is a structured
              educational curriculum or degree program that focuses on teaching
              students the principles, theories, and practical skills required
              to develop and maintain software systems. It typically covers a
              wide range of topics related to software development, including
              programming languages, algorithms, data structures, software
              design, software testing, project management, and software
              architecture.
              <a href="/about" className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Apply Now <span aria-hidden="true">&rarr;</span>
              </a>
            </p>
          </div>
          <div className="bg-white rounded shadow p-4">
            <h2 className="text-black text-2xl font-bold mb-4">
              Software Testing
            </h2>
            <p className="text-black">
              A software testing program is an educational curriculum or
              training program that focuses on teaching students the principles,
              methodologies, and techniques of software testing. It is designed
              to equip individuals with the knowledge and skills required to
              effectively test software applications and ensure their quality
              and reliability. Software testing programs can be offered as
              standalone training courses, vocational programs, or as part of a
              broader software engineering or computer science curriculum.
              <a href="/about" className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Apply Now <span aria-hidden="true">&rarr;</span>
              </a>
            </p>
          </div>
          <div className="bg-white rounded shadow p-4">
            <h2 className="text-black text-2xl font-bold mb-4">
              Deep Learning
            </h2>
            <p className="text-black">
              A deep learning program is an educational curriculum or training
              program that focuses on teaching students the principles,
              techniques, and applications of deep learning, a subfield of
              machine learning. Deep learning involves training artificial
              neural networks with multiple layers to automatically learn
              hierarchical representations of data and make predictions or
              decisions. Deep learning programs can be offered as standalone
              courses, specialized tracks within computer science or data
              science programs, or as part of broader machine learning or
              artificial intelligence curricula. Upon completion of a deep
              learning program, graduates can pursue careers as deep learning
              engineers, machine learning researchers, data scientists, AI
              specialists, or related roles.
              <a href="/about" className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Apply Now <span aria-hidden="true">&rarr;</span>
              </a>
            </p>
          </div>
          <div className="bg-white rounded shadow p-4">
            <h2 className="text-black text-2xl font-bold mb-4">
              Cloud Computing
            </h2>
            <p className="text-black">
              Cloud computing program is an educational curriculum or training
              program that focuses on teaching students the principles,
              technologies, and practices related to cloud computing. Cloud
              computing involves the delivery of computing services, including
              storage, servers, databases, networking, and software
              applications, over the internet. Its important for professionals
              in cloud computing to stay updated with the latest cloud
              technologies and trends. Cloud service providers often offer
              certifications that validate expertise in their platforms, such as
              AWS Certified Solutions Architect or Microsoft Certified Azure
              Administrator. Continued learning and exploring emerging
              technologies in the cloud space are essential to remain
              competitive in this rapidly evolving field.
              <a href="/about" className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Apply Now <span aria-hidden="true">&rarr;</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
