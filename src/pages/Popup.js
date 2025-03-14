import { Link } from "react-router-dom";

export default function TripConsultationPopup({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-2xl p-6 shadow-xl max-w-sm text-center relative animate-fade-in z-50">
                <button
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
                    onClick={onClose}
                >
                    ✖
                </button>
                <h2 className="text-xl font-bold text-gray-800 mt-4">
                    Book Your Free Trip Consultation Today!
                </h2>
                <p className="text-gray-600 mt-2 mb-7">
                    Plan your dream trip with expert guidance. Don’t miss out!
                </p>
                <Link
                    className=" px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                    to={'/contactus'}
                >
                    Book Now
                </Link>
            </div>
        </div>
    );
}
