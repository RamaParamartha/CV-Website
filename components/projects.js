import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Projects() {
  const [project, setProject] = useState({
    data: {
      attributes: {
        description: 'Loading...', // Initial placeholder
      },
    },
  }); // Initialize with expected data structure
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:1337/api/project-crud'); //api endpoint
        setProject(response.data); //add data response from strapi
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Failed to load project. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>Loading project...</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : project?.data?.attributes ? (
        <div key={project.data.id}>
          <p>{project.data.attributes.description}</p>
        </div>
      ) : (
        <p>No project found.</p>
      )}
    </div>
  );
}

export default Projects;
