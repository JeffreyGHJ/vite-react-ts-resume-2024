import {
  arrow,
  autoUpdate,
  flip,
  FloatingArrow,
  offset,
  shift,
  useFloating,
  useHover,
  useInteractions,
} from '@floating-ui/react'
import { useRef, useState } from 'react'
import { FaReact } from 'react-icons/fa'

const TooltipTest = ({ children }: any) => {
  const [isOpen, setIsOpen] = useState(false)
  const arrowRef = useRef(null)
  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    placement: 'top',
    onOpenChange: setIsOpen,
    middleware: [
      offset(12),
      flip(),
      shift(),
      arrow({
        element: arrowRef,
      }),
    ],
    whileElementsMounted: autoUpdate,
  })
  const hover = useHover(context, {
    mouseOnly: true,
  })
  const { getReferenceProps, getFloatingProps } = useInteractions([hover])
  const bodyStyles = window.getComputedStyle(document.body)

  return (
    <div>
      <div ref={refs.setReference} {...getReferenceProps()}>
        {children}
      </div>
      {isOpen && (
        <div
          role="tooltip"
          ref={refs.setFloating}
          style={floatingStyles}
          {...getFloatingProps()}
          className="absolute z-10 flex flex-col items-center p-1 text-base text-center border rounded-sm border-primary bg-background max-w-56"
        >
          THIS IS A TOOLTIP WITH CONTENT
          <FaReact className="text-5xl animate-spin-slow" />
          <FloatingArrow
            id="arrow-el"
            ref={arrowRef}
            context={context}
            strokeWidth={1}
            stroke={'hsl(' + bodyStyles.getPropertyValue('--foreground') + ')'}
            fill={'hsl(' + bodyStyles.getPropertyValue('--background') + ')'}
          />
        </div>
      )}
    </div>
  )
}
export default TooltipTest
