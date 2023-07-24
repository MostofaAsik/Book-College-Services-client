import React from 'react';
import Card from '../Components/Card';

const AllCollege = () => {
    const collegeData = [
        {
            image: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sbGVnZSUyMGNhbXB1c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
            name: "College A",
            admissionDates: "August 2023",
            events: "Annual Fest, Cultural Night, Career Fair",
            researchHistory: "Established in 1950, pioneers in medical research.",
            sports: "Football, Basketball, Swimming",
        },
        {
            image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29sbGVnZSUyMGNhbXB1c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
            name: "College B",
            admissionDates: "July 2023",
            events: "Tech Fest, Literary Week, Science Exhibition",
            researchHistory: "Leader in computer science research.",
            sports: "Cricket, Volleyball, Tennis",
        },
        {
            image: "https://media.istockphoto.com/id/173598452/photo/university-in-autumn.jpg?s=612x612&w=0&k=20&c=jQqpZuTZ6qXIfWqnCW5nqlExJZO0PO47L-ZiaE8jIk0=",
            name: "College C",
            admissionDates: "July 2023",
            events: "Tech Fest, Literary Week, Science Exhibition",
            researchHistory: "Leader in computer science research.",
            sports: "Cricket, Volleyball, Tennis",
        },
        {
            image: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sbGVnZSUyMGNhbXB1c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
            name: "College A",
            admissionDates: "August 2023",
            events: "Annual Fest, Cultural Night, Career Fair",
            researchHistory: "Established in 1950, pioneers in medical research.",
            sports: "Football, Basketball, Swimming",
        },
        {
            image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29sbGVnZSUyMGNhbXB1c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
            name: "College B",
            admissionDates: "July 2023",
            events: "Tech Fest, Literary Week, Science Exhibition",
            researchHistory: "Leader in computer science research.",
            sports: "Cricket, Volleyball, Tennis",
        },
        {
            image: "https://media.istockphoto.com/id/173598452/photo/university-in-autumn.jpg?s=612x612&w=0&k=20&c=jQqpZuTZ6qXIfWqnCW5nqlExJZO0PO47L-ZiaE8jIk0=",
            name: "College C",
            admissionDates: "July 2023",
            events: "Tech Fest, Literary Week, Science Exhibition",
            researchHistory: "Leader in computer science research.",
            sports: "Cricket, Volleyball, Tennis",
        }, {
            image: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sbGVnZSUyMGNhbXB1c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
            name: "College A",
            admissionDates: "August 2023",
            events: "Annual Fest, Cultural Night, Career Fair",
            researchHistory: "Established in 1950, pioneers in medical research.",
            sports: "Football, Basketball, Swimming",
        },
        {
            image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29sbGVnZSUyMGNhbXB1c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
            name: "College B",
            admissionDates: "July 2023",
            events: "Tech Fest, Literary Week, Science Exhibition",
            researchHistory: "Leader in computer science research.",
            sports: "Cricket, Volleyball, Tennis",
        },
        {
            image: "https://media.istockphoto.com/id/173598452/photo/university-in-autumn.jpg?s=612x612&w=0&k=20&c=jQqpZuTZ6qXIfWqnCW5nqlExJZO0PO47L-ZiaE8jIk0=",
            name: "College C",
            admissionDates: "July 2023",
            events: "Tech Fest, Literary Week, Science Exhibition",
            researchHistory: "Leader in computer science research.",
            sports: "Cricket, Volleyball, Tennis",
        },
    ];
    return (
        <section className="bg-gradient-to-b from-gray-800 to-black text-white py-3">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
                    {collegeData.map((college, index) => (
                        <Card key={index} college={college} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AllCollege;