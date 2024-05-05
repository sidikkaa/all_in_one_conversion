import React from 'react';

interface Review {
  quote: string;
  author: string;
}

const Reviews: React.FC = () => {
  // Array of reviews
  const reviews: Review[] = [
    {
      quote: "This conversion tool is amazing! It saved me so much time.",
      author: "Happy User"
    },
    {
      quote: "Very impressed with the speed and accuracy of this tool. Highly recommended!",
      author: "Satisfied Customer"
    },
    {
      quote: "Efficient and easy to use. Great for converting documents on the go.",
      author: "Tech Enthusiast"
    },
    {
      quote: "Fantastic tool! Simplified my document conversions.",
      author: "Delighted User"
    }
  ];

  return (
    <section className="py-12 bg-white text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-gray-800">Customer Reviews</h2>
        {/* Use flexbox to arrange reviews in columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg">
              <blockquote className="italic">{`"${review.quote}"`}</blockquote>
              <p className="mt-4">{`- ${review.author}`}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
