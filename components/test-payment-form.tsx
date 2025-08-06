'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'

interface TestPaymentFormProps {
  amount?: number
  onSuccess?: (data: any) => void
}

export default function TestPaymentForm({ amount = 100, onSuccess }: TestPaymentFormProps) {
  const [isProcessing, setIsProcessing] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      onSuccess?.({ amount, status: 'success' })
    } catch (error) {
      console.error('Payment failed:', error)
    } finally {
      setIsProcessing(false)
    }
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-[#2E3192] mb-4">Test Payment Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Amount: ${amount}
          </label>
        </div>
        <Button
          type="submit"
          disabled={isProcessing}
          className="w-full bg-[#2E3192] text-white py-2 rounded-lg"
        >
          {isProcessing ? 'Processing...' : 'Pay Now'}
        </Button>
      </form>
    </div>
  )
} 