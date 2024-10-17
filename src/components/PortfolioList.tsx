import React from 'react';
import { FaFileAlt, FaFileCsv } from 'react-icons/fa';

const projects = [
  { name: 'FLANDREAU SANTEE HEALTH CLINIC', project: '14065', address: '403 West Broad Ave.', city: 'Flandreau', state: 'South Dakota', zip: '57028', status: 'Active', stage: 'Course of Construction' },
  { name: 'GOOD EARTH STATE PARK', project: '15040', status: 'Active', stage: 'Course of Construction' },
  { name: 'ROYAL RIVER CASINO', project: '15060', status: 'Active', stage: 'Course of Construction' },
  { name: 'SANFORD HOSPICE - AVA HOUSE', project: '15025', address: '1320 West 17th Street', city: 'Sioux Falls', zip: '57104', phone: '605-360-1252', status: 'Active', stage: 'Course of Construction' },
  { name: 'SANFORD IMAGENETICS', project: '14070', address: '1321 W. 22nd Street', city: 'Sioux Falls', state: 'South Dakota', zip: '57105', status: 'Active', stage: 'Course of Construction', notes: 'Shipping Address: 1305 S. Euclid Avenue Sioux Falls, SD 57105' },
];

const PortfolioList: React.FC = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl text-orange-500">Portfolio List</h2>
        <div className="flex items-center">
          <span className="mr-2 text-red-600">Export data as:</span>
          <button className="bg-white border border-orange-500 text-orange-500 px-3 py-1 rounded mr-2 flex items-center">
            <FaFileAlt className="mr-1" /> PDF
          </button>
          <button className="bg-white border border-orange-500 text-orange-500 px-3 py-1 rounded flex items-center">
            <FaFileCsv className="mr-1" /> CSV
          </button>
        </div>
      </div>
      <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Project #</th>
            <th className="px-4 py-2 text-left">Address</th>
            <th className="px-4 py-2 text-left">City</th>
            <th className="px-4 py-2 text-left">State</th>
            <th className="px-4 py-2 text-left">ZIP</th>
            <th className="px-4 py-2 text-left">Phone</th>
            <th className="px-4 py-2 text-left">Status</th>
            <th className="px-4 py-2 text-left">Stage</th>
            <th className="px-4 py-2 text-left">Notes</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
              <td className="px-4 py-2 flex items-center">
                <div className="bg-green-500 text-white text-xs px-2 py-1 rounded-full mr-2">NEW</div>
                {project.name}
              </td>
              <td className="px-4 py-2">{project.project}</td>
              <td className="px-4 py-2">{project.address}</td>
              <td className="px-4 py-2">{project.city}</td>
              <td className="px-4 py-2">{project.state}</td>
              <td className="px-4 py-2">{project.zip}</td>
              <td className="px-4 py-2">{project.phone}</td>
              <td className="px-4 py-2 text-orange-500">{project.status}</td>
              <td className="px-4 py-2 text-orange-500">{project.stage}</td>
              <td className="px-4 py-2">{project.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PortfolioList;
