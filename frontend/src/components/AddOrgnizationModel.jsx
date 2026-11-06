import React from "react";
import { X, Building2 } from "lucide-react";

const AddOrganizationModal = ({ isOpen, onClose }) => {

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">

      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden">

        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">

          <div className="flex items-center gap-3">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
              <Building2 size={24} />
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Add New Organization
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                Register a new organization on AccessFlow.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-gray-400 hover:bg-gray-100 hover:text-gray-700 transition"
          >
            <X size={22} />
          </button>

        </div>

        {/* Form */}
        <form className="p-6">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            {/* Organization Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Organization Name *
              </label>

              <input
                type="text"
                placeholder="Enter organization name"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
              />
            </div>

            {/* Organization Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Organization Email *
              </label>

              <input
                type="email"
                placeholder="organization@example.com"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
              />
            </div>

            {/* Admin Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Admin Name *
              </label>

              <input
                type="text"
                placeholder="Enter admin name"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
              />
            </div>

            {/* Admin Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Admin Email *
              </label>

              <input
                type="email"
                placeholder="admin@example.com"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
              />
            </div>

            {/* Contact Number */}
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Contact Number
              </label>

              <input
                type="tel"
                placeholder="Enter contact number"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
              />
            </div>

            {/* Description */}
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Description
              </label>

              <textarea
                rows="3"
                placeholder="Write something about this organization..."
                className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition resize-none"
              />
            </div>

          </div>

          {/* Footer */}
          <div className="flex justify-end gap-3 mt-7 pt-5 border-t border-gray-100">

            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl border border-gray-200 text-gray-600 font-medium hover:bg-gray-50 transition"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
            >
              Create Organization
            </button>

          </div>

        </form>

      </div>
    </div>
  );
};

export default AddOrganizationModal;