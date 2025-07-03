import { SvgProps } from "@/common/types";

export default function ScanQR(
    {
        color = 'currentColor',
        size,
        height,
        width,
        ...props
    }: SvgProps
) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size ?? width ?? "800px"} height={size ?? height ?? "800px"} viewBox="0 0 512 512" {...props}>
            <polygon fill={color} points="48 48 176 48 176 16 16 16 16 176 48 176 48 48" className="ci-primary" />
            <path fill={color} d="M176,176V80H80v96h96Zm-64-64h32v32H112Z" className="ci-primary" />
            <polygon fill={color} points="328 48 464 48 464 176 496 176 496 16 328 16 328 48" className="ci-primary" />
            <path fill={color} d="M432,176V80H336v96h96Zm-64-64h32v32H368Z" className="ci-primary" />
            <polygon fill={color} points="176 464 48 464 48 336 16 336 16 496 176 496 176 464" className="ci-primary" />
            <path fill={color} d="M176,336H80v96h96V336Zm-32,64H112V368h32Z" className="ci-primary" />
            <polygon fill={color} points="464 464 328 464 328 496 496 496 496 336 464 336 464 464" className="ci-primary" />
            <polygon fill={color} points="272 304 400 304 400 368 432 368 432 272 272 272 272 304" className="ci-primary" />
            <polygon fill={color} points="432 432 432 400 240 400 240 272 80 272 80 304 208 304 208 432 432 432" className="ci-primary" />
            <rect width="32" height="96" x="208" y="80" fill={color} className="ci-primary" />
            <polygon fill={color} points="80 240 304 240 304 80 272 80 272 208 80 208 80 240" className="ci-primary" />
            <rect width="96" height="32" x="336" y="208" fill={color} className="ci-primary" />
            <rect width="32" height="32" x="336" y="336" fill={color} className="ci-primary" />
            <rect width="32" height="32" x="272" y="336" fill={color} className="ci-primary" />
        </svg>
    )
}