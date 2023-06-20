import React from 'react'

export default function page() {
    const faqData = [
        {
          question: 'What is Otofast Project?',
          answer: 'Otofast Project is an online platform that offers a wide range of courses on various topics, including programming, design, and business.'
        },
        {
          question: 'How can I enroll in a course?',
          answer: 'To enroll in a course, simply go to the course page and click on the "Enroll" button. You will then be prompted to create an account or sign in if you already have one.'
        },
        {
          question: 'Are the courses free?',
          answer: 'Some courses on Otofast Project are free, while others require a one-time payment or a subscription. You can check the pricing details on each course page.'
        },
        {
            question: 'What is Otofast Project?',
            answer: 'Otofast Project is an online platform that offers a wide range of courses on various topics, including programming, design, and business.'
          },
          {
            question: 'How can I enroll in a course?',
            answer: 'To enroll in a course, simply go to the course page and click on the "Enroll" button. You will then be prompted to create an account or sign in if you already have one.'
          },
          {
            question: 'Are the courses free?',
            answer: 'Some courses on Otofast Project are free, while others require a one-time payment or a subscription. You can check the pricing details on each course page.'
          },
        // Add more FAQ items as needed
      ];
    
      return (
        <div className="container mx-auto py-8">
          <h1 className="text-3xl font-bold mb-4">Frequently Asked Questions</h1>
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div key={index} className="bg-white rounded p-4">
                <h2 className="text-black text-xl font-bold mb-2">{item.question}</h2>
                <p className='text-black'>{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      );
}
