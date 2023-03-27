import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import './home.scss';

const Home = () => {
    const files = [
        {
            sno:"1",
          name: "Document1.docx",
          type: "Word document",
          size: "32 KB",
          date: "Mar 25, 2023",
        },
        {
            sno:"2",
          name: "Presentation1.pptx",
          type: "PowerPoint presentation",
          size: "64 KB",
          date: "Mar 24, 2023",
        },
        {
            sno:"3",
          name: "Image1.jpg",
          type: "JPEG image",
          size: "128 KB",
          date: "Mar 23, 2023",
        },
        {
            sno:"4",
          name: "Spreadsheet1.xlsx",
          type: "Excel spreadsheet",
          size: "16 KB",
          date: "Mar 22, 2023",
        },
      ];
    return(
        <div className="home">
            <Sidebar />
            <div className="homeContainer">
                <Navbar />
                <h1>My Files</h1>
      <table>
        <thead>
          <tr>
            <th>SNo.</th>
            <th>Name</th>
            <th>Type</th>
            <th>Size</th>
            <th>Date Modified</th>
          </tr>
        </thead>
        <tbody>
          {files.map((file, index) => (
            <tr key={index}>
              <td>{file.sno}</td>
              <td>{file.name}</td>
              <td>{file.type}</td>
              <td>{file.size}</td>
              <td>{file.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
        </div>
        
    );
};

export default Home;

