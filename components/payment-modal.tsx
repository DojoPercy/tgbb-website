'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import SimplePaymentForm from '@/components/simple-payment-form'
import { CreditCard, X } from 'lucide-react'

interface PaymentModalProps {
  membershipType: 'basic' | 'premium'
  amount: number
  trigger?: React.ReactNode
}

export default function PaymentModal({ membershipType, amount, trigger }: PaymentModalProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleSuccess = (data: any) => {
    console.log('Payment successful:', data)
    setIsOpen(false)
    // You can add additional success handling here
  }

  const handleError = (error: any) => {
    console.error('Payment failed:', error)
    // You can add additional error handling here
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button className="bg-gradient-to-r from-[#2E3192] to-[#1e2270] hover:from-[#1e2270] hover:to-[#2E3192] text-white px-6 py-3 rounded-full font-bold shadow-lg">
            <CreditCard className="mr-2 h-5 w-5" />
            Pay Now - ${amount}
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-[#2E3192]">
            Complete Your {membershipType === 'premium' ? 'Premium' : 'Basic'} Membership
          </DialogTitle>
          <DialogDescription className="text-lg">
            Join The Governance & Business Boardroom and unlock exclusive benefits
          </DialogDescription>
        </DialogHeader>
        
        <div className="mt-6">
          <SimplePaymentForm 
            amount={amount}
            currency="USD"
            onSuccess={handleSuccess}
            onError={handleError}
          />
        </div>
      </DialogContent>
    </Dialog>
  )
} 