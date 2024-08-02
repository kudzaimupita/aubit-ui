import { HiArrowLeft, HiArrowRight } from 'react-icons/hi'
import type { CommonProps } from '@/@types/common'

export interface NavToggleProps extends CommonProps {
    toggled?: boolean
}

const NavToggle = ({ toggled, className }: NavToggleProps) => {
    return (
        <div className={className}>
            {toggled ? <HiArrowRight /> : <HiArrowLeft />}
        </div>
    )
}

export default NavToggle
