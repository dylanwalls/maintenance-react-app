import React from 'react';
import { useParams } from 'react-router-dom';

const includeKeys = ['id', 'lease_id', 'tenantName', 'tenantMobileNo', 'address', 'escalationDate', 'completed', 'prefilled_inspection_form', 'prefilled_maintenance_quotes_form'];

const InspectionDetails = ({ inspections }) => {
  const { inspectionId } = useParams();
  const inspection = inspections.find(ins => ins.id === parseInt(inspectionId, 10));

  return (
    <div className="inspection-details-container">
      {inspection ? (
        <div className="details-grid">
          {includeKeys.map((key) => {
            const value = inspection[key];
            if (key === 'prefilled_inspection_form' || key === 'prefilled_maintenance_quotes_form') {
              return (
                <React.Fragment key={key}>
                  <div className="detail-label">{key.replace(/_/g, ' ').replace(/([A-Z])/g, ' $1').trim()}:</div>
                  <div className="detail-value">
                    <a href={value} target="_blank" rel="noopener noreferrer" className="button-link">Open Form</a>
                  </div>
                </React.Fragment>
              );
            }
            return (
              <React.Fragment key={key}>
                <div className="detail-label">{key.replace(/_/g, ' ').replace(/([A-Z])/g, ' $1').trim()}:</div>
                <div className="detail-value">{value.toString()}</div>
              </React.Fragment>
            );
          })}
        </div>
      ) : (
        <p>No inspection details available.</p>
      )}
    </div>
  );
};

export default InspectionDetails;
