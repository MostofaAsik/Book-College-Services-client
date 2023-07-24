import React from 'react';
const collegeReviews = [
    {
        college: "College A",
        review:
            "Great college with excellent faculty and facilities. Highly recommended!",
        user: "John Doe",
    },
    {
        college: "College B",
        review:
            "I had an amazing experience at this college. The campus is beautiful!",
        user: "Jane Smith",
    },
    {
        college: "College c",
        review:
            "I had an amazing experience at this college. The campus is beautiful!",
        user: "Jane Smith",
    },
];

const Review = () => {
    return (
        <section className="py-12 bg-gradient-to-t from-black via-black to-gray-800">
            <div className="container mx-auto">
                <h2 className="text-center text-3xl font-bold mb-8 text-white">College Reviews</h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 ">
                    {collegeReviews.map((review, index) => (
                        <div key={index} className="bg-lime-700 rounded-lg shadow-md p-6 text-white">
                            <h3 className="text-xl font-semibold mb-4">{review.college}</h3>
                            <p className=" mb-4">{review.review}</p>
                            <p className="text-orange-500">- {review.user}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Review;
