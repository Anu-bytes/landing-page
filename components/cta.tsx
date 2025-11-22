"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { ArrowRight, Calendar, Clock, Mail, Phone, User, Loader2 } from "lucide-react"
import emailjs from "@emailjs/browser"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

export default function CTA() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{ type: "success" | "error" | null; message: string }>({
    type: null,
    message: "",
  })

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    preferredDate: "",
    preferredTime: "",
  })

  useEffect(() => {
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    if (publicKey) {
      emailjs.init(publicKey)
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: "" })

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || ""
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || ""
      const recipientEmail = process.env.NEXT_PUBLIC_EMAIL || ""

      if (!serviceId || !templateId || !recipientEmail) {
        throw new Error("EmailJS configuration is missing")
      }

      const templateParams = {
        title: "New Contact Form Submission - Anubyte",
        name: formData.name,
        email: recipientEmail,
        message: `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}\nPreferred Date: ${formData.preferredDate}\nPreferred Time: ${formData.preferredTime}`,
      }

      await emailjs.send(serviceId, templateId, templateParams)

      setSubmitStatus({
        type: "success",
        message: "Thank you! We've received your message and will get back to you soon.",
      })

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        preferredDate: "",
        preferredTime: "",
      })

      // Close dialog after 2 seconds
      setTimeout(() => {
        setIsOpen(false)
        setSubmitStatus({ type: null, message: "" })
      }, 2000)
    } catch (error) {
      console.error("EmailJS error:", error)
      setSubmitStatus({
        type: "error",
        message: "Sorry, there was an error sending your message. Please try again or contact us directly.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden section-divider" id="contact">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left TEXT side */}
          <div className="animate-slide-in-up">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-8 leading-tight">
              Ready to Build Something <span className="text-primary">Extraordinary</span>?
            </h2>

            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              Let's partner on your next ambitious project. Our team is ready to bring your vision to life.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setIsOpen(true)}
                className="px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1 transition-all font-bold flex items-center justify-center gap-2 group"
              >
                Schedule Consultation
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="px-8 py-4 border-2 border-primary text-foreground rounded-lg hover:bg-primary/5 transition-all font-bold">
                Get in Touch
              </button>
            </div>
          </div>

          {/* Right gradient blob */}
          <div className="relative hidden lg:block animate-scale-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative w-full aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-secondary/10 to-transparent rounded-3xl" />
              <div className="absolute top-0 left-0 w-80 h-80 bg-primary/15 rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary/15 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </div>

      {/* 🔥 MODAL with Framer Motion animations */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent open={isOpen} className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">Schedule a Consultation</DialogTitle>

            <DialogDescription>
              Fill out the form below and we'll get back to you to schedule your consultation.
            </DialogDescription>
          </DialogHeader>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-6 mt-4">
            {/* Status Messages */}
            {submitStatus.type && (
              <div
                className={`p-4 rounded-lg ${
                  submitStatus.type === "success"
                    ? "bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-200 border border-green-200 dark:border-green-800"
                    : "bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-200 border border-red-200 dark:border-red-800"
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            <div className="space-y-4">
              {/* FULL NAME */}
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium flex items-center gap-2">
                  <User size={16} />
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="John Doe"
                />
              </div>

              {/* EMAIL */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium flex items-center gap-2">
                  <Mail size={16} />
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="john@example.com"
                />
              </div>

              {/* PHONE */}
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium flex items-center gap-2">
                  <Phone size={16} />
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              {/* DATE + TIME */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* DATE */}
                <div className="space-y-2">
                  <label htmlFor="preferredDate" className="text-sm font-medium flex items-center gap-2">
                    <Calendar size={16} />
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    required
                    value={formData.preferredDate}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                {/* TIME */}
                <div className="space-y-2">
                  <label htmlFor="preferredTime" className="text-sm font-medium flex items-center gap-2">
                    <Clock size={16} />
                    Preferred Time *
                  </label>
                  <select
                    id="preferredTime"
                    name="preferredTime"
                    required
                    value={formData.preferredTime}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Select time</option>
                    <option value="09:00">9:00 AM</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="12:00">12:00 PM</option>
                    <option value="13:00">1:00 PM</option>
                    <option value="14:00">2:00 PM</option>
                    <option value="15:00">3:00 PM</option>
                    <option value="16:00">4:00 PM</option>
                    <option value="17:00">5:00 PM</option>
                  </select>
                </div>
              </div>

              {/* MESSAGE */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
            </div>

            {/* FOOTER BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:shadow-lg hover:shadow-primary/20 transition-all font-bold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Schedule Consultation
                    <ArrowRight size={18} />
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                disabled={isSubmitting}
                className="px-6 py-3 border-2 border-border text-foreground rounded-lg hover:bg-accent transition-all font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Cancel
              </button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  )
}
