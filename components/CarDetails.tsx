import { CarProps } from "@/types";

interface CarDetailProps {
    isOpen: boolean,
    closeModal: () => void,
    car: CarProps
}

export default function CarDetails({ isOpen, closeModal, car }: CarDetailProps) {
    return (
        <div>CarDetails</div>
    )
}
