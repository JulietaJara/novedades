import * as React from "react"
import { cn } from "../../lib/utils"

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-xl border bg-white p-6 shadow-sm hover:shadow-md transition-shadow",
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)
Card.displayName = "Card"

const CardHeader = ({ className, children, ...props }: CardProps) => (
  <div className={cn("mb-4 text-lg font-semibold", className)} {...props}>
    {children}
  </div>
)

const CardContent = ({ className, children, ...props }: CardProps) => (
  <div className={cn("text-gray-700", className)} {...props}>
    {children}
  </div>
)

const CardFooter = ({ className, children, ...props }: CardProps) => (
  <div className={cn("mt-4 border-t pt-4", className)} {...props}>
    {children}
  </div>
)

export { Card, CardHeader, CardContent, CardFooter }
