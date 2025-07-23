
'use client';

import { useState, useCallback } from 'react';
import { AppState, AppDispatch } from '@/redux/store';
import { useSelector} from 'react-redux';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { FaSpinner } from 'react-icons/fa'; // You can use other spinner icons too
import Link from 'next/link';
import { setAddOn, setAddress, setChildAge, setChildName, setCity, setEmail, setEventDate, setEventDuration, setEventTime, setGuestCount, setPackagetype, setParentName, setPhone, setSpecialRequest, setTotalAmount, setZipCode, resetBooking } from '@/redux/slice/BookingSlice';
import { loadStripe } from '@stripe/stripe-js';
import toast from 'react-hot-toast';
export default function Booking() {
  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const {totalAmount, packageType, addOns, eventDate, eventTime, eventDuration, guestCount, childAge, childName, parentName, specialRequests, email, phone, city, address, zipCode} = useSelector((state: AppState) => state.booking);
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();



  const packages = [
    { id: 'teepee', name: 'Teepee Parties', price: 299, duration: '24 hours', guests: 'Up to 8' },
    { id: 'princess', name: 'Princess Parties', price: 349, duration: '24 hours', guests: 'Up to 6' },
    { id: 'boho', name: 'Boho Chic', price: 329, duration: '24 hours', guests: 'Up to 8' },
    { id: 'movie', name: 'Movie Nights', price: 279, duration: '6-8 hours', guests: 'Up to 10' },
    { id: 'unicorn', name: 'Unicorn Dreams', price: 359, duration: '24 hours', guests: 'Up to 6' },
    { id: 'spa', name: 'Spa Retreats', price: 389, duration: '24 hours', guests: 'Up to 6' }
  ];

  const AddOns = [
    { id: 'photo-booth', name: 'Photo Booth', price: 49 },
    { id: 'birthday-cake', name: 'Birthday Cake', price: 65 },
    { id: 'party-favors', name: 'Party Favors', price: 89 },
    { id: 'playlist', name: 'Playlist Setup', price: 29 },
    { id: 'face-painting', name: 'Face Painting', price: 99 },
    { id: 'craft-station', name: 'Craft Station', price: 79 },
    { id: 'magic-show', name: 'Magic Show', price: 149 },
    { id: 'midnight-snacks', name: 'Midnight Snacks', price: 39 }
  ];



  const calculateTotal = useCallback(():number =>{
    const selectedPackage = packages.find(p => p.id === packageType);
    const packagePrice = selectedPackage ? selectedPackage.price : 0;
    const addOnPrices = addOns?.reduce((total, addOnId) => {
      const addOn = AddOns.find(a => a.id === addOnId);
      return total + (addOn ? addOn.price : 0);
    }, 0);

    let total;
    if(addOnPrices) {
      total = packagePrice + addOnPrices;
    }

    return total as number
  }, [packageType, addOns, dispatch]);



  const handleAddOnToggle = (addOnId: any) => {
    const newAddOns = addOns?.includes(addOnId)
      ? addOns.filter(id => id !== addOnId)
      : [...addOns as string[], addOnId];

    dispatch(setAddOn(newAddOns));
    calculateTotal()
  };

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    const bookingData = {
      packageType,
      addOns,
      eventDate,
      eventTime,
      eventDuration,
      guestCount,
      childAge,
      parentName,
      childName,
      email,
      phone,
      address,
      city,
      zipCode,
      specialRequests,
      totalAmount: calculateTotal(),
      paymentStatus: 'Pending',
      paymentMethod: 'Deposit'
    };


    try {
      const response = await fetch('https://soiressandteepees-production.up.railway.app/api/booking/addBooking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(bookingData)
      });

      if (!response.ok) {
        throw new Error('Failed to submit booking');
      }
      const data = await response.json();
      console.log(data.newBooking);

      const lineItems = {
        totalAmount: Math.round(data.newBooking.totalAmount * 0.5),
        email: data.newBooking.email,
        bookingId: data.newBooking.id
      }

      const stripeResponse = await fetch('https://soiressandteepees-production.up.railway.app/api/create-stripe-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(lineItems)
      });
      const { sessionId } = await stripeResponse.json();

      const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY as string);
      await stripe?.redirectToCheckout({ sessionId });

      dispatch(resetBooking());
    } catch (error: any) {
      console.error('Error submitting booking:', error);
      toast.error('Internal server error, please try again');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary_background to-secondary_background">

      {/* Progress Steps */}
      <section className="sticky top-0 z-50 w-full py-8 bg-white border-b border-primary_button">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center space-x-5">
            {[
              { step: 1, title: 'Package', icon: 'ri-gift-line' },
              { step: 2, title: 'Details', icon: 'ri-calendar-line' },
              { step: 3, title: 'Contact', icon: 'ri-user-line' },
              { step: 4, title: 'Payment', icon: 'ri-secure-payment-line' }
            ].map((item, index) => (
              <div key={item.step} className="flex items-center">
                <div className={`flex flex-col p-0 m-0 space-x-3 lg:flex-row  items-center ${index > 0 ? 'md:ml-8' : ''}`}>
                  <div className={`w-12 h-12 ml-3 rounded-full flex items-center justify-center ${
                    currentStep >= item.step ? 'bg-primary_button text-white' : 'bg-gray-200 text-gray-500'
                  }`}>
                    <i className={`${item.icon} text-lg`}></i>
                  </div>
                  <span className={` font-medium ${
                    currentStep >= item.step ? 'text-primary_button' : 'text-gray-500'
                  }`}>
                    {item.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            
            {/* Step 1: Package Selection */}
            {currentStep === 1 && (
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Choose Your Package</h2>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {packages.map((pkg) => (
                    <div
                      key={pkg.id}
                      onClick={() => {dispatch(setPackagetype(pkg.id))}}
                      className={`border-2 rounded-2xl p-6 cursor-pointer transition-all ${
                        packageType === pkg.id
                          ? 'border-primary_button bg-primary_button/5'
                          : 'border-gray-200 hover:border-primary_button/50'
                      }`}
                    >
                      <div className="text-center">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{pkg.name}</h3>
                        <div className="text-3xl font-bold text-primary_button mb-3">${pkg.price}</div>
                        <div className="text-gray-600 space-y-1">
                          <p className="flex items-center justify-center">
                            <i className="ri-time-line w-4 h-4 mr-2"></i>
                            {pkg.duration}
                          </p>
                          <p className="flex items-center justify-center">
                            <i className="ri-group-line w-4 h-4 mr-2"></i>
                            {pkg.guests}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <h3 className="text-2xl font-bold text-gray-800 mb-6">Add-ons</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  {AddOns.map((addOn) => (
                    <label
                      key={addOn.id}
                      className={`border-2 rounded-xl p-4 cursor-pointer transition-all ${
                        addOns?.includes(addOn.id)
                          ? 'border-primary_button bg-primary_button/5'
                          : 'border-gray-200 hover:border-primary_button/50'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={addOns?.includes(addOn.id)}
                        onChange={() => handleAddOnToggle(addOn.id)}
                        className="sr-only"
                      />
                      <div className="text-center">
                        <h4 className="font-semibold text-gray-800 mb-1">{addOn.name}</h4>
                        <p className="text-primary_button font-bold">+${addOn.price}</p>
                      </div>
                    </label>
                  ))}
                </div>

                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-800 mb-6">
                    Total: <span className="text-primary_button">${calculateTotal()}</span>
                  </div>
                  <button
                    onClick={nextStep}
                    disabled={!packageType}
                    className="bg-primary_button text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#FFB88C] transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                  >
                    Continue to Event Details
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Event Details */}
            {currentStep === 2 && (
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Event Details</h2>
                
                <form id="event-details" className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Event Date *</label>
                      <input
                        type="date"
                        name="eventDate"
                        value={eventDate}
                        onChange={(e) => dispatch(setEventDate(e.target.value))}
                        required
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-primary_button transition-colors text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Setup Time *</label>
                      <input
                        type="time"
                        name="eventTime"
                        value={eventTime}
                        onChange={(e) => dispatch(setEventTime(e.target.value))}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-primary_button transition-colors text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Number of Guests *</label>
                      <input
                        type="number"
                        name="guestCount"
                        value={guestCount}
                        onChange={(e) => dispatch(setGuestCount(e.target.value))}
                        required
                        min="1"
                        max="12"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-primary_button transition-colors text-sm"
                        placeholder="6"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Birthday Child's Age</label>
                      <input
                        type="number"
                        name="childAge"
                        value={childAge}
                        onChange={(e) => dispatch(setChildAge(e.target.value))}
                        min="3"
                        max="16"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-primary_button transition-colors text-sm"
                        placeholder="8"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Special Requests or Theme Ideas</label>
                    <textarea
                      name="specialRequests"
                      value={specialRequests}
                      onChange={(e) => dispatch(setSpecialRequest(e.target.value))}
                      rows={4}
                      maxLength={500}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-primary_button transition-colors text-sm resize-none"
                      placeholder="Tell us about any special themes, colors, or requests you have in mind..."
                    ></textarea>
                    <div className="text-right text-sm text-gray-500 mt-1">
                      {specialRequests.length}/500 characters
                    </div>
                  </div>
                </form>

                <div className="flex flex-col space-y-4 md:flex-row justify-between mt-8">
                  <button
                    onClick={prevStep}
                    className="border-2 border-primary_button text-primary_button px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary_button hover:text-white transition-colors whitespace-nowrap"
                  >
                    Back to Packages
                  </button>
                  <button
                    onClick={nextStep}
                    disabled={!eventDate || !eventTime || !guestCount}
                    className="bg-primary_button text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#FFB88C] transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                  >
                    Continue to Contact Info
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Contact Information */}
            {currentStep === 3 && (
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Contact Information</h2>
                
                <form id="contact-info" className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Parent/Guardian Name *</label>
                      <input
                        type="text"
                        name="parentName"
                        value={parentName}
                        onChange={(e) => dispatch(setParentName(e.target.value))}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-primary_button transition-colors text-sm"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Birthday Child's Name</label>
                      <input
                        type="text"
                        name="childName"
                        value={childName}
                        onChange={(e) => dispatch(setChildName(e.target.value))}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-primary_button transition-colors text-sm"
                        placeholder="Child's name"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => dispatch(setEmail(e.target.value))}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-primary_button transition-colors text-sm"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={phone}
                        onChange={(e) => dispatch(setPhone(e.target.value))}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-primary_button transition-colors text-sm"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Event Address *</label>
                    <input
                      type="text"
                      name="address"
                      value={address}
                      onChange={(e) => dispatch(setAddress(e.target.value))}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-primary_button transition-colors text-sm"
                      placeholder="Street address where party will be held"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">City *</label>
                      <input
                        type="text"
                        name="city"
                        value={city}
                        onChange={(e) => dispatch(setCity(e.target.value))}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-primary_button transition-colors text-sm"
                        placeholder="Los Angeles"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">ZIP Code *</label>
                      <input
                        type="text"
                        name="zipCode"
                        value={zipCode}
                        onChange={(e) => dispatch(setZipCode(e.target.value))}
                        required
                        pattern="[0-9]{5}"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-primary_button transition-colors text-sm"
                        placeholder="90210"
                      />
                    </div>
                  </div>
                </form>

                <div className="flex space-y-4 flex-col md:flex-row justify-between mt-8">
                  <button
                    onClick={prevStep}
                    className="border-2 border-primary_button text-primary_button px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary_button hover:text-white transition-colors whitespace-nowrap"
                  >
                    Back to Details
                  </button>
                  <button
                    onClick={nextStep}
                    disabled={!parentName || !email || !phone || !address || !city || !zipCode}
                    className="bg-primary_button text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#FFB88C] transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                  >
                    Continue to Payment
                  </button>
                </div>
              </div>
            )}

            {/* Step 4: Payment */}
            {currentStep === 4 && (
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Booking Summary & Payment</h2>
                
                <div className="bg-gradient-to-br from-primary_background to-secondary_background rounded-2xl p-6 mb-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Order Summary</h3>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-700">
                        {packages.find(p => p.id === packageType)?.name}
                      </span>
                      <span className="font-semibold">
                        ${packages.find(p => p.id === packageType)?.price}
                      </span>
                    </div>
                    
                    {(addOns as string[]).length > 0 && (
                      <>
                        <div className="border-t pt-3">
                          <div className="font-medium text-gray-700 mb-2">Add-ons:</div>
                          {addOns?.map(addOnId => {
                            const addOn = AddOns.find(a => a.id === addOnId);
                            return addOn ? (
                              <div key={addOnId} className="flex justify-between text-sm">
                                <span className="text-gray-600">{addOn.name}</span>
                                <span>+${addOn.price}</span>
                              </div>
                            ) : null;
                          })}
                        </div>
                      </>
                    )}
                    
                    <div className="border-t pt-3 flex justify-between text-xl font-bold">
                      <span>Total:</span>
                      <span className="text-primary_button">${calculateTotal()}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-6">
                  <div className="flex items-start">
                    <i className="ri-information-line text-yellow-600 text-xl mr-3 mt-0.5"></i>
                    <div>
                      <h4 className="font-semibold text-yellow-800 mb-1">Booking Deposit</h4>
                      <p className="text-yellow-700 text-sm">
                        A 50% deposit of ${Math.round(calculateTotal() * 0.5)} is required to secure your booking. 
                        The remaining balance will be due on the day of your event.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <button
                    onClick={handleSubmit}
                    className="bg-primary_button text-white px-7 py-4 rounded-full font-semibold text-xl hover:bg-[#FFB88C] transition-colors mb-4 whitespace-nowrap"
                  >
                    {loading ? (
                      <FaSpinner className="animate-spin mr-2" />
                    ) : (
                      `Pay Deposit $(${Math.round(calculateTotal() * 0.5)})`
                    )}
                  </button>
                  
                  <p className="text-gray-600 text-sm">
                    By clicking "Pay Deposit", you agree to our terms of service and cancellation policy.
                  </p>

                  <button
                    onClick={prevStep}
                    className="block mx-auto mt-6 text-primary_button hover:text-[#FFB88C] transition-colors"
                  >
                    ← Back to Contact Info
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
