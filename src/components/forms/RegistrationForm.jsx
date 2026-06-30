import React, { useState } from "react";

import LocationForm from "./LocationForm";
import HomestayForm from "./HomestayForm";

export default function RegistrationForm({ onSuccess }) {

    const [formType, setFormType] = useState("location");

    return (

        <div className="space-y-6">

            <div>

                <label className="block text-xs font-bold text-slate-500 mb-1">
                    Category Profile Type
                </label>

                <select
                    value={formType}
                    onChange={(e) => setFormType(e.target.value)}
                    className="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-orange-500"
                >

                    <option value="location">
                        Tourist Destination / Natural Spot
                    </option>

                    <option value="homestay">
                        Homestay Profile
                    </option>

                    <option value="eco">
                        Waste Management Unit
                    </option>

                </select>

            </div>

            {formType === "location" && (

                <LocationForm onSuccess={onSuccess} />

            )}

            {formType === "homestay" && (

                <HomestayForm onSuccess={onSuccess} />

            )}

            {formType === "eco" && (

                <div className="bg-blue-50 border rounded-lg p-8">

                    <h2 className="text-2xl font-bold mb-2">
                        Waste Management Registration
                    </h2>

                    <p className="text-slate-600">
                        This module will be implemented after the Homestay module.
                    </p>

                </div>

            )}

        </div>

    );

}