import React from "react"
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
  if (!isOpen) return null

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
      )}
    >
      <div className={cn("bg-white p-6 rounded-lg shadow-lg w-full max-w-md")}>
        <h2 className="text-2xl font-bold mb-4">Request Distribution</h2>
        <p className="mb-4 text-gray-600">
          Complete this form to request our products for your business.
        </p>
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="full-name">Business Name</Label>
            <Input
              id="full-name"
              placeholder="Enter your business name"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Business Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your business email"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Contact Number</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="Enter your contact number"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Products Interested In</Label>
            <Textarea
              id="message"
              placeholder="List which products you're interested in distributing"
              rows={4}
              required
            />
          </div>
          <div className="flex justify-end space-x-2">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" className="hover:bg-secondary">
              Submit Request
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ConsultationPopup
