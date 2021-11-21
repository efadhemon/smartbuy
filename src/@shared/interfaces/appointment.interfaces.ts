import { IPaymentMethods, IPets, IService, IServicePackage } from ".";

export interface ICreateAppointment {
    frequency: string
    scheduleAt: string
    service: string
    servicePackage: string
    pet: string
    user: string
}

export interface IServiceBookingData {
	service?: IService,
	servicePackage?: IServicePackage,
	pet?: IPets,
	frequency?: string,
	date?: string,
	time?: string,
	paymentMethod?: IPaymentMethods,
	payAmount?: string,
	paymentTime?: string,
}

export interface IBookingDataSelector{
	bookingData: IServiceBookingData
}