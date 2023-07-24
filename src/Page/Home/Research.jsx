import React from 'react';
const researchPapers = [
    {
        title: "Research 1",
        link: "https://example.com/paper-1",
        author: "Author 1",
    },
    {
        title: "Research 2 ",
        link: "https://example.com/paper-2",
        author: "Author 2",
    },
    {
        title: "Research 3 ",
        link: "https://example.com/paper-3",
        author: "Author 3",
    },
];

const Research = () => {
    return (
        <section className="py-12 bg-gradient-to-b from-black via-black to-gray-800">
            <div className="container mx-auto">
                <h2 className="text-center text-3xl font-bold mb-8 text-white">Recommended Research Papers</h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {researchPapers.map((paper, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md p-6">
                            <h3 className="text-xl font-semibold mb-4">{paper.title}</h3>
                            <p className="text-gray-600 mb-4">Author: {paper.author}</p>
                            <a
                                href={paper.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:text-blue-800"
                            >
                                Read Paper
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Research;
