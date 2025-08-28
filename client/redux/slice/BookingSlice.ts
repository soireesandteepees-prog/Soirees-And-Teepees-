import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

type Addons = {
    id: string,
    name: string,
    price: number
}


export interface BookingState {
    id?: string,
    packageType: string
    addOns?:  string[],
    theme?: string[],
    
    // Step 2: Event Details
    eventDate: string
    eventTime: string
    guestCount: string
    childAge: string
    eventDuration: string
    specialRequests: string
    
    // Step 3: Contact Info
    parentName: string
    childName: string
    email: string
    phone: string
    address: string
    city: string
    zipCode?: string
    
    // Step 4: Payment
    totalAmount: number
    status?: string
    paymentStatus?: string
    updatedAt?: string
    createdAt?: string
}

const initialState: BookingState = {
    packageType: '',
    addOns: [] ,
    
    // Step 2: Event Details
    eventDate: '',
    theme: [],
    eventTime: '',
    guestCount: '',
    childAge: '',
    eventDuration: '24',
    specialRequests: '',
    
    // Step 3: Contact Info
    parentName: '',
    childName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    
    // Step 4: Payment
    totalAmount: 0
}

export const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    setPackagetype: (state, action: PayloadAction<BookingState["packageType"]>) => {
      state.packageType = action.payload
    },
    setAddOn: (state, action: PayloadAction<BookingState["addOns"]>) => {
      state.addOns = action.payload
    },
    setEventDate: (state, action: PayloadAction<BookingState["eventDate"]>) => {
        state.eventDate = action.payload
    },
    setEventTime: (state, action: PayloadAction<BookingState["eventTime"]>) => {
        state.eventTime = action.payload
    },
    setGuestCount: (state, action: PayloadAction<BookingState["guestCount"]>) => {
        state.guestCount = action.payload
    },
    setChildAge: (state, action: PayloadAction<BookingState["childAge"]>) => {
        state.childAge = action.payload
    },
    setEventDuration: (state, action: PayloadAction<BookingState["eventDuration"]>) => {
        state.eventDuration = action.payload
    },
    setSpecialRequest: (state, action: PayloadAction<BookingState["specialRequests"]>) => {
        state.specialRequests = action.payload
    },
    setParentName: (state, action: PayloadAction<BookingState["parentName"]>) => {
        state.parentName = action.payload
    },
    setChildName: (state, action: PayloadAction<BookingState["childName"]>) => {
        state.childName = action.payload
    },
    setCity: (state, action: PayloadAction<BookingState["city"]>) => {
        state.city = action.payload
    },
    setAddress: (state, action: PayloadAction<BookingState["address"]>) => {
        state.address = action.payload
    },
    setTheme: (state, action: PayloadAction<string[]>) => {
        state.theme = action.payload;
    },
    setEmail: (state, action:PayloadAction<string>) => {
      state.email = action.payload
    },
    setPhone: (state, action: PayloadAction<string>) => {
      state.phone = action.payload
    },
    setZipCode: (state, action: PayloadAction<BookingState["zipCode"]>) => {
        state.zipCode = action.payload
    },
    setTotalAmount: (state, action: PayloadAction<number>) => {
        state.totalAmount = action.payload
    },
    resetBooking: () => initialState,
  },
})

export const {
  setPhone,
  setEmail,
  resetBooking,
  setAddOn,
  setAddress,
  setChildAge,
  setChildName,
  setCity,
  setEventDuration,
  setEventDate,
  setEventTime,
  setGuestCount,
  setPackagetype,
  setParentName,
  setSpecialRequest,
  setTotalAmount,
  setZipCode,
  setTheme
} = bookingSlice.actions

export default bookingSlice.reducer

