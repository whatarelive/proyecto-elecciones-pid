interface PropsSvg {
  size: number
}

export const HowToVote = ({ size }: PropsSvg) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24">
        <title>how_to_vote</title>
        <g fill="#232e6c" className="nc-icon-wrapper">
            <path d="m18 12.18-1.5 1.64 2 2.18h-13l2-2.18L6 12.18l-3 3.27V20c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-4.54l-3-3.28z"></path>
            <path 
                d="M10.59 14.42c.78.79 2.05.8 2.84.01l4.98-4.98c.78-.78.78-2.05 0-2.83l-3.54-3.53c-.78-.78-2.05-.78-2.83 0L7.09 
                8.04a2 2 0 0 0-.01 2.82l3.51 3.56zm2.87-9.92 3.53 3.53-4.94 4.94-3.53-3.53 4.94-4.94z">    
            </path>
        </g>
    </svg>
  )
}
