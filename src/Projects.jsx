import React from 'react';
import ProCart from './ui/ProCart';
import contact from "./assets/contacts-manager-management-ss1.png"
import task from "./assets/Slider-1.png"
import paste from "./assets/pastebin-screenshot-3.webp"



function Projects() {
  return (
    <div className="w-full min-h-screen py-12 md:py-20 px-4 md:px-6">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <h1 className="text-2xl md:text-4xl font-bold text-center">My <span className="text-pink-600">Projects </span></h1>
        <p className="text-gray-500 mt-2 mb-8 md:mb-12 text-center">A Selection of my recent work</p>
      </div>
     
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 max-w-6xl mx-auto w-full px-0">
        <ProCart heading="Contact Management" img={contact} btn1="React" btn2="MongoDB" btn3="Node" desc="A web application that allows users to add, edit, delete, and organize contacts efficiently. Features include contact search, data validation, and seamless CRUD operations for better contact management." link="https://github.com/Payal-Kanade23/Contact-Manager" />
         
        <ProCart heading="PasteBin WebApp" img={paste} btn1="React" btn2="Redux" btn3="tailwind" desc="A Pastebin-style web application built with React and Redux for efficient state management. Users can create, edit, save, and share text snippets through unique links. Features a responsive UI, persistent storage, and seamless content organization." link="https://github.com/Payal-Kanade23/PasteBin-App" />
      
        <ProCart heading="Task Manager" img={task} btn1="React" btn2="node" btn3="JWT" desc="A Task Manager application built with React featuring a Kanban board for drag-and-drop task management. Implements JWT authentication for secure user login and protected routes. Allows users to create, organize, and move tasks efficiently." link="https://github.com/Payal-Kanade23/Task-Manager" />
      
      </div>
    </div> 
  );
}

export default Projects;
