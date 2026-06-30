import React, { useState } from 'react';

export default function LocationForm({ onSuccess }) {
    const [formData, setFormData] = useState({

    // Basic Information
    location_name: "",
    located_in: "",
    village_name: "",
    taluka_name: "",
    district_name: "Ratnagiri",

    // Accessibility
    nearest_landmark: "",
    attraction_type: "",
    road_condition: "",
    signboards_available: "",
    public_transport: "",
    nearest_bus_stand: "",
    nearest_railway_station: "",

    // Tourism Facilities
    parking_space: "",
    food_stalls: "",
    amenities_available: "",

    // Management
    owned_by: "",
    managed_by: "",

    // Visitor Information
    entry_fee: "",
    entry_fee_amount: "",
    visiting_hours: "",
    seasonal_availability: "",
    peak_period: "",
    avg_time_spent: "",
    visitor_type: "",
    crowd_level: "",
    site_activities: "",

    // Sustainability
    formal_regulations: "",
    local_residents_involved: "",
    job_type: "",
    suggestions_improvements: "",

    // Contact
    email_address: "",
    user_description: "",
    google_maps_link: "",

    // Photos
    photo_location: "",
    site_photos: ""

});

const handleChange = (e) => {
  const { name, value } = e.target;

  setFormData((prev) => ({
    ...prev,
    [name]: value
  }));
};

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch(
      "http://127.0.0.1:5001/api/locations/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      }
    );

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || "Submission failed");
    }

    alert(result.message);

    if (onSuccess) {
      onSuccess();
    }

    setFormData({

  // Basic Information
  location_name: "",
  located_in: "",
  village_name: "",
  taluka_name: "",
  district_name: "Ratnagiri",

  // Accessibility
  nearest_landmark: "",
  attraction_type: "",
  road_condition: "",
  signboards_available: "",
  public_transport: "",
  nearest_bus_stand: "",
  nearest_railway_station: "",

  // Tourism Facilities
  parking_space: "",
  food_stalls: "",
  amenities_available: "",

  // Management
  owned_by: "",
  managed_by: "",

  // Visitor Information
  entry_fee: "",
  entry_fee_amount: "",
  visiting_hours: "",
  seasonal_availability: "",
  peak_period: "",
  avg_time_spent: "",
  visitor_type: "",
  crowd_level: "",
  site_activities: "",

  // Sustainability
  formal_regulations: "",
  local_residents_involved: "",
  job_type: "",
  suggestions_improvements: "",

  // Contact
  email_address: "",
  user_description: "",
  google_maps_link: "",

  // Photos
  photo_location: "",
  site_photos: ""

});

  } catch (err) {
    alert(err.message);
  }
};

  
  return (


    <form

    className="space-y-4"
    onSubmit={handleSubmit}
>

<div className="mb-10">

    <h2 className="text-3xl font-bold text-slate-800">

        Location Registration

    </h2>

    <p className="text-slate-500 mt-2">

        Please provide complete details about the tourist location.

    </p>

</div>

<hr className="mb-10"/>

<h3 className="text-2xl font-semibold text-slate-800 mb-2">

    Section 1 : Basic Information

</h3>

<p className="text-slate-500 mb-8">

Basic details about the tourist location.

</p>
      

      <div>
        <label className="block text-xs font-bold text-slate-500 mb-1">
          Name of Location
        </label>

        <input
  type="text"
  name="location_name"
  value={formData.location_name}
  onChange={handleChange}
  className="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-orange-500"
  required
  placeholder="e.g. Unhavare Hot Water Springs"
/>
      </div>


        <div>

<label className="block text-sm font-semibold text-slate-700 mb-3">

Located In

</label>

<div className="space-y-2">

<label className="flex items-center gap-2">

<input
type="radio"
name="located_in"
value="Village"
checked={formData.located_in === "Village"}
onChange={handleChange}
/>

Village

</label>

<label className="flex items-center gap-2">

<input
type="radio"
name="located_in"
value="Town"
checked={formData.located_in === "Town"}
onChange={handleChange}
/>

Town

</label>

<label className="flex items-center gap-2">

<input
type="radio"
name="located_in"
value="City"
checked={formData.located_in === "City"}
onChange={handleChange}
/>

City

</label>

</div>

</div>
<div>
  <label className="block text-xs font-bold text-slate-500 mb-1">
    Village Name
  </label>

  <input
    type="text"
    name="village_name"
    value={formData.village_name}
    onChange={handleChange}
    className="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-orange-500"
    placeholder="e.g. Kelshi"
    required
  />
</div>
      <div>
        <label className="block text-xs font-bold text-slate-500 mb-1">
          Taluka & Region
        </label>

        <input
  type="text"
  name="taluka_name"
  value={formData.taluka_name}
  onChange={handleChange}
  className="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-orange-500"
  required
  placeholder="e.g. Dapoli"
/>
      </div>

      <div>
  <label className="block text-xs font-bold text-slate-500 mb-1">
    District
  </label>

  <input
    type="text"
    name="district_name"
    value={formData.district_name}
    onChange={handleChange}
    className="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-orange-500"
    required
  />
</div>

<div>

<label className="block text-xs font-bold text-slate-500 mb-2">

Upload Photo of the Location

</label>

<input

type="file"

name="site_photos"

onChange={(e)=>

setFormData({

...formData,

site_photos:e.target.files[0]

})

}

/>

<p className="mt-2 text-sm text-slate-500">

{formData.site_photos

? formData.site_photos.name

: "No photo selected"}

</p>

</div>

<div>
  <label className="block text-xs font-bold text-slate-500 mb-1">
    Nearest Landmark
  </label>

  <input
    type="text"
    name="nearest_landmark"
    value={formData.nearest_landmark}
    onChange={handleChange}
    className="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-orange-500"
    placeholder="e.g. Near Murud Beach"
  />
</div>

<div>
  <label className="block text-xs font-bold text-slate-500 mb-1">
    Type of Attraction
  </label>

  <select
    name="attraction_type"
    value={formData.attraction_type}
    onChange={handleChange}
    className="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-orange-500"
    required
  >
    <option value="">Select Attraction Type</option>

    <option value="Nature">Nature</option>

    <option value="Beach">Beach</option>

    <option value="Fort">Fort</option>

    <option value="Temple">Temple</option>

    <option value="Waterfall">Waterfall</option>

    <option value="Historical">Historical</option>

    <option value="Religious">Religious</option>

    <option value="Adventure">Adventure</option>

    <option value="Wildlife">Wildlife</option>

    <option value="Other">Other</option>

  </select>
</div>

<div>
  <label className="block text-xs font-bold text-slate-500 mb-1">
    Road Condition
  </label>

  <select
    name="road_condition"
    value={formData.road_condition}
    onChange={handleChange}
    className="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-orange-500"
    required
  >
    <option value="">Select Road Condition</option>
    <option value="Excellent">Excellent</option>
    <option value="Good">Good</option>
    <option value="Average">Average</option>
    <option value="Poor">Poor</option>
  </select>
</div>

<div>
  <label className="block text-xs font-bold text-slate-500 mb-1">
    Signboards Available
  </label>

  <select
    name="signboards_available"
    value={formData.signboards_available}
    onChange={handleChange}
    className="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-orange-500"
    required
  >
    <option value="">Select</option>
    <option value="Yes">Yes</option>
    <option value="No">No</option>
  </select>
</div>

<div>
  <label className="block text-xs font-bold text-slate-500 mb-1">
    Public Transport Available
  </label>

  <select
    name="public_transport"
    value={formData.public_transport}
    onChange={handleChange}
    className="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-orange-500"
    required
  >
    <option value="">Select</option>
    <option value="Bus">Bus</option>
    <option value="Train">Train</option>
    <option value="Both">Both</option>
    <option value="None">None</option>
  </select>
</div>

<div>
  <label className="block text-xs font-bold text-slate-500 mb-1">
    Nearest Bus Stand
  </label>

  <input
    type="text"
    name="nearest_bus_stand"
    value={formData.nearest_bus_stand}
    onChange={handleChange}
    className="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-orange-500"
    placeholder="e.g. Dapoli Bus Stand"
  />
</div>

<div>
  <label className="block text-xs font-bold text-slate-500 mb-1">
    Nearest Railway Station
  </label>

  <input
    type="text"
    name="nearest_railway_station"
    value={formData.nearest_railway_station}
    onChange={handleChange}
    className="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-orange-500"
    placeholder="e.g. Khed Railway Station"
  />
</div>

<div>
  <label className="block text-xs font-bold text-slate-500 mb-1">
    Parking Space Available
  </label>

  <select
    name="parking_space"
    value={formData.parking_space}
    onChange={handleChange}
    className="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-orange-500"
    required
  >
    <option value="">Select</option>
    <option value="Yes">Yes</option>
    <option value="No">No</option>
  </select>
</div>

<div>
  <label className="block text-xs font-bold text-slate-500 mb-1">
    Food Stalls Available
  </label>

  <select
    name="food_stalls"
    value={formData.food_stalls}
    onChange={handleChange}
    className="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-orange-500"
    required
  >
    <option value="">Select</option>
    <option value="Yes">Yes</option>
    <option value="No">No</option>
  </select>
</div>

<div>
  <label className="block text-xs font-bold text-slate-500 mb-1">
    Amenities Available
  </label>

  <textarea
    name="amenities_available"
    value={formData.amenities_available}
    onChange={handleChange}
    rows="3"
    className="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-orange-500"
    placeholder="e.g. Toilets, Drinking Water, Seating Area"
  />
</div>

<div>
  <label className="block text-xs font-bold text-slate-500 mb-1">
    
<div>

<label className="block text-sm font-semibold text-slate-700 mb-3">

Owned By

</label>

<div className="space-y-2">

{["Private","Community","Public"].map((item)=>(

<label key={item} className="flex items-center gap-2">

<input

type="radio"

name="owned_by"

value={item}

checked={formData.owned_by===item}

onChange={handleChange}

/>

{item}

</label>

))}

</div>

</div>


  </label>

  <input
    type="text"
    name="owned_by"
    value={formData.owned_by}
    onChange={handleChange}
    className="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-orange-500"
    placeholder="e.g. Forest Department"
  />
</div>

<div>
  <label className="block text-xs font-bold text-slate-500 mb-1">
<div>

<label className="block text-sm font-semibold text-slate-700 mb-3">

Managed By

</label>

<div className="space-y-2">

{[
"Gram Panchayat",
"MTDC",
"Private",
"Community Based",
"Other"
].map((item)=>(

<label key={item} className="flex items-center gap-2">

<input

type="radio"

name="managed_by"

value={item}

checked={formData.managed_by===item}

onChange={handleChange}

/>

{item}

</label>

))}

</div>

</div>  </label>

  <input
    type="text"
    name="managed_by"
    value={formData.managed_by}
    onChange={handleChange}
    className="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-orange-500"
    placeholder="e.g. Gram Panchayat"
  />
</div>

<div>
  <label className="block text-xs font-bold text-slate-500 mb-1">
    Entry Fee
  </label>

  <select
    name="entry_fee"
    value={formData.entry_fee}
    onChange={handleChange}
    className="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-orange-500"
  >
    <option value="">Select</option>
    <option value="Yes">Yes</option>
    <option value="No">No</option>
  </select>
</div>

<div>
  <label className="block text-xs font-bold text-slate-500 mb-1">
    Entry Fee Amount
  </label>

  <input
    type="text"
    name="entry_fee_amount"
    value={formData.entry_fee_amount}
    onChange={handleChange}
    className="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-orange-500"
    placeholder="e.g. 20 Rs."
  />
</div>

<div>
  <label className="block text-xs font-bold text-slate-500 mb-1">
    Visiting Hours
  </label>

  <input
    type="text"
    name="visiting_hours"
    value={formData.visiting_hours}
    onChange={handleChange}
    className="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-orange-500"
    placeholder="e.g. 8 AM - 6 PM"
  />
</div>

<div>
  <label className="block text-xs font-bold text-slate-500 mb-1">
    Seasonal Availability
  </label>

  <input
    type="text"
    name="seasonal_availability"
    value={formData.seasonal_availability}
    onChange={handleChange}
    className="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-orange-500"
    placeholder="e.g. Throughout the Year"
  />
</div>

<div>
  <label className="block text-xs font-bold text-slate-500 mb-1">
    Peak Period
  </label>

  <input
    type="text"
    name="peak_period"
    value={formData.peak_period}
    onChange={handleChange}
    className="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-orange-500"
    placeholder="e.g. October - February"
  />
</div>

<div>
  <label className="block text-xs font-bold text-slate-500 mb-1">
    Average Time Spent
  </label>

  <input
    type="text"
    name="avg_time_spent"
    value={formData.avg_time_spent}
    onChange={handleChange}
    className="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-orange-500"
    placeholder="e.g. 2 Hours"
  />
</div>

<div>
  <label className="block text-xs font-bold text-slate-500 mb-1">
    Visitor Type
  </label>

  <textarea
    name="visitor_type"
    value={formData.visitor_type}
    onChange={handleChange}
    rows="2"
    className="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-orange-500"
    placeholder="e.g. Families, Students, Foreign Tourists"
  />
</div>

<div>
  <label className="block text-xs font-bold text-slate-500 mb-1">
    Crowd Level
  </label>

  <select
    name="crowd_level"
    value={formData.crowd_level}
    onChange={handleChange}
    className="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-orange-500"
  >
    <option value="">Select</option>
    <option value="Low">Low</option>
    <option value="Medium">Medium</option>
    <option value="High">High</option>
  </select>
</div>

<div>
  <label className="block text-xs font-bold text-slate-500 mb-1">
    Site Activities
  </label>

  <textarea
    name="site_activities"
    value={formData.site_activities}
    onChange={handleChange}
    rows="3"
    className="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-orange-500"
    placeholder="e.g. Trekking, Photography, Boating"
  />
</div>

<div>
  <label className="block text-xs font-bold text-slate-500 mb-1">
    Formal Regulations
  </label>

  <textarea
    name="formal_regulations"
    value={formData.formal_regulations}
    onChange={handleChange}
    rows="3"
    className="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-orange-500"
    placeholder="Rules, restrictions, permissions etc."
  />
</div>

<div>
  <label className="block text-xs font-bold text-slate-500 mb-1">
    Local Residents Involved
  </label>

  <select
    name="local_residents_involved"
    value={formData.local_residents_involved}
    onChange={handleChange}
    className="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-orange-500"
  >
    <option value="">Select</option>
    <option value="Yes">Yes</option>
    <option value="No">No</option>
  </select>
</div>

<div>
  <label className="block text-xs font-bold text-slate-500 mb-1">
    Job Type
  </label>

  <input
    type="text"
    name="job_type"
    value={formData.job_type}
    onChange={handleChange}
    className="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-orange-500"
    placeholder="e.g. Guide, Boat Service, Food Stall"
  />
</div>

<div>
  <label className="block text-xs font-bold text-slate-500 mb-1">
    Suggestions / Improvements
  </label>

  <textarea
    name="suggestions_improvements"
    value={formData.suggestions_improvements}
    onChange={handleChange}
    rows="3"
    className="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-orange-500"
    placeholder="Suggestions for improving the tourist destination"
  />
</div>

<div>
  <label className="block text-xs font-bold text-slate-500 mb-1">
    Email Address
  </label>

  <input
    type="email"
    name="email_address"
    value={formData.email_address}
    onChange={handleChange}
    className="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-orange-500"
    placeholder="example@gmail.com"
  />
</div>

<div>
  <label className="block text-xs font-bold text-slate-500 mb-1">
    User Description
  </label>

  <textarea
    name="user_description"
    value={formData.user_description}
    onChange={handleChange}
    rows="4"
    className="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-orange-500"
    placeholder="Additional description about the tourist location"
  />
</div>

<div>
  <label className="block text-xs font-bold text-slate-500 mb-1">
    Google Maps Link
  </label>

  <input
    type="url"
    name="google_maps_link"
    value={formData.google_maps_link}
    onChange={handleChange}
    className="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-orange-500"
    placeholder="https://maps.google.com/..."
  />
</div>

      {/* <div>
        <label className="block text-xs font-bold text-slate-500 mb-1">
          Upload Photo
        </label>

        <div>



<input

type="file"

name="site_photos"

onChange={(e)=>
setFormData({
...formData,
site_photos:e.target.files[0]
})
}

/>



</div>
      </div> */}

      <button
        type="submit"
        className="w-full py-3 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-lg transition-colors"
      >
        Submit Profile Data
      </button>

    </form>
  );
}

















