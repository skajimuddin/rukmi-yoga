import React, { useEffect } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

interface ConsultationPopupProps {
  isOpen: boolean
  onClose: () => void
}

const ConsultationPopup: React.FC<ConsultationPopupProps> = ({
  isOpen,
  onClose,
}) => {
  // Add effect to prevent scrolling when popup is open
  useEffect(() => {
    if (isOpen) {
      // Prevent scrolling on the body when popup is open
      document.body.style.overflow = "hidden";
    }

    // Clean up function to restore scrolling when popup closes
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
      )}
    >
      <div className={cn("bg-white p-6 rounded-lg shadow-lg w-full max-w-md")}>
        <h2 className="text-2xl font-bold mb-4">Inquiry Form</h2>
        <p className="mb-4 text-gray-600">
          Complete this form to inquire about our yoga classes and services.
        </p>
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="full-name">Full Name</Label>
            <Input
              id="full-name"
              placeholder="Enter your full name"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email address"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="Enter your phone number"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Tell us about your yoga experience and what you're looking for"
              rows={4}
              required
            />
          </div>
          <div className="flex justify-end space-x-2">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" className="hover:bg-secondary">
              Submit Inquiry
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ConsultationPopup
