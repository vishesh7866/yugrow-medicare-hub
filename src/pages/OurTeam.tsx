
import React from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { 
  Building, Users, ChartBar, Book, ShieldCheck, 
  Briefcase, GraduationCap, HeartHandshake, Phone
} from "lucide-react";
import { 
  Card, 
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle 
} from "@/components/ui/card";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  department: string;
  bio: string;
  image?: string;
  contact?: {
    email?: string;
    phone?: string;
  };
}

interface Department {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  members: TeamMember[];
}

const OurTeam: React.FC = () => {
  // Department data with team members
  const departments: Department[] = [
    {
      id: "management",
      name: "Management",
      description: "Our leadership team guiding Yugrow Pharmacy's strategic vision",
      icon: <Building className="h-5 w-5" />,
      members: [
        {
          id: 1,
          name: "Rahul Sharma",
          role: "Chief Executive Officer",
          department: "Management",
          bio: "Rahul has over 20 years of experience in the pharmaceutical industry, leading organizations through digital transformation and growth.",
          image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
          contact: {
            email: "rahul@yugrow.com",
            phone: "+91 98765 43210"
          }
        },
        {
          id: 2,
          name: "Priya Patel",
          role: "Chief Operations Officer",
          department: "Management",
          bio: "Priya oversees all operations and ensures efficient delivery of our pharmaceutical services across all locations.",
          image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
        },
      ]
    },
    {
      id: "sales",
      name: "Sales",
      description: "Our dedicated sales team connecting customers with quality healthcare solutions",
      icon: <ChartBar className="h-5 w-5" />,
      members: [
        {
          id: 3,
          name: "Vikram Singh",
          role: "Sales Director",
          department: "Sales",
          bio: "Vikram leads our nationwide sales team with innovative strategies for market expansion.",
          image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
        },
        {
          id: 4,
          name: "Anjali Desai",
          role: "Regional Sales Manager",
          department: "Sales",
          bio: "Anjali manages sales operations across the western region, focusing on client relationships and revenue growth.",
          image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
        },
      ]
    },
    {
      id: "procurement",
      name: "Procurement",
      description: "Expert team ensuring we source the highest quality pharmaceutical products",
      icon: <Briefcase className="h-5 w-5" />,
      members: [
        {
          id: 5,
          name: "Rajesh Kumar",
          role: "Head of Procurement",
          department: "Procurement",
          bio: "Rajesh oversees all pharmaceutical procurement, ensuring quality, compliance and optimal pricing.",
          image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
        },
        {
          id: 6,
          name: "Neha Verma",
          role: "Supply Chain Analyst",
          department: "Procurement",
          bio: "Neha manages inventory analysis and optimization, ensuring efficient supply chain operations.",
          image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
        },
      ]
    },
    {
      id: "research",
      name: "Research & Development",
      description: "Innovative team advancing pharmaceutical solutions through research",
      icon: <GraduationCap className="h-5 w-5" />,
      members: [
        {
          id: 7,
          name: "Dr. Anand Joshi",
          role: "R&D Director",
          department: "Research",
          bio: "Dr. Joshi leads our research initiatives, focusing on innovative pharmaceutical solutions.",
          image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
        },
        {
          id: 8,
          name: "Dr. Meera Shah",
          role: "Senior Researcher",
          department: "Research",
          bio: "Dr. Shah specializes in developing innovative drug delivery mechanisms and improving efficacy.",
          image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
        },
      ]
    },
    {
      id: "compliance",
      name: "Compliance & Quality",
      description: "Team ensuring all our operations meet regulatory standards",
      icon: <ShieldCheck className="h-5 w-5" />,
      members: [
        {
          id: 9,
          name: "Sanjay Mehta",
          role: "Compliance Officer",
          department: "Compliance",
          bio: "Sanjay ensures all operations adhere to pharmaceutical regulations and quality standards.",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
        },
        {
          id: 10,
          name: "Ritu Agarwal",
          role: "Quality Assurance Manager",
          department: "Compliance",
          bio: "Ritu oversees quality control processes, ensuring our products meet the highest standards.",
          image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
        },
      ]
    },
    {
      id: "customer-care",
      name: "Customer Care",
      description: "Dedicated team providing exceptional support to our clients",
      icon: <HeartHandshake className="h-5 w-5" />,
      members: [
        {
          id: 11,
          name: "Kavita Reddy",
          role: "Customer Service Manager",
          department: "Customer Care",
          bio: "Kavita leads our customer service team, ensuring exceptional support and satisfaction.",
          image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
        },
        {
          id: 12,
          name: "Amit Khanna",
          role: "Client Relations Specialist",
          department: "Customer Care",
          bio: "Amit specializes in building long-term relationships with key clients and partners.",
          image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
        },
      ]
    },
  ];

  return (
    <>
      <Helmet>
        <title>Our Team | Yugrow Pharmacy</title>
        <meta name="description" content="Meet the dedicated team behind Yugrow Pharmacy's success - experts across management, sales, research, and more." />
      </Helmet>
      
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-[#042652] text-white py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Meet Our Team</h1>
              <p className="text-lg md:text-xl opacity-90 mb-8">
                The dedicated professionals behind Yugrow Pharmacy's commitment to excellence in healthcare
              </p>
              <div className="flex justify-center space-x-2">
                <Users className="h-6 w-6 text-[#FF7E3D]" />
                <span className="text-lg font-medium">{departments.reduce((total, dept) => total + dept.members.length, 0)} Team Members</span>
                <span className="mx-2">•</span>
                <Building className="h-6 w-6 text-[#FF7E3D]" />
                <span className="text-lg font-medium">{departments.length} Departments</span>
              </div>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-12 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#042652] dark:text-white">
                Our Vision & Values
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-8">
                At Yugrow Pharmacy, our team is united by a shared vision to transform healthcare access 
                across India, bringing quality pharmaceutical solutions to every corner of the country.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
                  <Book className="h-8 w-8 text-[#FF7E3D] mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Excellence</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    We strive for excellence in every aspect of our operations
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
                  <HeartHandshake className="h-8 w-8 text-[#FF7E3D] mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Integrity</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    We uphold the highest ethical standards in all our dealings
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
                  <Users className="h-8 w-8 text-[#FF7E3D] mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Collaboration</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    We believe in the power of teamwork to achieve our goals
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Departments Section */}
        <section className="py-12 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-[#042652] dark:text-white">
              Our Departments
            </h2>
            
            <Tabs defaultValue="management" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="bg-gray-100 dark:bg-gray-700 overflow-x-auto flex-wrap justify-center max-w-full">
                  {departments.map((department) => (
                    <TabsTrigger 
                      key={department.id} 
                      value={department.id}
                      className="flex items-center gap-1.5 px-4 py-2"
                    >
                      {department.icon}
                      <span>{department.name}</span>
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
              
              {departments.map((department) => (
                <TabsContent key={department.id} value={department.id}>
                  <div className="mb-8 text-center max-w-2xl mx-auto">
                    <h3 className="text-xl md:text-2xl font-bold mb-2 text-[#042652] dark:text-white flex items-center justify-center gap-2">
                      {department.icon}
                      {department.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {department.description}
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                    {department.members.map((member) => (
                      <Card key={member.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                        <CardHeader className="pb-2">
                          <div className="flex items-center gap-4">
                            <Avatar className="h-16 w-16 border-2 border-[#FF7E3D]/20">
                              <AvatarImage src={member.image} alt={member.name} />
                              <AvatarFallback className="bg-[#042652] text-white">
                                {member.name.split(' ').map(n => n[0]).join('')}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <CardTitle className="text-lg">{member.name}</CardTitle>
                              <CardDescription className="text-[#FF7E3D] font-medium">
                                {member.role}
                              </CardDescription>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                            {member.bio}
                          </p>
                          {member.contact && (
                            <>
                              <Separator className="my-3" />
                              <div className="flex flex-col gap-1 text-sm">
                                {member.contact.email && (
                                  <a href={`mailto:${member.contact.email}`} className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-[#FF7E3D]">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                      <polyline points="22,6 12,13 2,6"></polyline>
                                    </svg>
                                    {member.contact.email}
                                  </a>
                                )}
                                {member.contact.phone && (
                                  <a href={`tel:${member.contact.phone}`} className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-[#FF7E3D]">
                                    <Phone className="h-4 w-4" />
                                    {member.contact.phone}
                                  </a>
                                )}
                              </div>
                            </>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Join Our Team Section */}
        <section className="py-16 bg-[#042652] text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="mb-6 md:mb-0 md:max-w-xl">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Join Our Growing Team
                </h2>
                <p className="opacity-90 mb-6">
                  We're always looking for talented individuals to join our mission of transforming healthcare access across India. Explore career opportunities with Yugrow Pharmacy.
                </p>
              </div>
              <div>
                <a href="/careers" className="inline-block px-6 py-3 bg-[#FF7E3D] hover:bg-[#FF7E3D]/90 text-white font-medium rounded-md transition-colors">
                  View Open Positions
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default OurTeam;
