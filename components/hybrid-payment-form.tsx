'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { CreditCard, Lock, Shield, CheckCircle, Loader2, AlertCircle, DollarSign, Globe } from 'lucide-react'
import { toast } from 'sonner'
import { 
  initializePaystackTransaction, 
  verifyPaystackTransaction, 
  generateReference,
  PaystackTransaction 
} from '@/lib/paystack'

interface HybridPaymentFormProps {
  amount: number
  membershipType?: 'basic' | 'premium' | 'lifetime' | 'elite' | 'vip' | 'fellow'
  onSuccess?: (data: any) => void
  onError?: (error: any) => void
}

export default function HybridPaymentForm({ 
  amount, 
  membershipType = 'premium',
  onSuccess,
  onError 
}: HybridPaymentFormProps) {
  const router = useRouter()
  const [isProcessing, setIsProcessing] = useState(false)
  const [isInitializing, setIsInitializing] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState<'paystack-ghs' | 'manual-usd'>('paystack-ghs')
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    phone: '',
    agreeToTerms: false
  })

  // Calculate amounts based on membership type
  const getAmounts = () => {
    switch (membershipType) {
      case 'elite':
        return {
          usd: 1000,
          ghs: 12000, // ₵12,000 (approximately $1000 at current rate)
          displayUsd: '$1,000',
          displayGhs: '₵12,000'
        }
      case 'vip':
        return {
          usd: 3000,
          ghs: 36000, // ₵36,000 (approximately $3000 at current rate)
          displayUsd: '$3,000',
          displayGhs: '₵36,000'
        }
      case 'fellow':
        return {
          usd: 5000,
          ghs: 60000, // ₵60,000 (approximately $5000 at current rate)
          displayUsd: '$5,000',
          displayGhs: '₵60,000'
        }
      case 'premium':
        return {
          usd: 500,
          ghs: 6000, // ₵6,000 (approximately $500 at current rate)
          displayUsd: '$500',
          displayGhs: '₵6,000'
        }
      default: // basic
        return {
          usd: 10,
          ghs: 120, // ₵120 (approximately $10 at current rate)
          displayUsd: '$10',
          displayGhs: '₵120'
        }
    }
  }

  const amounts = getAmounts()

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.agreeToTerms) {
      toast.error('Please agree to the terms and conditions')
      return
    }

    if (!formData.email) {
      toast.error('Please enter your email address')
      return
    }

    if (paymentMethod === 'paystack-ghs') {
      // Use Paystack with GHS
      await handlePaystackPayment(amounts.ghs, 'GHS')
    } else {
      // Manual USD payment instructions
      handleManualUSDPayment()
    }
  }

  const handlePaystackPayment = async (amount: number, currency: string) => {
    setIsInitializing(true)
    
    try {
      const reference = generateReference()
      
      const transaction: PaystackTransaction = {
        reference,
        amount: amount,
        email: formData.email,
        currency: currency,
        callback_url: `${window.location.origin}/payment-success?reference=${reference}`,
        metadata: {
          membershipType,
          firstName: formData.firstName,
          lastName: formData.lastName,
          phone: formData.phone,
          customerName: `${formData.firstName} ${formData.lastName}`.trim()
        }
      }

      const response = await initializePaystackTransaction(transaction)
      
      if (response.status && response.data?.authorization_url) {
        window.location.href = response.data.authorization_url
      } else {
        toast.error(response.message || 'Failed to initialize payment')
        onError?.(response.message)
      }
      
    } catch (error) {
      console.error('Payment initialization error:', error)
      toast.error('Failed to initialize payment. Please try again.')
      onError?.(error)
    } finally {
      setIsInitializing(false)
    }
  }

  const handleManualUSDPayment = () => {
    // Show manual payment instructions
    const paymentInfo = `
Payment Instructions for USD ${amounts.displayUsd}:

1. Bank Transfer Details:
   - Bank: [Your Bank Name]
   - Account Name: The Governance & Business Boardroom
   - Account Number: [Your Account Number]
   - Swift Code: [Your Swift Code]
   - Amount: ${amounts.displayUsd}

2. PayPal Payment:
   - PayPal Email: info@tgbboardroom.com
   - Amount: ${amounts.displayUsd}

3. After Payment:
   - Send proof of payment to: info@tgbboardroom.com
   - Include your name: ${formData.firstName} ${formData.lastName}
   - Include your email: ${formData.email}

We will activate your membership within 24 hours of payment confirmation.
    `
    
    // Create a modal or redirect to payment instructions page
    toast.success('Payment instructions sent to your email')
    
    // You can implement a modal here to show payment instructions
    alert(paymentInfo)
  }

  // Check for payment verification on component mount
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const reference = urlParams.get('reference')
    const trxref = urlParams.get('trxref')
    
    if (reference || trxref) {
      const ref = reference || trxref
      if (ref) {
        verifyPayment(ref)
      }
    }
  }, [])

  const verifyPayment = async (reference: string) => {
    setIsProcessing(true)
    
    try {
      const response = await verifyPaystackTransaction(reference)
      
      if (response.status && response.data.status === 'success') {
        toast.success('Payment successful! Welcome to TGBB!')
        
        const paymentData = {
          id: response.data.id,
          reference: response.data.reference,
          amount: response.data.amount / 100,
          currency: response.data.currency,
          status: response.data.status,
          email: response.data.customer.email,
          customerName: `${response.data.customer.first_name} ${response.data.customer.last_name}`,
          paidAt: response.data.paid_at,
          receiptNumber: response.data.receipt_number
        }
        
        onSuccess?.(paymentData)
        
        setTimeout(() => {
          router.push('/payment-success')
        }, 1500)
        
      } else {
        toast.error('Payment verification failed')
        onError?.(response.message)
      }
      
    } catch (error) {
      console.error('Payment verification error:', error)
      toast.error('Failed to verify payment')
      onError?.(error)
    } finally {
      setIsProcessing(false)
    }
  }

  const formatCurrency = (amount: number, currency: string) => {
    const locale = currency === 'USD' ? 'en-US' : 'en-GH'
    const formatter = new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 2
    })
    return formatter.format(amount)
  }

  return (
    <div className="max-w-2xl mx-auto">
      <Card className="shadow-xl border-0">
        <CardHeader className="bg-gradient-to-r from-[#2E3192] to-[#1e2270] text-white">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl font-bold">Complete Your Membership</CardTitle>
              <CardDescription className="text-gray-200">
                Join The Governance & Business Boardroom
              </CardDescription>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="h-6 w-6" />
              <span className="text-sm font-medium">Secure Payment</span>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  placeholder="John"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  placeholder="Doe"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  placeholder="+233 54 263 7902"
                />
              </div>
            </div>

            {/* Payment Method Selection */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <CreditCard className="h-5 w-5 text-[#2E3192]" />
                <Label className="text-base font-semibold">Payment Method</Label>
              </div>
              
              <Select value={paymentMethod} onValueChange={(value: any) => setPaymentMethod(value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select payment method" />
                </SelectTrigger>
                                 <SelectContent>
                   <SelectItem value="paystack-ghs">
                     <div className="flex items-center space-x-2">
                       <Globe className="h-4 w-4" />
                       <span>Paystack (₵{amounts.ghs.toLocaleString()})</span>
                     </div>
                   </SelectItem>
                   <SelectItem value="manual-usd">
                     <div className="flex items-center space-x-2">
                       <DollarSign className="h-4 w-4" />
                       <span>Manual USD Payment ({amounts.displayUsd})</span>
                     </div>
                   </SelectItem>
                 </SelectContent>
              </Select>

                             {paymentMethod === 'paystack-ghs' && (
                 <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                   <div className="flex items-start space-x-2">
                     <Globe className="h-5 w-5 text-blue-600 mt-0.5" />
                     <div>
                       <p className="text-sm font-medium text-blue-800">Paystack Payment</p>
                       <p className="text-sm text-blue-600 mt-1">
                         Secure online payment via Paystack. Supports Ghanaian cards and bank transfers.
                       </p>
                     </div>
                   </div>
                 </div>
               )}

              {paymentMethod === 'manual-usd' && (
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <div className="flex items-start space-x-2">
                    <DollarSign className="h-5 w-5 text-yellow-600 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-yellow-800">Manual USD Payment</p>
                      <p className="text-sm text-yellow-600 mt-1">
                        Bank transfer or PayPal payment. You'll receive payment instructions after form submission.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-start space-x-3">
              <Checkbox
                id="terms"
                checked={formData.agreeToTerms}
                onCheckedChange={(checked) => handleInputChange('agreeToTerms', checked as boolean)}
                required
              />
              <div className="space-y-1">
                <Label htmlFor="terms" className="text-sm">
                  I agree to the{' '}
                  <a href="#" className="text-[#2E3192] hover:underline">Terms and Conditions</a>
                  {' '}and{' '}
                  <a href="#" className="text-[#2E3192] hover:underline">Privacy Policy</a>
                </Label>
              </div>
            </div>

            {/* Payment Summary */}
            <div className="bg-gray-50 rounded-lg p-4 space-y-3">
              <div className="flex justify-between items-center">
                <span className="font-medium">Membership Type:</span>
                <span className="capitalize">{membershipType} Membership</span>
              </div>
                             <div className="flex justify-between items-center">
                 <span className="font-medium">Amount:</span>
                 <span className="text-2xl font-bold text-[#2E3192]">
                   {paymentMethod === 'paystack-ghs' ? amounts.displayGhs : amounts.displayUsd}
                 </span>
               </div>
              <div className="flex justify-between items-center text-sm text-gray-600">
                <span>Processing Fee:</span>
                <span>Included</span>
              </div>
                             <div className="border-t pt-3 flex justify-between items-center font-bold">
                 <span>Total:</span>
                 <span className="text-2xl text-[#2E3192]">
                   {paymentMethod === 'paystack-ghs' ? amounts.displayGhs : amounts.displayUsd}
                 </span>
               </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isInitializing || isProcessing || !formData.agreeToTerms || !formData.email}
              className="w-full bg-gradient-to-r from-[#2E3192] to-[#1e2270] hover:from-[#1e2270] hover:to-[#2E3192] text-white py-3 text-lg font-semibold rounded-lg shadow-lg"
            >
              {isInitializing ? (
                <div className="flex items-center space-x-2">
                  <Loader2 className="h-5 w-5 animate-spin" />
                  <span>Initializing Payment...</span>
                </div>
              ) : isProcessing ? (
                <div className="flex items-center space-x-2">
                  <Loader2 className="h-5 w-5 animate-spin" />
                  <span>Verifying Payment...</span>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5" />
                                     <span>
                     {paymentMethod === 'paystack-ghs' 
                       ? `Pay with Paystack - ${amounts.displayGhs}`
                       : `Get Payment Instructions - ${amounts.displayUsd}`
                     }
                   </span>
                </div>
              )}
            </Button>

            {/* Security Badge */}
            <div className="text-center">
              <p className="text-sm text-gray-500 mb-2">Secured by</p>
              <div className="flex items-center justify-center space-x-2">
                                 <div className="bg-green-600 text-white px-3 py-1 rounded text-sm font-semibold">
                   {paymentMethod === 'paystack-ghs' ? 'PAYSTACK' : 'SECURE PAYMENT'}
                 </div>
                <span className="text-xs text-gray-500">PCI DSS Compliant</span>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
