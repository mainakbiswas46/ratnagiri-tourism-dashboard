import React, { useState } from "react";

export default function HomestayForm({ onSuccess }) {

    const [formData, setFormData] = useState({

        homestay_name: "",
        owner_name: "",
        phone_number: "",
        situated_in: "",
        village_name: "",
        taluka_name: "",
        district_name: "Ratnagiri",
        live_on_premises: "",
        homestay_type: "",
        homestay_unit_type: "",
        google_maps_discoverable: "",
        google_maps_link: "",
        mtdc_registered: "",
        booking_method: "",
        booking_app_name: "",
        listed_on_booking_platform: "",
        price_list: "",
        facilities_services: "",
        digital_payment: "",
        cancellation_policy: "",
        vegetarian_meals: "",
        non_vegetarian_meals: "",
        nearby_attractions: "",
        guidance_available: "",
        guides_available: "",
        local_experiences: "",
        social_media_link: "",
        homestay_photos: "",

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
            "http://127.0.0.1:5001/api/homestays/register",
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

            homestay_name: "",
            owner_name: "",
            phone_number: "",
            situated_in: "",
            village_name: "",
            taluka_name: "",
            district_name: "Ratnagiri",

            live_on_premises: "",
            homestay_type: "",
            homestay_unit_type: "",
            google_maps_discoverable: "",
            google_maps_link: "",
            mtdc_registered: "",

            booking_method: "",
            booking_app_name: "",
            listed_on_booking_platform: "",
            price_list: "",

            facilities_services: "",
            digital_payment: "",
            cancellation_policy: "",
            vegetarian_meals: "",
            non_vegetarian_meals: "",

            nearby_attractions: "",
            guidance_available: "",
            guides_available: "",
            local_experiences: "",

            social_media_link: "",
            homestay_photos: ""

        });

    }

    catch (err) {

        alert(err.message);

    }

};

    return (

        <form
            className="space-y-4"
            onSubmit={handleSubmit}
        >

            <h2 className="text-2xl font-bold text-slate-800">
                Homestay Registration
            </h2>

            <p className="text-slate-600 mb-6">
                Section 1 : Basic Information
            </p>

            <div>

                <label className="block text-xs font-bold text-slate-500 mb-1">
                    Name of Homestay
                </label>

                <input
                    type="text"
                    name="homestay_name"
                    value={formData.homestay_name}
                    onChange={handleChange}
                    className="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-orange-500"
                    placeholder="e.g. Sea View Homestay"
                    required
                />

            </div>

            <div>

                <label className="block text-xs font-bold text-slate-500 mb-1">
                    Name of Homestay Owner
                </label>

                <input
                    type="text"
                    name="owner_name"
                    value={formData.owner_name}
                    onChange={handleChange}
                    className="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-orange-500"
                    placeholder="e.g. Ramesh Patil"
                    required
                />

            </div>

            <div>

                <label className="block text-xs font-bold text-slate-500 mb-1">
                    Phone Number
                </label>

                <input
                    type="text"
                    name="phone_number"
                    value={formData.phone_number}
                    onChange={handleChange}
                    className="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-orange-500"
                    placeholder="e.g. 9876543210"
                    required
                />

            </div>

            <div>

                <label className="block text-xs font-bold text-slate-500 mb-1">
                    Homestay Situated In
                </label>

                <input
                    type="text"
                    name="situated_in"
                    value={formData.situated_in}
                    onChange={handleChange}
                    className="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-orange-500"
                    placeholder="e.g. Near Murud Beach"
                    required
                />

            </div>

            <div>

                <label className="block text-xs font-bold text-slate-500 mb-1">
                    Village / Town / City Name
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
                    Taluka Name
                </label>

                <input
                    type="text"
                    name="taluka_name"
                    value={formData.taluka_name}
                    onChange={handleChange}
                    className="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-orange-500"
                    placeholder="e.g. Dapoli"
                    required
                />

            </div>

            <div>

                <label className="block text-xs font-bold text-slate-500 mb-1">
                    District Name
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

    <label className="block text-xs font-bold text-slate-500 mb-1">
        Do you live on the Homestay premises?
    </label>

    <select
        name="live_on_premises"
        value={formData.live_on_premises}
        onChange={handleChange}
        className="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-orange-500"
        required
    >
        <option value="">Select</option>
        <option>Yes</option>
        <option>No</option>
    </select>

</div>

<div>

    <label className="block text-xs font-bold text-slate-500 mb-1">
        What type of Homestay do you have?
    </label>

    <select
        name="homestay_type"
        value={formData.homestay_type}
        onChange={handleChange}
        className="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-orange-500"
        required
    >
        <option value="">Select</option>
        <option>Private Rooms</option>
        <option>Entire House</option>
        <option>Farm Stay</option>
        <option>Beach Stay</option>
        <option>Other</option>
    </select>

</div>

<div>

    <label className="block text-xs font-bold text-slate-500 mb-1">
        What type of Homestay Unit do you have?
    </label>

    <input
        type="text"
        name="homestay_unit_type"
        value={formData.homestay_unit_type}
        onChange={handleChange}
        placeholder="e.g. 2 BHK"
        className="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-orange-500"
        required
    />

</div>

<div>

    <label className="block text-xs font-bold text-slate-500 mb-1">
        Can the Homestay be discovered on Google Maps?
    </label>

    <select
        name="google_maps_discoverable"
        value={formData.google_maps_discoverable}
        onChange={handleChange}
        className="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-orange-500"
        required
    >
        <option value="">Select</option>
        <option>Yes</option>
        <option>No</option>
    </select>

</div>

<div>

    <label className="block text-xs font-bold text-slate-500 mb-1">
        Upload Photo of the Homestay
    </label>

    <input
        type="file"
        className="w-full text-sm"
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
        placeholder="https://maps.google.com/..."
        className="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-orange-500"
    />

</div>

<div>

    <label className="block text-xs font-bold text-slate-500 mb-1">
        Are you registered with MTDC?
    </label>

    <select
        name="mtdc_registered"
        value={formData.mtdc_registered}
        onChange={handleChange}
        className="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-orange-500"
        required
    >
        <option value="">Select</option>
        <option>Yes</option>
        <option>No</option>
    </select>

</div>

<p className="text-slate-600 mb-6">
    Section 2 : Homestay Facilities & Services
</p>

<div>

    <label className="block text-xs font-bold text-slate-500 mb-1">
        How can tourists book your homestay?
    </label>

    <select
        name="booking_method"
        value={formData.booking_method}
        onChange={handleChange}
        className="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-orange-500"
        required
    >
        <option value="">Select</option>
        <option>Phone Call</option>
        <option>WhatsApp</option>
        <option>Online</option>
        <option>Walk-in</option>
    </select>

</div>

<div>

    <label className="block text-xs font-bold text-slate-500 mb-1">
        Booking App Name
    </label>

    <input
        type="text"
        name="booking_app_name"
        value={formData.booking_app_name}
        onChange={handleChange}
        placeholder="e.g. Airbnb"
        className="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-orange-500"
    />

</div>

<div>

    <label className="block text-xs font-bold text-slate-500 mb-1">
        Is your homestay listed on Booking.com / Airbnb?
    </label>

    <select
        name="listed_on_booking_platform"
        value={formData.listed_on_booking_platform}
        onChange={handleChange}
        className="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-orange-500"
    >
        <option value="">Select</option>
        <option>Yes</option>
        <option>No</option>
    </select>

</div>

<div>

    <label className="block text-xs font-bold text-slate-500 mb-1">
        Upload Price List
    </label>

    <input
        type="file"
        className="w-full text-sm"
    />

</div>

<div>

    <label className="block text-xs font-bold text-slate-500 mb-1">
        Which of the following facilities and services are provided by your homestay?
    </label>

    <textarea
        name="facilities_services"
        value={formData.facilities_services}
        onChange={handleChange}
        rows={4}
        placeholder="e.g. WiFi, Parking, Hot Water, Air Conditioning..."
        className="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-orange-500"
        required
    />

</div>

<div>

    <label className="block text-xs font-bold text-slate-500 mb-1">
        Do you accept digital payments?
    </label>

    <select
        name="digital_payment"
        value={formData.digital_payment}
        onChange={handleChange}
        className="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-orange-500"
        required
    >
        <option value="">Select</option>
        <option>Yes</option>
        <option>No</option>
    </select>

</div>

<div>

    <label className="block text-xs font-bold text-slate-500 mb-1">
        Cancellation Policy
    </label>

    <textarea
        name="cancellation_policy"
        value={formData.cancellation_policy}
        onChange={handleChange}
        rows={3}
        placeholder="Describe your cancellation policy..."
        className="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-orange-500"
    />

</div>

<div>

    <label className="block text-xs font-bold text-slate-500 mb-1">
        Do you provide Vegetarian Meals?
    </label>

    <select
        name="vegetarian_meals"
        value={formData.vegetarian_meals}
        onChange={handleChange}
        className="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-orange-500"
        required
    >
        <option value="">Select</option>
        <option>Yes</option>
        <option>No</option>
    </select>

</div>

<div>

    <label className="block text-xs font-bold text-slate-500 mb-1">
        Do you provide Non-Vegetarian Meals?
    </label>

    <select
        name="non_vegetarian_meals"
        value={formData.non_vegetarian_meals}
        onChange={handleChange}
        className="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-orange-500"
        required
    >
        <option value="">Select</option>
        <option>Yes</option>
        <option>No</option>
    </select>

</div>

<div>

    <label className="block text-xs font-bold text-slate-500 mb-1">
        What are the major tourist attractions / places near your homestay?
    </label>

    <textarea
        name="nearby_attractions"
        value={formData.nearby_attractions}
        onChange={handleChange}
        rows={3}
        placeholder="e.g. Murud Beach, Keshavraj Temple, Suvarnadurg Fort"
        className="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-orange-500"
        required
    />

</div>

<div>

    <label className="block text-xs font-bold text-slate-500 mb-1">
        Do you provide any guidance to reach these places?
    </label>

    <select
        name="guidance_available"
        value={formData.guidance_available}
        onChange={handleChange}
        className="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-orange-500"
        required
    >
        <option value="">Select</option>
        <option>Yes</option>
        <option>No</option>
    </select>

</div>

<div>

    <label className="block text-xs font-bold text-slate-500 mb-1">
        Do you have guides available to assist tourists?
    </label>

    <select
        name="guides_available"
        value={formData.guides_available}
        onChange={handleChange}
        className="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-orange-500"
        required
    >
        <option value="">Select</option>
        <option>Yes</option>
        <option>No</option>
    </select>

</div>

<div>

    <label className="block text-xs font-bold text-slate-500 mb-1">
        Local experiences offered to tourists
    </label>

    <textarea
        name="local_experiences"
        value={formData.local_experiences}
        onChange={handleChange}
        rows={3}
        placeholder="e.g. Village Tour, Nature Walk, Farming Experience, Cultural Programs"
        className="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-orange-500"
    />

</div>

<div>

    <label className="block text-xs font-bold text-slate-500 mb-1">
        Social Media Link
    </label>

    <input
        type="text"
        name="social_media_link"
        value={formData.social_media_link}
        onChange={handleChange}
        placeholder="Paste link or type 'No'"
        className="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-orange-500"
        required
    />

</div>

<div>

    <label className="block text-xs font-bold text-slate-500 mb-1">
        Upload Homestay Photos
    </label>

    <input
        type="file"
        multiple
        className="w-full text-sm"
    />

</div>



            <button
                type="submit"
                className="w-full py-3 bg-orange-600 text-white rounded-lg"
            >
                Submit Homestay
            </button>

        </form>

    );

}