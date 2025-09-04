import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";

import courses from "@/pages/courses.json";

const Courses = () => {
  // const courses = {

  // };

  const [semesterFilter, setSemesterFilter] = useState("All");

  const semesters = [
    "All",
    ...new Set(
      Object.values(courses)
        .flat()
        .map((course) => course.semester)
    ),
  ];

  const filterCourses = (categoryCourses) => {
    if (semesterFilter === "All") return categoryCourses;
    return categoryCourses.filter(
      (course) => course.semester === semesterFilter
    );
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case "computerScience":
        return "bg-navy-700 text-navy-100 hover:bg-navy-600";
      case "electrical":
        return "bg-teal-700 text-teal-100 hover:bg-teal-600";
      case "mathematics":
        return "bg-purple-700 text-purple-100 hover:bg-purple-600";
      case "machineLearning":
        return "bg-amber-700 text-amber-100 hover:bg-amber-600";
      default:
        return "bg-gray-700 text-gray-100 hover:bg-gray-600";
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navigation />

      {/* Header */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in text-foreground">
              My Academic Courses
            </h1>
            <p className="text-xl text-muted-foreground">
              A concise overview of my coursework at IIT Kanpur
            </p>
          </div>
        </div>
      </section>

      {/* Courses Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Semester Filter */}
          <div className="mb-8 flex justify-center">
            <select
              value={semesterFilter}
              onChange={(e) => setSemesterFilter(e.target.value)}
              className="p-2 border rounded-md bg-white text-navy-800 focus:outline-none focus:ring-2 focus:ring-navy-500"
            >
              {semesters.map((semester) => (
                <option key={semester} value={semester}>
                  {semester}
                </option>
              ))}
            </select>
          </div>

          <Tabs defaultValue="computerScience" className="w-full">
            <div className="flex justify-center mb-6">
              <TabsList className="bg-gray-100 rounded-lg p-1">
                <TabsTrigger
                  value="computerScience"
                  className={`px-4 py-2 rounded-md ${getCategoryColor(
                    "computerScience"
                  )}`}
                >
                  CS
                </TabsTrigger>
                <TabsTrigger
                  value="electricalEngineering"
                  className={`px-4 py-2 rounded-md ${getCategoryColor(
                    "electrical"
                  )}`}
                >
                  EE
                </TabsTrigger>
                <TabsTrigger
                  value="mathematics"
                  className={`px-4 py-2 rounded-md ${getCategoryColor(
                    "mathematics"
                  )}`}
                >
                  Maths
                </TabsTrigger>
                <TabsTrigger
                  value="machineLearning"
                  className={`px-4 py-2 rounded-md ${getCategoryColor(
                    "machineLearning"
                  )}`}
                >
                  ML
                </TabsTrigger>
              </TabsList>
            </div>

            {Object.keys(courses).map((category) => (
              <TabsContent key={category} value={category} className="mt-6">
                <Card className="shadow-md">
                  <CardContent className="p-6">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-sm text-navy-800">
                        <thead>
                          <tr className="border-b bg-gray-100">
                            <th className="p-3 font-semibold">Code</th>
                            <th className="p-3 font-semibold">Course Title</th>
                            <th className="p-3 font-semibold">Semester</th>

                            <th className="p-3 font-semibold">Skills</th>
                            <th className="p-3 font-semibold">Details</th>
                          </tr>
                        </thead>
                        <tbody>
                          {filterCourses(courses[category]).map((course) => (
                            <tr
                              key={course.id}
                              className="border-b hover:bg-gray-50"
                            >
                              <td className="p-3">{course.code}</td>
                              <td className="p-3 font-medium">
                                {course.title}
                              </td>
                              <td className="p-3">{course.semester}</td>
                              <td className="p-3">
                                <div className="flex flex-wrap gap-1">
                                  {course.skills.map((skill) => (
                                    <span
                                      key={skill}
                                      className={`px-2 py-1 rounded-md text-xs ${getCategoryColor(
                                        category
                                      ).replace(
                                        "text-navy-100 hover:bg-navy-600",
                                        "bg-opacity-20 text-navy-700"
                                      )}`}
                                    >
                                      {skill}
                                    </span>
                                  ))}
                                </div>
                              </td>
                              <td className="p-3">
                                <Accordion type="single" collapsible>
                                  <AccordionItem value={course.id}>
                                    <AccordionTrigger className="text-navy-800 hover:no-underline">
                                      View Details
                                    </AccordionTrigger>
                                    <AccordionContent>
                                      <p className="text-navy-600 mb-2">
                                        {course.description}
                                      </p>
                                      <h4 className="font-semibold text-navy-800">
                                        Key Topics:
                                      </h4>
                                      <ul className="list-disc pl-5 text-navy-600 mb-2">
                                        {course.topics.map((topic, index) => (
                                          <li key={index}>{topic}</li>
                                        ))}
                                      </ul>
                                      {course.project && (
                                        <>
                                          <h4 className="font-semibold text-navy-800">
                                            Project:
                                          </h4>
                                          <p className="text-navy-600">
                                            {course.project}
                                          </p>
                                        </>
                                      )}
                                    </AccordionContent>
                                  </AccordionItem>
                                </Accordion>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Skills Summary */}
      <section className="py-12 bg-navy-800 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Skills Acquired
          </h2>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                {
                  category: "Programming",
                  skills: ["Python", "C++", "SQL", "MATLAB", "Verilog"],
                },
                {
                  category: "Computer Science",
                  skills: [
                    "Machine Learning",
                    "Data Structures",
                    "Algorithms",
                    "Databases",
                    "Networks",
                  ],
                },
                {
                  category: "Electrical Eng.",
                  skills: [
                    "Signal Processing",
                    "Digital Circuits",
                    "Control Systems",
                    "Microelectronics",
                    "Communication Systems",
                  ],
                },
                {
                  category: "Mathematics",
                  skills: [
                    "Probability",
                    "Statistics",
                    "Linear Algebra",
                    "Differential Equations",
                    "Complex Analysis",
                  ],
                },
              ].map((group, index) => (
                <div
                  key={index}
                  className="bg-navy-700 p-4 rounded-lg shadow-md"
                >
                  <h3 className="font-semibold text-lg mb-3">
                    {group.category}
                  </h3>
                  <ul className="space-y-2 text-navy-100">
                    {group.skills.map((skill, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="w-2 h-2 bg-navy-300 rounded-full mr-2"></span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Courses;
