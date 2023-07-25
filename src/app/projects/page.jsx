import React from "react";

export default function page() {
  return (
    <div className="flex">
      {/* Image on the left side */}
      <div className="flex-none w-1/2 p-4">
        <img
          src="https://devcircleafrica.com/wp-content/uploads/2023/07/chatgpt-1068x600.jpg"
          alt="Project Image"
          className="w-full h-auto"
        />
      </div>
      <div className="flex-grow p-4">
        <h2 className="text-3xl font-bold mb-4 text-white">Otofast AI</h2>
        <p className="text-white">
          OpenAI just launched custom instructions for ChatGPT users, so they
          don have to write the same instruction prompts to the chatbot every
          time they interact with it — inputs like “Write the answer under 1,000
          words” or “Keep the tone of response formal.” The company said this
          feature lets you “share anything you like ChatGPT to consider in its
          response.” For example, a teacher can say they are teaching
          fourth-grade math or a developer can specify the code language they
          prefer when asking for suggestions. A person can also specify their
          family size, so ChatGPT can give responses about meals, grocery, and
          vacation planning accordingly. While users can already specify these
          things while chatting with the bot, custom instructions are helpful if
          users need to set the same context frequently.
          <a
            href="https://otofast.vercel.app"
            className="font-semibold text-indigo-600"
          >
            <span className="absolute inset-0" aria-hidden="true" />
            Check Demo <span aria-hidden="true">&rarr;</span>
          </a>
        </p>
      </div>
    </div>
  );
}
