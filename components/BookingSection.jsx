"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, MessageCircle, ArrowRight, ArrowLeft, User, Phone, Mail } from "lucide-react";

const SERVICES = [
  {
    id: "exam",
    name: "Comprehensive Eye Exam",
    duration: "30 min",
    cost: "Covered by most plans",
    desc: "Digital vision test, eye health check, and 3D retinal scan.",
  },
  {
    id: "contact",
    name: "Contact Lens Fitting",
    duration: "40 min",
    cost: "Trial lenses included",
    desc: "Precision corneal mapping and trial fitting for daily or toric lenses.",
  },
  {
    id: "pediatric",
    name: "Pediatric Eye Exam",
    duration: "30 min",
    cost: "Child-friendly protocol",
    desc: "Gentle eye examination and myopia control screening for children.",
  },
  {
    id: "styling",
    name: "Personal Frame Styling",
    duration: "25 min",
    cost: "Complimentary session",
    desc: "1-on-1 frame curation and face-fit recommendations with our stylists.",
  },
  {
    id: "renewal",
    name: "Same-Day Lens Replacement",
    duration: "15 min",
    cost: "Ready in 3 hours",
    desc: "Bring your favorite frames for fast same-day lens fitting and polishing.",
  },
];

const TIME_SLOTS = [
  "09:30 AM",
  "11:00 AM",
  "12:30 PM",
  "02:00 PM",
  "03:30 PM",
  "05:00 PM",
  "06:15 PM",
];

const WA_NUMBER = "15550123456";

