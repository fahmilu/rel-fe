import React, { useState } from "react";
import { useForm } from "react-hook-form";

const ContactForm = ({ t }) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        watch
    } = useForm();

    const helpOptions = [
        { value: "rent", label: t("contact.form.rent") },
        { value: "tech consult", label: t("contact.form.consult") },
        { value: "other", label: t("contact.form.other") }
    ];

    const onSubmit = async (data) => {
        setIsSubmitting(true);
        try {
            // Simulate API call - replace with actual API endpoint
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            console.log("Form data:", data);
            setSubmitSuccess(true);
            reset();
            
            // Reset success message after 5 seconds
            setTimeout(() => setSubmitSuccess(false), 5000);
        } catch (error) {
            console.error("Error submitting form:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (submitSuccess) {
        return (
            <div className="max-w-md mx-auto text-center p-8 bg-green-50 rounded-lg border border-green-200">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                    <div className="w-8 h-8 text-green-600">✓</div>
                </div>
                <h3 className="text-lg font-semibold text-green-800 mb-2">
                    Message Sent Successfully!
                </h3>
                <p className="text-green-600">
                    Thank you for contacting us. We'll get back to you soon.
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name Field */}
        <div>
            <input
                type="text"
                id="name"
                {...register("name", {
                    required: t("contact.form.error"),
                })}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                    errors.name ? "border-red-300 bg-red-50" : "border-gray-300"
                }`}
                placeholder={t("contact.form.name")}
            />
            {errors.name && (
                <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
            )}
        </div>

        {/* Company Field */}
        <div>
            <input
                type="text"
                id="company"
                {...register("company")}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                placeholder={t("contact.form.company")}
            />
        </div>

        {/* Phone Field */}
        <div>
            <input
                type="tel"
                id="phone"
                {...register("phone", {
                    required: t("contact.form.error"),
                    pattern: {
                        value: /^[\+]?[1-9][\d]{0,15}$/,
                        message: t("contact.form.error")
                    }
                })}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                    errors.phone ? "border-red-300 bg-red-50" : "border-gray-300"
                }`}
                placeholder={t("contact.form.phone")}
            />
            {errors.phone && (
                <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
            )}
        </div>

        {/* Email Field */}
        <div>
            <input
                type="email"
                id="email"
                {...register("email", {
                    required: t("contact.form.error"),
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: t("contact.form.error_email")
                    }
                })}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                    errors.email ? "border-red-300 bg-red-50" : "border-gray-300"
                }`}
                placeholder={t("contact.form.email")}
            />
            {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
            )}
        </div>

        {/* Help Type Field */}
        <div>
            <select
                id="helpType"
                {...register("helpType", {
                    required: t("contact.form.error")
                })}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                    errors.helpType ? "border-red-300 bg-red-50" : "border-gray-300"
                }`}
            >
                <option value="">{t("contact.form.what")}</option>
                {helpOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            {errors.helpType && (
                <p className="mt-1 text-sm text-red-600">{errors.helpType.message}</p>
            )}
        </div>

        {/* Message Field */}
        <div>
            <textarea
                id="message"
                rows={5}
                {...register("message", {
                    required: t("contact.form.error"),
                    minLength: {
                        value: 10,
                        message: "Message must be at least 10 characters"
                    },
                    maxLength: {
                        value: 1000,
                        message: "Message must not exceed 1000 characters"
                    }
                })}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none ${
                    errors.message ? "border-red-300 bg-red-50" : "border-gray-300"
                }`}
                placeholder="Tell us how we can help you..."
            />
            {errors.message && (
                <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
            )}
            <div className="mt-1 text-right">
                <span className={`text-xs ${
                    watch("message")?.length > 900 ? "text-red-500" : "text-gray-500"
                }`}>
                    {watch("message")?.length || 0}/1000
                </span>
            </div>
        </div>

        {/* Submit Button */}
        <div className="pt-4">
            <button
                type="submit"
                disabled={isSubmitting}
                className={`btn btn__primary ${
                    isSubmitting && "bg-gray-400 cursor-not-allowed"}`}
            >
                {isSubmitting ? (
                    <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                    </>
                ) : (
                    t("contact.form.submit")
                )}
            </button>
        </div>
    </form>
    );
};

export default ContactForm;