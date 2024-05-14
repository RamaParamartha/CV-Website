import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Projects2_api() {
  const [project2, setProject2] = useState({
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
        const response = await axios.get('http://localhost:1337/api/project-c');
        setProject2(response.data);
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
      ) : project2?.data?.attributes ? (
        <div key={project2.data.id}>
          <p>{project2.data.attributes.desc}</p>
        </div>
      ) : (
        <p>No project found.</p>
      )}
    </div>
  );
}

export default Projects2_api;