export default function BookingSection() {
  const [step, setStep] = useState(0);
  const [selectedService, setSelectedService] = useState(SERVICES[0].id);
  const [selectedDate, setSelectedDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split("T")[0];
  });
  const [selectedTime, setSelectedTime] = useState(TIME_SLOTS[0]);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    waNotify: true,
  });
  const [error, setError] = useState("");
  const [isBooked, setIsBooked] = useState(false);

  const serviceObj = SERVICES.find((s) => s.id === selectedService) || SERVICES[0];

  const waMessage = encodeURIComponent(
    `Hi Lumina Optical! I'd like to confirm my appointment:\n\n` +
      `• Service: ${serviceObj.name}\n` +
      `• Date: ${selectedDate}\n` +
      `• Time: ${selectedTime}\n` +
      `• Name: ${formData.name || "Guest"}\n` +
      `• Phone: ${formData.phone || "Not specified"}`
  );
  const waUrl = `https://wa.me/${WA_NUMBER}?text=${waMessage}`;

  const handleNext = () => {
    if (step === 0 && !selectedService) {
      setError("Please select a service.");
      return;
    }
    if (step === 1 && (!selectedDate || !selectedTime)) {
      setError("Please select both a date and time slot.");
      return;
    }
    setError("");
    setStep((s) => Math.min(s + 1, 2));
  };

  const handleBack = () => {
    setError("");
    setStep((s) => Math.max(s - 1, 0));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setError("Please enter your name.");
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 6) {
      setError("Please enter a valid telephone number.");
      return;
    }
    setError("");
    setIsBooked(true);
  };

  const handleReset = () => {
    setStep(0);
    setIsBooked(false);
    setFormData({ name: "", phone: "", email: "", waNotify: true });
  };

  return (
    <section id="book" className="py-24 md:py-32 relative bg-[#f8faf9] dark:bg-[#090b0a] transition-colors duration-250">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-neutral-900 dark:text-white font-sans tracking-tight mb-4">
            Reserve your 20-minute{" "}
            <span className="font-serif italic text-emerald-600 dark:text-emerald-400">eye test.</span>
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 font-normal leading-relaxed">
            No credit card needed. Instant calendar hold with optional WhatsApp confirmation.
          </p>
        </div>

        {/* Booking Card */}
        <div className="bg-white dark:bg-[#0c120f] border border-neutral-200 dark:border-white/10 rounded-3xl p-6 sm:p-10 shadow-xl shadow-black/5 dark:shadow-2xl relative overflow-hidden transition-colors">
          {/* Progress Indicator */}
          {!isBooked && (
            <div className="mb-8">
              <div className="flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400 mb-3">
                <span className="font-medium text-neutral-900 dark:text-white">
                  Step {step + 1} of 3 —{" "}
                  {step === 0
                    ? "Choose Service"
                    : step === 1
                    ? "Date & Time"
                    : "Patient Details"}
                </span>
                <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-mono font-medium">Free Cancellations</span>
              </div>
              <div className="w-full h-1 bg-neutral-200 dark:bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-emerald-500"
                  initial={false}
                  animate={{ width: `${((step + 1) / 3) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>
          )}

          {error && (
            <div className="mb-6 p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-600 dark:text-rose-300 text-xs">
              {error}
            </div>
          )}

          {/* Step 1: Select Service */}
          <AnimatePresence mode="wait">
            {!isBooked && step === 0 && (
              <motion.div
                key="step-0"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="space-y-3"
              >
                <div className="grid grid-cols-1 gap-3">
                  {SERVICES.map((s) => {
                    const selected = selectedService === s.id;
                    return (
                      <div
                        key={s.id}
                        onClick={() => setSelectedService(s.id)}
                        className={`p-4 sm:p-5 rounded-2xl border cursor-pointer transition-all ${
                          selected
                            ? "bg-[#ecfdf5] dark:bg-emerald-500/10 border-emerald-500 dark:border-emerald-400 shadow-md"
                            : "bg-neutral-50 dark:bg-white/[0.02] border-neutral-200 dark:border-white/5 hover:border-neutral-300 dark:hover:border-white/15"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="text-sm sm:text-base font-medium text-neutral-900 dark:text-white">
                            {s.name}
                          </h4>
                          <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 font-mono">
                            {s.cost}
                          </span>
                        </div>
                        <p className="text-xs text-neutral-600 dark:text-neutral-400 mb-2">{s.desc}</p>
                        <span className="inline-block text-[10px] uppercase tracking-wider text-neutral-500 font-mono">
                          Duration: {s.duration}
                        </span>
                      </div>
                    );
                  })}
                </div>

                <div className="pt-6 flex justify-end">
                  <button
                    onClick={handleNext}
                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500 text-white dark:text-[#090b0a] text-xs font-bold uppercase tracking-wider hover:bg-emerald-600 dark:hover:bg-emerald-400 transition-all shadow-sm"
                  >
                    <span>Continue to Date &amp; Time</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 2: Date & Time Picker */}
            {!isBooked && step === 1 && (
              <motion.div
                key="step-1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="space-y-6"
              >
                <div>
                  <label className="block text-xs uppercase tracking-wider text-neutral-600 dark:text-neutral-400 font-semibold mb-2">
                    Select Appointment Date
                  </label>
                  <input
                    type="date"
                    min={new Date().toISOString().split("T")[0]}
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/10 rounded-2xl px-4 py-3 text-sm text-neutral-900 dark:text-white focus:outline-none focus:border-emerald-500 dark:focus:border-emerald-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-neutral-600 dark:text-neutral-400 font-semibold mb-3">
                    Available Time Slots
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {TIME_SLOTS.map((slot) => {
                      const isSelected = selectedTime === slot;
                      return (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setSelectedTime(slot)}
                          className={`py-3 px-2 rounded-xl text-xs font-medium border text-center transition-all ${
                            isSelected
                              ? "bg-emerald-500 text-white dark:text-[#090b0a] border-emerald-500 font-bold shadow-md"
                              : "bg-neutral-100 dark:bg-white/5 text-neutral-800 dark:text-neutral-300 border-neutral-200 dark:border-white/5 hover:border-neutral-300 dark:hover:border-white/20"
                          }`}
                        >
                          {slot}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="pt-6 flex items-center justify-between border-t border-neutral-200 dark:border-white/5">
                  <button
                    onClick={handleBack}
                    className="flex items-center gap-2 text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back</span>
                  </button>
                  <button
                    onClick={handleNext}
                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500 text-white dark:text-[#090b0a] text-xs font-bold uppercase tracking-wider hover:bg-emerald-600 dark:hover:bg-emerald-400 transition-all shadow-sm"
                  >
                    <span>Proceed to Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Patient Information Form */}
            {!isBooked && step === 2 && (
              <motion.form
                key="step-2"
                onSubmit={handleSubmit}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="space-y-4"
              >
                <div>
                  <label className="block text-xs uppercase tracking-wider text-neutral-600 dark:text-neutral-400 font-semibold mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-neutral-400 dark:text-neutral-500 absolute left-4 top-3.5" />
                    <input
                      type="text"
                      placeholder="e.g. Julian Hayes"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/10 rounded-2xl pl-11 pr-4 py-3 text-sm text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:border-emerald-500 dark:focus:border-emerald-400 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-600 dark:text-neutral-400 font-semibold mb-2">
                      Mobile Number *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-neutral-400 dark:text-neutral-500 absolute left-4 top-3.5" />
                      <input
                        type="tel"
                        placeholder="+1 (555) 019-2834"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/10 rounded-2xl pl-11 pr-4 py-3 text-sm text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:border-emerald-500 dark:focus:border-emerald-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-600 dark:text-neutral-400 font-semibold mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-neutral-400 dark:text-neutral-500 absolute left-4 top-3.5" />
                      <input
                        type="email"
                        placeholder="julian@example.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/10 rounded-2xl pl-11 pr-4 py-3 text-sm text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:border-emerald-500 dark:focus:border-emerald-400 transition-colors"
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <label className="flex items-center gap-3 cursor-pointer text-xs text-neutral-700 dark:text-neutral-300">
                    <input
                      type="checkbox"
                      checked={formData.waNotify}
                      onChange={(e) =>
                        setFormData({ ...formData, waNotify: e.target.checked })
                      }
                      className="w-4 h-4 rounded bg-neutral-100 dark:bg-white/10 border-neutral-300 dark:border-white/20 text-emerald-500 focus:ring-0"
                    />
                    <span>Receive instant booking confirmation on WhatsApp</span>
                  </label>
                </div>

                <div className="pt-6 flex items-center justify-between border-t border-neutral-200 dark:border-white/5">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="flex items-center gap-2 text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back</span>
                  </button>
                  <button
                    type="submit"
                    className="flex items-center gap-2 px-7 py-3.5 rounded-full bg-emerald-500 text-white dark:text-[#090b0a] text-xs font-bold uppercase tracking-wider hover:bg-emerald-600 dark:hover:bg-emerald-400 transition-all shadow-md shadow-emerald-500/20"
                  >
                    <span>Confirm Reservation</span>
                    <CheckCircle2 className="w-4 h-4" />
                  </button>
                </div>
              </motion.form>
            )}

            {/* Step 4: Booking Confirmed Success Card */}
            {isBooked && (
              <motion.div
                key="step-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-6"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto mb-5 text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-light text-neutral-900 dark:text-white mb-2">
                  Slot Reserved, {formData.name.split(" ")[0]}!
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-md mx-auto mb-6">
                  We look forward to seeing you at our boutique. An appointment pass has been
                  pencilled in for{" "}
                  <span className="text-neutral-900 dark:text-white font-medium">{selectedDate}</span> at{" "}
                  <span className="text-neutral-900 dark:text-white font-medium">{selectedTime}</span>.
                </p>

                {/* Booking Summary Box */}
                <div className="bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/5 rounded-2xl p-4 max-w-sm mx-auto mb-8 text-left text-xs space-y-1.5">
                  <div className="flex justify-between text-neutral-600 dark:text-neutral-400">
                    <span>Service:</span>
                    <span className="text-neutral-900 dark:text-white font-medium">{serviceObj.name}</span>
                  </div>
                  <div className="flex justify-between text-neutral-600 dark:text-neutral-400">
                    <span>Date:</span>
                    <span className="text-neutral-900 dark:text-white font-medium">{selectedDate}</span>
                  </div>
                  <div className="flex justify-between text-neutral-600 dark:text-neutral-400">
                    <span>Time:</span>
                    <span className="text-neutral-900 dark:text-white font-medium">{selectedTime}</span>
                  </div>
                  <div className="flex justify-between text-neutral-600 dark:text-neutral-400">
                    <span>Location:</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-medium">24 Kingsley Road, Westfield</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-center gap-3">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-600 dark:hover:bg-emerald-400 text-white dark:text-[#090b0a] text-xs font-bold uppercase tracking-wider transition-all shadow-md"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send to WhatsApp</span>
                  </a>

                  <button
                    onClick={handleReset}
                    className="inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-800 dark:bg-white/5 dark:hover:bg-white/10 dark:text-white text-xs font-medium tracking-wide transition-all border border-neutral-200 dark:border-white/10"
                  >
                    Book Another Slot
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
