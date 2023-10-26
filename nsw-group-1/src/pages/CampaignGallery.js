import React from 'react';

const CampaignGallery = () => {
  return (
    <div>
      <h2>Campaigns</h2>
      <div className="campaign-grid">
        {/* Individual Campaign Thumbnails */}
        <div className="campaign-thumbnail">
          <img src="/images/placeholder.png" alt="Campaign 1" />
          <p>Campaign 1</p>
        </div>
        <div className="campaign-thumbnail">
          <img src="/images/placeholder/png" alt="Campaign 2" />
          <p>Campaign 2</p>
        </div>
        {/* Add more campaigns as needed */}
      </div>
    </div>
  );
}

export default CampaignGallery;